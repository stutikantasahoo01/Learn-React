import React from "react";

const Card = ({name,age}) => { //{name,age} this is destructuring 
  return (
    <div className="card">
      {/* <img src={props.img} alt="Hii" /> */}
       <img src='./src/img2.jpg' alt="Hii" />
      <h1>{name}</h1>
      <h2>Age:{age}</h2>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis,
        recusandae!
      </p>
      <button>View Profile</button>
    </div>
  );
};

export default Card;
