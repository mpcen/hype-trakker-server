/*
  Warnings:

  - The `presaleMintPrice` column on the `Project` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "Project" ALTER COLUMN "totalAllowlistSpots" DROP DEFAULT,
DROP COLUMN "presaleMintPrice",
ADD COLUMN     "presaleMintPrice" INTEGER;
