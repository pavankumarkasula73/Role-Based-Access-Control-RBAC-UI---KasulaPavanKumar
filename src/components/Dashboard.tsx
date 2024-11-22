import React from 'react';
import { Users, Shield, Key, Activity } from 'lucide-react';
import { initialUsers, roles, permissions } from '../data/mock';

export default function Dashboard() {
  const stats = [
    { icon: Users, label: 'Total Users', value: initialUsers.length },
    { icon: Shield, label: 'Roles', value: roles.length },
    { icon: Key, label: 'Permissions', value: permissions.length },
    { icon: Activity, label: 'Active Users', value: initialUsers.filter(u => u.status === 'active').length },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {stats.map(({ icon: Icon, label, value }) => (
        <div key={label} className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">{label}</p>
              <p className="mt-2 text-3xl font-semibold text-gray-900">{value}</p>
            </div>
            <div className="p-3 bg-indigo-50 rounded-full">
              <Icon className="h-6 w-6 text-indigo-600" />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}