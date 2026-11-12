/*
  Warnings:

  - You are about to drop the column `mealType` on the `meal_schedules` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "meal_schedules" DROP COLUMN "mealType";

-- DropEnum
DROP TYPE "MealType";
