import React from "react";

const App = () => {
  // const user = {
  //   name: "Stutikanta Sahoo",
  //   age: 20,
  //   mail: "Stutikantasahoo@gmail.com",
  // };
  // localStorage.setItem("User", JSON.stringify(user));
 
  /* To get that object from localStorage */
const user=JSON.parse(localStorage.getItem('User'))
console.log(user);


  return (
    <div>
      <h1></h1>
    </div>
  );
};

export default App;
