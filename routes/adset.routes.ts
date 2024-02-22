import express from "express";

import {
  createAdSetController,
  getAdSetController,
  updateAdSetController,
} from "../controllers/adSetController";

const router = express.Router();

router.post("/", createAdSetController);
router.get("/", getAdSetController);
router.put("/", updateAdSetController);

export default router;
