import { Request, Response, NextFunction } from "express";
import { Campaign, AdSet, Ad } from "facebook-nodejs-business-sdk";

import {
  CampaignParams,
  AdSetParams,
  AdParams,
} from "../interfaces/interfaces";
import prisma from "../lib/db";
import { createAd } from "../services/adService";
import { createAdSet } from "../services/adSetService";
import { createCampaign } from "../services/campaignService";

import { getAdController, updateAdController } from "./adController";
import { getAdSetController, updateAdSetController } from "./adSetController";
import {
  getCampaignController,
  updateCampaignController,
} from "./campaignController";

const createCampaignAdSetAdController = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { campaigns, adsets, ads } = req.body;

    if (!campaigns || !adsets || !ads) {
      throw new Error("Invalid or missing fields for creation");
    }

    if (
      !Array.isArray(campaigns) ||
      !Array.isArray(adsets) ||
      !Array.isArray(ads)
    ) {
      throw new Error("Invalid data format");
    }

    const createdCampaigns = await Promise.all(
      campaigns.map(async (campaign: CampaignParams) => {
        return await createCampaign(campaign);
      }),
    );

    const createdAdSets = await Promise.all(
      adsets.map(async (adset: AdSetParams & { campaignIndex: number }) => {
        const campaignIndex = adset.campaignIndex || 0;
        const facebookCampaignId =
          createdCampaigns[campaignIndex]?.campaign_id || adset.campaign_id;
        const existingCampaignId =
          createdCampaigns[campaignIndex]?.id || adset.campaignId;

        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const { campaignIndex: _, ...adsetWithoutIndex } = adset;

        const createdAdSet = await createAdSet({
          adset: {
            ...adsetWithoutIndex,
            facebookCampaignId,
            existingCampaignId,
          },
        });

        return createdAdSet;
      }),
    );

    const createdAds = await Promise.all(
      ads.map(async (ad: AdParams & { adSetIndex: number }) => {
        const adSetIndex = ad.adSetIndex || 0;
        const facebookAdSetId =
          createdAdSets[adSetIndex]?.adset_id || ad.adset_id;
        const existingAdSetId = createdAdSets[adSetIndex]?.id || ad.adSetId;

        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const { adSetIndex: _, ...adWithoutIndex } = ad;

        const createdAd = await createAd({
          ...adWithoutIndex,
          facebookAdSetId,
          existingAdSetId,
        });

        return createdAd;
      }),
    );

    res.json({
      message: "Campaigns, AdSets, and Ads created successfully",
      data: {
        campaigns: createdCampaigns,
        adSets: createdAdSets,
        ads: createdAds,
      },
    });
  } catch (error) {
    console.error("Error creating Campaigns, AdSets, and Ads:", error);

    if (error instanceof Error) {
      console.error("Error Message:", error.message);
    }

    next(error);
  }
};

const getCampaignAdSetAdController = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { campaign_ids, adset_ids, ad_ids } = req.body;

    const Campaigns = campaign_ids
      ? await getCampaignController(req, res, next, true)
      : [];

    const Adsets = adset_ids
      ? await getAdSetController(req, res, next, true)
      : [];

    const Ads = ad_ids ? await getAdController(req, res, next, true) : [];

    res.json({ Campaigns, Adsets, Ads });
  } catch (error) {
    console.error("Error fetching data:", error);
    next(error);
  }
};

const updateCampaignAdAdsetController = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { campaigns, adsets, ads } = req.body;

    if (!campaigns || !adsets || !ads) {
      throw new Error("Invalid or missing fields for update");
    }

    const updatedCampaigns = await updateCampaignController(
      { body: { campaigns } } as Request,
      res,
      next,
      true,
    );
    const updatedAdSets = await updateAdSetController(
      { body: { adsets } } as Request,
      res,
      next,
      true,
    );
    const updatedAds = await updateAdController(
      { body: { ads } } as Request,
      res,
      next,
      true,
    );

    res.json({
      message: "Data successfully updated",
      data: {
        updatedCampaigns,
        updatedAdSets,
        updatedAds,
      },
    });
  } catch (error) {
    console.error("Error updating data:", error);

    if (error instanceof Error) {
      console.error("Error Message:", error.message);
    }

    next(error);
  }
};

const deleteCampaignAdAdsetController = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { campaign_id, adset_id, ad_id } = req.body;

    if (campaign_id) {
      await prisma.campaign.delete({
        where: { campaign_id },
        include: {
          adSets: {
            include: {
              ads: true,
            },
          },
        },
      });

      const campaignObj = new Campaign(campaign_id);
      await campaignObj.delete([]);
    } else if (adset_id) {
      await prisma.adSet.delete({
        where: { adset_id },
        include: {
          ads: true,
        },
      });

      const adSet = new AdSet(adset_id);
      await adSet.delete([]);
    } else if (ad_id) {
      await prisma.ad.delete({
        where: { ad_id },
      });
      const adObj = new Ad(ad_id);
      await adObj.delete([]);
    }

    res.json({
      message: "Data successfully deleted",
    });
  } catch (error) {
    console.error("Error deleting data:", error);

    if (error instanceof Error) {
      console.error("Error Message:", error.message);
    }

    next(error);
  }
};

export {
  createCampaignAdSetAdController,
  getCampaignAdSetAdController,
  updateCampaignAdAdsetController,
  deleteCampaignAdAdsetController,
};
