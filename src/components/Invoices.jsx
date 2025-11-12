// import React, { useState, useEffect } from "react";
// import { Home, Plus, Users, Trash2, Settings } from "lucide-react";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";

// export default function Invoice() {
//   const API_BASE = "https://invoice-module-dx9o.onrender.com/invoices";

//   const [invoice, setInvoice] = useState({
//     customer: "",
//     status: "",
//     date: new Date().toISOString().split("T")[0],
//     dueDate: "",
//     currency: "NGN",
//     taxRate: 0,
//     notes: "",
//   });
// const navigate=useNavigate();
//   const [items, setItems] = useState([{ name: "", qty: 0, price: 0, discount: 0 }]);
//   const [loading, setLoading] = useState(false);


//   const subtotal = items.reduce(
//     (sum, item) => sum + item.qty * item.price * (1 - item.discount / 100),
//     0
//   );
//   const vat = (subtotal * invoice.taxRate) / 100;
//   const total = subtotal + vat;

  
//   const handleChange = (i, field, value) => {
//     const updated = [...items];
//     updated[i][field] = value;
//     setItems(updated);
//   };

//   const addItem = () => setItems([...items, { name: "", qty: 0, price: 0, discount: 0 }]);
//   const removeItem = (i) => setItems(items.filter((_, idx) => idx !== i));

//   const handleSave = async () => {
  
//   if (!invoice.customer) {
//     alert("Please select or enter a customer before saving.");
//     return;
//   }

//   setLoading(true);

//   try {
//     const payload = {
//       ...invoice,
//       items,
//       subtotal,
//       vat,
//       total,
//     };

//     console.log("Sending invoice data:", payload);

//     const response = await axios.post(API_BASE, payload, {
//       headers: {
//         "Content-Type": "application/json",
//       },
//     });

//     console.log("Invoice created:", response.data);
//     alert("Invoice successfully created!");

 
//     navigate("/dashboard", { state: { newInvoiceId: response.data._id } });
//   } catch (error) {
//     console.error("Error creating invoice:", error);
//     alert("Failed to create invoice. Please check console for details.");
//   } finally {
//     setLoading(false);
//   }
// };


//   return (
//     <div className="min-h-screen flex bg-gray-100">
   
//       <aside className="group relative w-18 hover:w-48 transition-all duration-300 bg-gray-900 text-gray-400 flex flex-col py-6 justify-between">
//         <div className="flex flex-col gap-6">
//           <button className="flex items-center gap-3 hover:text-white px-4" onClick={()=>{
//             navigate("/dashboard")
//           }}>
//             <Home size={24} className="shrink-0" />
//             <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap overflow-hidden">
//               Home
//             </span>
//           </button>

//           <button className="flex items-center gap-3 hover:text-white w-full px-4">
//             <Plus size={24} />
//             <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
//               Add
//             </span>
//           </button>

//           <button className="flex items-center gap-3 hover:text-white w-full px-4">
//             <Users size={24} />
//             <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
//               Users
//             </span>
//           </button>
//         </div>

//         <button className="flex items-center gap-3 hover:text-white w-full px-4">
//           <Settings size={24} />
//           <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
//             Settings
//           </span>
//         </button>
//       </aside>

     
//       <main className="flex-1 flex justify-center items-start p-10">
//         <div className="bg-white w-full max-w-4xl rounded-2xl shadow p-8">
         
//           <div className="flex justify-between mb-6">
//             <div>
//               <h2 className="text-2xl font-bold">INVOICE</h2>
//               <p className="text-sm text-gray-500">
//                 Invoice #: <b>Auto Generated</b>
//               </p>
//             </div>
//             <div className="text-right">
//               <p className="text-gray-500 text-sm">STATUS</p>
//               <p className="text-red-600 font-semibold">{invoice.status}</p>
//               <p className="text-sm mt-2">
//                 Date: <b>{invoice.date}</b>
//               </p>
//             </div>
//           </div>

        
//           <div className="mb-6">
//             <label className="block text-gray-600 mb-1">Bill To</label>
//             <input
//               value={invoice.customer}
//               onChange={(e) => setInvoice({ ...invoice, customer: e.target.value })}
//               placeholder="Enter customer name"
//               className="border rounded-md w-full p-2"
//             />
//           </div>

         
//           <table className="w-full border-collapse mb-6 text-sm">
//             <thead>
//               <tr className="border-b text-gray-600">
//                 <th className="p-2 text-left">Item</th>
//                 <th className="p-2">Qty</th>
//                 <th className="p-2">Price</th>
//                 <th className="p-2">Disc(%)</th>
//                 <th className="p-2">Amount</th>
//                 <th className="p-2">Action</th>
//               </tr>
//             </thead>
//             <tbody>
//               {items.map((item, i) => (
//                 <tr key={i} className="border-b">
//                   <td className="p-2">
//                     <input
//                       value={item.name}
//                       onChange={(e) => handleChange(i, "name", e.target.value)}
//                       placeholder="Item description"
//                       className="border rounded-md p-2 w-full"
//                     />
//                   </td>
//                   <td className="p-2 text-center">
//                     <input
//                       type="number"
//                       value={item.qty}
//                       onChange={(e) => handleChange(i, "qty", parseFloat(e.target.value))}
//                       className="border rounded-md p-2 w-16 text-center"
//                     />
//                   </td>
//                   <td className="p-2 text-center">
//                     <input
//                       type="number"
//                       value={item.price}
//                       onChange={(e) => handleChange(i, "price", parseFloat(e.target.value))}
//                       className="border rounded-md p-2 w-20 text-center"
//                     />
//                   </td>
//                   <td className="p-2 text-center">
//                     <input
//                       type="number"
//                       value={item.discount}
//                       onChange={(e) => handleChange(i, "discount", parseFloat(e.target.value))}
//                       className="border rounded-md p-2 w-16 text-center"
//                     />
//                   </td>
//                   <td className="p-2 text-center">
//                     {(item.qty * item.price * (1 - item.discount / 100)).toFixed(2)}
//                   </td>
//                   <td className="p-2 text-center">
//                     <button
//                       onClick={() => removeItem(i)}
//                       className="text-red-500 hover:text-red-700"
//                     >
//                       <Trash2 size={18} />
//                     </button>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>

//           <button
//             onClick={addItem}
//             className="flex items-center bg-blue-500 text-white px-3 py-2 rounded-full hover:bg-blue-600 mb-6"
//           >
//             <Plus size={18} /> Add Item
//           </button>

          
//           <div className="bg-gray-50 p-4 rounded-md mb-6">
//             <div className="flex justify-between mb-1">
//               <span>Sub Total:</span> <b>{subtotal.toFixed(2)}</b>
//             </div>
//             <div className="flex justify-between mb-1">
//               <span>VAT({invoice.taxRate}%):</span> <b>{vat.toFixed(2)}</b>
//             </div>
//             <div className="flex justify-between font-semibold text-lg">
//               <span>Total:</span> <span>{invoice.currency} {total.toFixed(2)}</span>
//             </div>
//           </div>

       
//           <div className="grid grid-cols-3 gap-4 mb-6">
//             <div>
//               <label className="text-sm text-gray-600">Tax Rate(%)</label>
//               <input
//                 type="number"
//                 value={invoice.taxRate}
//                 onChange={(e) =>
//                   setInvoice({ ...invoice, taxRate: parseFloat(e.target.value) })
//                 }
//                 className="border rounded-md w-full p-2"
//               />
//             </div>
//             <div>
//               <label className="text-sm text-gray-600">Due Date</label>
//               <input
//                 type="date"
//                 value={invoice.dueDate}
//                 onChange={(e) => setInvoice({ ...invoice, dueDate: e.target.value })}
//                 className="border rounded-md w-full p-2"
//               />
//             </div>
//             <div>
//               <label className="text-sm text-gray-600">Currency</label>
//               <select
//                 value={invoice.currency}
//                 onChange={(e) => setInvoice({ ...invoice, currency: e.target.value })}
//                 className="border rounded-md w-full p-2"
//               >
//                 <option value="NGN">NGN</option>
//                 <option value="USD">USD</option>
//                 <option value="EUR">EUR</option>
//                 <option value="INR">INR</option>
//               </select>
//             </div>
//           </div>

//           <div className="mb-6">
//             <label className="text-gray-600 font-medium mb-2 block">
//               Note / Payment Info
//             </label>
//             <textarea
//               value={invoice.notes}
//               onChange={(e) => setInvoice({ ...invoice, notes: e.target.value })}
//               placeholder="Add details or terms of service"
//               className="border rounded-md p-3 w-full"
//               rows="3"
//             />
//           </div>

         
//           <div className="text-center justify-center flex">
//             <button
//               onClick={handleSave}
//               disabled={loading}
//               className={`bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-md font-medium flex gap-2 ${
//                 loading ? "opacity-50 cursor-not-allowed" : ""
//               }`}
//             >
//               {loading ? "Saving..." : "SAVE AND CONTINUE"}
//             </button>
//           </div>
//         </div>
//       </main>
//     </div>
//   );
// }



















import React, { useState } from "react";
import { Plus, Trash2 } from "lucide-react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Div from "./Div";

export default function Invoice() {
  const API_BASE = "https://invoice-module-dx9o.onrender.com/invoices";
  const navigate = useNavigate();

  const [invoice, setInvoice] = useState({
    customer: "",
    email: "",
    phone: "",
    address: "",
    status: "",
    date: new Date().toISOString().split("T")[0],
    dueDate: "",
    currency: "NGN",
    taxRate: 18, // Default GST 18%
    notes: "",
  });

  const [items, setItems] = useState([{ name: "", qty: 0, price: 0, discount: 0 }]);
  const [loading, setLoading] = useState(false);

  // 🧮 Calculations
  const subtotal = items.reduce(
    (sum, item) => sum + item.qty * item.price * (1 - item.discount / 100),
    0
  );

  const gst = (subtotal * invoice.taxRate) / 100;
  const total = subtotal - gst; // ✅ GST SUBTRACTED from amount

  // Item change handlers
  const handleChange = (i, field, value) => {
    const updated = [...items];
    updated[i][field] = value;
    setItems(updated);
  };

  const addItem = () =>
    setItems([...items, { name: "", qty: 0, price: 0, discount: 0 }]);

  const removeItem = (i) => setItems(items.filter((_, idx) => idx !== i));

  // 💾 Save Invoice
  const handleSave = async () => {
    if (!invoice.customer) {
      alert("Please enter a customer name before saving.");
      return;
    }

    setLoading(true);
    try {
      const userId = localStorage.getItem("userId");

      const clientObj = {
        name: invoice.customer,
        email: invoice.email || "",
        phone: invoice.phone || "",
        address: invoice.address || "",
      };

      const payload = {
        ...invoice,
        items,
        subtotal,
        gst,
        total,
        status: invoice.status || "Pending",
        creator: [userId],
        client: clientObj,
      };

      const response = await axios.post(API_BASE, payload, {
        headers: { "Content-Type": "application/json" },
      });

      alert("Invoice successfully created!");
      navigate("/dashboard", { state: { newInvoiceId: response.data._id } });
    } catch (error) {
      console.error("Error creating invoice:", error);
      alert("Failed to create invoice. Please check console for details.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Div title={"Generate Invoice"} />
      <div className="min-h-screen bg-gray-100 py-10">
        <main className="flex justify-center items-start px-4">
          <div className="bg-white w-full max-w-5xl rounded-2xl shadow-lg p-8 border border-gray-200">
            {/* Header */}
            <div className="flex justify-between items-center border-b pb-4 mb-8">
              <div>
                <h2 className="text-3xl font-bold text-gray-800">Invoice</h2>
                <p className="text-sm text-gray-500 mt-1">
                  Invoice #: <b>Auto Generated</b>
                </p>
              </div>
              <div className="text-right">
                <p className="text-gray-500 text-sm uppercase">Status</p>
                <p
                  className={`font-semibold ${
                    invoice.status === "Paid"
                      ? "text-green-600"
                      : invoice.status === "Overdue"
                      ? "text-red-600"
                      : "text-yellow-600"
                  }`}
                >
                  {invoice.status || "Pending"}
                </p>
                <p className="text-sm mt-2 text-gray-600">
                  Date: <b>{invoice.date}</b>
                </p>
              </div>
            </div>

            {/* Customer Info */}
            <div className="bg-gray-50 p-6 rounded-lg mb-8 shadow-inner">
              <h3 className="font-semibold text-gray-700 mb-4">Bill To</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input
                  value={invoice.customer}
                  onChange={(e) =>
                    setInvoice({ ...invoice, customer: e.target.value })
                  }
                  placeholder="Customer name"
                  className="border border-gray-300 rounded-md w-full p-2 focus:ring-2 focus:ring-blue-500"
                />
                <input
                  value={invoice.email}
                  onChange={(e) =>
                    setInvoice({ ...invoice, email: e.target.value })
                  }
                  placeholder="Email address"
                  className="border border-gray-300 rounded-md w-full p-2 focus:ring-2 focus:ring-blue-500"
                />
                <input
                  value={invoice.phone}
                  onChange={(e) =>
                    setInvoice({ ...invoice, phone: e.target.value })
                  }
                  placeholder="Phone number"
                  className="border border-gray-300 rounded-md w-full p-2 focus:ring-2 focus:ring-blue-500"
                />
                <input
                  value={invoice.address}
                  onChange={(e) =>
                    setInvoice({ ...invoice, address: e.target.value })
                  }
                  placeholder="Customer address"
                  className="border border-gray-300 rounded-md w-full p-2 focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>

            {/* Items Table */}
            <div className="overflow-x-auto mb-8">
              <table className="w-full border-collapse text-sm">
                <thead className="bg-blue-50 text-gray-700 uppercase text-xs font-semibold border-b">
                  <tr>
                    <th className="p-3 text-left">Item</th>
                    <th className="p-3 text-center">Qty</th>
                    <th className="p-3 text-center">Price</th>
                    <th className="p-3 text-center">Disc(%)</th>
                    <th className="p-3 text-center">Amount</th>
                    <th className="p-3 text-center">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {items.map((item, i) => (
                    <tr key={i} className="border-b hover:bg-gray-50">
                      <td className="p-2">
                        <input
                          value={item.name}
                          onChange={(e) => handleChange(i, "name", e.target.value)}
                          placeholder="Item description"
                          className="border border-gray-300 rounded-md p-2 w-full"
                        />
                      </td>
                      <td className="p-2 text-center">
                        <input
                          type="number"
                          value={item.qty}
                          onChange={(e) =>
                            handleChange(i, "qty", parseFloat(e.target.value))
                          }
                          className="border border-gray-300 rounded-md p-2 w-16 text-center"
                        />
                      </td>
                      <td className="p-2 text-center">
                        <input
                          type="number"
                          value={item.price}
                          onChange={(e) =>
                            handleChange(i, "price", parseFloat(e.target.value))
                          }
                          className="border border-gray-300 rounded-md p-2 w-20 text-center"
                        />
                      </td>
                      <td className="p-2 text-center">
                        <input
                          type="number"
                          value={item.discount}
                          onChange={(e) =>
                            handleChange(i, "discount", parseFloat(e.target.value))
                          }
                          className="border border-gray-300 rounded-md p-2 w-16 text-center"
                        />
                      </td>
                      <td className="p-2 text-center text-gray-700 font-medium">
                        {(item.qty * item.price * (1 - item.discount / 100)).toFixed(2)}
                      </td>
                      <td className="p-2 text-center">
                        <button
                          onClick={() => removeItem(i)}
                          className="text-red-500 hover:text-red-700"
                        >
                          <Trash2 size={18} />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Add Item Button */}
            <button
              onClick={addItem}
              className="flex items-center bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-all mb-8"
            >
              <Plus size={18} className="mr-2" /> Add Item
            </button>

            {/* Summary Section */}
            <div className="bg-gray-50 p-6 rounded-lg mb-8 shadow-inner">
              <div className="flex justify-between mb-2 text-gray-600">
                <span>Subtotal</span> <b>{subtotal.toFixed(2)}</b>
              </div>
              <div className="flex justify-between mb-2 text-gray-600">
                <span>GST ({invoice.taxRate}%)</span> <b>-{gst.toFixed(2)}</b>
              </div>
              <div className="flex justify-between text-lg font-semibold text-gray-800">
                <span>Total (After GST)</span>
                <span>
                  {invoice.currency} {total.toFixed(2)}
                </span>
              </div>
            </div>

            {/* Extra Details */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
              <div>
                <label className="text-sm text-gray-600">GST (%)</label>
                <input
                  type="number"
                  value={invoice.taxRate}
                  onChange={(e) =>
                    setInvoice({ ...invoice, taxRate: parseFloat(e.target.value) })
                  }
                  className="border border-gray-300 rounded-md w-full p-2 focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="text-sm text-gray-600">Due Date</label>
                <input
                  type="date"
                  value={invoice.dueDate}
                  onChange={(e) =>
                    setInvoice({ ...invoice, dueDate: e.target.value })
                  }
                  className="border border-gray-300 rounded-md w-full p-2 focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="text-sm text-gray-600">Currency</label>
                <select
                  value={invoice.currency}
                  onChange={(e) =>
                    setInvoice({ ...invoice, currency: e.target.value })
                  }
                  className="border border-gray-300 rounded-md w-full p-2 focus:ring-2 focus:ring-blue-500"
                >
                  <option value="NGN">NGN</option>
                  <option value="USD">USD</option>
                  <option value="EUR">EUR</option>
                  <option value="INR">INR</option>
                </select>
              </div>
              <div>
                <label className="text-sm text-gray-600">Status</label>
                <select
                  value={invoice.status}
                  onChange={(e) =>
                    setInvoice({ ...invoice, status: e.target.value })
                  }
                  className="border border-gray-300 rounded-md w-full p-2 focus:ring-2 focus:ring-blue-500"
                >
                  <option value="">Select Status</option>
                  <option value="Draft">Draft</option>
                  <option value="Pending">Pending</option>
                  <option value="Paid">Paid</option>
                  <option value="Overdue">Overdue</option>
                </select>
              </div>
            </div>

            {/* Notes */}
            <div className="mb-8">
              <label className="text-gray-600 font-medium mb-2 block">
                Notes / Payment Info
              </label>
              <textarea
                value={invoice.notes}
                onChange={(e) =>
                  setInvoice({ ...invoice, notes: e.target.value })
                }
                placeholder="Add any notes or terms of service..."
                className="border border-gray-300 rounded-md p-3 w-full focus:ring-2 focus:ring-blue-500"
                rows="3"
              />
            </div>

            {/* Save Button */}
            <div className="flex justify-center">
              <button
                onClick={handleSave}
                disabled={loading}
                className={`bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold flex items-center gap-2 transition-all shadow-md ${
                  loading ? "opacity-50 cursor-not-allowed" : ""
                }`}
              >
                {loading ? "Saving..." : "Save & Continue"}
              </button>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}
