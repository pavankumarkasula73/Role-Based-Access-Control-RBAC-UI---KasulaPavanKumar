import React from 'react';
import { roles, permissions } from '../data/mock';
import { Shield, Edit2, Trash2, MoreVertical } from 'lucide-react';

export default function RoleList() {
  return (
    <div className="bg-white rounded-lg shadow">
      <div className="p-6 border-b border-gray-200">
        <div className="flex justify-between items-center">
          <h2 className="text-xl font-semibold">Roles</h2>
          <button className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition-colors">
            Add Role
          </button>
        </div>
      </div>
      <div className="divide-y divide-gray-200">
        {roles.map((role) => (
          <div key={role.id} className="p-6 hover:bg-gray-50">
            <div className="flex items-start justify-between">
              <div className="flex items-center">
                <Shield className="h-8 w-8 text-indigo-600" />
                <div className="ml-4">
                  <h3 className="text-lg font-medium">{role.name}</h3>
                  <p className="text-sm text-gray-500">{role.description}</p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <button className="text-indigo-600 hover:text-indigo-900">
                  <Edit2 size={16} />
                </button>
                <button className="text-red-600 hover:text-red-900">
                  <Trash2 size={16} />
                </button>
                <button className="text-gray-400 hover:text-gray-600">
                  <MoreVertical size={16} />
                </button>
              </div>
            </div>
            <div className="mt-4">
              <h4 className="text-sm font-medium text-gray-500 mb-2">
                Permissions
              </h4>
              <div className="flex flex-wrap gap-2">
                {role.permissions.map((permId) => {
                  const permission = permissions.find((p) => p.id === permId);
                  return (
                    <span
                      key={permId}
                      className="px-2 py-1 text-xs font-medium bg-indigo-100 text-indigo-800 rounded-full"
                    >
                      {permission?.name}
                    </span>
                  );
                })}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}