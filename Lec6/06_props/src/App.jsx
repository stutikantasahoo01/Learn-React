import React from "react";
import Card from "./Components/Card.jsx";
const App = () => {
  return (
    <div className="parent">
      <Card
        name="Stutikanta Sahoo"
        age={21}
        // img="https://www.pexels.com/photo/close-up-photo-of-berries-1379636.jpeg"
      />
      <Card name="Shubhrakanta Sahoo" age={11} />
      <Card name="Shrutikanta Sahoo" age={24} />
      <Card name="Subhakanta Sahoo" age={30} />
      <Card name="Soumyakanta Sahoo" age={40} />
    </div>
  );
};

export default App;
