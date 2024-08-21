import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
    // Create Quests
    const quests = [
        {
            imageUrl: "https://quests-app-bucket.s3.eu-north-1.amazonaws.com/images/basic.png",
            name: "Базовий квест",
            description: "Візит до Академії для отримання першого рівня та вибору базового класу",
            award: "очки досвіду, підвищення класу",
            goal: "Візит до Академії для отримання першого рівня та вибору базового класу",
        },
        {
            imageUrl: "https://quests-app-bucket.s3.eu-north-1.amazonaws.com/images/routine.png",
            name: "Рутинний квест",
            description: "Виконання тестового завдання для отримання артефакту та Мідних Монет",
            award: "очки досвіду, мідні монети, артефакти",
            goal: "Виконання тестового завдання для отримання артефакту та Мідних Монет",
        },
        {
            imageUrl: "https://quests-app-bucket.s3.eu-north-1.amazonaws.com/images/adventure.png",
            name: "Пригодницький квест",
            description: "Проходження кар’єрного коучинга, навчальних курсів та подібних завдань",
            award: "підвищення класу, рівня, артефакти, мідні монети",
            goal: "Проходження кар’єрного коучинга, навчальних курсів та подібних завдань",
        },
        {
            imageUrl: "https://quests-app-bucket.s3.eu-north-1.amazonaws.com/images/reusable.png",
            name: "Багаторазовий квест",
            description: "Залучайте нових учасників за партнерським посиланням",
            award: "очки досвіду",
            goal: "Залучайте нових учасників за партнерським посиланням",
        },
        {
            imageUrl: "https://quests-app-bucket.s3.eu-north-1.amazonaws.com/images/team.png",
            name: "Командний квест",
            description: "Участь у командному проекті для отримання досвіду та Золотих Монет",
            award: "очки досвіду, золоті та мідні монети, артефакти",
            goal: "Участь у командному проекті для отримання досвіду та Золотих Монет",
        },
        {
            imageUrl: "https://quests-app-bucket.s3.eu-north-1.amazonaws.com/images/mini_boss.png",
            name: "Битва з міні-босом",
            description: "Складання онлайн-іспиту для отримання артефакту",
            award: "артефакти",
            goal: "Складання онлайн-іспиту для отримання артефакту",
        },
    ];

    for (const quest of quests) {
        await prisma.quest.create({ data: quest });
    }

    // Create Achievements
    const achievements = [
        { name: "Початківець", description: "Отримати перший рівень", imageUrl: "https://quests-app-bucket.s3.eu-north-1.amazonaws.com/images/achievement_1.png" },
        { name: "Новачок", description: "Завершити базове навчання", imageUrl: "https://quests-app-bucket.s3.eu-north-1.amazonaws.com/images/achievement_2.png" },
        { name: "Дослідник", description: "Виконати 3 різні квести", imageUrl: "https://quests-app-bucket.s3.eu-north-1.amazonaws.com/images/achievement_3.png" },
        { name: "Воїн", description: "Здобути 5 артефактів", imageUrl: "https://quests-app-bucket.s3.eu-north-1.amazonaws.com/images/achievement_4.png" },
        { name: "Командир", description: "Завершити командний квест", imageUrl: "https://quests-app-bucket.s3.eu-north-1.amazonaws.com/images/achievement_5.png" },
        { name: "Маг", description: "Досягнути 10-го рівня", imageUrl: "https://quests-app-bucket.s3.eu-north-1.amazonaws.com/images/achievement_6.png" },
        { name: "Мисливець", description: "Знайти 5 артефактів", imageUrl: "https://quests-app-bucket.s3.eu-north-1.amazonaws.com/images/achievement_7.png" },
        { name: "Ремісник", description: "Створити 5 предметів", imageUrl: "https://quests-app-bucket.s3.eu-north-1.amazonaws.com/images/achievement_8.png" },
        { name: "Лідер", description: "Керувати командою у 3 квестах", imageUrl: "https://quests-app-bucket.s3.eu-north-1.amazonaws.com/images/achievement_9.png" },
        { name: "Завойовник", description: "Перемогти міні-боса", imageUrl: "https://quests-app-bucket.s3.eu-north-1.amazonaws.com/images/achievement_10.png" },
    ];

    for (const achievement of achievements) {
        await prisma.achievement.create({ data: achievement });
    }


}

main()
    .catch((e) => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
