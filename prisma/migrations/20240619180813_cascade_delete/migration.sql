-- DropForeignKey
ALTER TABLE "UserGameFavorites" DROP CONSTRAINT "UserGameFavorites_gameId_fkey";

-- DropForeignKey
ALTER TABLE "UserGameFavorites" DROP CONSTRAINT "UserGameFavorites_userId_fkey";

-- AddForeignKey
ALTER TABLE "UserGameFavorites" ADD CONSTRAINT "UserGameFavorites_gameId_fkey" FOREIGN KEY ("gameId") REFERENCES "Game"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserGameFavorites" ADD CONSTRAINT "UserGameFavorites_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
