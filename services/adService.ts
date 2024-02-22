import { FacebookAdsApi, AdAccount } from "facebook-nodejs-business-sdk";

import { AdParams } from "../interfaces/interfaces";
import prisma from "../lib/db";

const accessToken = process.env.ACCESS_TOKEN || "";
const accountId = process.env.ACCOUNT_ID || "";

const FacebookAdsApiInstance = FacebookAdsApi.init(accessToken);

export const createAd = async (
  ad: AdParams & {
    facebookAdSetId: string;
    existingAdSetId: number;
  },
) => {
  try {
    const { facebookAdSetId, existingAdSetId, ...adParams } = ad;

    const account = new AdAccount(accountId, FacebookAdsApiInstance);

    const adParamsWithIds: AdParams = {
      ...adParams,
      adset_id: facebookAdSetId,
    };

    const createdAd = await account.createAd([], adParamsWithIds);

    const facebookAdId = createdAd._data.id;

    const newAdInDB = await prisma.ad.create({
      data: {
        ...adParams,
        adset_id: facebookAdSetId,
        adSetId: existingAdSetId,
        ad_id: facebookAdId,
      },
    });

    return newAdInDB;
  } catch (error) {
    console.error("Error creating Ad:", error);
    throw error;
  }
};

export const getAd = async (ad_ids: string[]) => {
  try {
    const account = new AdAccount(accountId, FacebookAdsApiInstance);

    const fbAds = await Promise.all(
      ad_ids.map(async (id) => {
        try {
          return await account.get([AdAccount.Fields.name], {
            fields: ["name"],
            params: { ad_ids: [id] },
          });
        } catch (error) {
          console.error(`Error fetching ad data for ad_id ${id}:`, error);
          return null;
        }
      }),
    );

    return fbAds.filter((result) => result !== null);
  } catch (error) {
    console.error("Error fetching ad data:", error);
    return [];
  }
};
