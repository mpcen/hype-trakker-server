/*
  Warnings:

  - You are about to drop the column `mintPrice` on the `Project` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Project" DROP COLUMN "mintPrice",
ADD COLUMN     "presaleMintPrice" TEXT,
ADD COLUMN     "publicMintPrice" TEXT;
