import express from 'express';
import authRoutes from './routes/auth.js';
import questRoutes from './routes/quests.js';

const app = express();

import cors from 'cors';
app.use(cors());
app.use(express.json()); // For parsing application/json

// Mount routes
app.use('/api/v1/auth', authRoutes);
app.use('/api/v1/quests', questRoutes);

export default app;
