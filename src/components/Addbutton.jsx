// src/components/AddButton.jsx
import React from "react";
import { Plus } from "lucide-react"; // nice + icon (optional, install via `npm i lucide-react`)
import { useNavigate } from "react-router-dom";
const Addbutton = ({ label = "Add", onClick }) => {
  const navigate=useNavigate();
  return (
    <button
      onClick={()=>{
      navigate("/Signup")
      }}
      className="flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg shadow-md transition duration-200"
    >
      <Plus size={18} />
      <span className="font-medium">{label}</span>
    </button>
  );
};

export default Addbutton;
