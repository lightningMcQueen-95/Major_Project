import React from 'react';
import { LogOut } from 'lucide-react';

const Header = ({ currentUser, onLogout }) => {
  return (
    <div className="bg-white shadow-sm p-4 flex justify-between items-center">
      <h1 className="text-xl font-bold">Hostel Management</h1>
      <div className="flex items-center space-x-4">
        <span className="text-sm">{currentUser.name} ({currentUser.type})</span>
        <button onClick={onLogout} className="text-red-600">
          <LogOut size={20} />
        </button>
      </div>
    </div>
  );
};

export default Header;
