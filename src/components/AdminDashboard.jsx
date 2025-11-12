import React, { useEffect, useState, useMemo } from "react";
import axios from "axios";
import Div from "./Div";
import Buttons from "./Buttons";
import Addbutton from "./Addbutton";
import { useSelector } from "react-redux";
import { ArrowUpDown } from "lucide-react";
import { useNavigate } from "react-router-dom"; // Added

const AdminDashboard = () => {
  const [admins, setAdmins] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [sortOrder, setSortOrder] = useState("desc"); // default: latest first

  const userRole =
    (useSelector((state) => state.user.role) ||
      localStorage.getItem("role") ||
      "").toLowerCase();

  const API_URL = "https://invoice-module-dx9o.onrender.com/users?role=admin";

  const navigate = useNavigate(); // Added

  const fetchAdmins = async () => {
    try {
      const response = await axios.get(API_URL);
      const adminUsers = response.data.users.map((user) => ({
        _id: user._id,
        firstName: user.name?.split(" ")[0] || "",
        lastName: user.name?.split(" ")[1] || "",
        email: user.email,
        role: user.role,
        bio: user.bio || "",
      }));
      setAdmins(adminUsers);
    } catch (err) {
      console.error("Error fetching admin data:", err);
      setError("Failed to load admin data.");
    } finally {
      setLoading(false);
    }
  };

  const canEdit = userRole === "superadmin";

  const handleDelete = async (id) => {
    if (!canEdit) return alert("Access Denied: Only SuperAdmin can delete admins.");
    if (!window.confirm("Are you sure you want to delete this admin?")) return;
    try {
      await axios.delete(`https://invoice-module-dx9o.onrender.com/users/${id}`);
      setAdmins((prev) => prev.filter((a) => a._id !== id));
      alert("Admin deleted successfully!");
    } catch (err) {
      console.error("Delete failed:", err);
      alert("Failed to delete admin.");
    }
  };

  const handleEdit = (admin) => {
    if (!canEdit) return alert("Access Denied: Only SuperAdmin can edit admins.");
    navigate("/signup", { state: { adminData: admin } });
  };

  const handleAddAdmin = () => {
    if (!canEdit) return alert("Access Denied: Only SuperAdmin can add admins.");
    navigate("/signup");
  };

  useEffect(() => {
    fetchAdmins();
  }, []);

  // Search & sort
  const filteredAdmins = useMemo(() => {
    let data = [...admins];

    if (searchTerm.trim()) {
      const lowerSearch = searchTerm.toLowerCase();
      data = data.filter(
        (a) =>
          a.firstName.toLowerCase().includes(lowerSearch) ||
          a.lastName.toLowerCase().includes(lowerSearch) ||
          a._id.toLowerCase().includes(lowerSearch)
      );
    }

    data.sort((a, b) => {
      return sortOrder === "asc"
        ? a._id.localeCompare(b._id)
        : b._id.localeCompare(a._id);
    });

    return data;
  }, [admins, searchTerm, sortOrder]);

  if (loading)
    return <p className="flex justify-center items-center h-screen text-lg font-semibold">Loading admin data...</p>;
  if (error)
    return <p className="text-center mt-10 text-red-500">{error}</p>;

  return (
    <div className="bg-gray-50 min-h-screen overflow-hidden">
      <Div title={"Admin Dashboard"} title1={"Dashboard"} />
      <div className="max-w-6xl mx-auto p-8">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-semibold text-indigo-700">
            Admin User Records
          </h2>

          <div className="flex items-center gap-3">
            <input
              type="text"
              placeholder="Search by name or ID..."
              className="border px-3 py-2 rounded-lg shadow-sm focus:ring-2 focus:ring-indigo-400"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />

            <button
              onClick={() =>
                setSortOrder((prev) => (prev === "asc" ? "desc" : "asc"))
              }
              className="flex items-center gap-2 px-4 py-2 bg-indigo-100 text-indigo-700 rounded-lg hover:bg-indigo-200 transition-all"
            >
              <ArrowUpDown size={18} />
              {sortOrder === "asc" ? "Oldest → Newest" : "Newest → Oldest"}
            </button>

            {canEdit && <Addbutton label="Add Admin" onClick={handleAddAdmin} />}
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <table className="w-full border-collapse">
            <thead className="bg-indigo-600 text-white">
              <tr>
                <th className="p-4 text-left">#</th>
                <th className="p-4 text-left">First Name</th>
                <th className="p-4 text-left">Last Name</th>
                <th className="p-4 text-left">Email</th>
                <th className="p-4 text-left">Role</th>
                <th className="p-4 text-left">Admin ID</th>
                <th className="p-4 text-center">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredAdmins.length > 0 ? (
                filteredAdmins.map((admin, index) => (
                  <tr
                    key={admin._id}
                    className="border-b hover:bg-gray-100 transition"
                  >
                    <td className="p-4">{index + 1}</td>
                    <td className="p-4">{admin.firstName}</td>
                    <td className="p-4">{admin.lastName}</td>
                    <td className="p-4">{admin.email}</td>
                    <td className="p-4 capitalize">{admin.role}</td>
                    <td className="p-4 font-mono text-sm text-gray-700">{admin._id}</td>
                    <td className="p-4 text-center space-x-2">
                      {canEdit ? (
                        <>
                          <Buttons label="Edit" color="blue" onClick={() => handleEdit(admin)} />
                          <Buttons label="Delete" color="red" onClick={() => handleDelete(admin._id)} />
                        </>
                      ) : (
                        <span className="text-gray-400 italic">View Only</span>
                      )}
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="7" className="text-center text-gray-500 py-6 text-lg">
                    No admin records found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
