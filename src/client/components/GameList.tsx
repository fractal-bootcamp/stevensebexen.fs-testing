import { Game } from "@prisma/client"
import GameTile from "./GameTile";

interface GameListProps {
  games: Game[] | undefined;
}
export default function GameList(props: GameListProps) {
  return (
    <>
      { props.games &&
        props.games.map(game => <GameTile key={game.id} game={game} />)
      }
    </>
  );
}