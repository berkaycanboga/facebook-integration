import express from 'express';
import {
  createCampaignAdSetAdController,
  getCampaignAdSetAdController,
  updateCampaignAdAdsetController,
  deleteCampaignAdAdsetController,
} from '../controllers/campaignAdSetAdService';

const router = express.Router();

router.post('/', createCampaignAdSetAdController);
router.get('/', getCampaignAdSetAdController);
router.put('/', updateCampaignAdAdsetController);
router.delete('/', deleteCampaignAdAdsetController);

export default router;
