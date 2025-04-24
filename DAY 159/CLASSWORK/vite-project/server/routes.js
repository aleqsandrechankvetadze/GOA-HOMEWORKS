// Import necessary packages and modules
const express = require("express");
const mongoose = require("mongoose");
const multer = require("multer");
const { Readable } = require("stream");
const File = require("./models/file2");

const app = express();

app.set("view engine", "ejs");

// Define the port
const port = 3000;

// MongoDB connection URId YOUR TASK: set ths variable as env
const uri = "mongodb+srv://Aleqsandre:LQfEheafhrB4icZ1@mern.e1ube.mongodb.net/goa-mern?retryWrites=true&w=majority&appName=mern"

// Connect to MongoDB
mongoose
    .connect(uri)
    .then(() => {
        console.log("Connected to MongoDB database successfully");
    })
    .catch(() => {
        console.log("Error occurred while connecting to MongoDB database");
    });

// Access the connection string from mongoose
let connection = mongoose.connection;

// Handle connection events
connection.on("open", () => {
    console.log("Connection established successfully");

    // Create a GridFS bucket
    let bucket = new mongoose.mongo.GridFSBucket(mongoose.connection.db);

    // Configure Multer for memory storage
    const storage = multer.memoryStorage();
    const upload = multer({ storage });

    // File upload endpoint
    app.post("/upload", upload.single("file"), async (req, res) => {
        let { file } = req;
        console.log(file);

        let { fieldname, originalname, mimetype, buffer } = file;

        let newFile = new File({
            filename: originalname,
            contentType: mimetype,
            length: buffer.length,
        });        try {
            let uploadStream = bucket.openUploadStream(fieldname);
            let readBuffer = new Readable();
            readBuffer.push(buffer);
            readBuffer.push(null);

            const isUploaded = await new Promise((resolve, reject) => {
                readBuffer
                    .pipe(uploadStream)
                    .on("finish", () => resolve("successful"))
                    .on("error", () => reject("Error occurred while creating stream"));
            });

            newFile.id = uploadStream.id;
            let savedFile = await newFile.save();
            if (!savedFile) {
                return res.status(404).send("Error occurred while saving the file");
            }
            return res.send({ file: savedFile, message: "File uploaded successfully" });
        } catch (err) {
            res.send("Error uploading file");
        }
    });

    // File download endpoint with id. your task: set this download endpoint sa a filename
    app.get("/image/:fileId", (req, res) => {
        let { fileId } = req.params;

        let downloadStream = bucket.openDownloadStream(
            new mongoose.Types.ObjectId(fileId)
        );

        downloadStream.on("file", (file) => {
            res.set("Content-Type", file.contentType);
        });

        downloadStream.pipe(res);
    });
});

// Start the server
app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});