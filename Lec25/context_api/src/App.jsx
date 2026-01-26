import React from "react";
import Navbar from "./components/Navbar";
import { useState } from "react";

const App = () => {
  const [Theme, setTheme] = useState("Light");
  return (
    <div>
      <Navbar theme={Theme}>
        <h2>This is a navbar</h2>
        <h2>This is a navbar</h2>
      </Navbar>
    </div>
  );
};

export default App;
