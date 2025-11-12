import React from "react";

const Button = ({ isEditable, setIsEditable }) => {
  return (
    <div className="relative">
      <button
        type="button"
        onClick={() => setIsEditable(!isEditable)}
        className={`my-20 mx-[240px] font-product text-xl text-white absolute bg-blue-600 h-[40px] rounded-lg flex items-center justify-center gap-2 duration-300 ${
          isEditable ? "w-auto p-3" : "w-auto p-3"
        }`}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 640 640"
          className="w-[20px]"
          fill="white"
        >
          <path d="M416.9 85.2L372 130.1L509.9 268L554.8 223.1C568.4 209.6 576 191.2 576 172C576 152.8 568.4 134.4 554.8 120.9L519.1 85.2C505.6 71.6 487.2 64 468 64C448.8 64 430.4 71.6 416.9 85.2zM338.1 164L122.9 379.1C112.2 389.8 104.4 403.2 100.3 417.8L64.9 545.6C62.6 553.9 64.9 562.9 71.1 569C77.3 575.1 86.2 577.5 94.5 575.2L222.3 539.7C236.9 535.6 250.2 527.9 261 517.1L476 301.9L338.1 164z" />
        </svg>

        {isEditable ? "Cancel" : "Edit"}
      </button>


      
    </div>
  );
};

export default Button;
