//  import React from "react";
// import { Routes, Route } from "react-router-dom";
// import Dashboard from "../components/Dashboard";
// import Button from "../components/Button";
// import Profile from "../components/Profile";
// import Redirect from "../components/Redirect";
// import Sidebar from "../components/Sidebar";
// import Login from "../components/Login";
// import Signup from "../components/Signup";
// import ForgotPassword from "../components/ForgotPassword";
// import AdminDashboard from "../components/AdminDashboard";
// import SuperAdminDashboard from "../components/SuperAdminDashboard";
// import ViewerDashboard from "../components/ViewerDashboard";
// import NotAuthorized from "../components/NotAuthorized";
// import ProtectedRoute from "../components/Routes/ProtectedRoutes";
// import Dasbord from "../components/Dasbord";
// import Mange from "../components/Mange";
// import EditEmployee from "../components/EditEmployee";
// import { Provider } from "react-redux";
// import store from "../components/store";
// const Routed = () => {
  
//   return (

    
//     <Provider store={store}>


 

     
         
//     <Routes>
    
//       <Route path="/" element={<Login />} />
//       <Route path="/Login" element={<Login />} />
//       <Route path="/Signup" element={<Signup />} />
//       <Route path="/ForgotPassword" element={<ForgotPassword />} />



//          <div className="flex">
// <Sidebar/>
 
//       <div className="flex-1 w-full">
//       <Route path="/AdminDashboard" element={<AdminDashboard />} />
//       <Route path="/SuperAdminDashboard" element={<SuperAdminDashboard />} />
//       <Route path="/Dashboard" element={<Dashboard />} />
//       <Route path="/Dasbord" element={<Dasbord />} />
      

      
//       <Route path="/Sidebar" element={<Sidebar />} />
//       <Route path="/Profile" element={<Profile />} />
//       <Route path="/Button" element={<Button />} />
//       <Route path="/ViewerDashboard" element={<ViewerDashboard />} />
//       <Route path="/Redirect" element={<Redirect />} />
//       <Route path="/Mange" element={<Mange />} />
//       <Route path="/edit/:id" element={<EditEmployee/>} />
      
//       <Route
//         path="/Dashboard"
//         element={
//           <ProtectedRoute allowedRoles={["superadmin"]}>
//           <Dashboard/>
//           <Profile/>
        
//           </ProtectedRoute>
//         }
//       />
//       <Route
//         path="/AdminDashboard"
//         element={
//           <ProtectedRoute allowedRoles={["superadmin", "admin"]}>
          
//           <Dashboard/>
//           <Profile/>
        
//             <AdminDashboard />
//           </ProtectedRoute>
//         }
//       />
//       <Route
//         path="/ViewerDashboard"
//         element={
//           <ProtectedRoute allowedRoles={["superadmin", "admin", "viewer"]}>

//           <Dashboard/>
//           <Profile/>
        
//             <ViewerDashboard />
//           </ProtectedRoute>
//         }
//       />
      
//       <Route path="/not-authorized" element={<NotAuthorized />} />
//       <Route
//         path="*"
//         element={
//           <h1 className="text-center mt-20 text-3xl">404 - Page Not Found</h1>
//         }
//       />
//       </div>
//         </div>

//     </Routes>
     
//      </Provider>
//   );
// };
// export default Routed;











import React from "react";
import { Routes, Route } from "react-router-dom";
import Dashboard from "../components/Dashboard";
import Button from "../components/Button";
import Profile from "../components/Profile";
import Redirect from "../components/Redirect";
import Sidebar from "../components/Sidebar";
import Login from "../components/Login";
import Signup from "../components/Signup";
import ForgotPassword from "../components/ForgotPassword";
import AdminDashboard from "../components/AdminDashboard";
import SuperAdminDashboard from "../components/SuperAdminDashboard";
import ViewerDashboard from "../components/ViewerDashboard";
import NotAuthorized from "../components/NotAuthorized";
import ProtectedRoute from "../components/Routes/ProtectedRoutes";
import DashboardA from "../components/DashboardA";
import Mange from "../components/Mange";
import EditEmployee from "../components/EditEmployee";
import { Provider } from "react-redux";
import store from "../components/store";
import Invoices from "../components/Invoices";
import ResetPassword from "../components/ResetPassword";


const Routed = () => {
  return (
    <Provider store={store}>
      <Routes>
        
        <Route path="/" element={<Login />} />
        <Route path="/Login" element={<Login />} />
      
        <Route path="/ForgotPassword" element={<ForgotPassword />} />
        <Route path="/ResetPassword" element={<ResetPassword />} />
        

       
        <Route
          path="/*"
          element={
            <div className="flex">
              <Sidebar />
              <div className="flex-1 w-full">
              
                <Routes>
                  <Route path="/Signup" element={<Signup />} />
                  <Route path="/Dashboard" element={<Dashboard />} />
                  <Route path="/DashboardA" element={<DashboardA />} />
                  <Route path="/AdminDashboard" element={<AdminDashboard />} />
                  <Route path="/SuperAdminDashboard" element={<SuperAdminDashboard />} />
                  <Route path="/Profile" element={<Profile />} />
                  <Route path="/Button" element={<Button />} />
                  <Route path="/ViewerDashboard" element={<ViewerDashboard />} />
                  <Route path="/Redirect" element={<Redirect />} />
                  <Route path="/Mange" element={<Mange />} />
                  <Route path="/edit/:id" element={<EditEmployee />} />
                  <Route path="/not-authorized" element={<NotAuthorized />} />
                  <Route path="/Dashboard" element={<Dashboard />} />
                  <Route path="/Invoices" element={<Invoices />} />
                  <Route path="/Signup" element={<Signup />} />

                  {/* Protected Routes */}
                  <Route
                    path="/Dashboard"
                    element={
                      <ProtectedRoute allowedRoles={["superadmin"]}>
                        <Dashboard />
                        <Profile />
                      </ProtectedRoute>
                    }
                  />
                  <Route
                    path="/AdminDashboard"
                    element={
                      <ProtectedRoute allowedRoles={["superadmin", "admin"]}>
                        <Dashboard />
                        <Profile />
                        <AdminDashboard />
                      </ProtectedRoute>
                    }
                  />
                  <Route
                    path="/ViewerDashboard"
                    element={
                      <ProtectedRoute allowedRoles={["superadmin", "admin", "viewer"]}>
                        <Dashboard />
                        <Profile />
                        <ViewerDashboard />
                      </ProtectedRoute>
                    }
                  />

                  
                  <Route
                    path="*"
                    element={
                      <h1 className="text-center mt-20 text-3xl">
                        404 - Page Not Found
                      </h1>
                    }
                  />
                </Routes>
              </div>
            </div>
          }
        />
      </Routes>
    </Provider>
  );
};

export default Routed;
