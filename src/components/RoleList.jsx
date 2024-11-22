import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Shield, Edit2, Trash2, MoreVertical } from 'lucide-react';
import RoleForm from './RoleForm';
import { roles, permissions } from '../data/mock';

export default function RoleList() {
  const [showAddForm, setShowAddForm] = useState(false);
  const [rolesList, setRolesList] = useState(roles);

  const handleAddRole = (newRole) => {
    const role = {
      ...newRole,
      id: `role_${rolesList.length + 1}`,
    };
    setRolesList([...rolesList, role]);
    setShowAddForm(false);
  };

  const handleDeleteRole = (id) => {
    setRolesList(rolesList.filter(role => role.id !== id));
  };

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white rounded-lg shadow"
      >
        <div className="p-6 border-b border-gray-200">
          <div className="flex justify-between items-center">
            <h2 className="text-xl font-semibold">Roles</h2>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setShowAddForm(true)}
              className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition-colors"
            >
              Add Role
            </motion.button>
          </div>
        </div>
        <div className="divide-y divide-gray-200">
          {rolesList.map((role) => (
            <motion.div
              key={role.id}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="p-6 hover:bg-gray-50"
            >
              <div className="flex items-start justify-between">
                <div className="flex items-center">
                  <Shield className="h-8 w-8 text-indigo-600" />
                  <div className="ml-4">
                    <h3 className="text-lg font-medium">{role.name}</h3>
                    <p className="text-sm text-gray-500">{role.description}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="text-red-600 hover:text-red-900"
                    onClick={() => handleDeleteRole(role.id)}
                  >
                    <Trash2 size={16} />
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="text-gray-400 hover:text-gray-600"
                  >
                    <MoreVertical size={16} />
                  </motion.button>
                </div>
              </div>
              <div className="mt-4">
                <h4 className="text-sm font-medium text-gray-500 mb-2">
                  Permissions
                </h4>
                <div className="flex flex-wrap gap-2">
                  {role.permissions.map((permId) => {
                    const permission = permissions.find((p) => p.id === permId);
                    return permission ? (
                      <motion.span
                        key={permId}
                        whileHover={{ scale: 1.05 }}
                        className="px-2 py-1 text-xs font-medium bg-indigo-100 text-indigo-800 rounded-full"
                      >
                        {permission.name}
                      </motion.span>
                    ) : null;
                  })}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
      {showAddForm && (
        <RoleForm 
          permissions={permissions}
          onClose={() => setShowAddForm(false)} 
          onSubmit={handleAddRole}
        />
      )}
    </>
  );
}