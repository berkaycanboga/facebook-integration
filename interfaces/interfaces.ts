import { Prisma } from '../generated/client';

interface CampaignParams {
  name: string;
  status: string;
  buying_type: string;
  objective: string;
  special_ad_categories: string;
  start_time: string;
  end_time: string;
  daily_budget: number;
  target: Prisma.JsonValue[];
  campaign_type: string;
}

interface AdSetParams {
  name: string;
  status: string;
  targeting: Prisma.JsonValue[];
  billing_event: string;
  bid_amount: number;
  campaign_id: string;
  campaignId: number;
}

interface AdParams {
  name: string;
  status: string;
  creative: Prisma.JsonValue[];
  adset_id: string;
  adSetId: number;
}

export { CampaignParams, AdSetParams, AdParams };
