import { Bell, User } from 'lucide-react';
import React, { useState } from 'react';

export function Header() {


  const [isBellClicked, setIsBellClicked] = useState(false);

  const handleBellClick = () => {
    setIsBellClicked(!isBellClicked);

  };

  return (
    <header className="bg-white shadow-sm">
      <div className="flex items-center justify-end px-6 py-4">
        <div className="flex items-center space-x-4">
          {isBellClicked && (
            <span className="text-sm font-medium text-gray-700">
              Welcome to Admin Panel
            </span>
          )}
          <button className="p-2 rounded-full hover:bg-gray-100" onClick={handleBellClick}>
            <Bell
              className="h-5 w-5"
              fill={isBellClicked ? 'yellow' : 'none'}
            />
          </button>
          <button className="p-2 rounded-full hover:bg-gray-100">
            <User className="h-5 w-5" />
          </button>
        </div>
      </div>
    </header>
  );
}

