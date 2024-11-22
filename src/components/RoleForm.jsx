import React from 'react';
import { motion } from 'framer-motion';
import { X } from 'lucide-react';

export default function RoleForm({ onClose, onSubmit, permissions }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const selectedPermissions = Array.from(formData.getAll('permissions'));
    
    onSubmit({
      name: formData.get('name'),
      description: formData.get('description'),
      permissions: selectedPermissions,
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        className="bg-white rounded-lg p-6 w-full max-w-md"
      >
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold">Add New Role</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
            <X size={20} />
          </button>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Name</label>
              <input
                type="text"
                name="name"
                required
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Description</label>
              <textarea
                name="description"
                required
                rows="3"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Permissions</label>
              <div className="space-y-2 max-h-48 overflow-y-auto">
                {permissions.map((permission) => (
                  <motion.label
                    key={permission.id}
                    className="flex items-center"
                    whileHover={{ scale: 1.02 }}
                  >
                    <input
                      type="checkbox"
                      name="permissions"
                      value={permission.id}
                      className="rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                    />
                    <span className="ml-2 text-sm text-gray-700">{permission.name}</span>
                  </motion.label>
                ))}
              </div>
            </div>
          </div>
          <div className="mt-6 flex justify-end space-x-3">
            <motion.button
              type="button"
              onClick={onClose}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50"
            >
              Cancel
            </motion.button>
            <motion.button
              type="submit"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-4 py-2 bg-indigo-600 text-white rounded-md text-sm font-medium hover:bg-indigo-700"
            >
              Add Role
            </motion.button>
          </div>
        </form>
      </motion.div>
    </motion.div>
  );
}