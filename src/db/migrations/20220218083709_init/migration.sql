-- CreateEnum
CREATE TYPE "ProjectState" AS ENUM ('PAUSED', 'PRESALE', 'PUBLIC_SALE');

-- CreateEnum
CREATE TYPE "CrewUserRole" AS ENUM ('ADMIN', 'MOD', 'REGULAR');

-- CreateTable
CREATE TABLE "Project" (
    "project_id" SERIAL NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "description" TEXT,
    "presale_datetime" TIMESTAMP(3),
    "public_sale_datetime" TIMESTAMP(3),
    "has_allow_list" BOOLEAN,
    "is_revealed" BOOLEAN,
    "project_state" "ProjectState" NOT NULL DEFAULT E'PAUSED',
    "mint_price" TEXT,
    "max_mint_per_transaction" INTEGER,

    CONSTRAINT "Project_pkey" PRIMARY KEY ("project_id")
);

-- CreateTable
CREATE TABLE "User" (
    "user_id" SERIAL NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "address" VARCHAR(255) NOT NULL,
    "user_name" VARCHAR(255),
    "nonce" INTEGER NOT NULL,
    "avatar_url" VARCHAR(255),

    CONSTRAINT "User_pkey" PRIMARY KEY ("user_id")
);

-- CreateTable
CREATE TABLE "UserProject" (
    "user_id" INTEGER NOT NULL,
    "project_id" INTEGER NOT NULL,
    "date_added" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "UserProject_pkey" PRIMARY KEY ("user_id","project_id")
);

-- CreateTable
CREATE TABLE "Crew" (
    "crew_id" SERIAL NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "crew_name" VARCHAR(255),
    "avatarUrl" VARCHAR(255),

    CONSTRAINT "Crew_pkey" PRIMARY KEY ("crew_id")
);

-- CreateTable
CREATE TABLE "CrewUser" (
    "crew_id" INTEGER NOT NULL,
    "user_id" INTEGER NOT NULL,
    "role" "CrewUserRole" NOT NULL DEFAULT E'REGULAR',
    "date_added" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "CrewUser_pkey" PRIMARY KEY ("user_id","crew_id")
);

-- CreateTable
CREATE TABLE "CrewProject" (
    "crew_id" INTEGER NOT NULL,
    "project_id" INTEGER NOT NULL,
    "date_added" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "CrewProject_pkey" PRIMARY KEY ("crew_id","project_id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_address_key" ON "User"("address");

-- CreateIndex
CREATE UNIQUE INDEX "User_user_name_key" ON "User"("user_name");

-- CreateIndex
CREATE UNIQUE INDEX "Crew_crew_name_key" ON "Crew"("crew_name");

-- AddForeignKey
ALTER TABLE "UserProject" ADD CONSTRAINT "UserProject_project_id_fkey" FOREIGN KEY ("project_id") REFERENCES "Project"("project_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserProject" ADD CONSTRAINT "UserProject_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("user_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CrewUser" ADD CONSTRAINT "CrewUser_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("user_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CrewUser" ADD CONSTRAINT "CrewUser_crew_id_fkey" FOREIGN KEY ("crew_id") REFERENCES "Crew"("crew_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CrewProject" ADD CONSTRAINT "CrewProject_project_id_fkey" FOREIGN KEY ("project_id") REFERENCES "Project"("project_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CrewProject" ADD CONSTRAINT "CrewProject_crew_id_fkey" FOREIGN KEY ("crew_id") REFERENCES "Crew"("crew_id") ON DELETE RESTRICT ON UPDATE CASCADE;
