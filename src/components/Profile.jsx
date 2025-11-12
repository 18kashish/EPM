// import { useState, useEffect } from "react";
// import axios from "axios";
// import Button from "./Button";
// import { useDispatch } from "react-redux";

// export default function Profile() {
//   const dispatch = useDispatch();
//   const [isEditable, setIsEditable] = useState(false);
//   const [Profile, setProfile] = useState({
//     name: "",
//     email: "",
//     password: "",
//     __v:"",
//     _id:"",
//     logo: "",
//   });

//   const userId = localStorage.getItem("userId");
//   const token = localStorage.getItem("token");

//   useEffect(() => {
//     console.log("Fetching profile...");
//     getProfile();
//   }, []);

//   const getProfile = async () => {
//     try {
//       const res = await axios.get(
//         `https://invoice-module-dx9o.onrender.com/profiles/${userId}`,
//         { headers: { Authorization: `Bearer ${token}` } }
//       );

//       console.log("Profile API response:", res.data);

//       const data =
//         res.data.userProfile ||
//         res.data.result ||
//         JSON.parse(localStorage.getItem("loginResponse") || "{}").result ||
//         {};

//       setProfile({
//         name: data.name || "",
//         email: data.email || "",
//         password: data.password || "",
//         __v: data.__v || "",
//         _id: data._id || "",
//         logo: data.logo || "",
//       });

//       if (data.logo) localStorage.setItem("profileLogo", data.logo);
//     } catch (err) {
//       console.error("Error fetching profile:", err);
//       const saved = localStorage.getItem("loginResponse");
//       if (saved) {
//         const parsed = JSON.parse(saved).result;
//         console.log("Loaded from localStorage fallback:", parsed);
//         setProfile({
//           name: parsed?.name || "",
//           email: parsed?.email || "",
//           password: parsed?.password || "",
//           __v: parsed?.__v || "",
//           _id: parsed?._id || "",
          
//         });
//       }
//     }



//     const savedImage = localStorage.getItem("profileLogo");
//     if (savedImage) {
//       setProfile((prev) => ({ ...prev, logo: savedImage }));
//     }
//   };

//   const saveProfile = async (e) => {
//     e.preventDefault();
//     try {
//       const res = await axios.patch(
//         `https://invoice-module-dx9o.onrender.com/profiles/${userId}`,
//         Profile,
//         { headers: { Authorization: `Bearer ${token}` } }
//       );
//       console.log("Profile saved successfully:", res.data);
//       alert("Profile saved successfully!");
//       setIsEditable(false);
//     } catch (err) {
//       console.error("Error saving profile:", err);
//       alert("Error saving profile. Check console for details.");
//     }
//   };


//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     if (isEditable) {
//       setProfile((prev) => ({ ...prev, [name]: value }));
//     }
//   };




//   const createProfile = async () => {
//   try {
//     const payload = {
//       name: Profile.name,
//       email: Profile.email,
//       phoneNumber: Profile.phoneNumber || "",
//       businessName: Profile.businessName || "",
//       contactAddress: Profile.contactAddress || "",
//       logo: Profile.logo || "",
//       website: Profile.website || "",
//       userId: userId,
//     };

//     const res = await axios.post(
//       "https://invoice-module-dx9o.onrender.com/profiles",
//       payload,
//       { headers: { Authorization: `Bearer ${token}` } }
//     );

//     console.log("Profile created successfully:", res.data);
//     alert("Profile created successfully!");
//     getProfile(); // refresh the profile view
//   } catch (err) {
//     console.error("Error creating profile:", err);
//     alert("Error creating profile. Check console for details.");
//   }
// };

// const deleteProfile = async () => {
//   if (!window.confirm("Are you sure you want to delete your profile?")) return;

//   try {
//     const res = await axios.delete(
//       `https://invoice-module-dx9o.onrender.com/profiles/${userId}`,
//       { headers: { Authorization: `Bearer ${token}` } }
//     );

//     console.log("Profile deleted successfully:", res.data);
//     alert("Profile deleted successfully!");
//     setProfile({
//       name: "",
//       email: "",
//       password: "",
//       __v: "",
//       _id: "",
//       logo: "",
//     });
//   } catch (err) {
//     console.error("Error deleting profile:", err);
//     alert("Error deleting profile. Check console for details.");
//   }
// };






//   return (
//     <div className="flex">
//       <div className="flex flex-col w-full bg-white overflow-y-auto p-2">
//         <form className="bg-white shadow-lg rounded-xl p-2 w-full max-w-7xl mx-auto">
//           <div className="relative mb-8 text-center">
//             <h1 className="font-product text-2xl font-bold bg-black text-white py-1 rounded-md">
//               Profile
//               <p className="text-sm font-medium text-white mt-0">
//                 View or edit your personal information
//               </p>
//             </h1>

//             <div className="absolute px-[510px] py-1">
//               <div className="relative w-28 h-28">
//                 <img
//                   src={
//                     Profile.logo ||
//                     "https://cdn.pixabay.com/photo/2023/02/18/11/00/icon-7797704_640.png"
//                   }
//                   alt="Profile"
//                   className="w-28 h-28 rounded-full object-cover border-4 border-white shadow-md"
//                 />

//                 {isEditable && (
//                   <>
//                     <label
//                       htmlFor="imageUpload"
//                       className="absolute -my-6 font-extrabold mx-20 bg-blue-600 text-white rounded-full w-7 h-7 flex items-center justify-center cursor-pointer"
//                     >
//                       +
//                     </label>

//                     {Profile.logo && (
//                       <button
//                         type="button"
//                         onClick={() => {
//                           setProfile((prev) => ({ ...prev, logo: "" }));
//                           localStorage.removeItem("profileLogo");
//                           dispatch({ type: "DELETE_USER_IMAGE" });
//                         }}
//                         className="absolute -my-6 font-extrabold bg-red-600 text-white rounded-full w-7 h-7 flex items-center justify-center cursor-pointer"
//                       >
//                         ×
//                       </button>
//                     )}

//                     <input
//                       id="imageUpload"
//                       type="file"
//                       accept="image/*"
//                       className="hidden"
//                       onChange={(e) => {
//                         const file = e.target.files[0];
//                         if (file) {
//                           const reader = new FileReader();
//                           reader.onload = (event) => {
//                             const imageBase64 = event.target.result;
//                             setProfile((prev) => ({
//                               ...prev,
//                               logo: imageBase64,
//                             }));
//                             localStorage.setItem("profileLogo", imageBase64);
//                             dispatch({
//                               type: "SET_USER_IMAGE",
//                               payload: imageBase64,
//                             });
//                           };
//                           reader.readAsDataURL(file);
//                         }
//                       }}
//                     />
//                   </>
//                 )}
//               </div>
//             </div>

//             <Button isEditable={isEditable} setIsEditable={setIsEditable} />
//           </div>

          
//           <div className="space-y-8">
//             <div className="flex flex-col md:flex-row gap-8">
//               <div className="flex-1">
//                 <label className="block font-product text-lg mb-2 my-[100px]">
//                   Full Name
//                 </label>
//                 <input
//                   type="text"
//                   name="name"
//                   value={Profile.name}
//                   onChange={handleChange}
//                   disabled={!isEditable}
//                   className={`border border-gray-400 rounded-md w-full px-3 py-2 ${
//                     isEditable ? "bg-white" : "bg-gray-100 cursor-not-allowed"
//                   }`}
//                 />
//               </div>

//               <div className="flex-1">
//                 <label className="block font-product text-lg mb-2 my-[100px]">
//                   Email Address
//                 </label>
//                 <input
//                   type="email"
//                   name="email"
//                   value={Profile.email}
//                   onChange={handleChange}
//                   disabled={!isEditable}
//                   className={`border border-gray-400 rounded-md w-full px-3 py-2 ${
//                     isEditable ? "bg-white" : "bg-gray-100 cursor-not-allowed"
//                   }`}
//                 />
//               </div>
//             </div>

        

           

           
//           </div>

//           {isEditable && (
//             <div className="flex justify-center mt-5">
//               <button
//                 type="button"
//                 onClick={saveProfile}
//                 className="w-full md:w-3/4 lg:w-1/2 font-product text-xl text-white bg-blue-600 py-1 rounded-lg flex items-center justify-center gap-2 font-bold"
//               >
//                 Save Changes
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   viewBox="0 0 640 640"
//                   className="w-5"
//                   fill="white"
//                 >
//                   <path d="M530.8 134.1C545.1 144.5 548.3 164.5 537.9 178.8L281.9 530.8C276.4 538.4 267.9 543.1 258.5 543.9C249.1 544.7 240 541.2 233.4 534.6L105.4 406.6C92.9 394.1 92.9 373.8 105.4 361.3C117.9 348.8 138.2 348.8 150.7 361.3L252.2 462.8L486.2 141.1C496.6 126.8 516.6 123.6 530.9 134z" />
//                 </svg>
//               </button>
//             </div>
//           )}


//           <div className="flex justify-center my-4 gap-4">


 
// </div>


//         </form>
//       </div>
//     </div>
//   );
// }










import { useState, useEffect } from "react";
import axios from "axios";
import Button from "./Button";
import { useDispatch } from "react-redux";

export default function Profile() {
  const dispatch = useDispatch();
  const [isEditable, setIsEditable] = useState(false);
  const [Profile, setProfile] = useState({
    name: "",
    email: "",
    logo: "",
  });

  const userId = localStorage.getItem("userId");
  const token = localStorage.getItem("token");

  useEffect(() => {
    getProfile();
  }, []);

  const getProfile = async () => {
    try {
      const res = await axios.get(
        `https://invoice-module-dx9o.onrender.com/profiles/${userId}`,
        { headers: { Authorization: `Bearer ${token}` } }
      );

      const data =
        res.data.userProfile ||
        res.data.result ||
        JSON.parse(localStorage.getItem("loginResponse") || "{}").result ||
        {};

      setProfile({
        name: data.name || "",
        email: data.email || "",
        logo: data.logo || "",
      });

      if (data.logo) localStorage.setItem("profileLogo", data.logo);
    } catch (err) {
      console.error("Error fetching profile:", err);
      const saved = localStorage.getItem("loginResponse");
      if (saved) {
        const parsed = JSON.parse(saved).result;
        setProfile({
          name: parsed?.name || "",
          email: parsed?.email || "",
        });
      }
    }

    const savedImage = localStorage.getItem("profileLogo");
    if (savedImage) {
      setProfile((prev) => ({ ...prev, logo: savedImage }));
    }
  };

  const saveProfile = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.patch(
        `https://invoice-module-dx9o.onrender.com/profiles/${userId}`,
        Profile,
        { headers: { Authorization: `Bearer ${token}` } }
      );
      alert("Profile saved successfully!");
      setIsEditable(false);
    } catch (err) {
      console.error("Error saving profile:", err);
      alert("Error saving profile. Check console for details.");
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (isEditable) {
      setProfile((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        const imageBase64 = event.target.result;
        setProfile((prev) => ({ ...prev, logo: imageBase64 }));
        localStorage.setItem("profileLogo", imageBase64);
        dispatch({ type: "SET_USER_IMAGE", payload: imageBase64 });
      };
      reader.readAsDataURL(file);
    }
  };

  const removeImage = () => {
    setProfile((prev) => ({ ...prev, logo: "" }));
    localStorage.removeItem("profileLogo");
    dispatch({ type: "DELETE_USER_IMAGE" });
  };

  return (
    <div className="flex ">
      <div className="flex flex-col w-full bg-white overflow-y-auto p-4">
        <form className="bg-white shadow-lg rounded-xl p-6 w-full max-w-4xl mx-auto">
          {/* 🌈 Gradient Header Section */}
          <div className="w-full bg-gradient-to-r from-indigo-600 via-purple-700 to-pink-600 text-white rounded-lg shadow-md p-4 mb-8 flex flex-col md:flex-row justify-between items-center relative">
            {/* Edit Button (Left) */}
            <div className="absolute left-6 top-6 md:static md:order-1">
              <Button isEditable={isEditable} setIsEditable={setIsEditable} />
            </div>

            {/* Header Title (Center) */}
            <div className="px-4 text-center md:text-left">
              <h1 className="text-3xl font-bold">Profile</h1>
              <p className="text-sm text-indigo-100">
                View or edit your personal information
              </p>
            </div>

            {/* Profile Image (Right) */}
            <div className="flex flex-col md:order-3 mt-4 md:mt-0">
              <div className="relative w-28 h-24">
                <img
                  src={
                    Profile.logo ||
                    "https://cdn.pixabay.com/photo/2023/02/18/11/00/icon-7797704_640.png"
                  }
                  alt="Profile"
                  className="w-20 h-20 rounded-full object-cover border-4 border-white shadow-md"
                />
                {isEditable && (
                  <div className="absolute bottom-1 -left-2  flex gap-8">
                    <label
                      htmlFor="imageUpload"
                      className="inline-flex items-center justify-center bg-blue-600 text-white rounded-full w-8 h-8 cursor-pointer hover:bg-blue-700"
                      title="Upload"
                    >
                      +
                    </label>
                    {Profile.logo && (
                      <button
                        type="button"
                        onClick={removeImage}
                        className="inline-flex items-center justify-center bg-red-600 text-white rounded-full w-8 h-8 hover:bg-red-700"
                        title="Remove"
                      >
                        ×
                      </button>
                    )}
                    <input
                      id="imageUpload"
                      type="file"
                      accept="image/*"
                      className="hidden"
                      onChange={handleImageChange}
                    />
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* 🔧 Form Fields */}
          <div className="space-y-8 mt-20">
            <div className="flex flex-col md:flex-row gap-8">
              <div className="flex-1">
                <label className="block text-lg font-semibold mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={Profile.name}
                  onChange={handleChange}
                  disabled={!isEditable}
                  className={`border border-gray-400 rounded-md w-full px-3 py-2 ${
                    isEditable ? "bg-white" : "bg-gray-100 cursor-not-allowed"
                  }`}
                />
              </div>

              <div className="flex-1">
                <label className="block text-lg font-semibold mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  value={Profile.email}
                  onChange={handleChange}
                  disabled={!isEditable}
                  className={`border border-gray-400 rounded-md w-full px-3 py-2 ${
                    isEditable ? "bg-white" : "bg-gray-100 cursor-not-allowed"
                  }`}
                />
              </div>
            </div>
          </div>

          {isEditable && (
            <div className="flex justify-center mt-6">
              <button
                type="button"
                onClick={saveProfile}
                className="w-full md:w-3/4 lg:w-1/2 text-xl text-white bg-blue-600 py-2 rounded-lg flex items-center justify-center gap-2 font-bold hover:bg-blue-700 transition-all duration-200"
              >
                Save Changes
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 640 640"
                  className="w-5"
                  fill="white"
                >
                  <path d="M530.8 134.1C545.1 144.5 548.3 164.5 537.9 178.8L281.9 530.8C276.4 538.4 267.9 543.1 258.5 543.9C249.1 544.7 240 541.2 233.4 534.6L105.4 406.6C92.9 394.1 92.9 373.8 105.4 361.3C117.9 348.8 138.2 348.8 150.7 361.3L252.2 462.8L486.2 141.1C496.6 126.8 516.6 123.6 530.9 134z" />
                </svg>
              </button>
            </div>
          )}
        </form>
      </div>
    </div>
  );
}
