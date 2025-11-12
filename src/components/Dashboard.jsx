// // import axios from "axios";
// // import { useNavigate } from "react-router-dom";
// // import { useState,useEffect } from "react";

// // import InvoiceButton from "../Invoice";
// // import Div from "./Div";
// // export default function Dashboard(){
// //     const [clients, setClients] = useState([]);
// //   const [roles, setRoles] = useState([]);
// //   const [ss, setSs] = useState([]);
// //   const navigate=useNavigate();




// // // useEffect(()=>{

// // // const Submit = async()=>{
// // //     console.log("1");
// // //      const token=localStorage.getItem('token') || "Not Found";

// // //     console.log("token after login",token);
// // //     try{
// // //         console.log("in try");
// // //           const def= await axios.get("http://13.60.180.240/api/api/roles",
                                                       
// // //            {
// // //           headers:{
// // //             Authorization:`Bearer ${token}`
// // //           },
// // //         }
// // //           );
          

// // //           const wer=await axios.get("http://13.60.180.240/api/api/clients",
// // //         {
// // //           headers:{
// // //             Authorization:`Bearer ${token}`
// // //           },
// // //         }
// // //       );



// //     //   const rty=await axios.get("http://13.60.180.240/api/api/teams",
// //     //     {
// //     //       headers:{
// //     //         Authorization:`Bearer ${token}`
// //     //       },
// //     //     }
// //     //   );




      



// //       // const uio=await axios.get("http://13.60.180.240/api/api/getactivity-tag"  ,
    

// //       //   {
// //       //     headers:{
// //       //       Authorization:`Bearer ${token}`
// //       //     },
// //       //   }
// //       // );

// //       //       const set=def.data.data;
// //       // const set1=wer.data.data;
// //       // const set2=uio.data.data;
          
      

// //       // setRoles(set);
// //       // setClients(set1);
// //       // setSs(set2);


// // //           console.log("Fetched roles:", set); 
// // //         console.log("Fetched clients:", set1);
// // //         console.log("Fetched activities:",set2);


// // //         }catch(e){
// // //         console.error("Login Failed",e);
// // //         // alert(`network error`);
// // //         navigate("/login")
        
// // //     }
// // // }
// // // Submit();

// // // },[navigate]);






// //     return(
// //         <div className="flex">

       
// //         {/* <div>
// //         <div className="w-[1840px] h-[170px] bg-black rounded-xl transform translate-x-10 translate-y-6 overflow-hidden">

// // <div className="flex">
// //         <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640" className="w-[40px] transform translate-x-20 translate-y-10" fill="white">
// //         <path d="M256 144C256 117.5 277.5 96 304 96L336 96C362.5 96 384 117.5 384 144L384 496C384 522.5 362.5 544 336 544L304 544C277.5 544 256 522.5 256 496L256 144zM64 336C64 309.5 85.5 288 112 288L144 288C170.5 288 192 309.5 192 336L192 496C192 522.5 170.5 544 144 544L112 544C85.5 544 64 522.5 64 496L64 336zM496 160L528 160C554.5 160 576 181.5 576 208L576 496C576 522.5 554.5 544 528 544L496 544C469.5 544 448 522.5 448 496L448 208C448 181.5 469.5 160 496 160z"/></svg>
// //        <p className="transform translate-x-[100px] translate-y-10 text-white font-bold text-3xl">Role Management</p> 
// //        </div>
// //        <p className="text-white transform translate-x-[85px] translate-y-14 text-xl">View, Edit and manage user roles</p>

       
// // </div>
// //          */}
// //    <div className="flex flex-col w-full">
// // <Div title={"Invoice"} title1={"Dashboard"}/>



// // <div className=" flex flex-col bg-white shadow-lg rounded-3xl w-auto p-6 mx-4  h-auto ">
// //       <div className="  flex justify-between"><h1 className="font-product  text-xl flex bg-[#f18745] text-white w-[310px] items-center justify-center h-14 rounded-xl py-3">Download Selected Receipts</h1>
// //       <div>
// //       <InvoiceButton onGenerate={() => console.log("Invoice generation triggered")} /></div></div>
      
      
   



// // <div className=" relative w-full my-4 px-4 overflow-y-auto h-[440px]">
// //       <table className="table-auto border-collapse w-full px-3">
// //         <thead>
// //           <tr className="sticky top-0 z-10  bg-black text-xl text-left font-product text-white ">
// //             <th className="p-2">ID</th>
// //             <th className="p-2">Order ID</th>
// //             <th className="p-2">Status</th>
// //             <th className="p-2">Amount</th>
// //             <th className="p-2">Email</th>
// //             <th className="p-2">Contact</th>
// //             <th className="p-2 ">Receipt</th>
// //           </tr>
// //         </thead>
// //         {/* <tbody>
// //           {clients.map((client, index) => (
// //             <tr key={client.id} className="text-lg even:bg-gray-200 font-product">
// //               <td className="p-2">{roles[index]?roles[index].id:"-"}</td>
// //               <td className="p-2">{client.id}</td>
// //               <td className="p-2">
// //                 {roles[index] ? roles[index].name : "-"}
// //               </td>
// //               <td className="p-2">
// //                 {ss[index] ? ss[index].name : "-"}
// //               </td>
// //               <td className="p-2">
// //               {client.client_email}

// //               </td>
// //               <td className="p-2">
// //               {client.client_number}

// //               </td>
// //               <td className="p-2">
// //          <button className=" text-red-400 font-product w-[154px] h-[45px] rounded-lg font-bold transform -translate-x-8">Download</button>
// //         </td>
// //             </tr>
// //           ))}
// //         </tbody> */}
// //       </table>
// //     </div>
    
    
// //     </div>
// // </div>
// // </div>
// //     )
// // }



// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";
// import InvoiceButton from "../Invoice";
// import Div from "./Div";
// import jsPDF from "jspdf";
// import html2canvas from "html2canvas";

// export default function Dashboard() {
//   const [loading, setLoading] = useState(true); // ✅ shows loader while fetching
//   const [invoices, setInvoices] = useState([]);
//   const [selectedInvoice, setSelectedInvoice] = useState(null);
//   const [showModal, setShowModal] = useState(false);
//   const navigate = useNavigate();

//   // 🔹 Fetch all invoices for logged-in user
//   useEffect(() => {
//     const fetchInvoices = async () => {
//       try {
//         const token = localStorage.getItem("token");
//         const userId = localStorage.getItem("userId");

//         if (!userId) {
//           console.error("User not logged in");
//           navigate("/login");
//           return;
//         }

//         const res = await axios.get(
//           `https://invoice-module-dx9o.onrender.com/invoices?searchQuery=${userId}`,
//           { headers: { Authorization: `Bearer ${token}` } }
//         );

//         let invoiceData = Array.isArray(res.data.data) ? res.data.data : [];

//         // 🔹 Ensure client names are populated
//         const updatedInvoices = await Promise.all(
//           invoiceData.map(async (inv) => {
//             if (!inv.client && inv.clientId) {
//               try {
//                 const clientRes = await axios.get(
//                   `https://invoice-module-dx9o.onrender.com/clients/${inv.clientId}`,
//                   { headers: { Authorization: `Bearer ${token}` } }
//                 );
//                 inv.client = clientRes.data;
//               } catch (err) {
//                 inv.client = { name: "N/A" };
//               }
//             }
//             return inv;
//           })
//         );

//         setInvoices(updatedInvoices);
//       } catch (err) {
//         console.error("Failed to fetch invoices:", err);
//         navigate("/login");
//       } finally {
//         setLoading(false); // ✅ stop showing loader
//       }
//     };

//     fetchInvoices();
//   }, [navigate]);

//   // 🔹 View full invoice details
//   const handleViewInvoice = async (invoiceId) => {
//     try {
//       const token = localStorage.getItem("token");
//       const res = await axios.get(
//         `https://invoice-module-dx9o.onrender.com/invoices/${invoiceId}`,
//         { headers: { Authorization: `Bearer ${token}` } }
//       );

//       let invoice = res.data;

//       if (!invoice.client && invoice.clientId) {
//         try {
//           const clientRes = await axios.get(
//             `https://invoice-module-dx9o.onrender.com/clients/${invoice.clientId}`,
//             { headers: { Authorization: `Bearer ${token}` } }
//           );
//           invoice.client = clientRes.data;
//         } catch (err) {
//           invoice.client = { name: "N/A", email: "N/A", phone: "N/A", address: "N/A" };
//         }
//       }

//       setSelectedInvoice(invoice);
//       setShowModal(true);
//     } catch (err) {
//       console.error("Failed to fetch invoice details:", err);
//       alert("Could not fetch invoice details");
//     }
//   };

//   // 🔹 Download Invoice as PDF (Frontend Generated)
//   const handleDownloadPDF = async (invoiceId) => {
//     try {
//       const element = document.getElementById("invoice-details");
//       if (!element) {
//         alert("No invoice content to download!");
//         return;
//       }

//       const canvas = await html2canvas(element);
//       const imgData = canvas.toDataURL("image/png");
//       const pdf = new jsPDF("p", "mm", "a4");

//       const imgWidth = 210;
//       const pageHeight = 295;
//       const imgHeight = (canvas.height * imgWidth) / canvas.width;
//       let heightLeft = imgHeight;
//       let position = 0;

//       pdf.addImage(imgData, "PNG", 0, position, imgWidth, imgHeight);
//       heightLeft -= pageHeight;

//       while (heightLeft >= 0) {
//         position = heightLeft - imgHeight;
//         pdf.addPage();
//         pdf.addImage(imgData, "PNG", 0, position, imgWidth, imgHeight);
//         heightLeft -= pageHeight;
//       }

//       pdf.save(`invoice-${invoiceId}.pdf`);
//       alert("Invoice downloaded successfully!");
//     } catch (err) {
//       console.error("Error generating PDF:", err);
//       alert("Error generating PDF");
//     }
//   };

//   // 🔹 Delete Invoice
//   const handleDeleteInvoice = async (invoiceId) => {
//     if (!window.confirm("Are you sure you want to delete this invoice?")) return;
//     try {
//       const token = localStorage.getItem("token");
//       await axios.delete(
//         `https://invoice-module-dx9o.onrender.com/invoices/${invoiceId}`,
//         { headers: { Authorization: `Bearer ${token}` } }
//       );

//       setInvoices(invoices.filter((inv) => inv._id !== invoiceId));
//       setShowModal(false);
//       alert("Invoice deleted successfully!");
//     } catch (err) {
//       console.error("Failed to delete invoice:", err);
//       alert("Error deleting invoice");
//     }
//   };

//   // 🔹 Update Invoice
//   const handleUpdateInvoice = async (invoiceId) => {
//     try {
//       const token = localStorage.getItem("token");
//       const updatedStatus = prompt("Enter new status (e.g., Paid, Pending):");
//       if (!updatedStatus) return;

//       await axios.patch(
//         `https://invoice-module-dx9o.onrender.com/invoices/${invoiceId}`,
//         { status: updatedStatus },
//         { headers: { Authorization: `Bearer ${token}` } }
//       );

//       alert("Invoice updated successfully!");
//       setShowModal(false);

//       const res = await axios.get(
//         `https://invoice-module-dx9o.onrender.com/invoices?searchQuery=${localStorage.getItem(
//           "userId"
//         )}`,
//         { headers: { Authorization: `Bearer ${token}` } }
//       );
//       setInvoices(Array.isArray(res.data.data) ? res.data.data : []);
//     } catch (err) {
//       console.error("Failed to update invoice:", err);
//       alert("Error updating invoice");
//     }
//   };

//   // ✅ Show loader while data is being fetched
//   if (loading) {
//     return (
//       <div className="flex justify-center items-center h-screen bg-gray-100">
//         <div className="flex justify-center items-center h-screen text-lg font-semibold">
//           Loading invoices...
//         </div>
//       </div>
//     );
//   }

//   // ✅ Render only after loading = false
//   return (
//     <div className="flex flex-col w-full bg-gray-100 min-h-screen">
//       <Div title="Invoice" title1="Dashboard" />

//       {/* ====== Invoice Table ====== */}
//       <div className="flex flex-col bg-white shadow-lg rounded-3xl w-auto p-6 mx-4 mt-6">
//         <div className="flex justify-between items-center mb-4">
//           <h1 className="font-product text-xl flex bg-[#f18745] text-white w-[310px] items-center justify-center h-14 rounded-xl">
//             Download Selected Receipts
//           </h1>
//           <InvoiceButton onClick={() => navigate("/Invoices")} />
//         </div>

//         <div className="relative w-full my-4 px-4 overflow-y-auto h-[440px]">
//           <table className="table-auto border-collapse w-full">
//             <thead>
//               <tr className="sticky top-0 z-10 bg-black text-xl text-left font-product text-white">
//                 <th className="p-2">Invoice ID</th>
//                 <th className="p-2">Client Name</th>
//                 <th className="p-2">Status</th>
//                 <th className="p-2">Total</th>
//                 <th className="p-2">Currency</th>
//                 <th className="p-2">Due Date</th>
//                 <th className="p-2 text-center">Action</th>
//               </tr>
//             </thead>
//             <tbody>
//               {invoices.length === 0 ? (
//                 <tr>
//                   <td colSpan="7" className="text-center py-4 text-gray-500">
//                     No invoices found.
//                   </td>
//                 </tr>
//               ) : (
//                 invoices.map((inv) => (
//                   <tr key={inv._id} className="text-lg even:bg-gray-200 font-product">
//                     <td className="p-2">{inv.invoiceNumber || inv._id}</td>
//                     <td className="p-2">{inv.client?.name || "N/A"}</td>
//                     <td className="p-2">{inv.status}</td>
//                     <td className="p-2">{inv.total}</td>
//                     <td className="p-2">{inv.currency}</td>
//                     <td className="p-2">
//                       {inv.dueDate ? new Date(inv.dueDate).toLocaleDateString() : "N/A"}
//                     </td>
//                     <td className="p-2 text-center">
//                       <button
//                         onClick={() => handleViewInvoice(inv._id)}
//                         className="text-blue-600 hover:text-blue-800 font-semibold underline"
//                       >
//                         View
//                       </button>
//                     </td>
//                   </tr>
//                 ))
//               )}
//             </tbody>
//           </table>
//         </div>
//       </div>

//       {/* ====== Invoice Details Modal ====== */}
//       {showModal && selectedInvoice && (
//         <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
//           <div
//             id="invoice-details"
//             className="bg-white rounded-2xl w-[700px] max-h-[90vh] overflow-y-auto p-6 shadow-xl"
//           >
//             <h2 className="text-2xl font-bold mb-2">Invoice Details</h2>
//             <div className="space-y-1 mb-4">
//               <p><b>Client Name:</b> {selectedInvoice.client?.name || "N/A"}</p>
//               <p><b>Email:</b> {selectedInvoice.client?.email || "N/A"}</p>
//               <p><b>Phone:</b> {selectedInvoice.client?.phone || "N/A"}</p>
//               <p><b>Address:</b> {selectedInvoice.client?.address || "N/A"}</p>
//             </div>

//             <p><b>Status:</b> {selectedInvoice.status}</p>
//             <p>
//               <b>Due Date:</b>{" "}
//               {selectedInvoice.dueDate
//                 ? new Date(selectedInvoice.dueDate).toLocaleDateString()
//                 : "N/A"}
//             </p>
//             <p>
//               <b>Total:</b> {selectedInvoice.currency} {selectedInvoice.total}
//             </p>
//             <p><b>Notes:</b> {selectedInvoice.notes}</p>

//             <div className="flex justify-end gap-3 mt-6">
//               <button
//                 onClick={() => handleDownloadPDF(selectedInvoice._id)}
//                 className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg"
//               >
//                 Download PDF
//               </button>

//               <button
//                 onClick={() => handleUpdateInvoice(selectedInvoice._id)}
//                 className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg"
//               >
//                 Update Invoice
//               </button>

//               <button
//                 onClick={() => handleDeleteInvoice(selectedInvoice._id)}
//                 className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg"
//               >
//                 Delete Invoice
//               </button>

//               <button
//                 onClick={() => setShowModal(false)}
//                 className="bg-gray-500 hover:bg-gray-600 text-white px-4 py-2 rounded-lg"
//               >
//                 Close
//               </button>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }




// src/components/Dashboard.jsx
import React, { useEffect, useState, useMemo } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Div from "./Div";
import { ArrowUpDown } from "lucide-react";
import jsPDF from "jspdf";

export default function Dashboard() {
  const [invoices, setInvoices] = useState([]);
  const [filterStatus, setFilterStatus] = useState("all");
  const [sortOrder, setSortOrder] = useState("desc");
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [selectedInvoice, setSelectedInvoice] = useState(null);

  const userId = localStorage.getItem("userId");
  const navigate = useNavigate();

  // 🖼️ Logos
  const companyLogos = {
    TAS: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRALHKUOmkKn3hiy3rSCE0ZjWhK_dDFoD_xbg&s",
    Avsar: "https://avsar.digital/wp-content/uploads/2024/08/Avsar-logo.png",
    XYZ: "https://upload.wikimedia.org/wikipedia/commons/d/d8/Placeholder_logo.png",
  };

  // 🔹 Fetch invoices
  useEffect(() => {
    const fetchInvoices = async () => {
      try {
        const res = await axios.get(
          `https://invoice-module-dx9o.onrender.com/invoices?searchQuery=${userId}`
        );
        const data = Array.isArray(res.data.data) ? res.data.data : [];
        setInvoices(data);
      } catch (err) {
        console.error("Error fetching invoices:", err);
        setInvoices([]);
      } finally {
        setLoading(false);
      }
    };
    if (userId) fetchInvoices();
  }, [userId]);

  // 🔹 Filter + Sort + Search
  const filteredInvoices = useMemo(() => {
    if (!Array.isArray(invoices)) return [];
    let data = [...invoices];

    if (searchTerm.trim()) {
      data = data.filter(
        (inv) =>
          inv.client?.name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
          inv._id?.toString().includes(searchTerm)
      );
    }

    if (filterStatus !== "all") {
      data = data.filter(
        (inv) => inv.status?.toLowerCase() === filterStatus.toLowerCase()
      );
    }

    data.sort((a, b) => {
      const aTotal = a.total || 0;
      const bTotal = b.total || 0;
      return sortOrder === "asc" ? aTotal - bTotal : bTotal - aTotal;
    });

    return data;
  }, [invoices, searchTerm, filterStatus, sortOrder]);

  const totalAmount = filteredInvoices.reduce(
    (acc, curr) => acc + (curr.total || 0),
    0
  );
  const paidInvoices = filteredInvoices.filter(
    (i) => i.status?.toLowerCase() === "paid"
  ).length;

  // 🔹 Helpers
  const handleViewInvoice = (id) => {
    const invoice = invoices.find((inv) => inv._id === id);
    setSelectedInvoice(invoice);
    setShowModal(true);
  };

  // Convert remote logo to Base64 for jsPDF
  const getBase64ImageFromURL = async (url) => {
    const res = await fetch(url);
    const blob = await res.blob();
    return new Promise((resolve) => {
      const reader = new FileReader();
      reader.onloadend = () => resolve(reader.result);
      reader.readAsDataURL(blob);
    });
  };

  // 🧾 Download PDF
  const handleDownloadPDF = async (id) => {
    const invoice = invoices.find((inv) => inv._id === id);
    if (!invoice) return alert("Invoice not found");

    const doc = new jsPDF();

    // Logo
    const company = invoice.company || "TAS";
    const companyLogo = companyLogos[company] || companyLogos["XYZ"];
    const logoBase64 = await getBase64ImageFromURL(companyLogo);
    doc.addImage(logoBase64, "PNG", 150, 10, 40, 20);

    // Header
    doc.setFontSize(22);
    doc.text("Invoice", 20, 20);

    // Company Info
    doc.setFontSize(11);
    doc.text("Marketing Agency", 20, 35);
    doc.text("John Doe", 20, 42);
    doc.text("www.company.com", 20, 49);
    doc.text("2 Canal Park, Cambridge, MA", 20, 56);
    doc.text("888-999-1111", 20, 63);
    doc.text("example@company.com", 20, 70);

    // Client Info
    doc.text("Bill To:", 20, 85);
    doc.text(invoice.client?.name || "Client Name", 20, 92);
    doc.text(invoice.client?.address || "Client Address", 20, 99);
    doc.text(invoice.client?.email || "client@email.com", 20, 106);

    // Invoice details
    doc.text(`Invoice No: ${invoice._id}`, 140, 85);
    doc.text(
      `Invoice Date: ${
        invoice.createdAt
          ? new Date(invoice.createdAt).toLocaleDateString()
          : "N/A"
      }`,
      140,
      92
    );
    doc.text(
      `Due Date: ${
        invoice.dueDate
          ? new Date(invoice.dueDate).toLocaleDateString()
          : "N/A"
      }`,
      140,
      99
    );

    // Table Header
    doc.setFillColor(40, 40, 40);
    doc.setTextColor(255, 255, 255);
    doc.rect(20, 120, 170, 10, "F");
    doc.text("ID", 25, 127);
    doc.text("Description", 55, 127);
    doc.text("Quantity", 130, 127);
    doc.text("Price", 165, 127);

    // Table Body
    doc.setTextColor(0, 0, 0);
    doc.rect(20, 130, 170, 15);
    doc.text("01", 25, 139);
    doc.text(invoice.description || "Service / Product", 55, 139);
    doc.text("1", 135, 139);
    doc.text(`${invoice.total?.toFixed(2) || "0.00"}`, 165, 139, {
      align: "right",
    });

    // Summary
    const subtotal = invoice.total || 0;
    const tax = subtotal * 0.18; // 18% tax
    const total = subtotal + tax;

    doc.text(`Subtotal: ₹${subtotal.toFixed(2)}`, 140, 165);
    doc.text(`Tax (18%): ₹${tax.toFixed(2)}`, 140, 172);
    doc.text(`Total: ₹${total.toFixed(2)}`, 140, 179);

    // Notes
    doc.rect(20, 160, 100, 30);
    doc.text("Notes:", 25, 168);
    doc.text(invoice.notes || "Any additional comments...", 25, 176);

    // Footer
    doc.setFontSize(9);
    doc.text(
      "This invoice was created using the HubSpot-style Invoice Generator",
      20,
      200
    );

    // Save
    doc.save(`invoice_${invoice._id}.pdf`);
  };

  const handleUpdateInvoice = (id) => navigate(`/edit-invoice/${id}`);

  const handleDeleteInvoice = async (id) => {
    if (!window.confirm("Are you sure you want to delete this invoice?")) return;
    try {
      await axios.delete(
        `https://invoice-module-dx9o.onrender.com/invoices/${id}`
      );
      setInvoices((prev) => prev.filter((inv) => inv._id !== id));
      setShowModal(false);
      alert("Invoice deleted successfully!");
    } catch (err) {
      console.error(err);
      alert("Failed to delete invoice.");
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <p className="text-gray-500 text-xl animate-pulse">
          Loading invoices...
        </p>
      </div>
    );
  }

  return (
    <>
      <Div title={"Invoice Dashboard"} />
      <div className="flex bg-gray-50 min-h-screen">
        <div className="flex-1 p-8">
          {/* Filters */}
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-3xl font-bold text-gray-800">Invoices</h1>
            <div className="flex gap-2">
              <input
                type="text"
                placeholder="Search by client or invoice ID..."
                className="border px-4 py-2 rounded-xl shadow-sm focus:ring-2 focus:ring-blue-400 w-72"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <button
                className="flex items-center gap-2 px-4 py-2 bg-blue-100 text-blue-700 rounded-xl hover:bg-blue-200 transition-all"
                onClick={() =>
                  setSortOrder((prev) => (prev === "asc" ? "desc" : "asc"))
                }
              >
                <ArrowUpDown size={18} /> Sort:{" "}
                {sortOrder === "asc" ? "Low → High" : "High → Low"}
              </button>
              <select
                className="border px-3 py-2 rounded-xl shadow-sm text-gray-700 focus:ring-2 focus:ring-blue-400"
                value={filterStatus}
                onChange={(e) => setFilterStatus(e.target.value)}
              >
                <option value="all">All Status</option>
                <option value="paid">Paid</option>
                <option value="pending">Pending</option>
                <option value="draft">Draft</option>
                <option value="overdue">Overdue</option>
              </select>
            </div>
          </div>

          {/* Summary */}
          <div className="bg-white p-5 rounded-2xl shadow-sm border mb-8 grid grid-cols-3 gap-4">
            <div className="flex flex-col items-center text-center">
              <h3 className="text-gray-600 font-semibold">Total Invoices</h3>
              <p className="text-2xl font-bold">{filteredInvoices.length}</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <h3 className="text-gray-600 font-semibold">Paid Invoices</h3>
              <p className="text-2xl font-bold text-green-600">
                {paidInvoices}
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <h3 className="text-gray-600 font-semibold">Total Amount</h3>
              <p className="text-2xl font-bold text-blue-600">
                ₹{totalAmount.toLocaleString()}
              </p>
            </div>
          </div>

          {/* Invoice Table */}
          <div className="bg-white rounded-2xl shadow-sm border overflow-hidden">
            <table className="w-full text-left border-collapse">
              <thead className="bg-blue-50 border-b">
                <tr>
                  <th className="px-6 py-3 text-gray-700 font-semibold">#</th>
                  <th className="px-6 py-3 text-gray-700 font-semibold">
                    Client
                  </th>
                  <th className="px-6 py-3 text-gray-700 font-semibold">
                    Date
                  </th>
                  <th className="px-6 py-3 text-gray-700 font-semibold">
                    Total
                  </th>
                  <th className="px-6 py-3 text-gray-700 font-semibold">
                    Status
                  </th>
                  <th className="px-6 py-3 text-gray-700 font-semibold text-center">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                {filteredInvoices.map((invoice, i) => (
                  <tr
                    key={invoice._id || i}
                    className="hover:bg-gray-100 transition-all"
                  >
                    <td className="px-6 py-3">{i + 1}</td>
                    <td className="px-6 py-3 font-medium">
                      {invoice.client?.name}
                    </td>
                    <td className="px-6 py-3">
                      {invoice.createdAt
                        ? new Date(invoice.createdAt).toLocaleDateString()
                        : "N/A"}
                    </td>
                    <td className="px-6 py-3 font-semibold">
                      ₹{(invoice.total || 0).toLocaleString()}
                    </td>
                    <td
                      className={`px-6 py-3 font-semibold ${
                        invoice.status?.toLowerCase() === "paid"
                          ? "text-green-600"
                          : invoice.status?.toLowerCase() === "pending"
                          ? "text-yellow-600"
                          : "text-red-500"
                      }`}
                    >
                      {invoice.status || "N/A"}
                    </td>
                    <td className="px-6 py-3 text-center">
                      <button
                        onClick={() => handleViewInvoice(invoice._id)}
                        className="text-blue-600 underline font-semibold"
                      >
                        View
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Modal */}
      {showModal && selectedInvoice && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white rounded-2xl w-[700px] max-h-[90vh] overflow-y-auto p-6 shadow-xl">
            <h2 className="text-2xl font-bold mb-4">Invoice Details</h2>
            <div className="space-y-1 mb-4">
              <p>
                <b>Client Name:</b> {selectedInvoice.client?.name || "N/A"}
              </p>
              <p>
                <b>Email:</b> {selectedInvoice.client?.email || "N/A"}
              </p>
              <p>
                <b>Phone:</b> {selectedInvoice.client?.phone || "N/A"}
              </p>
              <p>
                <b>Address:</b> {selectedInvoice.client?.address || "N/A"}
              </p>
            </div>
            <p>
              <b>Status:</b> {selectedInvoice.status}
            </p>
            <p>
              <b>Due Date:</b>{" "}
              {selectedInvoice.dueDate
                ? new Date(selectedInvoice.dueDate).toLocaleDateString()
                : "N/A"}
            </p>
            <p>
              <b>Total:</b> {selectedInvoice.currency} {selectedInvoice.total}
            </p>
            <p>
              <b>Notes:</b> {selectedInvoice.notes}
            </p>

            <div className="flex justify-end gap-3 mt-6">
              <button
                onClick={() => handleDownloadPDF(selectedInvoice._id)}
                className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg"
              >
                Download PDF
              </button>
              <button
                onClick={() => handleUpdateInvoice(selectedInvoice._id)}
                className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg"
              >
                Edit Invoice
              </button>
              <button
                onClick={() => handleDeleteInvoice(selectedInvoice._id)}
                className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg"
              >
                Delete Invoice
              </button>
              <button
                onClick={() => setShowModal(false)}
                className="bg-gray-500 hover:bg-gray-600 text-white px-4 py-2 rounded-lg"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
