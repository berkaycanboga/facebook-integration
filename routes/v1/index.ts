import express from "express";

import adRoute from "../ad.routes";
import adSetRoute from "../adset.routes";
import campaignAdsetAdRoute from "../campaign-adset-ad.routes";
import campaignRoute from "../campaign.routes";

const v1Router = express.Router();

v1Router.use("/api/v1/campaign-adset-ad", campaignAdsetAdRoute);
v1Router.use("/api/v1/campaign", campaignRoute);
v1Router.use("/api/v1/adset", adSetRoute);
v1Router.use("/api/v1/ad", adRoute);

export default v1Router;
