import path from "path";
import express from "express";
import dotenv from "dotenv";
import { connectDb } from "./db/connectDB.js";

dotenv.config();

const app = express();
app.use(express.static("./public"));

app.get("/", (req, res) => {
  res.status(200).sendFile(path.resolve(__dirname, "./public/index.html"));
});

app.get("/adminpage", (req, res) => {
  res.status(200).sendFile(path.resolve(__dirname, "./public/adminpage.html"));
});

app.get("/favcar", (req, res) => {
  res.status(200).send("Hello w211");
});

app.get("*", (req, res) => {
  res.status(404).sendFile(path.resolve(__dirname, "./public/notfound.html"));
});

app.listen(process.env.PORT, () => {
  connectDb();
  console.log(`Server is running on port ${process.env.PORT}`);
});

console.log("server is running");
