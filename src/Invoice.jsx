import React from "react";

const InvoiceButton = ({ onClick }) => {
  
  return (
    <div>
      <button
        type="button"
        onClick={onClick}
        className="font-product  text-xl text-white bg-[#4ca054]  h-14 w-[200px] rounded-lg flex  items-center justify-center gap-2 duration-300 hover:bg-green-700"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 640 640"
          className="w-[20px]"
          fill="white"
        >
          <path d="M448 64H192C174.3 64 160 78.3 160 96V544C160 561.7 174.3 576 192 576H448C465.7 576 480 561.7 480 544V96C480 78.3 465.7 64 448 64zM320 512C298.3 512 280 493.7 280 472C280 450.3 298.3 432 320 432C341.7 432 360 450.3 360 472C360 493.7 341.7 512 320 512zM400 384H240V128H400V384z" />
        </svg>
        Generate Invoice
      </button>
    </div>
  );
};

export default InvoiceButton;
