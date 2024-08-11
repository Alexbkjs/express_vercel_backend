import express from 'express';
import { quests } from '../data/quests.js';

const router = express.Router();

// Helper function to paginate quests
const paginateQuests = (req) => {
    const page = parseInt(req.query.page, 10) || 1;
    const pageSize = 3; // Number of quests per page, adjust as needed

    const startIndex = (page - 1) * pageSize;
    const endIndex = startIndex + pageSize;

    return quests.slice(startIndex, endIndex);
};

// Endpoint to fetch all quests with pagination
router.get('/', (req, res) => {
    const paginatedQuests = paginateQuests(req);
    res.json(paginatedQuests);
});

// Endpoint to fetch quest images with pagination
router.get('/images', (req, res) => {
    const paginatedQuests = paginateQuests(req);
    res.json(paginatedQuests);
});

// Endpoint to fetch quest text with pagination
router.get('/text', (req, res) => {
    const paginatedQuests = paginateQuests(req);
    res.json(paginatedQuests);
});

export default router;
