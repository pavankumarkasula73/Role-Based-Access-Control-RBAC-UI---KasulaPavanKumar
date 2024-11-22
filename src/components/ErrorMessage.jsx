import React from 'react';
import { AlertTriangle } from 'lucide-react';

export default function ErrorMessage({ message }) {
  return (
    <div className="bg-red-50 border-l-4 border-red-400 p-4 my-4">
      <div className="flex items-center">
        <AlertTriangle className="h-5 w-5 text-red-400" />
        <p className="ml-3 text-sm text-red-700">
          {message || 'An error occurred. Please try again.'}
        </p>
      </div>
    </div>
  );
}