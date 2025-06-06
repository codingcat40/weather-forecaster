import React from "react";
import { Link } from "react-router";

const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full h-12 bg-amber-50 flex items-center justify-end px-4 z-50">
      <Link to="/about-api" className="text-sm text-black hover:underline">
        About API Route
      </Link>
    </nav>
  );
};

export default Navbar;
