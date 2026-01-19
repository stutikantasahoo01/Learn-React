import React, { useState } from "react";

const App = () => {
  //                                            *****************************
  // const [num, setNum] = useState({ user: "Lipu", age: 21 });
  // const [arr, setArr] = useState(['Lipu',20,'Sahoostutikanta@gmail.com'])
  // function changeFunc() {
  //   const newArr= [...arr];
  //   newArr[0]='Stutikanta Sahoo'
  //   newArr[1]=20
  //   newArr[2]='stutikanta01@gmail.com'
  //   setArr(newArr);

  // }
  //                                      **********************
  // const [obj, setObj] = useState({ user: "Lipu", age: 21 });
  // function changeFunc() {
  //   setObj((obj) => ({ ...obj, age: 26 }));
  // }
  //                                         **************************************
  const [num, setNum] = useState(20);
  const changeFunc = () => {
    setNum((prev) => prev + 1);
    setNum((prev) => prev + 1);
    setNum((prev) => prev + 1);
  };
  return (
    <div>
      <h1>Hello ! Lipu, {num} is your age .</h1>
      <button onClick={changeFunc}>Click Here To Know The Truth</button>
    </div>
  );
};

export default App;
