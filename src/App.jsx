import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import UserList from './components/UserList';
import RoleList from './components/RoleList';
import PermissionList from './components/PermissionList';
import Dashboard from './components/Dashboard';
import Footer from './components/Footer';
import { motion, AnimatePresence } from 'framer-motion';

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
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <div className="flex-grow flex">
        <Sidebar onNavigate={setCurrentSection} active={currentSection} />
        <div className="pl-64 w-full">
          <main className="p-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-8"
            >
              <h1 className="text-2xl font-bold text-gray-900">
                {currentSection === '/' ? 'Dashboard' : 
                 currentSection.slice(1).charAt(0).toUpperCase() + currentSection.slice(2)}
              </h1>
              <p className="text-gray-500">
                {currentSection === '/' ? 'Overview of your system' : 
                 `Manage your ${currentSection.slice(1)}`}
              </p>
            </motion.div>
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSection}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
              >
                {renderContent()}
              </motion.div>
            </AnimatePresence>
          </main>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;