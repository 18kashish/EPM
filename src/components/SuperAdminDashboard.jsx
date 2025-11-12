import React from "react";
import { useNavigate } from "react-router-dom";
function SuperAdminDashboard() {
  const navigate = useNavigate();
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Super Admin Dashboard</h1>
      <button
        onClick={() => navigate("/AdminDashboard")}
        className="bg-blue-500 text-white px-4 py-2 mx-4 rounded"
      >
        Go to Admin Dashboard
      </button>
      <button
        onClick={() => navigate("/ViewerDashboard")}
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        Go to Viewer Dashboard
      </button>
    </div>
  );
}
export default SuperAdminDashboard;