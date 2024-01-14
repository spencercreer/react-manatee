import React from "react";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();
  return (
    <nav className="bg-white shadow-lg w-full z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          <div className="text-xl font-bold">Intention</div>
          <div
            className="flex space-x-4"
            onClick={() => navigate("/dashboard")}
          >
            Dashboard
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
