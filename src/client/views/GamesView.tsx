import { SetViewFunc } from "../App";
import { Game } from "@prisma/client";
import { useEffect, useState } from "react";
import { fetchGamesFromServer } from "../functions/server";
import GameList from "../components/GameList";

export interface GamesViewProps {
  setView: SetViewFunc
}
export default function GamesView(props: GamesViewProps) {
  const [games, setGames] = useState<Array<Game> | undefined>(undefined);

  useEffect(() => {
    fetchGamesFromServer()
      .then(res => setGames(res.data));
  }, []);

  return (
    <div className='flex flex-row flex-wrap h-screen p-4 gap-4 bg-gradient-to-t from-[#121212] to-[#585858] justify-center overflow-auto text-[#ededed]'>
      <GameList games={games} />
    </div>
  );
}
