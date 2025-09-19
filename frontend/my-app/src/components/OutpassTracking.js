import React from "react";

function OutpassTracking({ requests, currentUser }) {
  const outpassRequests = requests.filter(r => r.type === "Outpass");

  return (
    <div className="p-6">
      <h1 className="text-xl font-bold mb-4">Outpass Tracking</h1>

      {outpassRequests.length === 0 ? (
        <p className="text-gray-500">No outpass requests yet.</p>
      ) : (
        <div className="space-y-3">
          {outpassRequests.map((req) => (
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

export default OutpassTracking;
