/*
  Warnings:

  - You are about to drop the column `allocatedAllowlistAmount` on the `Project` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Project" DROP COLUMN "allocatedAllowlistAmount",
ADD COLUMN     "acquiredAllowList" BOOLEAN DEFAULT true;
