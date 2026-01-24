import React, { useEffect, useState } from "react";

const App = () => {
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  useEffect(
    function () {
      console.log("Use effect is runnning");
      // aChanging();
      bChanging();
    },
    [num2],
  );
  function aChanging() {
    console.log("a ki value change ho gayi");
  }
  function bChanging() {
    console.log("b ki value change ho gayi");
  }
  return (
    <div>
      <h2>Value Of A:{num1}</h2>
      <h2>Value of B:{num2}</h2>
      <button
        onClick={() => {
          setNum1(num1 + 100);
        }}
      >
        a
      </button>
      <button
        onClick={() => {
          setNum2(num2 + 200);
        }}
      >
        b
      </button>
    </div>
  );
};

export default App;

// import { useState } from "react";
// import { useEffect } from "react";

// const App = () => {
//   const [num, setNum] = useState(0);
//   const [num2, setNum2] = useState(100);
//   useEffect(() => {
//     console.log("Use effect is running");
//   }, [num]);
//   return (
//     <div>
//       <h1>num1 value:{num}</h1>
//       <h2>num2 value:{num2}</h2>
//       <button
//         onMouseEnter={() => {
//           setNum(num + 1);
//         }}
//         onMouseLeave={() => {
//           setNum2(num2 + 20);
//         }}
//       >
//         Click Me
//       </button>
//     </div>
//   );
// };

// export default App;
