import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const user = await prisma.user.findFirst({
    where: { telegramId: BigInt("7117926193") },
  });

  // Example Achievements
  const achievements = await prisma.achievement.createMany({
    data: [
      {
        name: '2First Steps',
        description: '2Completed your first quest!',
        imageUrl: 'https://quests-app-bucket.s3.eu-north-1.amazonaws.com/images/basic.png',
        userId: user.id,
      },
      {
        name: '2Treasure Hunter',
        description: '2Found your first treasure!',
        imageUrl: 'https://quests-app-bucket.s3.eu-north-1.amazonaws.com/images/routine.png',
        userId: user.id,
      },
    ],
  });

  // Example Quests
  const quests = await prisma.quest.createMany({
    data: [
      {
        name: '2Find the Hidden Key',
        userId: user.id,
      },
      {
        name: '2Defeat the Dragon',
        userId: user.id,
      },
    ],
  });

  console.log({ user, achievements, quests });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
