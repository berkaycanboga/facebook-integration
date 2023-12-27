import express from 'express';
import {
  createCampaignController,
  getCampaignController,
  updateCampaignController,
} from '../controllers/campaignController';

const router = express.Router();

router.post('/', createCampaignController);
router.get('/', getCampaignController);
router.put('/', updateCampaignController);

export default router;
