import { Request, Response, NextFunction } from "express";
import {
  AdAccount,
  Campaign,
  FacebookAdsApi,
} from "facebook-nodejs-business-sdk";

import { CampaignParams } from "../interfaces/interfaces";
import prisma from "../lib/db";
import { createCampaign, getCampaign } from "../services/campaignService";

const accessToken = process.env.ACCESS_TOKEN || "";
const accountId = process.env.ACCOUNT_ID || "";

const FacebookAdsApiInstance = FacebookAdsApi.init(accessToken);

export const createCampaignController = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { campaigns } = req.body;

    if (!campaigns || !Array.isArray(campaigns)) {
      throw new Error("Invalid or missing campaigns array");
    }

    const newCampaigns = await Promise.all(
      campaigns.map((campaign: CampaignParams) => createCampaign(campaign)),
    );

    res.json({
      message: "Campaigns created successfully",
      data: newCampaigns,
    });
  } catch (error) {
    console.error("Error creating campaigns:", error);

    if (error instanceof Error) {
      console.error("Error Message:", error.message);
    }

    next(error);
  }
};

export const getCampaignController = async (
  req: Request,
  res: Response,
  next: NextFunction,
  isNestedCall: boolean = false,
) => {
  try {
    const { campaign_ids } = req.body;

    const dbCampaign = campaign_ids
      ? await prisma.campaign.findMany({
          where: { campaign_id: { in: campaign_ids } },
        })
      : [];

    const fbCampaign = campaign_ids ? await getCampaign(campaign_ids) : [];

    if (isNestedCall) {
      return { dbCampaign, fbCampaign };
    } else {
      res.json({ dbCampaign, fbCampaign });
    }
  } catch (error) {
    console.error("Error fetching campaign data:", error);
    next(error);
  }
};

export const updateCampaignController = async (
  req: Request,
  res: Response,
  next: NextFunction,
  isNestedCall: boolean = false,
) => {
  try {
    const { campaigns } = req.body;

    if (!campaigns || !Array.isArray(campaigns)) {
      throw new Error("Invalid or missing fields for update");
    }

    const updatedCampaigns = [];

    for (const campaign of campaigns) {
      const account = new AdAccount(accountId, FacebookAdsApiInstance);
      await account.get([AdAccount.Fields.name], {
        fields: ["name"],
      });

      console.log("Updating Campaign...");
      const campaignObj = new Campaign(campaign.campaign_id);
      await campaignObj.update([Campaign.Fields.name], {
        [Campaign.Fields.name]: campaign.name,
      });

      await prisma.campaign.update({
        where: { campaign_id: campaign.campaign_id },
        data: campaign,
      });

      console.log(
        `Campaign with ID ${campaign.campaign_id} updated successfully.`,
      );
      updatedCampaigns.push(campaign);
    }

    if (isNestedCall) {
      return { dbCampaigns: updatedCampaigns, fbCampaigns: updatedCampaigns };
    } else {
      res.json({
        message: "Campaigns updated successfully",
        data: updatedCampaigns,
      });
    }
  } catch (error) {
    console.error("Error updating campaigns:", error);
    next(error);
  }
};
