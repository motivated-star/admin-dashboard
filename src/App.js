import React, { useState } from 'react';
import { Dashboard } from './components/Dashboard';
import { Header } from './components/Header';
import { PermissionManagement } from './components/PermissionManagement';
import { RoleManagement } from './components/RoleManagement';
import { Sidebar } from './components/Sidebar';
import { UserManagement } from './components/UserManagement';

function App() {
  const [activeTab, setActiveTab] = useState('dashboard');

  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />
      <div className="flex flex-col flex-1 overflow-hidden">
        <Header />
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-100 p-6">
          <div className="container mx-auto">
            {activeTab === 'dashboard' && <Dashboard setActiveTab={setActiveTab}/>}
            {activeTab === 'users' && <UserManagement />}
            {activeTab === 'roles' && <RoleManagement />}
            {activeTab === 'permissions' && <PermissionManagement />}
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;

