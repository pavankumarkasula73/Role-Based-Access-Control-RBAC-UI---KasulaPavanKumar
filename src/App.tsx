import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import UserList from './components/UserList';
import RoleList from './components/RoleList';
import PermissionList from './components/PermissionList';
import Dashboard from './components/Dashboard';

function App() {
  const [currentSection, setCurrentSection] = useState('/');

  const renderContent = () => {
    switch (currentSection) {
      case '/users':
        return <UserList />;
      case '/roles':
        return <RoleList />;
      case '/permissions':
        return <PermissionList />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Sidebar onNavigate={setCurrentSection} active={currentSection} />
      <div className="pl-64">
        <main className="p-8">
          <div className="mb-8">
            <h1 className="text-2xl font-bold text-gray-900">
              {currentSection === '/' ? 'Dashboard' : 
               currentSection.slice(1).charAt(0).toUpperCase() + currentSection.slice(2)}
            </h1>
            <p className="text-gray-500">
              {currentSection === '/' ? 'Overview of your system' : 
               `Manage your ${currentSection.slice(1)}`}
            </p>
          </div>
          {renderContent()}
        </main>
      </div>
    </div>
  );
}

export default App;