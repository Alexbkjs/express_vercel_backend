import { validate } from '@telegram-apps/init-data-node';
import cors from 'cors'
import express from 'express';
const app = express();
app.use(cors()); // Allow all origins
const token = process.env.BOT_TOKEN // Replace with your actual token

// Middleware to validate authorization header
app.use((req, res, next) => {


    const header = req.header('authorization');
    if (header) {
        try {
            validate(header, token);
            return next();
        } catch (e) {
            console.error('Authorization validation failed:', e);
        }
    }
    res.status(403).send({ message: 'Error mine' });
});

// Example API endpoint
app.get('/api', (req, res) => {
    res.json({ message: 'Data fetched successfully' });
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
