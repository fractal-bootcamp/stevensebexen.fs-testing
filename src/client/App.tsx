import { useState } from "react";
import { DefaultView } from "./views/DefaultView";

export enum View {
  DEFAULT,
}

function App() {
  const [view, setView] = useState<View>(View.DEFAULT);

  function renderView() {
    switch (view) {
      default:
        console.log('x');
        return <DefaultView onViewSelect={(view: View) => setView(view)} />;
    }
  }

  return (
    <>
      {renderView()}
    </>
  );
}

export default App;
