import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
function EditEmployee() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [employee, setEmployee] = useState({
    name: "",
    email: "",
    phone: "",
    department: "",
    role: "",
  });
  const token ="eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczovL2VwbS50ZWNoYXJjaHNvZnR3YXJlcy5jb20vYXBpL2FwaS9sb2dpbiIsImlhdCI6MTc2MjMyMzYyMywiZXhwIjoxNzYyMzI3MjIzLCJuYmYiOjE3NjIzMjM2MjMsImp0aSI6IjZqMjVHSDJEQkRCYjRDVlciLCJzdWIiOiIxIiwicHJ2IjoiMjNiZDVjODk0OWY2MDBhZGIzOWU3MDFjNDAwODcyZGI3YTU5NzZmNyJ9.xKIW3jXwUNI8u8amW56Wl6UtxzVhUFVBQ6zBf2MdLSo"
  useEffect(() => {
    const fetchEmployee = async () => {
      try {
        const res = await axios.get(
          `https://epm.techarchsoftwares.com/api/api/users/${id}`,
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );
        setEmployee(res.data.data || res.data);
      } catch (err) {
        console.error("Error fetching employee:", err);
      }
    };
    fetchEmployee();
  }, [id]);
  const handleChange = (e) => {
    setEmployee({ ...employee, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(
        `https://epm.techarchsoftwares.com/api/api/users/${id}`,
        employee,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      alert("Employee updated successfully!");
      navigate("/dashboard");
    } catch (err) {
      console.error("Error updating employee:", err);
      alert("Failed to update employee.");
    }
  };
  return (
    <div className="p-6 max-w-xl mx-auto">
      <h2 className="text-2xl font-semibold mb-4 ">Edit Employee</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        {["name", "email", "phone_num",  "roles"].map((field) => (
          <div key={field}>
            <label className="block mb-1 capitalize">{field}</label>
            <input
              type="text"
              name={field}
              value={employee[field] || ""}
              onChange={handleChange}
              className="w-full border px-3 py-2 rounded"
              required
            />
          </div>
        ))}
        <button
          type="submit"
          className="bg-black text-white px-6 py-2 rounded hover:bg-blue-600"
        >
          Update
        </button>
      </form>
    </div>
  );
}
export default EditEmployee;