import React, { useState } from "react";

const App = () => {
  const [text, setText] = useState("");
  const formSubmit = (el) => {
    el.preventDefault();
    console.log("Form Submitted by", text);
    setText('')
  };
  return (
    <div>
      <form
        onClick={(el) => {
          formSubmit(el);
        }}
      >
        <input
          type="text"
          placeholder="Enter Your Name Here"
          value={text}
          onChange={(e) => {
            setText(e.target.value);
          }}
        />
        <button>Click Here</button>
      </form>
    </div>
  );
};

export default App;
