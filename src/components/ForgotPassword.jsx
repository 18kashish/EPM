// import React, { useState } from "react";
// const ForgotPassword = () => {
//   const [email, setEmail] = useState("");
//   const [otp, setOtp] = useState("");
//   const [error, setError] = useState("");
//   const [isOtpSent, setIsOtpSent] = useState(false);
//   const handleSendOtp = (e) => {
//     e.preventDefault();
//     if (!email) {
//       setError("Email is required.");
//       return;
//     }
//     setError("");
//     alert(`OTP sent to ${email}`);
//     setIsOtpSent(true);
//   };
//   const handleVerifyOtp = (e) => {
//     e.preventDefault();
//     if (!otp) {
//       setError("Please enter the OTP.");
//       return;
//     }
//     setError("");
//     alert("OTP verified! You can now reset your password.");

//   };
//   return (
//     <div className="flex flex-col lg:flex-row min-h-screen">

//       <div className="hidden lg:flex w-1/3 bg-gradient-to-b from-indigo-600 via-purple-900 to-pink-800 text-white flex-col justify-center items-center px-10">
//         <h1 className="text-6xl font-bold mb-4">Forgot</h1>
//         <p className="text-lg text-center leading-relaxed max-w-sm">
//           You can reset your password
//         </p>
//       </div>
      
//       <div className="flex flex-1 items-center justify-center bg-gray-50 px-4 py-8 lg:py-0">
//         <div className="w-full max-w-md bg-white rounded-xl shadow-lg p-8">
//           <h2 className="text-3xl font-bold text-center text-indigo-600 mb-2">
//             Forgot Password
//           </h2>
//           <p className="text-center text-gray-500 mb-6">
//             {isOtpSent
//               ? "Enter the OTP sent to your email."
//               : "Enter your email to reset your password."}
//           </p>
//           {!isOtpSent ? (
            
//             <form onSubmit={handleSendOtp} className="space-y-4">
//               <div>
//                 <label className="block text-sm font-medium text-gray-700">
//                   Enter your email
//                 </label>
//                 <input
//                   type="email"
//                   value={email}
//                   onChange={(e) => setEmail(e.target.value)}
//                   placeholder="Email"
//                   className="w-full mt-1 px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
//                 />
//                 {error && (
//                   <p className="text-red-500 text-sm mt-1">{error}</p>
//                 )}
//               </div>
//               <button
//                 type="submit"
//                 className="w-full py-2 mt-2 bg-indigo-600 text-white font-semibold rounded-md hover:bg-indigo-700 transition duration-200"
//               >
//                 Send OTP
//               </button>
//             </form>
//           ) : (
            
//             <form onSubmit={handleVerifyOtp} className="space-y-4">
//               <div>
//                 <label className="block text-sm font-medium text-gray-700">
//                   Enter OTP
//                 </label>
//                 <input
//                   type="text"
//                   value={otp}
//                   onChange={(e) => setOtp(e.target.value)}
//                   placeholder="Enter the OTP"
//                   className="w-full mt-1 px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
//                 />
//                 {error && (
//                   <p className="text-red-500 text-sm mt-1">{error}</p>
//                 )}
//               </div>
//               <button
//                 type="submit"
//                 className="w-full py-2 mt-2 bg-green-600 text-white font-semibold rounded-md hover:bg-green-700 transition duration-200"
//               >
//                 Verify OTP
//               </button>
//             </form>
//           )}
//           <p className="text-center text-sm text-gray-600 mt-4">
//             Don't have an account?{" "}
//             <a
//               href="/Signup"
//               className="text-indigo-600 font-medium hover:underline"
//             >
//               Register Now
//             </a>
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };
// export default ForgotPassword;





















import React, { useState } from "react";
import axios from "axios";
const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [isOtpSent, setIsOtpSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const handleSendOtp = async (e) => {
    e.preventDefault();
    if (!email) {
      setError("Email is required.");
      return;
    }
    setError("");
    setSuccess("");
    setLoading(true);
    try {
      const response = await axios.post(
        "https://invoice-module-dx9o.onrender.com/users/forgotpassword",
        { email },
        {
          headers: {
            Authorization: undefined,
            "Content-Type": "application/json",
          },
        }
      );
      if (response.status === 200 || response.status === 201) {
        setIsOtpSent(true);
        setSuccess("OTP sent successfully! Please check your email.");
      } else {
        setError("Failed to send OTP. Please try again.");
      }
    } catch (err) {
      console.error(err);
      setError(
        err.response?.data?.message ||
          "Something went wrong while sending OTP."
      );
    } finally {
      setLoading(false);
    }
  };
  const handleVerifyOtp = async (e) => {
    e.preventDefault();
    if (!otp) {
      setError("Please enter the OTP.");
      return;
    }
    setError("");
    setSuccess("");
    setLoading(true);
    try {
      const response = await axios.post(
        "https://invoice-module-dx9o.onrender.com/users/verifyotp",
        { email, otp },
        {
          headers: {
            Authorization: undefined,
            "Content-Type": "application/json",
          },
        }
      );
      if (response.status === 200) {
        setSuccess("OTP verified! You can now reset your password.");
      } else {
        setError("Invalid OTP. Please try again.");
      }
    } catch (err) {
      console.error(err);
      setError(
        err.response?.data?.message ||
          "Something went wrong while verifying OTP."
      );
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="flex flex-col lg:flex-row min-h-screen">
      <div className="hidden lg:flex w-1/3 bg-gradient-to-b from-indigo-600 via-purple-900 to-pink-800 text-white flex-col justify-center items-center px-10">
        <h1 className="text-6xl font-bold mb-4">Forgot</h1>
        <p className="text-lg text-center leading-relaxed max-w-sm">
          You can reset your password
        </p>
      </div>
      <div className="flex flex-1 items-center justify-center bg-gray-50 px-4 py-8 lg:py-0">
        <div className="w-full max-w-md bg-white rounded-xl shadow-lg p-8">
          <h2 className="text-3xl font-bold text-center text-indigo-600 mb-2">
            Forgot Password
          </h2>
          <p className="text-center text-gray-500 mb-6">
            {isOtpSent
              ? "Enter the OTP sent to your email."
              : "Enter your email to reset your password."}
          </p>
          {error && (
            <p className="text-center text-red-500 font-medium mb-3">
              {error}
            </p>
          )}
          {success && (
            <p className="text-center text-green-600 font-medium mb-3">
              {success}
            </p>
          )}
          {!isOtpSent ? (
            <form onSubmit={handleSendOtp} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Enter your email
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email"
                  className="w-full mt-1 px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>
              <button
                type="submit"
                disabled={loading}
                className={`w-full py-2 mt-2 font-semibold rounded-md text-white transition duration-200 ${
                  loading
                    ? "bg-indigo-400 cursor-not-allowed"
                    : "bg-indigo-600 hover:bg-indigo-700"
                }`}
              >
                {loading ? "Sending OTP..." : "Send OTP"}
              </button>
            </form>
          ) : (
            <form onSubmit={handleVerifyOtp} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Enter OTP
                </label>
                <input
                  type="text"
                  value={otp}
                  onChange={(e) => setOtp(e.target.value)}
                  placeholder="Enter the OTP"
                  className="w-full mt-1 px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>
              <button
                type="submit"
                disabled={loading}
                className={`w-full py-2 mt-2 font-semibold rounded-md text-white transition duration-200 ${
                  loading
                    ? "bg-green-400 cursor-not-allowed"
                    : "bg-green-600 hover:bg-green-700"
                }`}
              >
                {loading ? "Verifying..." : "Verify OTP"}
              </button>
            </form>
          )}
          <p className="text-center text-sm text-gray-600 mt-4">
            Don't have an account?{" "}
            <a
              href="/Signup"
              className="text-indigo-600 font-medium hover:underline"
            >
              Register Now
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};
export default ForgotPassword;
