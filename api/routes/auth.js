import express from 'express';
import { validate, parse } from '@telegram-apps/init-data-node';
import dotenv from 'dotenv';
import prisma from '../../prisma.js';

dotenv.config();

const router = express.Router();
const token = process.env.BOT_TOKEN;

const authMiddleware = async (req, res, next) => {
    const [authType, authData = ''] = (req.header('authorization') || '').split(' ');

    if (authType === 'tma') {
        try {
            validate(authData, token, { expiresIn: 3600 });
            res.locals.initData = parse(authData);
            console.log('Parsed Init Data:', res.locals.initData); // Debugging line
            next();
        } catch (e) {
            console.error('Validation Error:', e); // Debugging line
            next(e);
        }
    } else {
        next(new Error('Unauthorized'));
    }
};

const createUser = async (initData) => {
    const { id: telegramId, firstName, lastName } = initData.user;

    if (!telegramId || !firstName || !lastName) {
        throw new Error('Missing required fields: telegramId, firstName, lastName');
    }

    console.log('Creating or Fetching User:', { telegramId, firstName, lastName }); // Debugging line

    let user = await prisma.user.findUnique({
        where: { telegramId }
    });

    if (!user) {
        user = await prisma.user.create({
            data: {
                telegramId,
                firstName,
                lastName,
                class: 'adventurer',
                level: 1,
                points: 0,
                coins: 0,
                achievements: {
                    create: [] // Create an empty list for achievements
                },
                activeQuests: {
                    create: [] // Create an empty list for active quests
                }
            }
        });
    }

    return {
        ...user,
        telegramId: user.telegramId.toString(), // Convert BigInt to string
    };
};

const userMiddleware = async (req, res, next) => {
    try {
        const initData = res.locals.initData;
        if (!initData) {
            return next(new Error('Init data is not available'));
        }

        const user = await createUser(initData);
        res.locals.user = user;
        next();
    } catch (error) {
        console.error('User Middleware Error:', error); // Debugging line
        next(error);
    }
};

const showUserMiddleware = (req, res, next) => {
    const user = res.locals.user;
    const initData = res.locals.initData;

    if (!user || !initData) {
        return next(new Error('User or init data is not available'));
    }

    res.json({
        success: true,
        user: {
            ...user,
            telegramId: user.telegramId.toString(), // Convert BigInt to string
        },
        initData
    });
};

const defaultErrorMiddleware = (err, req, res, next) => {
    console.error('Default Error Middleware:', err); // Debugging line
    res.status(500).json({ error: err.message });
};

router.use(authMiddleware);
router.use(userMiddleware);
router.post('/', showUserMiddleware);
router.use(defaultErrorMiddleware);

export default router;
