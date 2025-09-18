import React from "react";

function RoomManagement({ requests }) {
  const transferRequests = requests.filter(r => r.type === "Transfer");

  return (
    <div className="p-6">
      <h1 className="text-xl font-bold mb-4">Room Management</h1>

      {transferRequests.length === 0 ? (
        <p className="text-gray-500">No transfer requests.</p>
      ) : (
        <div className="space-y-3">
          {transferRequests.map((req) => (
            <div key={req.id} className="bg-white shadow p-4 rounded-lg">
              <p className="font-semibold">{req.student}</p>
              <p className="text-sm text-gray-600">{req.details}</p>
              <p className="text-xs text-gray-500">Status: {req.status}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default RoomManagement;
