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

export default prisma;
