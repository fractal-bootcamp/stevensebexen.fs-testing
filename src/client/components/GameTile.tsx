import { Game } from "@prisma/client";

interface GameTileProps {
  game: Game
}
export default function GameTile(props: GameTileProps) {
  return (
    <div className='flex flex-col flex-0 gap-4 p-4 basis-[150px] md:basis-[300px] aspect-[1.7] bg-[#ffffff08] hover:bg-[#ffffff13] transition-colors rounded-xl'>
      <p className='flex-0 text-2xl pl-4'>{props.game.title}</p>
      <p className='text-sm text-[#e0e0e0]'>{props.game.description}</p>
      <p className='text-xs text-[#a9a9a9]'>Genre: {props.game.genre}</p>
    </div>
  )
}