import React from "react";
import { Link, Outlet } from "react-router-dom";

const Contact = () => {
  return (
    <div className="flex items-center gap-30 justify-center">
      <Link
        className="p-4 bg-cyan-600 mt-5 rounded active:scale-90"
        to="/product/men"
      >
        Men's Wear
      </Link>
      <Link
        className="p-4 bg-cyan-600 mt-5 rounded active:scale-90"
        to="/product/woman"
      >
        Women's Wear
      </Link>
      <Link
        className="p-4 bg-cyan-600 mt-5 rounded active:scale-90"
        to="/product/kids"
      >
        Kid's Wear
      </Link>

      <Outlet />
    </div>
  );
};

export default Contact;
