import React from "react";

const Nav2 = ({ children, theme }) => {
  return (
    <div className="Nav2">
      <h4>Home</h4>
      <h4>Cart</h4>
      <h4>Contact</h4>
      <h4>About</h4>
      <h4>{theme}</h4>
      <span>{children[0]}</span>
    </div>
  );
};

export default Nav2;
