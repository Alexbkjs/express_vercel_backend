
const express = require("express");
const app = express();

const cors = require('cors');

app.use(cors()); // Allow all origins

const { quests } = require('./quests_cldn.js');
// const { quests } = require('./quests.js');


// Endpoint to fetch quests with pagination
app.get("/api/v1/quests/images", (req, res) => {
  const page = parseInt(req.query.page) || 1; // Default to page 1 if not specified
  const pageSize = 3; // Number of quests per page, adjust as needed

  const startIndex = (page - 1) * pageSize;
  const endIndex = startIndex + pageSize;
  const paginatedQuests = quests.slice(startIndex, endIndex);

  res.json(paginatedQuests);
});

// Endpoint to fetch quests with pagination
app.get("/api/v1/quests/text", (req, res) => {
  const page = parseInt(req.query.page) || 1; // Default to page 1 if not specified
  const pageSize = 3; // Number of quests per page, adjust as needed

  const startIndex = (page - 1) * pageSize;
  const endIndex = startIndex + pageSize;
  const paginatedQuests = quests.slice(startIndex, endIndex);

  res.json(paginatedQuests);
});



module.exports = app;
