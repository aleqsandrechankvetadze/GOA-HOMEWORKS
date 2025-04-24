const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const fileRoutes = require("./routes/files");

dotenv.config();

const app = express();
app.set("view engine", "ejs");

// Connect to database
connectDB();

// Use file upload/download routes
app.use("/", fileRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
