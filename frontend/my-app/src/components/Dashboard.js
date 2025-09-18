import React from "react";

function Dashboard({ requests, currentUser }) {
  // Count stats
  const total = requests.length;
  const approved = requests.filter((r) => r.status === "approved").length;
  const rejected = requests.filter((r) => r.status === "rejected").length;
  const pending = requests.filter((r) => r.status === "pending").length;

  return (
    <div className="p-6">
      <h1 className="text-xl font-bold mb-4">Dashboard</h1>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-white shadow p-4 rounded-lg">
          <p className="text-gray-500">Total Requests</p>
          <p className="text-2xl font-bold">{total}</p>
        </div>
        <div className="bg-white shadow p-4 rounded-lg">
          <p className="text-gray-500">Approved</p>
          <p className="text-2xl font-bold text-green-600">{approved}</p>
        </div>
        <div className="bg-white shadow p-4 rounded-lg">
          <p className="text-gray-500">Rejected</p>
          <p className="text-2xl font-bold text-red-600">{rejected}</p>
        </div>
        <div className="bg-white shadow p-4 rounded-lg">
          <p className="text-gray-500">Pending</p>
          <p className="text-2xl font-bold text-yellow-600">{pending}</p>
        </div>
      </div>

      {/* Welcome message */}
      <div className="mt-6 bg-blue-50 p-6 rounded-lg shadow">
        <h2 className="text-lg font-semibold">
          Welcome, {currentUser?.username || "Guest"} 👋
        </h2>
        <p className="text-gray-600 mt-2">
          You are logged in as{" "}
          <span className="font-medium">{currentUser?.type}</span>.
        </p>
      </div>
    </div>
  );
}

export default Dashboard;
