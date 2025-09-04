-- CreateEnum
CREATE TYPE "public"."ScoreFieldType" AS ENUM ('ONES', 'TWOS', 'THREES', 'FOURS', 'FIVES', 'SIXES', 'PAIR', 'TWO_PAIRS', 'THREE_OF_A_KIND', 'FOUR_OF_A_KIND', 'SMALL_STRAIGHT', 'LARGE_STRAIGHT', 'FULL_HOUSE', 'CHANCE', 'YAHTZEE');

-- CreateEnum
CREATE TYPE "public"."GameState" AS ENUM ('CREATED', 'IN_PROGRESS', 'COMPLETED');

-- CreateEnum
CREATE TYPE "public"."GameMode" AS ENUM ('CLASSIC');

-- CreateTable
CREATE TABLE "public"."User" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "username" CITEXT NOT NULL,
    "password" TEXT NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Game" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "slug" TEXT NOT NULL,
    "status" "public"."GameState" NOT NULL DEFAULT 'CREATED',
    "mode" "public"."GameMode" NOT NULL DEFAULT 'CLASSIC',

    CONSTRAINT "Game_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Turn" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "rolls" INTEGER NOT NULL DEFAULT 0,
    "gameId" INTEGER NOT NULL,
    "playerColumnId" INTEGER NOT NULL,
    "dice" JSONB NOT NULL DEFAULT '[]',
    "userId" INTEGER,

    CONSTRAINT "Turn_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."ScoreColumn" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "playerId" INTEGER NOT NULL,
    "gameId" INTEGER NOT NULL,

    CONSTRAINT "ScoreColumn_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."ScoreField" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "type" "public"."ScoreFieldType" NOT NULL,
    "score" INTEGER,
    "columnId" INTEGER NOT NULL,

    CONSTRAINT "ScoreField_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_username_key" ON "public"."User"("username");

-- CreateIndex
CREATE UNIQUE INDEX "Game_slug_key" ON "public"."Game"("slug");

-- AddForeignKey
ALTER TABLE "public"."Turn" ADD CONSTRAINT "Turn_gameId_fkey" FOREIGN KEY ("gameId") REFERENCES "public"."Game"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Turn" ADD CONSTRAINT "Turn_playerColumnId_fkey" FOREIGN KEY ("playerColumnId") REFERENCES "public"."ScoreColumn"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Turn" ADD CONSTRAINT "Turn_userId_fkey" FOREIGN KEY ("userId") REFERENCES "public"."User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."ScoreColumn" ADD CONSTRAINT "ScoreColumn_playerId_fkey" FOREIGN KEY ("playerId") REFERENCES "public"."User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."ScoreColumn" ADD CONSTRAINT "ScoreColumn_gameId_fkey" FOREIGN KEY ("gameId") REFERENCES "public"."Game"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."ScoreField" ADD CONSTRAINT "ScoreField_columnId_fkey" FOREIGN KEY ("columnId") REFERENCES "public"."ScoreColumn"("id") ON DELETE CASCADE ON UPDATE CASCADE;
