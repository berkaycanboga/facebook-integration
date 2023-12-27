import prisma from '../lib/db';
import { FacebookAdsApi, AdAccount } from 'facebook-nodejs-business-sdk';
import { AdSetParams } from '../interfaces/interfaces';
import { accessToken, accountId } from '../facebookAdsConnection';

const FacebookAdsApiInstance = FacebookAdsApi.init(accessToken);

export const createAdSet = async ({
  adset,
}: {
  adset: AdSetParams & {
    facebookCampaignId: string;
    existingCampaignId: number;
  };
}) => {
  const { facebookCampaignId, existingCampaignId, ...adSetParams } = adset;

  const account = new AdAccount(accountId, FacebookAdsApiInstance);

  const adSetParamsWithIds: AdSetParams = {
    ...adSetParams,
    targeting: adSetParams.targeting,
    billing_event: adSetParams.billing_event,
    bid_amount: adSetParams.bid_amount,
    campaign_id: facebookCampaignId,
  };

  const createdAdSet = await account.createAdSet([], adSetParamsWithIds);

  const facebookAdSetId = createdAdSet._data.id;

  const newAdSetInDB = await prisma.adSet.create({
    data: {
      ...adSetParams,
      adset_id: facebookAdSetId,
      campaign_id: facebookCampaignId,
      campaignId: existingCampaignId,
    },
  });

  return newAdSetInDB;
};

export const getAdSet = async (adset_ids: string[]) => {
  try {
    const account = new AdAccount(accountId, FacebookAdsApiInstance);

    const fbAdSets = await Promise.all(
      adset_ids.map(async (id) => {
        try {
          return await account.get([AdAccount.Fields.name], {
            fields: ['name'],
            params: { adset_ids: [id] },
          });
        } catch (error) {
          console.error(
            `Error fetching ad set data for adset_id ${id}:`,
            error,
          );
          return null;
        }
      }),
    );

    return fbAdSets.filter((result) => result !== null);
  } catch (error) {
    console.error('Error fetching ad set data:', error);
    return [];
  }
};
