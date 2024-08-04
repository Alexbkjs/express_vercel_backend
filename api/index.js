require('dotenv').config();

const cloudinary = require('cloudinary').v2;

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET
});

const express = require("express");
const app = express();

const cors = require('cors');

app.use(cors()); // Allow all origins

const { quests } = require('./quests.js');
// import image from '../images/quests/basic.png'

// const image = '../images/quests/basic.png'

// cloudinary.uploader.upload(image).then(result => {
//   console.log(result)
// })


// Endpoint to fetch quests with pagination
app.get("/api/v1/quests", (req, res) => {
  const page = parseInt(req.query.page) || 1; // Default to page 1 if not specified
  const pageSize = 3; // Number of quests per page, adjust as needed

  const startIndex = (page - 1) * pageSize;
  const endIndex = startIndex + pageSize;
  const paginatedQuests = quests.slice(startIndex, endIndex);

  res.json(paginatedQuests);
});



module.exports = app;
