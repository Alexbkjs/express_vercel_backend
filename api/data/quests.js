// export const quests = [
//     {
//         "id": 1,
//         "imageUrl": "https://quests-app-bucket.s3.eu-north-1.amazonaws.com/images/basic.png",
//         "name": "Базовий квест",
//         "description": "Візит до Академії для отримання першого рівня та вибору базового класу",
//         "award": "очки досвіду, підвищення класу"
//     },
//     {
//         "id": 2,
//         "imageUrl": "https://quests-app-bucket.s3.eu-north-1.amazonaws.com/images/routine.png",
//         "name": "Рутинний квест",
//         "description": "Виконання тестового завдання для отримання артефакту та Мідних Монет",
//         "award": "очки досвіду, мідні монети, артефакти"
//     },
//     {
//         "id": 3,
//         "imageUrl": "https://quests-app-bucket.s3.eu-north-1.amazonaws.com/images/adventure.png",
//         "name": "Пригодницький квест",
//         "description": "Проходження кар’єрного коучинга,навчальних курсів та подібних завдань",
//         "award": "підвищення класу, рівня,артефакти, мідні монети"
//     },
//     {
//         "id": 4,
//         "imageUrl": "https://quests-app-bucket.s3.eu-north-1.amazonaws.com/images/reusable.png",
//         "name": "Багаторазовий квест",
//         "description": "Залучайте нових учасників за партнерським посиланням",
//         "award": "очки досвіду"
//     },
//     {
//         "id": 5,
//         "imageUrl": "https://quests-app-bucket.s3.eu-north-1.amazonaws.com/images/team.png",
//         "name": "Командний квест",
//         "description": "Участь у командному проекті для отримання досвіду та Золотих Монет",
//         "award": "очки досвіду, золоті тамідні монети, артефакти"
//     },
//     {
//         "id": 6,
//         "imageUrl": "https://quests-app-bucket.s3.eu-north-1.amazonaws.com/images/mini_boss.png",
//         "name": "Битва з міні-босом",
//         "description": "Складання онлайн-іспиту для отримання артефакту",
//         "award": "артефакти"
//     }
// ];


export const quests = [
    {
        id: 1,
        imageUrl: "https://quests-app-bucket.s3.eu-north-1.amazonaws.com/images/basic.png",
        name: "Базовий квест",
        description: "Візит до Академії для отримання першого рівня та вибору базового класу",
        award: "очки досвіду, підвищення класу",
        questDetails_goal: "Візит до Академії для отримання першого рівня та вибору базового класу",
        questDetails_requirements: ["Зареєструватися в Академії", "Пройти базове навчання"],
        questDetails_rewards: ["очки досвіду", "підвищення класу"],
    },
    {
        id: 2,
        imageUrl: "https://quests-app-bucket.s3.eu-north-1.amazonaws.com/images/routine.png",
        name: "Рутинний квест",
        description: "Виконання тестового завдання для отримання артефакту та Мідних Монет",
        award: "очки досвіду, мідні монети, артефакти",
        questDetails_goal: "Виконання тестового завдання для отримання артефакту та Мідних Монет",
        questDetails_requirements: ["Отримати тестове завдання", "Завершити завдання вчасно"],
        questDetails_rewards: ["очки досвіду", "мідні монети", "артефакти"],
    },
    {
        id: 3,
        imageUrl: "https://quests-app-bucket.s3.eu-north-1.amazonaws.com/images/adventure.png",
        name: "Пригодницький квест",
        description: "Проходження кар’єрного коучинга, навчальних курсів та подібних завдань",
        award: "підвищення класу, рівня,артефакти, мідні монети",
        questDetails_goal: "Проходження кар’єрного коучинга, навчальних курсів та подібних завдань",
        questDetails_requirements: ["Зареєструватися на коучинг", "Завершити навчальні курси"],
        questDetails_rewards: ["підвищення класу", "рівня", "артефакти", "мідні монети"],
    },
    {
        id: 4,
        imageUrl: "https://quests-app-bucket.s3.eu-north-1.amazonaws.com/images/reusable.png",
        name: "Багаторазовий квест",
        description: "Залучайте нових учасників за партнерським посиланням",
        award: "очки досвіду",
        questDetails_goal: "Залучайте нових учасників за партнерським посиланням",
        questDetails_requirements: ["Отримати партнерське посилання", "Залучити нових учасників"],
        questDetails_rewards: ["очки досвіду"],
    },
    {
        id: 5,
        imageUrl: "https://quests-app-bucket.s3.eu-north-1.amazonaws.com/images/team.png",
        name: "Командний квест",
        description: "Участь у командному проекті для отримання досвіду та Золотих Монет",
        award: "очки досвіду, золоті та мідні монети, артефакти",
        questDetails_goal: "Участь у командному проекті для отримання досвіду та Золотих Монет",
        questDetails_requirements: ["Зібрати команду", "Завершити проект"],
        questDetails_rewards: ["очки досвіду", "золоті та мідні монети", "артефакти"],
    },
    {
        id: 6,
        imageUrl: "https://quests-app-bucket.s3.eu-north-1.amazonaws.com/images/mini_boss.png",
        name: "Битва з міні-босом",
        description: "Складання онлайн-іспиту для отримання артефакту",
        award: "артефакти",
        questDetails_goal: "Складання онлайн-іспиту для отримання артефакту",
        questDetails_requirements: ["Зареєструватися на іспит", "Скласти іспит успішно"],
        questDetails_rewards: ["артефакти"],
    }
];
