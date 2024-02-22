import { FacebookAdsApi, AdAccount } from "facebook-nodejs-business-sdk";

import { CampaignParams } from "../interfaces/interfaces";
import prisma from "../lib/db";

const accessToken = process.env.ACCESS_TOKEN || "";
const accountId = process.env.ACCOUNT_ID || "";

const FacebookAdsApiInstance = FacebookAdsApi.init(accessToken);

export const createCampaign = async (campaign: CampaignParams) => {
  const startDate = new Date(campaign.start_time);
  const endDate = new Date(campaign.end_time);

  const specialAdCategoriesString = JSON.stringify(
    campaign.special_ad_categories || "",
  );

  const account = new AdAccount(accountId, FacebookAdsApiInstance);

  const campaignParams: CampaignParams = {
    ...campaign,
    start_time: startDate.toISOString(),
    end_time: endDate.toISOString(),
    special_ad_categories: JSON.parse(specialAdCategoriesString || "[]"),
  };

  const createdCampaign = await account.createCampaign([], campaignParams);

  const facebookCampaignId = createdCampaign._data.id;

  const newCampaignInDB = await prisma.campaign.create({
    data: {
      ...campaign,
      start_time: startDate,
      end_time: endDate,
      special_ad_categories: specialAdCategoriesString,
      campaign_id: facebookCampaignId,
    },
  });

  return newCampaignInDB;
};

export const getCampaign = async (campaign_ids: string[]) => {
  try {
    const account = new AdAccount(accountId, FacebookAdsApiInstance);

    const fbCampaigns = await Promise.all(
      campaign_ids.map(async (id) => {
        try {
          return await account.get([AdAccount.Fields.name], {
            fields: ["name"],
            params: { campaign_ids: [id] },
          });
        } catch (error) {
          console.error(
            `Error fetching campaign data for campaign_id ${id}:`,
            error,
          );
          return null;
        }
      }),
    );

    return fbCampaigns.filter((result) => result !== null);
  } catch (error) {
    console.error("Error fetching campaign data:", error);
    return [];
  }
};
