import React, { useState } from "react";
import Login from "./components/Login";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Dashboard from "./components/Dashboard";
import Requests from "./components/Requests";
import OutpassTracking from "./components/OutpassTracking";
import RoomManagement from "./components/RoomManagement";
import HostelManagementSystem from "./HostelManagementSystem";

function App() {
   return <HostelManagementSystem />;
  const [currentUser, setCurrentUser] = useState(null);
  const [activeTab, setActiveTab] = useState("dashboard");

  // Sample request data
  const [requests, setRequests] = useState([
    { id: 1, student: "John Doe", type: "Transfer", status: "pending", details: "A101 → B205", date: "2024-01-15" },
    { id: 2, student: "Jane Smith", type: "Outpass", status: "approved", details: "Family visit", date: "2024-01-14" }
  ]);

  // Logout
  const handleLogout = () => setCurrentUser(null);

  return (
    <div className="min-h-screen bg-gray-100">
      {/* If not logged in → show login page */}
      {!currentUser ? (
        <Login setCurrentUser={setCurrentUser} />
      ) : (
        <>
          {/* Header */}
          <Header currentUser={currentUser} onLogout={handleLogout} />

          <div className="flex">
            {/* Sidebar */}
            <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} currentUser={currentUser} />

            {/* Main content area */}
            <div className="flex-1 p-6">
              {activeTab === "dashboard" && <Dashboard currentUser={currentUser} requests={requests} />}
              {activeTab === "requests" && (
                <Requests currentUser={currentUser} requests={requests} setRequests={setRequests} />
              )}
              {activeTab === "outpass" && (
                <OutpassTracking currentUser={currentUser} requests={requests} />
              )}
              {activeTab === "rooms" && (
                <RoomManagement requests={requests} />
              )}
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default App;
