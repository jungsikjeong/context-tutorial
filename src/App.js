import React from "react";
import "./App.css";
import { ColorProvider } from "./contexts/color";
import Home from "./components/Home";

function App() {
  return (
    <ColorProvider>
      <Home />
    </ColorProvider>
  );
}

export default App;
