import express from 'express'
import { postOrder, getOrdersByUserId } from "../controllers/ordersController.js";


const router = express.Router();

router.post("/order",postOrder);
router.get("/order/:id",getOrdersByUserId);

export default router;
