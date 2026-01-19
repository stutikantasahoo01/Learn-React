import React, { useState } from "react";

const App = () => {
  const [num, setNum] = useState(0);
  function increaseOne() {
    setNum(num + 1);
  }
  function decreaseOne() {
    if (num > 0) {
      setNum(num - 1);
    } else {
      setNum(0);
    }
  }
  function increaseFive() {
    setNum(num + 5);
  }
  function decreaseFive() {
    if (num = 0) {
      setNum(0);
    }else{
      setNum(num-5)
    }
  }
  return (
    <div>
      <h1>{num}</h1>
      <button onClick={increaseOne}>Increase By 1</button>
      <button onClick={decreaseOne}>Decrease By 1</button>
      <button onClick={increaseFive}>Increase By 5</button>
      <button onClick={decreaseFive}>Decrease By 5</button>
    </div>
  );
};

export default App;

// import React from "react";
// import { useState } from "react";

// const App = () => {
//   const [num, setNum] = useState(10);
//   const [username, setUsername] = useState('Lipu')
//   const [arr, setArr] = useState([10,20,30])
//   function changeNum() {
//     setNum(30);
//     setUsername('Stutikanta Sahoo')
//     setArr([30,40,50])
//   }
//   return (
//     <div>
//       <h1>The name of the user is {username} <br/> {arr}<br/> The age of user is {num} </h1>
//       <button onClick={changeNum}>CLick Here</button>
//     </div>
//   );
// };

// export default App;
