// src/components/Button.jsx
import React from "react";

const Buttons = ({ label, onClick, color = "indigo", className = "" }) => {
  const baseStyle = `px-3 py-1 rounded-md text-white font-medium transition duration-200`;

  const colorStyle =
    color === "blue"
      ? "bg-blue-600 hover:bg-blue-700"
      : color === "red"
      ? "bg-red-600 hover:bg-red-700"
      : color === "green"
      ? "bg-green-600 hover:bg-green-700"
      : "bg-indigo-600 hover:bg-indigo-700";

  return (
    <button onClick={onClick} className={`${baseStyle} ${colorStyle} ${className}`}>
      {label}
    </button>
  );
};

export default Buttons;
