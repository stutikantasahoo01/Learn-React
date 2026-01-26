import React, { useState } from "react";
import Navbar from "./components/Navbar";

const App = () => {
  const [Theme, setTheme] = useState("Light");
  const [text, setText] = useState("black");
  return (
    <div>
      <h1 style={{ backgroundColor: Theme, color: text }}>Theme is {Theme}</h1>
      <Navbar Theme={Theme} setTheme={setTheme} text={text} setText={setText} />
    </div>
  );
};

export default App;
