import React from "react";
import logo from "../assets/logo.svg"; // Adjust the path as needed

function Logo({ width = "150px" }) {
  return (
    <div 
    className="flex items-center justify-center font-bold text-4xl tracking-tighter"
    style={{ color: 'rgb(41,63,122)' }}
  >
    <span className="mr-1">VRV</span>
    <span className="text-2xl font-normal">SECURITY</span>
  </div>
  );
}

export default Logo;