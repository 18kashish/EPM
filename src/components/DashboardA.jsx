// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";
// import { SquarePen, Trash2 } from "lucide-react";
// import Sidebar from "./Sidebar";
// function Dasbord() {
//   const navigate = useNavigate();
//   const [employees, setEmployees] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [search, setSearch] = useState("");
//   const token ="eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczovL2VwbS50ZWNoYXJjaHNvZnR3YXJlcy5jb20vYXBpL2FwaS9sb2dpbiIsImlhdCI6MTc2MjMyMzYyMywiZXhwIjoxNzYyMzI3MjIzLCJuYmYiOjE3NjIzMjM2MjMsImp0aSI6IjZqMjVHSDJEQkRCYjRDVlciLCJzdWIiOiIxIiwicHJ2IjoiMjNiZDVjODk0OWY2MDBhZGIzOWU3MDFjNDAwODcyZGI3YTU5NzZmNyJ9.xKIW3jXwUNI8u8amW56Wl6UtxzVhUFVBQ6zBf2MdLSo"
//   const fetchEmployees = async () => {
//     setLoading(true);
//     try {
//       console.log("Token in use:", token);
//       const res = await axios.get("https://epm.techarchsoftwares.com/api/api/users", {
//         headers: {"Content-Type": "application/json",
//           Authorization: token ? `Bearer ${token}` : "",
//           // withCredentials:true
//         },
//       });
//       console.log("API Response:", res.data);
//       setEmployees(res.data.data || res.data);
//     } catch (err) {
//       console.error("Error fetching employees:", err.response?.status, err.response?.data);
//     } finally {
//       setLoading(false);
//     }
//   };
//   useEffect(() => {
//     fetchEmployees();
//   }, []);
//   const handleDelete = async (id) => {
//     if (!id) return;
//     if (!window.confirm("Are you sure you want to delete this employee?")) return;
//     try {
//       await axios.delete(
//         `https://epm.techarchsoftwares.com/api/api/users/${id}`,
//         {
//           headers: {
//             Authorization: token ? `Bearer ${token}` : undefined,
//           },
//         }
//       );
//       alert("Employee deleted successfully!");
//       fetchEmployees();
//     } catch (err) {
//       console.error("Error deleting employee:", err);
//     }
//   };
//     const handleEdit = (id) => {
//       if (!id) return;
//       navigate(`/edit/${id}`);
//     };
//   const filteredEmployees = employees.filter((emp) =>
//     (emp.name || "").toLowerCase().includes(search.toLowerCase())
//   );
//   return (
//     <div className="p-6">
//       <div className="bg-black h-20 text-white pl-4 flex flex-col justify-center rounded-lg">
//         <h1 className="text-2xl font-semibold">Employee Management</h1>
//         <h6 className="text-sm">Manage employees and update details</h6>
//       </div>
//       <div className="flex flex-wrap items-center justify-between my-6 gap-3">
//         <button
//           className="bg-black text-white px-6 py-2 rounded hover:bg-blue-600"
//           onClick={() => navigate("/Mange")}
//         >
//           Add Employee
//         </button>
//         <div className="flex">
//           <input
//             type="text"
//             placeholder="Search..."
//             className="px-4 py-2 border border-gray-300 rounded-l-md focus:outline-none"
//             value={search}
//             onChange={(e) => setSearch(e.target.value)}
//           />
//           <button
//             className="bg-black text-white px-4 py-2 rounded-r-md hover:bg-blue-600"
//             onClick={() => setSearch(search.trim())}
//           >
//             Search
//           </button>
//         </div>
//         <button
//           className="bg-red-500 text-white px-6 py-2 rounded hover:bg-red-600"
//           onClick={() => setSearch("")}
//         >
//           Clear
//         </button>
//       </div>
//       <div className="bg-gray-50 p-6 shadow rounded-lg overflow-x-auto">
//         {loading ? (
//           <p className="text-center text-gray-600">Loading employees...</p>
//         ) : (
//           <table className="w-full text-sm text-left border border-gray-200 min-w-[700px]">
//             <thead className="bg-black text-white">
//               <tr>
//                 <th className="px-4 py-3">#</th>
//                 <th className="px-4 py-3">NAME</th>
//                 <th className="px-4 py-3">EMAIL</th>
//                 <th className="px-4 py-3">PHONE</th>
//                 <th className="px-4 py-3">DEPARTMENT</th>
//                 <th className="px-4 py-3">ROLE</th>
//                 <th className="px-4 py-3 text-center">ACTIONS</th>
//               </tr>
//             </thead>
//             <tbody className="bg-white divide-y divide-gray-100">
//               {filteredEmployees.length > 0 ? (
//                 filteredEmployees.map((emp, index) => (
//                   <tr key={emp._id || index} className="hover:bg-gray-100">
//                     <td className="px-4 py-3">{index + 1}</td>
//                     <td className="px-4 py-3 font-medium text-gray-900">
//                       {emp.name}
//                     </td>
//                     <td className="px-4 py-3">{emp.email}</td>
//                     <td className="px-4 py-3">{emp.phone}</td>
//                     <td className="px-4 py-3">{emp.department}</td>
//                     <td className="px-4 py-3">{emp.role}</td>
//                     <td className="px-4 py-3 flex justify-center gap-3 text-lg">
//                       <button
//                         className="text-blue-500 hover:text-blue-700"
//                         onClick={() => handleEdit(emp.id)}
//                       >
//                         <SquarePen />
//                       </button>
//                       <button
//                         className="text-red-500 hover:text-red-700"
//                         onClick={() => handleDelete(emp.id)}
//                       >
//                         <Trash2 />
//                       </button>
//                     </td>
//                   </tr>
//                 ))
//               ) : (
//                 <tr>
//                   <td colSpan="7" className="text-center py-4 text-gray-500">
//                     No employees found.
//                   </td>
//                 </tr>
//               )}
//             </tbody>
//           </table>
//         )}
//       </div>
//     </div>
//   );
// }
// export default Dasbord;













import React, { useEffect, useState } from "react";
import axios from "axios";
import Div from "./Div";
import { useNavigate } from "react-router-dom";
import {BarChart,Bar,XAxis,YAxis,CartesianGrid,Tooltip,ResponsiveContainer,} from "recharts";
import {CheckCircle,Clock,CreditCard,Plus,Angry,ShoppingBag,} from "lucide-react";
export default function DashboardA() {
  
  const [invoices, setInvoices] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const role = localStorage.getItem("role");

  const API_URL =
    "https://invoice-module-dx9o.onrender.com/invoices?searchQuery=690da8251431f98cebc9a8c9";
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(API_URL);
        setInvoices(response.data.data || []);
      } catch (error) {
        console.error("Error fetching invoices:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);


  
  const totalInvoices = invoices.length;
  const paidInvoices = invoices.filter((inv) => inv.status === "Paid").length;
  const unpaidInvoices = invoices.filter((inv) => inv.status === "Unpaid").length;
  const partiallyPaid = invoices.filter(
    (inv) => inv.status === "Partially Paid"
  ).length;
  const totalAmount = invoices.reduce((sum, inv) => sum + (inv.total || 0), 0);
  const totalReceived = invoices.reduce(
    (sum, inv) => sum + (inv.totalAmountReceived || 0),
    0
  );
  const totalPaymentRecords = invoices.flatMap(
    (inv) => inv.paymentRecords || []
  );
  const data = invoices.map((inv, index) => ({
    name: inv.invoiceNumber || `Inv ${index + 1}`,
    amount: inv.total || 0,
  }));
  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen text-lg font-semibold">
        Loading Dashboard...
      </div>
    );
  }
  return (
    <>
   <Div title={"Admin Dashboard"} title1={"Dashboard"}/>
    <div className="flex h-screen bg-gray-100">
      <div className="flex-1 flex flex-col">
        
        <main className="p-6 space-y-6 overflow-y-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-6 gap-4">
            <div className="p-4 rounded shadow flex justify-between bg-blue-500 text-white">
              <div>
                <h2 className="text-2xl font-semibold">
                  {totalPaymentRecords.length}
                </h2>
                <p className="text-sm">Payments Received</p>
              </div>
              <CheckCircle className="w-6 h-6 text-white" />
            </div>
            <div className="bg-white p-4 rounded shadow flex flex-col justify-between">
              <h2 className="text-2xl font-semibold text-red-600">
                -{totalAmount.toLocaleString()}
              </h2>
              <p className="text-sm text-gray-600 mt-2">Pending Amount</p>
            </div>
            <div className="bg-white p-4 rounded shadow flex justify-between">
              <div>
                <h2 className="text-2xl font-semibold">
                  {totalReceived.toLocaleString()}
                </h2>
                <p className="text-gray-500 text-sm mt-2">Total Amount</p>
              </div>
              <ShoppingBag className="w-6 h-6 text-blue-600" />
            </div>
            <div className="bg-white p-4 rounded shadow flex justify-between">
              <div>
                <h2 className="text-2xl font-semibold">{totalInvoices}</h2>
                <p className="text-sm text-gray-600">Total Invoices</p>
              </div>
              <CreditCard className="w-6 h-6 text-green-600" />
            </div>
            <div className="p-4 rounded shadow flex justify-between bg-green-800 text-white">
              <div>
                <h2 className="text-2xl font-semibold">{paidInvoices}</h2>
                <p className="text-sm">Paid Invoices</p>
              </div>
              <CheckCircle className="w-6 h-6 text-white" />
            </div>
            <div className="bg-white p-4 rounded shadow flex justify-between">
              <div>
                <h2 className="text-2xl font-semibold">{partiallyPaid}</h2>
                <p className="text-sm text-gray-600">Partially Paid invoices</p>
              </div>
              <Clock className="w-6 h-6 text-yellow-600" />
            </div>
            <div className="bg-white p-4 rounded shadow flex justify-between">
              <div>
                <h2 className="text-2xl font-semibold">{unpaidInvoices}</h2>
                <p className="text-sm text-gray-600">Unpaid Invoices</p>
              </div>
              <Angry className="w-6 h-6 text-red-600" />
            </div>
          </div>
          <div className="bg-white p-4 rounded shadow">
            <h2 className="text-lg font-semibold text-center mb-2">
              Invoice Totals
            </h2>
            <ResponsiveContainer width="100%" height={250}>
              <BarChart data={data}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="amount" fill="#60A5FA" />
              </BarChart>
            </ResponsiveContainer>
          </div>
          <div className="bg-white p-4 rounded shadow">
            <h2 className="text-lg font-semibold text-center mb-3">
              Recent Payments
            </h2>
            <table className="w-full border border-gray-200 text-sm">
              <thead className="bg-gray-100">
                <tr>
                  <th className="p-2 border">Paid By</th>
                  <th className="p-2 border">Date Paid</th>
                  <th className="p-2 border">Amount Paid</th>
                  <th className="p-2 border">Payment Method</th>
                  <th className="p-2 border">Note</th>
                </tr>
              </thead>
              <tbody>
                {totalPaymentRecords.length > 0 ? (
                  totalPaymentRecords.map((p, i) => (
                    <tr key={i}>
                      <td className="p-2 border text-center">
                        {p.paidBy || "-"}
                      </td>
                      <td className="p-2 border text-center">
                        {new Date(p.datePaid).toLocaleDateString()}
                      </td>
                      <td className="p-2 border text-center text-green-600 font-semibold">
                        {p.amountPaid}
                      </td>
                      <td className="p-2 border text-center">
                        {p.paymentMethod || "-"}
                      </td>
                      <td className="p-2 border text-center">
                        {p.note || "-"}
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td
                      colSpan="5"
                      className="text-center p-3 text-gray-500"
                    >
                      No payment records found
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </main>
      </div>
      <button
        onClick={() => navigate("/Invoices")}
        className="fixed bottom-6 right-4 bg-blue-600 hover:bg-blue-700 text-white p-4 rounded-full shadow-lg transition-all duration-300"
      >
        <Plus className="w-5 h-5" />
      </button>
    </div>
    </>
  );
}










