/*
  Warnings:

  - You are about to drop the column `description` on the `Project` table. All the data in the column will be lost.

*/
-- CreateEnum
CREATE TYPE "Sentiment" AS ENUM ('UNDECIDED', 'FLIP', 'HOLD');

-- AlterTable
ALTER TABLE "Project" DROP COLUMN "description",
ADD COLUMN     "sentiment" "Sentiment" DEFAULT E'UNDECIDED';
