/*
  Warnings:

  - The values [PUBLIC_SALE] on the enum `ProjectState` will be removed. If these variants are still used in the database, this will fail.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "ProjectState_new" AS ENUM ('PAUSED', 'PRESALE', 'PUBLIC');
ALTER TABLE "Project" ALTER COLUMN "project_state" DROP DEFAULT;
ALTER TABLE "Project" ALTER COLUMN "project_state" TYPE "ProjectState_new" USING ("project_state"::text::"ProjectState_new");
ALTER TYPE "ProjectState" RENAME TO "ProjectState_old";
ALTER TYPE "ProjectState_new" RENAME TO "ProjectState";
DROP TYPE "ProjectState_old";
ALTER TABLE "Project" ALTER COLUMN "project_state" SET DEFAULT 'PAUSED';
COMMIT;

-- DropForeignKey
ALTER TABLE "Project" DROP CONSTRAINT "Project_userId_fkey";

-- AlterTable
ALTER TABLE "Project" ALTER COLUMN "userId" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "Project" ADD CONSTRAINT "Project_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("user_id") ON DELETE SET NULL ON UPDATE CASCADE;
