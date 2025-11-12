import React from 'react'
function Mange() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
  <div className="flex flex-col justify-center items-center bg-white shadow-2xl rounded-2xl p-10 space-y-4 w-[600px]">
    <h1 className="text-center text-3xl font-bold mb-4">Add New Employee</h1>
    <form className="space-y-4 w-full max-w-2xl mx-auto">
  <div className="flex space-x-4 w-full">
    <div className="w-1/2">
      <label htmlFor="fullName" className="block text-sm font-medium text-start">Full Name</label>
      <input
        id="fullName"
        type="text"
        name="fullName"
        className="mt-1 w-full border rounded px-3 py-2 shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        required
      />
    </div>
    <div className="w-1/2">
      <label htmlFor="phone" className="block text-sm font-medium text-start">Phone Number</label>
      <input
        id="phone"
        type="tel"
        name="phone"
        placeholder="+91"
        className="mt-1 w-full border rounded px-3 py-2 shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        required
      />
    </div>
  </div>
  <div className="flex space-x-4 w-full">
    <div className="w-1/2">
      <label htmlFor="email" className="block text-sm font-medium text-start">Email Address</label>
      <input
        id="email"
        type="email"
        name="email"
        className="mt-1 w-full border rounded px-3 py-2 shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        required
      />
    </div>
    <div className="w-1/2">
      <label htmlFor="password" className="block text-sm font-medium text-start">Password</label>
      <input
        id="password"
        type="password"
        name="password"
        className="mt-1 w-full border rounded px-3 py-2 shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        required
      />
    </div>
  </div>
  <div className="flex space-x-4 w-full">
    <div className="w-1/2">
      <label htmlFor="address" className="block text-sm font-medium text-start">Home Address</label>
      <input
        id="address"
        type="text"
        name="address"
        className="mt-1 w-full border rounded px-3 py-2 shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        required
      />
    </div>
    <div className="w-1/2">
      <label htmlFor="role" className="block text-sm font-medium text-start">Select Role</label>
      <select
        id="role"
        name="role"
        className="mt-1 w-full h-10 text-base px-3 py-2 rounded border shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        <option>Super Admin</option>
        <option>Admin</option>
        <option>Billing Manager</option>
        <option>Project Manager</option>
      </select>
    </div>
  </div>
  <button
    type="submit"
    className="w-full bg-blue-700 text-white py-2 rounded shadow-md hover:shadow-xl transition-all duration-300"
  >
    Add Employee
  </button>
</form>
  </div>
</div>
  )
}
export default Mange