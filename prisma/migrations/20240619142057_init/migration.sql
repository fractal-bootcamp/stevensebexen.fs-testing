-- CreateTable
CREATE TABLE "Game" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "releaseDate" TIMESTAMP(3) NOT NULL,
    "genre" TEXT NOT NULL,

    CONSTRAINT "Game_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "username" TEXT NOT NULL,
    "password" TEXT NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "UserGameFavorites" (
    "gameId" TEXT NOT NULL,
    "userId" TEXT NOT NULL,

    CONSTRAINT "UserGameFavorites_pkey" PRIMARY KEY ("gameId","userId")
);

-- AddForeignKey
ALTER TABLE "UserGameFavorites" ADD CONSTRAINT "UserGameFavorites_gameId_fkey" FOREIGN KEY ("gameId") REFERENCES "Game"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserGameFavorites" ADD CONSTRAINT "UserGameFavorites_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
