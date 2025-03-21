import express from 'express';
import { getToursPkgById, getToursPkgs } from '../controllers/tourspkgsController.js';
const router = express.Router();

router.get("/toursandpackages", getToursPkgs);
router.get("/toursandpackages/:id", getToursPkgById);

export default router;