import morgan from "morgan";
import express from "express";
import router from "./routes/";
import cors from "cors";
import mongoose from "mongoose";
const servidor = express();

// parse requests of content-type - application/json
servidor.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
servidor.use(express.urlencoded({ extended: true }));

servidor.use(cors());
servidor.use(morgan("dev"));
servidor.use("/NutriNET", router);

//Connect to the MongoDB test database
mongoose.connect("mongodb://localhost/Cliente");

module.exports = servidor;
