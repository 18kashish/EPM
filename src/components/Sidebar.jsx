//   import {useNavigate} from "react-router-dom";
//   import { useState } from "react";
//   import { useSelector } from "react-redux";

//   export default function Sidebar(){
//       const navigate=useNavigate();
//       const [active, setActive] = useState("");
//         const userImage = useSelector((state) => state.user.image);
//       return(
//           <div className="min-h-screen w-[20%] bg-gradient-to-b from-[#eef3ff] to-[#deeafc] rounded-3xl shadow-xl mx-2 border border-gray-200 flex flex-col transition-all duration-300">

//        <div><div onClick={()=>{
//               navigate("/profile");
//               setActive("profile");
//           }}    
//               className=" flex items-center p-4 cursor-pointer"
//             >

// <img
//             src={
//               userImage ||
//               "https://cdn.pixabay.com/photo/2023/02/18/11/00/icon-7797704_640.png"
//             }
//             alt="Profile"
//             className="w-[80px] h-[80px] rounded-full object-cover border-4 border-white shadow-md"
//           />


//           {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640" className=" w-[50px] bg-[#f4f3f7] rounded-xl transform translate-x-10 " fill="#6abaeb"><path d="M320 312C386.3 312 440 258.3 440 192C440 125.7 386.3 72 320 72C253.7 72 200 125.7 200 192C200 258.3 253.7 312 320 312zM290.3 368C191.8 368 112 447.8 112 546.3C112 562.7 125.3 576 141.7 576L498.3 576C514.7 576 528 562.7 528 546.3C528 447.8 448.2 368 349.7 368L290.3 368z"/></svg> */}
            
//           <p   className={`font-bold text-md px-6 ${
//                 active === "profile" ? "text-black" : "text-gray-800"
//               }`}>Welcome, Super Admin</p>
//           </div><hr className=" border border-black-100 w-full"/></div>
          
          


//           <div className=" flex flex-col justify-between h-full">
//            <div>

          




//       <div
//             onClick={() => {
//               navigate("/DashboardA");
//               setActive("/DashboardA");
//             }}
//           className={`p-2 items-center flex rounded-lg cursor-pointer overflow-hidden
//       ${active === "dashboard" ? "bg-[#3464e3]" : "hover:bg-[#deeafc]"}
//       ${active === "dashboard" ? "w-auto h-[70px]" : "w-auto"}`}
//     style={{ marginLeft: "10px" }}
//           >
//           <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"  className="w-[40px]" fill={active === "users" ? "white" : "black"}><path d="M152 160C174.1 160 192 177.9 192 200L192 248C192 270.1 174.1 288 152 288L104 288C81.9 288 64 270.1 64 248L64 200C64 177.9 81.9 160 104 160L152 160zM344 288L296 288C273.9 288 256 270.1 256 248L256 200C256 177.9 273.9 160 296 160L344 160C366.1 160 384 177.9 384 200L384 248C384 270.1 366.1 288 344 288zM536 288L488 288C465.9 288 448 270.1 448 248L448 200C448 177.9 465.9 160 488 160L536 160C558.1 160 576 177.9 576 200L576 248C576 270.1 558.1 288 536 288zM536 480L488 480C465.9 480 448 462.1 448 440L448 392C448 369.9 465.9 352 488 352L536 352C558.1 352 576 369.9 576 392L576 440C576 462.1 558.1 480 536 480zM344 352C366.1 352 384 369.9 384 392L384 440C384 462.1 366.1 480 344 480L296 480C273.9 480 256 462.1 256 440L256 392C256 369.9 273.9 352 296 352L344 352zM152 480L104 480C81.9 480 64 462.1 64 440L64 392C64 369.9 81.9 352 104 352L152 352C174.1 352 192 369.9 192 392L192 440C192 462.1 174.1 480 152 480z"/></svg>
//           <p
//               className={`font-bold text-xl mx-2  ${
//                 active === "admin" ? "text-white" : "text-gray-800"
//               }`}
//             >
//               Dashboard
//             </p>
//   </div>


//             {/* <div
          
//     onClick={() => {
//       navigate("/AdminDashboard");
//       setActive("AdminDashboard");
//     }}
//     className={` p-2 items-center flex rounded-lg cursor-pointer overflow-hidden
//       ${active === "admin" ? "bg-[#3464e3]" : "hover:bg-[#deeafc]"}
//       ${active === "admin" ? "w-auto h-[70px]" : "w-auto"}`}
//     style={{ marginLeft: "10px" }} 
//   >

//             <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640" className="w-[40px]" fill={active === "admin" ? "white" : "black"}>
//               <path d="M320 312C253.7 312 200 258.3 200 192C200 125.7 253.7 72 320 72C386.3 72 440 125.7 440 192C440 258.3 386.3 312 320 312zM289.5 368L350.5 368C360.2 368 368 375.8 368 385.5C368 389.7 366.5 393.7 363.8 396.9L336.4 428.9L367.4 544L368 544L402.6 405.5C404.8 396.8 413.7 391.5 422.1 394.7C484 418.3 528 478.3 528 548.5C528 563.6 515.7 575.9 500.6 575.9L139.4 576C124.3 576 112 563.7 112 548.6C112 478.4 156 418.4 217.9 394.8C226.3 391.6 235.2 396.9 237.4 405.6L272 544.1L272.6 544.1L303.6 429L276.2 397C273.5 393.8 272 389.8 272 385.6C272 375.9 279.8 368.1 289.5 368.1z" />
//             </svg>
//             <p
//               className={`font-bold text-xl mx-2  ${
//                 active === "admin" ? "text-white" : "text-gray-800"
//               }`}
//             >
//               Admin
//             </p>
//           </div> */}



//    <div
//             onClick={() => {
//               navigate("/ViewerDashboard");
//               setActive("ViewerDashboard");
//             }}
//           className={`p-2 items-center flex rounded-lg cursor-pointer overflow-hidden
//       ${active === "users" ? "bg-[#3464e3]" : "hover:bg-[#deeafc]"}
//       ${active === "users" ? "w-auto h-[70px]" : "w-auto"}`}
//     style={{ marginLeft: "10px" }}
//           >
//             <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640" className="w-[40px]" fill={active === "users" ? "white" : "black"}>
//               <path d="M320 80C377.4 80 424 126.6 424 184C424 241.4 377.4 288 320 288C262.6 288 216 241.4 216 184C216 126.6 262.6 80 320 80zM96 152C135.8 152 168 184.2 168 224C168 263.8 135.8 296 96 296C56.2 296 24 263.8 24 224C24 184.2 56.2 152 96 152zM0 480C0 409.3 57.3 352 128 352C140.8 352 153.2 353.9 164.9 357.4C132 394.2 112 442.8 112 496L112 512C112 523.4 114.4 534.2 118.7 544L32 544C14.3 544 0 529.7 0 512L0 480zM521.3 544C525.6 534.2 528 523.4 528 512L528 496C528 442.8 508 394.2 475.1 357.4C486.8 353.9 499.2 352 512 352C582.7 352 640 409.3 640 480L640 512C640 529.7 625.7 544 608 544L521.3 544zM472 224C472 184.2 504.2 152 544 152C583.8 152 616 184.2 616 224C616 263.8 583.8 296 544 296C504.2 296 472 263.8 472 224zM160 496C160 407.6 231.6 336 320 336C408.4 336 480 407.6 480 496L480 512C480 529.7 465.7 544 448 544L192 544C174.3 544 160 529.7 160 512L160 496z" />
//             </svg>
//             <p
//               className={`font-bold text-xl mx-2  ${
//                 active === "users" ? "text-white" : "text-gray-800"
//               }`}
//             >
//              Viewer Dashboard 
//             </p>
//           </div>
          

          
  
  
  
//   <div
//             onClick={() => {
//               navigate("/Dashboard");
//               setActive("Dashboard");
//             }}
//           className={`p-2 items-center flex rounded-lg cursor-pointer overflow-hidden
//       ${active === "dashboard" ? "bg-[#3464e3]" : "hover:bg-[#deeafc]"}
//       ${active === "dashboard" ? "w-auto h-[70px]" : "w-auto"}`}
//     style={{ marginLeft: "10px" }}
//           >
//           <svg
//           xmlns="http://www.w3.org/2000/svg"
//           viewBox="0 0 640 640"
//           className="w-[40px]"
//           fill="black"
//         >
//           <path d="M448 64H192C174.3 64 160 78.3 160 96V544C160 561.7 174.3 576 192 576H448C465.7 576 480 561.7 480 544V96C480 78.3 465.7 64 448 64zM320 512C298.3 512 280 493.7 280 472C280 450.3 298.3 432 320 432C341.7 432 360 450.3 360 472C360 493.7 341.7 512 320 512zM400 384H240V128H400V384z" />
//         </svg>
//           <p
//               className={`font-bold text-xl mx-2  ${
//                 active === "admin" ? "text-white" : "text-gray-800"
//               }`}
//             >
//                Invoice
//             </p>
//   </div>



//  <div
//             onClick={() => {
//               navigate("/Invoices");
//               setActive("Invoices");
//             }}
//           className={`p-2 items-center flex rounded-lg cursor-pointer overflow-hidden
//       ${active === "users" ? "bg-[#3464e3]" : "hover:bg-[#deeafc]"}
//       ${active === "users" ? "w-auto h-[70px]" : "w-auto"}`}
//     style={{ marginLeft: "10px" }}
//           >
//             <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640" className="w-[40px]"><path d="M192 64C156.7 64 128 92.7 128 128L128 512C128 547.3 156.7 576 192 576L448 576C483.3 576 512 547.3 512 512L512 234.5C512 217.5 505.3 201.2 493.3 189.2L386.7 82.7C374.7 70.7 358.5 64 341.5 64L192 64zM453.5 240L360 240C346.7 240 336 229.3 336 216L336 122.5L453.5 240zM192 448L192 384C192 366.3 206.3 352 224 352L416 352C433.7 352 448 366.3 448 384L448 448C448 465.7 433.7 480 416 480L224 480C206.3 480 192 465.7 192 448zM216 128L264 128C277.3 128 288 138.7 288 152C288 165.3 277.3 176 264 176L216 176C202.7 176 192 165.3 192 152C192 138.7 202.7 128 216 128zM216 224L264 224C277.3 224 288 234.7 288 248C288 261.3 277.3 272 264 272L216 272C202.7 272 192 261.3 192 248C192 234.7 202.7 224 216 224z"/></svg>
//             <p
//               className={`font-bold text-xl mx-2  ${
//                 active === "users" ? "text-white" : "text-gray-800"
//               }`}
//             >
//              Generate Invoice
//             </p>
//           </div>
  
  
  
//         <div
//             onClick={() => {
//               navigate("/Signup");
//               setActive("/Signup");
//             }}
//           className={`p-2 items-center flex rounded-lg cursor-pointer overflow-hidden
//       ${active === "dashboard" ? "bg-[#3464e3]" : "hover:bg-[#deeafc]"}
//       ${active === "dashboard" ? "w-auto h-[70px]" : "w-auto"}`}
//     style={{ marginLeft: "10px" }}
//           >
//           <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"  className="w-[40px]" fill={active === "users" ? "white" : "black"}><path d="M152 160C174.1 160 192 177.9 192 200L192 248C192 270.1 174.1 288 152 288L104 288C81.9 288 64 270.1 64 248L64 200C64 177.9 81.9 160 104 160L152 160zM344 288L296 288C273.9 288 256 270.1 256 248L256 200C256 177.9 273.9 160 296 160L344 160C366.1 160 384 177.9 384 200L384 248C384 270.1 366.1 288 344 288zM536 288L488 288C465.9 288 448 270.1 448 248L448 200C448 177.9 465.9 160 488 160L536 160C558.1 160 576 177.9 576 200L576 248C576 270.1 558.1 288 536 288zM536 480L488 480C465.9 480 448 462.1 448 440L448 392C448 369.9 465.9 352 488 352L536 352C558.1 352 576 369.9 576 392L576 440C576 462.1 558.1 480 536 480zM344 352C366.1 352 384 369.9 384 392L384 440C384 462.1 366.1 480 344 480L296 480C273.9 480 256 462.1 256 440L256 392C256 369.9 273.9 352 296 352L344 352zM152 480L104 480C81.9 480 64 462.1 64 440L64 392C64 369.9 81.9 352 104 352L152 352C174.1 352 192 369.9 192 392L192 440C192 462.1 174.1 480 152 480z"/></svg>
//           <p
//               className={`font-bold text-xl mx-2  ${
//                 active === "admin" ? "text-white" : "text-gray-800"
//               }`}
//             >
//               Sign Up
//             </p>
//   </div>
  
  
  
  
//   </div>
//            <div> 
//            <hr className="border border-black-100 w-full "/>
//    <div className="hover:bg-[#deeafc] rounded-2xl cursor-pointer overflow-hidden"> 
   
//           <button className="p-2 flex cursor-pointer overflow-hidden " style={{ marginLeft: "10px" }}   onClick={()=>{
//             localStorage.removeItem("token");
//             navigate("/login")
//           }}>
//               <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640" className="w-[40px]"><path d="M224 160C241.7 160 256 145.7 256 128C256 110.3 241.7 96 224 96L160 96C107 96 64 139 64 192L64 448C64 501 107 544 160 544L224 544C241.7 544 256 529.7 256 512C256 494.3 241.7 480 224 480L160 480C142.3 480 128 465.7 128 448L128 192C128 174.3 142.3 160 160 160L224 160zM566.6 342.6C579.1 330.1 579.1 309.8 566.6 297.3L438.6 169.3C426.1 156.8 405.8 156.8 393.3 169.3C380.8 181.8 380.8 202.1 393.3 214.6L466.7 288L256 288C238.3 288 224 302.3 224 320C224 337.7 238.3 352 256 352L466.7 352L393.3 425.4C380.8 437.9 380.8 458.2 393.3 470.7C405.8 483.2 426.1 483.2 438.6 470.7L566.6 342.7z"/></svg>
//               <p className="text-gray-800 font-bold text-xl mx-2 my-3">Log Out</p>
//           </button>
//           </div>
// </div>
                  



//           </div>

//           </div>

  
        
          
//       )
//   }




















// src/components/Sidebar.jsx

import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import {
  Grid,
  Users,
  FileText,
  FilePlus,
 
  LogOut,
} from "lucide-react";

export default function Sidebar() {
  const navigate = useNavigate();
  const userImage = useSelector((state) => state.user.image);
  const userName = useSelector((state) => state.user.name);
  const userRole =
    useSelector((state) => state.user.role) ||
    localStorage.getItem("role")?.toLowerCase() ||
    "viewer";

  const [active, setActive] = useState("");
  const [open, setOpen] = useState(true);

  // Restore last active menu from localStorage
  useEffect(() => {
    const storedActive = localStorage.getItem("active");
    if (storedActive) setActive(storedActive);
  }, []);

  const handleNavigate = (path, key) => {
    navigate(path);
    setActive(key);
    localStorage.setItem("active", key);
  };

  // 🔹 Define navigation dynamically based on role
  const navItems = [
    {
      key: "dashboard",
      label: "Dashboard",
      icon: Grid,
      path: "/DashboardA",
      roles: ["superadmin", "admin", "viewer"],
    },
    {
      key: "invoice",
      label: "Invoice",
      icon: FileText,
      path: "/Dashboard",
      roles: ["admin", "viewer", "superadmin"],
    },
    {
      key: "generate",
      label: "Generate Invoice",
      icon: FilePlus,
      path: "/Invoices",
      roles: ["admin", "superadmin"],
    },

    // 🟣 SuperAdmin gets access to both dashboards
    {
      key: "admin-dashboard",
      label: "Admin Dashboard",
      icon: Users,
      path: "/AdminDashboard",
      roles: ["superadmin"],
    },
    {
      key: "viewer-dashboard",
      label: "Viewer Dashboard",
      icon: Users,
      path: "/ViewerDashboard",
      roles: ["superadmin", "admin"],
    },
  ];

  // Filter visible items by current user role
  const visibleItems = navItems.filter((item) =>
    item.roles.includes(userRole.toLowerCase())
  );

  return (
    <div
      className={`${
        open ? "translate-x-0" : "-translate-x-full"
      } md:translate-x-0 transition-transform duration-300 min-h-screen w-[20%] bg-white/60 backdrop-blur-lg border border-white/30 shadow-xl rounded-3xl mx-2 flex flex-col`}
    >
      {/* Mobile toggle */}
      <button
        className="absolute top-4 right-4 md:hidden text-gray-700"
        onClick={() => setOpen(!open)}
      >
        ☰
      </button>

      {/* Profile Section */}
      <div
        className="flex flex-col items-center py-8 border-b border-gray-200 cursor-pointer group"
        onClick={() => navigate("/profile")}
      >
        <img
          src={
            userImage ||
            "https://cdn.pixabay.com/photo/2023/02/18/11/00/icon-7797704_640.png"
          }
          alt="Profile"
          className="w-[80px] h-[80px] rounded-full object-cover border-4 border-white shadow-md hover:brightness-110 hover:drop-shadow-lg transition-all duration-300"
        />
        <p className="font-bold text-md text-gray-800 mt-2">
          {userName || `Welcome`}
        </p>
        <span className="text-gray-500 text-sm capitalize">
          {userRole}
        </span>
      </div>

      {/* Navigation Items */}
      <div className="flex-1 flex flex-col mt-5 px-3">
        {visibleItems.map((item) => (
          <div
            key={item.key}
            onClick={() => handleNavigate(item.path, item.key)}
            className={`flex items-center gap-3 p-3 my-1 rounded-lg cursor-pointer transition-all duration-200 ${
              active === item.key
                ? "bg-[#3464e3] text-white scale-[1.02] shadow-md shadow-blue-200"
                : "hover:bg-[#deeafc] hover:brightness-105 text-gray-700"
            }`}
          >
            <item.icon
              size={24}
              color={active === item.key ? "white" : "black"}
            />
            <span className="font-semibold text-lg">{item.label}</span>
          </div>
        ))}
      </div>

      {/* Logout */}
      <div className="border-t border-gray-200 p-4">
        <button
          onClick={() => {
            localStorage.removeItem("token");
            navigate("/login");
          }}
          className="flex items-center gap-3 p-3 w-full text-red-600 hover:bg-red-50 hover:brightness-105 hover:drop-shadow-md rounded-xl transition-all duration-200"
        >
          <LogOut size={24} />
          <span className="font-bold text-lg">Log Out</span>
        </button>
      </div>
    </div>
  );
}
