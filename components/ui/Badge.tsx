'use client';

import { cn } from '@/lib/utils';

export interface BadgeProps {
  variant?: 'bronze' | 'silver' | 'gold' | 'custom';
  children: React.ReactNode;
  className?: string;
}

export function Badge({ variant = 'custom', children, className }: BadgeProps) {
  const variants = {
    bronze: 'bg-amber-100 text-amber-800 border-amber-200',
    silver: 'bg-gray-100 text-gray-800 border-gray-200',
    gold: 'bg-yellow-100 text-yellow-800 border-yellow-200',
    custom: 'bg-primary/10 text-primary border-primary/20',
  };

  return (
    <span
      className={cn(
        'inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border',
        variants[variant],
        className
      )}
    >
      {children}
    </span>
  );
}
