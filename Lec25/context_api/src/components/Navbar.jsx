import React from "react";
import Nav2 from "./Nav2";

const Navbar = (props) => {
  console.log(props);

  return (
    <div className="Nav">
      <h2>Sheriyans.</h2>
      <Nav2 theme={props.theme} children={props.children}/>
    </div>
  );
};

export default Navbar;
