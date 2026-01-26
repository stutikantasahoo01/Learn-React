import React from "react";

const Navbar = (props) => {
  return (
    <div>
      <button
        onClick={() => {
          props.setTheme("Black");
          props.setText("white");
        }}
      >
        Change Theme
      </button>
    </div>
  );
};

export default Navbar;
