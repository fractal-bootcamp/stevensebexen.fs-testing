import prisma from './prismaClient';
import sampleGames from './sampleGames.json';
import sampleUsers from './sampleUsers.json';

async function main() {
  await prisma.$transaction([
    prisma.game.createMany({data: sampleGames}),
    prisma.user.createMany({data: sampleUsers})
  ]);
  process.exit(0);
}

main();