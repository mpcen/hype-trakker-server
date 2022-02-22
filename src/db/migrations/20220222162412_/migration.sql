/*
  Warnings:

  - You are about to drop the column `maxMintPerTransaction` on the `Project` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Project" DROP COLUMN "maxMintPerTransaction",
ADD COLUMN     "presaleMaxMintPerTransaction" INTEGER,
ADD COLUMN     "publicSaleMaxMintPerTransaction" INTEGER;
