import express from "express";
import { getAllArts_Culture, getArts_Culture } from "../controllers/artandculturecontroller.js";

const router = express.Router();

router.get('/artandculture', getAllArts_Culture);
router.get('/artandculture/:id', getArts_Culture);

export default router;
