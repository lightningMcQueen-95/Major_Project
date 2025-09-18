import React, { useState } from "react";

function Requests({ requests, currentUser, submitRequest, updateRequest }) {
  const [newRequest, setNewRequest] = useState({
    type: "room",
    details: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newRequest.details.trim() === "") return;
    submitRequest(newRequest);
    setNewRequest({ type: "room", details: "" });
  };

  return (
    <div className="p-6">
      <h1 className="text-xl font-bold mb-4">
        {currentUser?.type === "student" ? "My Requests" : "Manage Requests"}
      </h1>

      {/* Student form to create request */}
      {currentUser?.type === "student" && (
        <form
          onSubmit={handleSubmit}
          className="bg-white p-4 rounded-lg shadow mb-6"
        >
          <div className="mb-3">
            <label className="block mb-1 font-medium">Request Type</label>
            <select
              value={newRequest.type}
              onChange={(e) =>
                setNewRequest({ ...newRequest, type: e.target.value })
              }
              className="w-full p-2 border rounded"
            >
              <option value="room">Room Booking</option>
              <option value="transfer">Transfer</option>
              <option value="outpass">Outpass</option>
              <option value="complaint">Complaint</option>
            </select>
          </div>
          <div className="mb-3">
            <label className="block mb-1 font-medium">Details</label>
            <textarea
              value={newRequest.details}
              onChange={(e) =>
                setNewRequest({ ...newRequest, details: e.target.value })
              }
              className="w-full p-2 border rounded"
              rows={3}
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          >
            Submit Request
          </button>
        </form>
      )}

      {/* Requests list */}
      <div className="space-y-4">
        {requests.length === 0 ? (
          <p className="text-gray-500">No requests yet.</p>
        ) : (
          requests.map((req) => (
            <div
              key={req.id}
              className="bg-white p-4 rounded-lg shadow flex justify-between items-center"
            >
              <div>
                <p className="font-medium">
                  {req.type.charAt(0).toUpperCase() + req.type.slice(1)}
                </p>
                <p className="text-gray-600">{req.details}</p>
                <p
                  className={`mt-1 text-sm ${
                    req.status === "approved"
                      ? "text-green-600"
                      : req.status === "rejected"
                      ? "text-red-600"
                      : "text-yellow-600"
                  }`}
                >
                  Status: {req.status}
                </p>
              </div>

              {/* Warden/Admin can approve/reject */}
              {(currentUser?.type === "warden" ||
                currentUser?.type === "admin") && req.status === "pending" && (
                <div className="space-x-2">
                  <button
                    onClick={() => updateRequest(req.id, "approved")}
                    className="bg-green-600 text-white px-3 py-1 rounded hover:bg-green-700"
                  >
                    Approve
                  </button>
                  <button
                    onClick={() => updateRequest(req.id, "rejected")}
                    className="bg-red-600 text-white px-3 py-1 rounded hover:bg-red-700"
                  >
                    Reject
                  </button>
                </div>
              )}
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default Requests;
