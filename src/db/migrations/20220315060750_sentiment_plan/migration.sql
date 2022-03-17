/*
  Warnings:

  - You are about to drop the column `sentiment` on the `Project` table. All the data in the column will be lost.

*/
-- CreateEnum
CREATE TYPE "Plan" AS ENUM ('UNDECIDED', 'FLIP', 'HOLD');

-- AlterTable
ALTER TABLE "Project" DROP COLUMN "sentiment",
ADD COLUMN     "plan" "Plan" DEFAULT E'UNDECIDED';

-- DropEnum
DROP TYPE "Sentiment";
