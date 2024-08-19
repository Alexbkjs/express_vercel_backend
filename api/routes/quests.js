import express from 'express';
import { quests } from '../data/quests.js';

const router = express.Router();

// Helper function to paginate quests
const paginateQuests = (req) => {
    const page = parseInt(req.query.page, 10) || 1;
    const pageSize = 9; // Number of quests per page, adjust as needed

    const startIndex = (page - 1) * pageSize;
    const endIndex = startIndex + pageSize;

    // Return an empty array if the startIndex exceeds the number of available quests
    if (startIndex >= quests.length) {
        return [];
    }

    return quests.slice(startIndex, endIndex);
};

// Endpoint to fetch all quests with pagination
router.get('/', (req, res) => {
    const paginatedQuests = paginateQuests(req);
    res.json(paginatedQuests);
});

// Endpoint to fetch a specific quest by ID
router.get('/:id', (req, res) => {
    const questId = req.params.id;

    const quest = quests.find(q => q.id === parseInt(questId));
    if (!quest) {
        return res.status(404).json({ message: 'Quest not found' });
    }

    res.json(quest);
});

export default router;
