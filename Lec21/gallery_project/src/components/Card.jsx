import React from "react";

const Card = (props) => {
  return (
    <div>
      <a href={props.elem.url}>
        <div className="h-40 w-44 rounded-xl overflow-hidden">
          <img
            className="h-full object-cover w-50"
            src={props.elem.download_url}
            target="_blank"
            alt=""
          />
        </div>
        <h2 className="mt-4 font-bold text-lg">{props.elem.author}</h2>
      </a>
    </div>
  );
};

export default Card;
