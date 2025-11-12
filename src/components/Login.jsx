// import React, { useState } from "react";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";

// const Login = () => {
//   const [email, setName] = useState("");
//   const [password, setPassword] = useState("");
//   const navigate = useNavigate();
//   const handleLogin = async (email, password) => {
//     console.log("loginBlock");
//     try {
//       console.log("try block");
//       const res = await axios.post("https://invoice-module-dx9o.onrender.com/users/signin", {
//         email: email,
//         password: password,
//       });
//       console.log("testing",res.data.userProfile);
//       const userData = res.data?.data?.user;
//       const roleName = userData?.role?.name;
      
//       const normalizedRole = roleName?.trim().toLowerCase().replace(/\s+/g, ""); 
//         console.log("Role from backend:", roleName);
//         console.log("Normalized role:", normalizedRole);



//       const token = res.data?.data?.token;
//       localStorage.setItem("token", token);
//       localStorage.setItem("role", normalizedRole);





//      navigate("/Dashboard")
//       // if (normalizedRole === "superadmin") navigate("/Dashboard");
//       // else if (normalizedRole === "admin") navigate("/AdminDashboard ");
//       // else if (normalizedRole === "viewer") navigate("/ViewerDashboard");
//       // else navigate("/not-authorized");
//       // console.log( res.data.data.user.role.name)
//       alert("login successful");
//     }
//     catch (e) {
//       alert(`Check email and password again`);
//       navigate("/Login");
//     }
//   };
//   return (
//     <div id="root">
//       <form>
//         <div className="flex flex-col md:flex-row h-screen text-white">
//           <div className="w-1/3 h-full hidden lg:flex flex-col justify-center items-center bg-gradient-to-b from-black via-purple-600 to-red-800 py-5">
//             <h1 className="text-6xl font-bold mb-2  ">Welcome</h1>
//             <p className="text-xl text-white text-center px-4">
//               " Your account is ready. Please enter" <br /> "your credentials to
//               log in."
//             </p>
            
//           </div>
//           <div className="lg:w-2/3 w-full flex items-center justify-center p-4">
//             <div className=" bg-white text-black p-8 rounded-lg w-full max-w-2xl shadow-lg">
//               <form className="space-y-6">
//                 <h2 className="text-3xl font-bold text-center text-indigo-600">
//                   Login
//                 </h2>
//                 <div className="space-y-2">
//                   <input
//                     type="email"
//                     name="email"
//                     onChange={(e) => setName(e.target.value)}
//                     className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-[#0C3891]"
//                     placeholder="Email"
//                     required
//                   />
//                   <input
//                     type="Password"
//                     name="password"
//                     onChange={(e) => setPassword(e.target.value)}
//                     className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-[#0C3891]"
//                     placeholder="Password"
//                     required
//                   />
//                 </div>
//                 <div className="text-right text-sm">
//                   <a className="text-[#0C3891]" href="ForgotPassword">
//                     {" "}
//                     Forget Password
//                   </a>
//                 </div>
//                 <button
//                   type="submit"
//                   onClick={(e) => {
//                     e.preventDefault();
//                     handleLogin(email, password);
//                   }}
//                   className="w-full py-2 rounded-md text-white bg-indigo-600"
//                 >
//                   Login
//                 </button>
//                 <p className="text-center text-gray-600">
//                   " Don't have a account?"
//                   <a href="/Signup" className="text-[#0C3891] font-medium">
//                     {" "}
//                     Register Now{" "}
//                   </a>
//                 </p>
//               </form>
//             </div>
//           </div>
//         </div>
//       </form>
//     </div>
//   );
// };
// export default Login;

















import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
// import tas from "../Images/tassample-removebg-preview.png"
const Login = () => {
  const [email, setName] = useState("");
  const [password, setPassword] = useState("");
   const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const handleLogin = async (email, password) => {
    setLoading(true);
    try {
      const res = await axios.post("https://invoice-module-dx9o.onrender.com/users/signin", {
        email: email,
        password: password,
      });
      
    
      const role = res.data?.result.role;
      // const normalizedRole = role?.trim().toLowerCase().replace(/\s+/g, "");    // ye "Super Admin" ko chnage krega → "superadmin" me
        console.log("Role from backend:", role);
      //  console.log("Normalized role:", normalizedRole);


      //  console.log("testing 1 ",res.data.result._id)
      // const userId = res.data.result._id
      // localStorage.setItem("userId",userId)


      // console.log("tessting",res.data.token)



      localStorage.setItem("role", role);
      // localStorage.setItem("token", res.data.token);



console.log("role", res.data.result.role);
console.log("testing 1 ", res.data.token);
console.log("testing 1 ", res.data.result._id);


localStorage.setItem("token", res.data.token);
// localStorage.setItem("token", res.data.result.role);
localStorage.setItem("userId", res.data.result._id);
localStorage.setItem("loginResponse", JSON.stringify(res.data));

console.log("Saved to localStorage:", {
  userId: res.data.result._id,
  token: res.data.token,
});





            navigate("/DashboardA")
     // Role ke basis pe redirect krega
      // if (normalizedRole === "superadmin") navigate("/SuperAdminDashboard");
      // else if (normalizedRole === "admin") navigate("/AdminDashboard ");
      // else if (normalizedRole === "viewer") navigate("/ViewerDashboard");
      // else navigate("/not-authorized");
     
    }
    catch (e) {
      alert(`Check email and password again`);
      navigate("/Login");
    }
    finally {
      setLoading(false);
    }
  };
  return (
    <div id="root">
      <form>
        <div className="flex flex-col md:flex-row h-screen text-white">
          <div className="w-1/3 h-full hidden lg:flex flex-col justify-center items-center bg-gradient-to-b from-indigo-600 via-purple-900 to-pink-800 py-5">
            <h1 className="text-6xl font-bold mb-2  ">Welcome</h1>
            <p className="text-xl text-white text-center px-4">
              " Your account is ready. Please enter" <br /> "your credentials to
              log in."
            </p>
            {/* <img className="w-60 rounded-full my-4" src={tas} alt="" /> */}
          </div>
          <div className="lg:w-2/3 w-full flex items-center justify-center p-4">
            <div className=" bg-white text-black p-8 rounded-lg w-full max-w-2xl shadow-lg">
              <form className="space-y-6">
                <h2 className="text-3xl font-bold text-center text-indigo-600">
                  Login
                </h2>
                <div className="space-y-2">
                  <input
                    type="email"
                    name="email"
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-[#0C3891]"
                    placeholder="Email"
                    required
                  />
                  <input
                    type="Password"
                    name="password"
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-[#0C3891]"
                    placeholder="Password"
                    required
                  />
                </div>
                <div className="text-right text-sm">
                  <a className="text-[#0C3891]" href="ForgotPassword">
                    {" "}
                    Forget Password
                  </a>
                </div>
                <button
                  type="submit"
                   disabled={loading}
                  onClick={(e) => {
                    e.preventDefault();
                    handleLogin(email, password);
                  }}
                  className={`w-full py-2 mt-4 font-semibold rounded-md text-white transition duration-200 ${
                loading
                  ? "bg-indigo-400 cursor-not-allowed"
                  : "bg-indigo-600 hover:bg-indigo-700"
              }`}
                >
                  {loading ? "Creating Account..." : "Sign in"}
                </button>
               
             <p className="text-center text-gray-600">
                 " Click here to Reset your Password"
                   <a href="/ResetPassword" className="text-[#0C3891] font-medium">
                     {" "}
                    Reset Password{" "}
                  </a>
                </p>
              
            
              
           





                
              </form>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};
export default Login;