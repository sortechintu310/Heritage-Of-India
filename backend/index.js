import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import heritageRouter from "./routes/heritagesRouter.js";
import artandcultureRoutes from "./routes/artandcultureRoutes.js";
import blogRoutes from "./routes/blogRoutes.js";
import chatRoute from "./routes/chatRoute.js";
import userRoutes from "./routes/userRoutes.js";
import tourspkgsRoutes from "./routes/tourspkgsRoutes.js";
import ordersRoutes from "./routes/ordersRoutes.js";
import bodyParser from "body-parser";

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

dotenv.config();

app.use("/api",heritageRouter);
app.use("/api",artandcultureRoutes);
app.use("/api",blogRoutes);
app.use("/api",chatRoute)
app.use("/api",userRoutes);
app.use("/api",tourspkgsRoutes);
app.use("/api",ordersRoutes)

app.listen(port,()=>{
  console.log(`Server is running on port ${port}`);
});

app.get("/",(req,res)=>{
  res.send("Welcome to Heritage Of India Api.");
});

