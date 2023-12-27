import express from 'express';
import {
  createAdController,
  getAdController,
  updateAdController,
} from '../controllers/adController';

const router = express.Router();

router.post('/', createAdController);
router.get('/', getAdController);
router.put('/', updateAdController);

export default router;
