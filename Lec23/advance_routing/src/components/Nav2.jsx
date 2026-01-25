import React from "react";
import { useNavigate } from "react-router-dom";

const Nav2 = () => {
    const navigate = useNavigate();
  return (
    <div className="flex p-2 justify-center bg-cyan-50">
      <button
        onClick={() => {
          navigate("/");
        }}
        className="p-5 bg-cyan-400 text-white font-bold text-2xl rounded m-5"
      >
        Back To Home
      </button>
      <button
        onClick={() => {
          navigate(+1);
        }}
        className="p-5 bg-cyan-400 text-white font-bold text-2xl rounded m-5"
      >
        Next
      </button>
      <button
        onClick={() => {
          navigate(-1);
        }}
        className="p-5 bg-cyan-400 text-white font-bold text-2xl rounded m-5"
      >
        Back
      </button>
    </div>
  );
};

export default Nav2;
