/*
  Warnings:

  - You are about to drop the column `isLocked` on the `Quest` table. All the data in the column will be lost.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Quest" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "imageUrl" TEXT NOT NULL DEFAULT '',
    "description" TEXT NOT NULL DEFAULT '',
    "award" TEXT NOT NULL DEFAULT '',
    "goal" TEXT NOT NULL DEFAULT '',
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);
INSERT INTO "new_Quest" ("award", "createdAt", "description", "goal", "id", "imageUrl", "name", "updatedAt") SELECT "award", "createdAt", "description", "goal", "id", "imageUrl", "name", "updatedAt" FROM "Quest";
DROP TABLE "Quest";
ALTER TABLE "new_Quest" RENAME TO "Quest";
CREATE TABLE "new_UserQuestProgress" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "userId" INTEGER NOT NULL,
    "questId" INTEGER NOT NULL,
    "status" TEXT NOT NULL,
    "progress" REAL NOT NULL DEFAULT 0.0,
    "startedAt" DATETIME,
    "completedAt" DATETIME,
    "isLocked" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    CONSTRAINT "UserQuestProgress_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "UserQuestProgress_questId_fkey" FOREIGN KEY ("questId") REFERENCES "Quest" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_UserQuestProgress" ("completedAt", "createdAt", "id", "progress", "questId", "startedAt", "status", "updatedAt", "userId") SELECT "completedAt", "createdAt", "id", "progress", "questId", "startedAt", "status", "updatedAt", "userId" FROM "UserQuestProgress";
DROP TABLE "UserQuestProgress";
ALTER TABLE "new_UserQuestProgress" RENAME TO "UserQuestProgress";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
