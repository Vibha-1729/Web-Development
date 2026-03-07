import express from "express";
import { getHotels, registerHotel } from "../controllers/hotelController.js";
import { protect } from "../middleware/authMiddleware.js";

const hotelRouter= express.Router();

hotelRouter.post('/',protect,registerHotel);
hotelRouter.get("/", getHotels);

export default hotelRouter;