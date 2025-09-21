'use client';

import { Leaf, User } from 'lucide-react';

export function Header() {
  const displayName = 'EcoTracker';

  return (
    <header className="bg-surface border-b border-border px-4 py-3">
      <div className="max-w-xl mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
            <Leaf className="w-5 h-5 text-white" />
          </div>
          <div>
            <h1 className="text-heading text-text">EcoTrack</h1>
            <p className="text-caption text-subtle-text">Carbon Footprint</p>
          </div>
        </div>
        
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center">
            <User className="w-4 h-4 text-gray-600" />
          </div>
          <span className="text-sm text-text">{displayName}</span>
        </div>
      </div>
    </header>
  );
}
