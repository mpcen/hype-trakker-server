-- CreateEnum
CREATE TYPE "ProjectState" AS ENUM ('PAUSED', 'PRESALE', 'PUBLIC');

-- CreateTable
CREATE TABLE "Project" (
    "projectId" SERIAL NOT NULL,
    "createdAt" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMPTZ NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "supply" INTEGER,
    "allocatedAllowlistAmount" INTEGER DEFAULT 0,
    "totalAllowlistSpots" INTEGER DEFAULT 0,
    "description" TEXT,
    "twitterHandle" TEXT,
    "discordUrl" TEXT,
    "openseaUrl" TEXT,
    "presaleDatetime" TIMESTAMPTZ,
    "publicSaleDatetime" TIMESTAMPTZ,
    "revealDatetime" TIMESTAMPTZ,
    "hasAllowList" BOOLEAN DEFAULT false,
    "isRevealed" BOOLEAN DEFAULT false,
    "projectState" "ProjectState" DEFAULT E'PAUSED',
    "presaleMintPrice" TEXT,
    "publicSaleMintPrice" TEXT,
    "presaleMaxMintPerTransaction" INTEGER,
    "publicSaleMaxMintPerTransaction" INTEGER,
    "contractAddress" TEXT,
    "isArchived" BOOLEAN DEFAULT false,
    "userId" INTEGER,

    CONSTRAINT "Project_pkey" PRIMARY KEY ("projectId")
);

-- CreateTable
CREATE TABLE "User" (
    "userId" SERIAL NOT NULL,
    "createdAt" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMPTZ NOT NULL,
    "address" VARCHAR(255) NOT NULL,
    "userName" VARCHAR(255),
    "nonce" INTEGER NOT NULL,
    "avatarUrl" VARCHAR(255),

    CONSTRAINT "User_pkey" PRIMARY KEY ("userId")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_address_key" ON "User"("address");

-- CreateIndex
CREATE UNIQUE INDEX "User_userName_key" ON "User"("userName");

-- AddForeignKey
ALTER TABLE "Project" ADD CONSTRAINT "Project_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("userId") ON DELETE SET NULL ON UPDATE CASCADE;
