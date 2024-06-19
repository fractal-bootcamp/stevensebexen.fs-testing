import { useState } from "react";
import { DefaultView } from "./views/DefaultView";
import FavoritesView from "./views/FavoritesView";
import GamesView from "./views/GamesView";

export enum View {
  DEFAULT,
  FAVORITES,
  GAMES
}

export type SetViewFunc = (view: View) => void;

function App() {
  const [view, setView] = useState<View>(View.DEFAULT);

  function childSetView(view: View): void {
    setView(view);
  }

  function renderView() {
    switch (view) {
      case View.GAMES:
        return <GamesView setView={childSetView} />;
      case View.FAVORITES:
        return <FavoritesView setView={childSetView} />;
      default:
        return <DefaultView setView={childSetView} />;
    }
  }

  return (
    <>
      {renderView()}
    </>
  );
}

export default App;
