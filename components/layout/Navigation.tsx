'use client';

import { cn } from '@/lib/utils';
import { Home, Plus, Trophy, User } from 'lucide-react';
import { useState } from 'react';

interface NavigationProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

export function Navigation({ activeTab, onTabChange }: NavigationProps) {
  const tabs = [
    { id: 'home', label: 'Home', icon: Home },
    { id: 'log', label: 'Log', icon: Plus },
    { id: 'challenges', label: 'Challenges', icon: Trophy },
    { id: 'profile', label: 'Profile', icon: User },
  ];

  return (
    <nav className="bg-surface border-t border-border px-4 py-2">
      <div className="max-w-xl mx-auto">
        <div className="flex justify-around">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            
            return (
              <button
                key={tab.id}
                onClick={() => onTabChange(tab.id)}
                className={cn(
                  'flex flex-col items-center space-y-1 px-3 py-2 rounded-md transition-colors duration-200',
                  isActive
                    ? 'text-primary bg-primary/10'
                    : 'text-subtle-text hover:text-text hover:bg-gray-50'
                )}
              >
                <Icon className="w-5 h-5" />
                <span className="text-xs font-medium">{tab.label}</span>
              </button>
            );
          })}
        </div>
      </div>
    </nav>
  );
}
