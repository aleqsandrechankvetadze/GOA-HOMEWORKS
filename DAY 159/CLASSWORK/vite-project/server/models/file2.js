const mongoose = require("mongoose");

// Define the schema for the File model
const fileSchema = new mongoose.Schema({
  filename: {
    type: String,
    required: true,
  },
  contentType: {
    type: String,
    required: true,
  },
  length: {
    type: Number,
    required: true,
  },
  id: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
  },
});

// Create and export the File model
module.exports = mongoose.model("File", fileSchema);