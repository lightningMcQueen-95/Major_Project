import React from "react";
import { Home, FileText, Key, ClipboardList } from "lucide-react";

function Sidebar({ activeTab, setActiveTab, currentUser }) {
  return (
    <div className="w-64 bg-white shadow-sm min-h-screen p-4">
      <nav className="space-y-2">
        <button
          onClick={() => setActiveTab("dashboard")}
          className={`w-full flex items-center space-x-2 p-3 rounded ${
            activeTab === "dashboard" ? "bg-blue-100 text-blue-700" : "hover:bg-gray-100"
          }`}
        >
          <Home size={20} />
          <span>Dashboard</span>
        </button>

        <button
          onClick={() => setActiveTab("requests")}
          className={`w-full flex items-center space-x-2 p-3 rounded ${
            activeTab === "requests" ? "bg-blue-100 text-blue-700" : "hover:bg-gray-100"
          }`}
        >
          <FileText size={20} />
          <span>{currentUser?.type === "student" ? "My Requests" : "Manage Requests"}</span>
        </button>

        <button
          onClick={() => setActiveTab("outpass")}
          className={`w-full flex items-center space-x-2 p-3 rounded ${
            activeTab === "outpass" ? "bg-blue-100 text-blue-700" : "hover:bg-gray-100"
          }`}
        >
          <ClipboardList size={20} />
          <span>Outpass Tracking</span>
        </button>

        {(currentUser?.type === "warden" || currentUser?.type === "admin") && (
          <button
            onClick={() => setActiveTab("rooms")}
            className={`w-full flex items-center space-x-2 p-3 rounded ${
              activeTab === "rooms" ? "bg-blue-100 text-blue-700" : "hover:bg-gray-100"
            }`}
          >
            <Key size={20} />
            <span>Room Management</span>
          </button>
        )}
      </nav>
    </div>
  );
}

export default Sidebar;
