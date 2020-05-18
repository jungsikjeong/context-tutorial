import React from "react";
import "./App.css";
import ColorBox from "./components/ColorBox";
import { ColorProvider } from "./contexts/color";
import SelectColors from "./components/SelectColors";
import Home from "./components/Home";

function App() {
  return (
    <ColorProvider>
      <Home />
      {/* <SelectColors /> */}
      {/* <ColorBox /> */}
    </ColorProvider>
  );
}

export default App;
