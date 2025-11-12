// import {BrowserRouter,Routes,Route} from "react-router-dom";
// import { useEffect,useState } from "react";

// import Login from "./components/Login";
// import Profile from "./components/Profile";
// import Sidebar from "./components/Sidebar";
// import Dashboard from "./components/Dashboard";
// import Signup from "./components/Signup";


// import { Navigate } from "react-router-dom";
// import Redirect from "./components/Redirect";

// export default function App(){
//   const[valid,setValid]=useState('');
    

// useEffect(() => {
// const token=localStorage.getItem("token");
// setValid(token);
// console.log("tokeennn",token);
// console.log("1");
// if(!valid){
//   console.log("2");
//  <Navigate to={`/login`} />
// }

// }, [])

//   return(
//     <div className="">
      
//     <BrowserRouter>
//     <Routes>
      
// <Route path="/" element={<Redirect/>}></Route>
// <Route path="/Login" element={<Redirect/>}></Route>
// {valid && ( 
//   <>
      
//       <Route path="/Profile" element={<Profile/>}></Route>
//       <Route path="/Sidebar" element={<Sidebar/>}></Route>
//       <Route path="/Dashboard" element={<Dashboard/>}></Route>
//       <Route path="/Signup" element={<Signup/>}></Route>
      
//       </>
//      )} 

//     </Routes>
//     </BrowserRouter>
 
//     </div>
//   )
// }






import { BrowserRouter } from "react-router-dom";
import Routed from "./routes/Routed";
import { Provider } from 'react-redux';
import store from "./components/store";
import Profile from "./components/Profile";
import Sidebar from "./components/Sidebar";
import React from 'react'

const App = () => {
  return (
    <BrowserRouter >
    
      <Routed/> 
    </BrowserRouter>
  )
}

export default App