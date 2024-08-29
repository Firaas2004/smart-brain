import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <div>
      <nav className="flex justify-end p-3 underline cursor-pointer">
        <Link to="/">Sign Out</Link>
      </nav>
    </div>
  );
};

export default Nav;
