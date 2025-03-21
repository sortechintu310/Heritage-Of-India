import express from "express";
import { getAllHeritages, getHeritageById } from "../controllers/heritagesController.js";

const router = express.Router();

router.get('/heritages', getAllHeritages);
router.get('/heritages/:id', getHeritageById);

export default router;
