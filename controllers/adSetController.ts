import { Request, Response, NextFunction } from "express";
import { AdAccount, AdSet, FacebookAdsApi } from "facebook-nodejs-business-sdk";

import { AdSetParams } from "../interfaces/interfaces";
import prisma from "../lib/db";
import { createAdSet } from "../services/adSetService";
import { getAdSet } from "../services/adSetService";

const accessToken = process.env.ACCESS_TOKEN || "";
const accountId = process.env.ACCOUNT_ID || "";

const FacebookAdsApiInstance = FacebookAdsApi.init(accessToken);

export const createAdSetController = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { adsets } = req.body;

    if (!adsets || !Array.isArray(adsets)) {
      throw new Error("Invalid or missing adsets array");
    }

    const newAdSets = await Promise.all(
      adsets.map(
        async (
          adset: AdSetParams & {
            facebookCampaignId: string;
            existingCampaignId: number;
          },
        ) => createAdSet({ adset }),
      ),
    );

    res.json({
      message: "AdSets created successfully",
      data: newAdSets,
    });
  } catch (error) {
    console.error("Error creating AdSets:", error);

    if (error instanceof Error) {
      console.error("Error Message:", error.message);
    }

    next(error);
  }
};

export const getAdSetController = async (
  req: Request,
  res: Response,
  next: NextFunction,
  isNestedCall: boolean = false,
) => {
  try {
    const { adset_ids } = req.body;

    const dbAdSet = adset_ids
      ? await prisma.adSet.findMany({
          where: { adset_id: { in: adset_ids } },
        })
      : [];

    const fbAdSet = adset_ids ? await getAdSet(adset_ids) : [];

    if (isNestedCall) {
      return { dbAdSet, fbAdSet };
    } else {
      res.json({ dbAdSet, fbAdSet });
    }
  } catch (error) {
    console.error("Error fetching ad set data:", error);
    next(error);
  }
};

export const updateAdSetController = async (
  req: Request,
  res: Response,
  next: NextFunction,
  isNestedCall: boolean = false,
) => {
  try {
    const { adsets } = req.body;

    if (!adsets || !Array.isArray(adsets)) {
      throw new Error("Invalid or missing fields for update");
    }

    const updatedAdSets = [];

    for (const adset of adsets) {
      const account = new AdAccount(accountId, FacebookAdsApiInstance);
      await account.get([AdAccount.Fields.name], {
        fields: ["name"],
      });

      console.log("Updating AdSet...");
      const adSet = new AdSet(adset.adset_id);
      await adSet.update([AdSet.Fields.name], {
        [AdSet.Fields.name]: adset.name,
      });

      await prisma.adSet.update({
        where: { adset_id: adset.adset_id },
        data: adset,
      });

      console.log(`AdSet with ID ${adset.adset_id} updated successfully.`);
      updatedAdSets.push(adset);
    }

    if (isNestedCall) {
      return { dbAdSets: updatedAdSets, fbAdSets: updatedAdSets };
    } else {
      res.json({
        message: "AdSets updated successfully",
        data: updatedAdSets,
      });
    }
  } catch (error) {
    console.error("Error updating ad sets:", error);
    next(error);
  }
};
