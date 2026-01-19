import React from "react";

const App = () => {
  const formSubmit = (el) => {
    console.log(el)
    el.preventDefault();
    console.log("Form Submitted");
  };
  return (
    <div>
      <form
        onClick={(el) => {
          formSubmit(el);
        }}
      >
        <input type="text" placeholder="Enter Your Name Here" />
        <button>Click Here</button>
      </form>
    </div>
  );
};

export default App;
