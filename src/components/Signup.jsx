import React, { useState } from "react";
import axios from "axios";
import Div from "./Div";
import { useLocation, useNavigate } from "react-router-dom";

const Signup = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const existingAdmin = location.state?.adminData;

  const [formData, setFormData] = useState({
    firstName: existingAdmin?.firstName || "",
    lastName: existingAdmin?.lastName || "",
    email: existingAdmin?.email || "",
    password: "",
    confirmPassword: "",
    bio: existingAdmin?.bio || "",
    role: existingAdmin?.role || "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match!");
      return;
    }

    setLoading(true);
    try {
      if (existingAdmin) {
        // Edit existing admin
        await axios.patch(
          `https://invoice-module-dx9o.onrender.com/users/${existingAdmin._id}`,
          {
            name: `${formData.firstName} ${formData.lastName}`,
            email: formData.email,
            role: formData.role,
            bio: formData.bio,
            ...(formData.password && { password: formData.password }),
          }
        );
        setSuccess("Admin updated successfully!");
        setTimeout(() => navigate("/AdminDashboard"), 1500);
      } else {
        // New signup
        await axios.post(
          "https://invoice-module-dx9o.onrender.com/users/signup",
          formData
        );
        setSuccess("Account created successfully!");
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          password: "",
          confirmPassword: "",
          bio: "",
          role: "",
        });
      }
    } catch (err) {
      console.error(err);
      setError(err.response?.data?.message || "Failed to save data.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <Div title={existingAdmin ? "Edit Admin" : "Sign Up"} />

      <div className="bg-gray-50 px-4 py-8 lg:py-4">
        <div className="w-full bg-white rounded-xl shadow-lg p-12">
          <h2 className="text-3xl font-bold text-center text-indigo-600 mb-2">
            {existingAdmin ? "Edit Admin" : "Sign Up"}
          </h2>
          <p className="text-center text-gray-500 mb-6">
            {existingAdmin ? "Edit the admin details below." : "Create your account to get started."}
          </p>

          {error && <p className="text-center text-red-500 font-medium mb-3">{error}</p>}
          {success && <p className="text-center text-green-600 font-medium mb-3">{success}</p>}

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">First Name</label>
                <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} required
                  placeholder="Enter first name" className="w-full mt-1 px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500" />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">Last Name</label>
                <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} required
                  placeholder="Enter last name" className="w-full mt-1 px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500" />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">Email</label>
                <input type="email" name="email" value={formData.email} onChange={handleChange} required
                  placeholder="Enter email" className="w-full mt-1 px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500" />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">Role</label>
                <select name="role" value={formData.role} onChange={handleChange} required
                  className="w-full mt-1 px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500">
                  <option value="">-- Choose Role --</option>
                  <option value="Admin">Admin</option>
                  <option value="Viewer">Viewer</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">Password</label>
                <input type="password" name="password" value={formData.password} onChange={handleChange}
                  placeholder={existingAdmin ? "Leave blank to keep current password" : "Enter password"}
                  className="w-full mt-1 px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500" />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">Confirm Password</label>
                <input type="password" name="confirmPassword" value={formData.confirmPassword} onChange={handleChange}
                  placeholder={existingAdmin ? "Leave blank to keep current password" : "Confirm password"}
                  className="w-full mt-1 px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500" />
              </div>

              <div className="col-span-2">
                <label className="block text-sm font-medium text-gray-700">Bio</label>
                <textarea name="bio" value={formData.bio} onChange={handleChange} rows="3"
                  placeholder="Tell us something about yourself"
                  className="w-full mt-1 px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"></textarea>
              </div>
            </div>

            <button type="submit" disabled={loading} className={`w-full py-2 mt-4 font-semibold rounded-md text-white transition duration-200 ${loading ? "bg-indigo-400 cursor-not-allowed" : "bg-indigo-600 hover:bg-indigo-700"}`}>
              {loading ? existingAdmin ? "Updating..." : "Creating Account..." : existingAdmin ? "Update Admin" : "Sign Up"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
