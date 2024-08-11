import express from 'express';
import cors from 'cors';
import { quests } from './quests.js'; // Adjust the import based on which file you need

import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

(async () => {
  try {
    await prisma.$connect();
    console.log('Connected to SQLite database');
  } catch (err) {
    console.error('SQLite connection error:', err);
  }
})();


const app = express();

app.use(cors()); // Allow all origins

// Endpoint to fetch quests with pagination
app.get('/api/v1/quests', (req, res) => {
  const page = parseInt(req.query.page, 10) || 1; // Default to page 1 if not specified
  const pageSize = 3; // Number of quests per page, adjust as needed

  const startIndex = (page - 1) * pageSize;
  const endIndex = startIndex + pageSize;
  const paginatedQuests = quests.slice(startIndex, endIndex);

  res.json(paginatedQuests);
});

// Endpoint to fetch quests with pagination
app.get('/api/v1/quests/images', (req, res) => {
  const page = parseInt(req.query.page, 10) || 1; // Default to page 1 if not specified
  const pageSize = 3; // Number of quests per page, adjust as needed

  const startIndex = (page - 1) * pageSize;
  const endIndex = startIndex + pageSize;
  const paginatedQuests = quests.slice(startIndex, endIndex);

  res.json(paginatedQuests);
});

// Endpoint to fetch quests with pagination
app.get('/api/v1/quests/text', (req, res) => {
  const page = parseInt(req.query.page, 10) || 1; // Default to page 1 if not specified
  const pageSize = 3; // Number of quests per page, adjust as needed

  const startIndex = (page - 1) * pageSize;
  const endIndex = startIndex + pageSize;
  const paginatedQuests = quests.slice(startIndex, endIndex);

  res.json(paginatedQuests);
});

export default app;
const port = 3000
app.listen(port, () => { console.log(`Server running on port: ${port}`) })