import React from 'react';
import { Users, Shield, Key, LayoutDashboard } from 'lucide-react';

const navItems = [
  { icon: LayoutDashboard, label: 'Dashboard', href: '/' },
  { icon: Users, label: 'Users', href: '/users' },
  { icon: Shield, label: 'Roles', href: '/roles' },
  { icon: Key, label: 'Permissions', href: '/permissions' },
];

interface SidebarProps {
  onNavigate: (href: string) => void;
  active: string;
}

export default function Sidebar({ onNavigate, active }: SidebarProps) {
  return (
    <div className="w-64 bg-gray-900 text-white h-screen fixed left-0 top-0">
      <div className="p-4">
        <h1 className="text-2xl font-bold mb-8">RBAC Admin</h1>
        <nav>
          {navItems.map(({ icon: Icon, label, href }) => (
            <button
              key={href}
              onClick={() => onNavigate(href)}
              className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg mb-2 transition-colors ${
                active === href ? 'bg-indigo-600' : 'hover:bg-gray-800'
              }`}
            >
              <Icon size={20} />
              <span>{label}</span>
            </button>
          ))}
        </nav>
      </div>
    </div>
  );
}