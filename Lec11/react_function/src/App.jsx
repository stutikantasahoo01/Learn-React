import React from "react";

const App = () => {
  const onScroll = () => {
    console.log("Scrolling");
  };
  return (
    <div onWheel={onScroll}>
      <div className="page1"></div>
      <div className="page2"></div>
      <div className="page3"></div>
    </div>
  );
};

export default App;
