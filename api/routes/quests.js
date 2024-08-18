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



// without pagination:

// import express from 'express';
// import { quests } from '../data/quests.js';

// const router = express.Router();

// // Endpoint to fetch all quests without pagination
// router.get('/', (req, res) => {
//     res.json(quests);
// });

// // Other endpoints if needed
// router.get('/images', (req, res) => {
//     // Handle quest images endpoint if needed
//     res.json(quests.map(q => ({ id: q.id, imageUrl: q.imageUrl })));
// });

// router.get('/text', (req, res) => {
//     // Handle quest text endpoint if needed
//     res.json(quests.map(q => ({ id: q.id, name: q.name, description: q.description })));
// });

// export default router;
