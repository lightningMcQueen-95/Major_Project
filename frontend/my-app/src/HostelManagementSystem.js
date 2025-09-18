// src/HostelManagementSystem.js
import React, { useState } from "react";
import Login from "./components/Login";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Dashboard from "./components/Dashboard";
import Requests from "./components/Requests";
import OutpassTracking from "./components/OutpassTracking";
import RoomManagement from "./components/RoomManagement";

// sample users (demo)
const sampleUsers = {
  student: { username: "student", password: "123", name: "John Doe", room: "A101" },
  warden: { username: "warden", password: "123", name: "Dr. Smith" },
  admin: { username: "admin", password: "123", name: "Administrator" }
};

export default function HostelManagementSystem() {
  // global state
  const [currentUser, setCurrentUser] = useState(null);
  const [activeTab, setActiveTab] = useState("dashboard"); // dashboard | requests | outpass | rooms
  const [loginData, setLoginData] = useState({ type: "student", username: "", password: "" });

  const [requests, setRequests] = useState([
    { id: 1, student: "John Doe", type: "Transfer", status: "pending", details: "A101 → B205", date: "2024-01-15" },
    { id: 2, student: "Jane Smith", type: "Outpass", status: "approved", details: "Family visit", date: "2024-01-14" }
  ]);

  const [rooms, setRooms] = useState([
    { room: "A101", student: "John Doe" },
    { room: "B205", student: null },
    { room: "C301", student: null }
  ]);

  // login handler (passed to Login component)
  const handleLogin = (e) => {
    e.preventDefault();
    const user = sampleUsers[loginData.type];
    if (user && user.username === loginData.username && user.password === loginData.password) {
      setCurrentUser({ ...user, type: loginData.type });
      setActiveTab("dashboard");
      // clear login form (optional)
      setLoginData({ type: "student", username: "", password: "" });
    } else {
      alert("Invalid credentials (demo: student/123, warden/123, admin/123)");
    }
  };

  const handleLogout = () => {
    setCurrentUser(null);
    setActiveTab("dashboard");
  };

  // Student submits a request
  const submitRequest = (newRequest) => {
    const req = {
      id: Date.now(),
      student: currentUser?.name || "Unknown",
      type: newRequest.type,
      status: "pending",
      details: newRequest.details,
      date: new Date().toISOString().split("T")[0]
    };
    setRequests(prev => [req, ...prev]);
    // optional: go to requests tab after submit
    setActiveTab("requests");
  };

  // Warden/Admin approves/rejects
  const updateRequest = (id, status, remarks = "") => {
    setRequests(prev => prev.map(r => r.id === id ? { ...r, status, remarks } : r));
  };

  // Admin assigns room
  const assignRoom = (roomName, studentName) => {
    setRooms(prev => prev.map(r => r.room === roomName ? { ...r, student: studentName } : r));
  };

  // -- Render: if not logged in, show the Login screen with props --
  if (!currentUser) {
    return (
      <Login
        loginData={loginData}
        setLoginData={setLoginData}
        handleLogin={handleLogin}
      />
    );
  }

  // -- Logged in layout --
  return (
    <div className="min-h-screen bg-gray-100">
      <Header currentUser={currentUser} onLogout={handleLogout} />

      <div className="flex">
        <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} currentUser={currentUser} />

        <div className="flex-1 p-6">
          {activeTab === "dashboard" && <Dashboard requests={requests} currentUser={currentUser} />}

          {activeTab === "requests" && (
            <Requests
              requests={requests}
              currentUser={currentUser}
              submitRequest={submitRequest}
              updateRequest={updateRequest}
            />
          )}

          {activeTab === "outpass" && (
            <OutpassTracking requests={requests} currentUser={currentUser} />
          )}

          {activeTab === "rooms" && (
            <RoomManagement rooms={rooms} assignRoom={assignRoom} requests={requests} />
          )}
        </div>
      </div>
    </div>
  );
}
