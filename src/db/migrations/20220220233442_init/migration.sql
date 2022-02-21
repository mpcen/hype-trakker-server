-- CreateEnum
CREATE TYPE "ProjectState" AS ENUM ('PAUSED', 'PRESALE', 'PUBLIC_SALE');

-- CreateTable
CREATE TABLE "Project" (
    "project_id" SERIAL NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "supply" INTEGER,
    "allocated_allowlist_amount" INTEGER,
    "description" TEXT,
    "twitter_handle" TEXT,
    "discord_url" TEXT,
    "opensea_url" TEXT,
    "presale_datetime" TIMESTAMP(3),
    "public_sale_datetime" TIMESTAMP(3),
    "has_allow_list" BOOLEAN,
    "is_revealed" BOOLEAN,
    "project_state" "ProjectState" DEFAULT E'PAUSED',
    "mint_price" TEXT,
    "max_mint_per_transaction" INTEGER,
    "userId" INTEGER NOT NULL,

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

-- CreateIndex
CREATE UNIQUE INDEX "User_address_key" ON "User"("address");

-- CreateIndex
CREATE UNIQUE INDEX "User_user_name_key" ON "User"("user_name");

-- AddForeignKey
ALTER TABLE "Project" ADD CONSTRAINT "Project_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("user_id") ON DELETE RESTRICT ON UPDATE CASCADE;
