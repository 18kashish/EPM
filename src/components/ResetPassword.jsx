import React, { useState } from "react";
import axios from "axios";
const ResetPassword = () => {
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);
  const handleResetPassword = async (e) => {
    e.preventDefault();
    // Validation
    if (!email || !otp || !newPassword || !confirmPassword) {
      setError("All fields are required.");
      return;
    }
    if (newPassword !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }
    setError("");
    setSuccess("");
    setLoading(true);
    try {
      const response = await axios.post(
        "https://invoice-module-dx9o.onrender.com/users/reset",
        { email, otp, newPassword },
        {
          headers: {
            Authorization: undefined,
            "Content-Type": "application/json",
          },
        }
      );
      if (response.status === 200) {
        setSuccess("Password reset successfully! You can now log in.");
        setEmail("");
        setOtp("");
        setNewPassword("");
        setConfirmPassword("");
      } else {
        setError("Failed to reset password. Please try again.");
      }
    } catch (err) {
      console.error(err);
      setError(
        err.response?.data?.message ||
          "Something went wrong while resetting password."
      );
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="flex flex-col lg:flex-row min-h-screen">
      {/* Left side (gradient section) */}
      <div className="hidden lg:flex w-1/3 bg-gradient-to-b from-green-600 via-teal-800 to-cyan-800 text-white flex-col justify-center items-center px-10">
        <h1 className="text-6xl font-bold mb-4">Reset</h1>
        <p className="text-lg text-center leading-relaxed max-w-sm">
          Enter your OTP and new password to reset your account.
        </p>
      </div>
      {/* Right side (form) */}
      <div className="flex flex-1 items-center justify-center bg-gray-50 px-4 py-8 lg:py-0">
        <div className="w-full max-w-md bg-white rounded-xl shadow-lg p-8">
          <h2 className="text-3xl font-bold text-center text-green-600 mb-2">
            Reset Password
          </h2>
          <p className="text-center text-gray-500 mb-6">
            Enter your details to reset your password.
          </p>
          {/* Error and success messages */}
          {error && (
            <p className="text-center text-red-500 font-medium mb-3">{error}</p>
          )}
          {success && (
            <p className="text-center text-green-600 font-medium mb-3">
              {success}
            </p>
          )}
          {/* Form */}
          <form onSubmit={handleResetPassword} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Email Address
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="w-full mt-1 px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                OTP
              </label>
              <input
                type="text"
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
                placeholder="Enter the OTP"
                className="w-full mt-1 px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                New Password
              </label>
              <input
                type="password"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                placeholder="Enter new password"
                className="w-full mt-1 px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Confirm New Password
              </label>
              <input
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                placeholder="Confirm new password"
                className="w-full mt-1 px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
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
              {loading ? "Resetting..." : "Reset Password"}
            </button>
          </form>
          <p className="text-center text-sm text-gray-600 mt-4">
            Remember your password?{" "}
            <a
              href="/Login"
              className="text-green-600 font-medium hover:underline"
            >
              Back to Login
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};
export default ResetPassword;