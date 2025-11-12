import React, { useEffect, useState, useMemo } from "react";
import axios from "axios";
import Div from "./Div";
import Buttons from "./Buttons";
import Addbutton from "./Addbutton";
import { useSelector } from "react-redux";
import { ArrowUpDown } from "lucide-react";

const ViewerDashboard = () => {
  const [viewers, setViewers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [sortOrder, setSortOrder] = useState("desc"); // default: latest first

  const userRole =
    (useSelector((state) => state.user.role) ||
      localStorage.getItem("role") ||
      "").toLowerCase();

  const API_URL = "https://invoice-module-dx9o.onrender.com/users?role=Viewer";

  const fetchViewers = async () => {
    try {
      const response = await axios.get(API_URL);
      const viewerUsers = response.data.users.map((user) => ({
        _id: user._id,
        firstName: user.name?.split(" ")[0] || "",
        lastName: user.name?.split(" ")[1] || "",
        email: user.email,
        role: user.role,
      }));
      setViewers(viewerUsers);
    } catch (err) {
      console.error("Error fetching viewer data:", err);
      setError("Failed to load viewer data.");
    } finally {
      setLoading(false);
    }
  };

  // ✅ Only superadmin can modify viewers
  const canEdit = userRole === "superadmin";

  const handleDelete = async (id) => {
    if (!canEdit) return alert("Access Denied: Only SuperAdmin can delete viewers.");
    if (!window.confirm("Are you sure you want to delete this viewer?")) return;
    try {
      await axios.delete(`https://invoice-module-dx9o.onrender.com/users/${id}`);
      setViewers((prev) => prev.filter((a) => a._id !== id));
      alert("Viewer deleted successfully!");
    } catch (err) {
      console.error("Delete failed:", err);
      alert("Failed to delete viewer.");
    }
  };

  const handleEdit = async (viewer) => {
    if (!canEdit) return alert("Access Denied: Only SuperAdmin can edit viewers.");
    const newName = prompt("Enter new name:", `${viewer.firstName} ${viewer.lastName}`);
    if (!newName) return;

    try {
      await axios.patch(
        `https://invoice-module-dx9o.onrender.com/users/${viewer._id}`,
        { name: newName }
      );
      setViewers((prev) =>
        prev.map((a) =>
          a._id === viewer._id
            ? { ...a, firstName: newName.split(" ")[0], lastName: newName.split(" ")[1] }
            : a
        )
      );
      alert("Viewer updated successfully!");
    } catch (err) {
      console.error("Update failed:", err);
      alert("Failed to update viewer.");
    }
  };

  const handleAddViewer = async () => {
    if (!canEdit) return alert("Access Denied: Only SuperAdmin can add viewers.");
    const name = prompt("Enter viewer full name:");
    const email = prompt("Enter viewer email:");
    const password = prompt("Enter viewer password:");
    if (!name || !email || !password) return alert("All fields are required!");

    try {
      const res = await axios.post("https://invoice-module-dx9o.onrender.com/users", {
        name,
        email,
        password,
        role: "viewer",
      });
      setViewers((prev) => [...prev, res.data]);
      alert("Viewer added successfully!");
    } catch (err) {
      console.error("Add viewer failed:", err);
      alert("Failed to add viewer.");
    }
  };

  useEffect(() => {
    fetchViewers();
  }, []);

  // ✅ Search includes name and Viewer ID
  const filteredViewers = useMemo(() => {
    let data = [...viewers];

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
  }, [viewers, searchTerm, sortOrder]);

  if (loading)
    return <p className="flex justify-center items-center h-screen text-lg font-semibold">Loading viewer data...</p>;
  if (error)
    return <p className="text-center mt-10 text-red-500">{error}</p>;

  return (
    <div className="bg-gray-50 min-h-screen overflow-hidden">
      <Div title={"Viewer Dashboard"} title1={"Dashboard"} />
      <div className="max-w-6xl mx-auto p-8">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-semibold text-indigo-700">
            Viewer User Records
          </h2>

          <div className="flex items-center gap-3">
            {/* 🔍 Search input */}
            <input
              type="text"
              placeholder="Search by name or ID..."
              className="border px-3 py-2 rounded-lg shadow-sm focus:ring-2 focus:ring-indigo-400"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />

            {/* 🔽 Sort Button */}
            <button
              onClick={() =>
                setSortOrder((prev) => (prev === "asc" ? "desc" : "asc"))
              }
              className="flex items-center gap-2 px-4 py-2 bg-indigo-100 text-indigo-700 rounded-lg hover:bg-indigo-200 transition-all"
            >
              <ArrowUpDown size={18} />
              {sortOrder === "asc" ? "Oldest → Newest" : "Newest → Oldest"}
            </button>

            {canEdit && <Addbutton label="Add Viewer" onClick={handleAddViewer} />}
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
                <th className="p-4 text-left">Viewer ID</th>
                <th className="p-4 text-center">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredViewers.length > 0 ? (
                filteredViewers.map((viewer, index) => (
                  <tr
                    key={viewer._id}
                    className="border-b hover:bg-gray-100 transition"
                  >
                    <td className="p-4">{index + 1}</td>
                    <td className="p-4">{viewer.firstName}</td>
                    <td className="p-4">{viewer.lastName}</td>
                    <td className="p-4">{viewer.email}</td>
                    <td className="p-4 capitalize">{viewer.role}</td>
                    <td className="p-4 font-mono text-sm text-gray-700">
                      {viewer._id}
                    </td>
                    <td className="p-4 text-center space-x-2">
                      {canEdit ? (
                        <>
                          <Buttons
                            label="Edit"
                            color="blue"
                            onClick={() => handleEdit(viewer)}
                          />
                          <Buttons
                            label="Delete"
                            color="red"
                            onClick={() => handleDelete(viewer._id)}
                          />
                        </>
                      ) : (
                        <span className="text-gray-400 italic">View Only</span>
                      )}
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td
                    colSpan="7"
                    className="text-center text-gray-500 py-6 text-lg"
                  >
                    No viewer records found.
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

export default ViewerDashboard;
