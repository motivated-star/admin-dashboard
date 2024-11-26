import { Home, Key, Shield, Users } from 'lucide-react';
import React, { useState } from 'react';

export function Sidebar({ activeTab, setActiveTab }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true); // Manage sidebar visibility

  const menuItems = [
    { id: 'dashboard', label: 'Dashboard', icon: Home },
    { id: 'users', label: 'Users', icon: Users },
    { id: 'roles', label: 'Roles', icon: Shield },
    { id: 'permissions', label: 'Permissions', icon: Key },
  ];

  return (
    <div className="flex">
      {/* Sidebar */}
      {isSidebarOpen && (
        <div className="flex flex-col w-64 bg-gray-800 text-white relative">
          <div className="flex items-center justify-center h-16 bg-gray-900">
            <span className="text-2xl font-bold">Admin Panel</span>
          </div>
          <nav className="flex-1">
            <ul>
              {menuItems.map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => setActiveTab(item.id)}
                    className={`flex items-center w-full px-6 py-3 text-left hover:bg-gray-700 transition-colors ${
                      activeTab === item.id ? 'bg-gray-700' : ''
                    }`}
                  >
                    <item.icon className="mr-3 h-5 w-5" />
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      )}

      {/* Toggle Button */}
      <button
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        className={`p-2 bg-gray-800 text-white rounded-md fixed top-4 ${
          isSidebarOpen ? 'left-72' : 'left-4'
        } z-10 transition-all`}
      >
        {isSidebarOpen ? 'Hide' : 'Show'}
      </button>
    </div>
  );
}
