/*
  Warnings:

  - The values [HOLD] on the enum `Plan` will be removed. If these variants are still used in the database, this will fail.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "Plan_new" AS ENUM ('UNDECIDED', 'FLIP', 'HODL');
ALTER TABLE "Project" ALTER COLUMN "plan" DROP DEFAULT;
ALTER TABLE "Project" ALTER COLUMN "plan" TYPE "Plan_new" USING ("plan"::text::"Plan_new");
ALTER TYPE "Plan" RENAME TO "Plan_old";
ALTER TYPE "Plan_new" RENAME TO "Plan";
DROP TYPE "Plan_old";
ALTER TABLE "Project" ALTER COLUMN "plan" SET DEFAULT 'UNDECIDED';
COMMIT;
