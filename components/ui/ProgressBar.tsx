'use client';

import { cn } from '@/lib/utils';

export interface ProgressBarProps {
  value: number;
  max: number;
  variant?: 'horizontal' | 'circular';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  showLabel?: boolean;
}

export function ProgressBar({
  value,
  max,
  variant = 'horizontal',
  size = 'md',
  className,
  showLabel = false,
}: ProgressBarProps) {
  const percentage = Math.min((value / max) * 100, 100);

  if (variant === 'circular') {
    const sizes = {
      sm: { size: 40, strokeWidth: 4 },
      md: { size: 60, strokeWidth: 6 },
      lg: { size: 80, strokeWidth: 8 },
    };

    const { size: circleSize, strokeWidth } = sizes[size];
    const radius = (circleSize - strokeWidth) / 2;
    const circumference = radius * 2 * Math.PI;
    const strokeDasharray = circumference;
    const strokeDashoffset = circumference - (percentage / 100) * circumference;

    return (
      <div className={cn('relative inline-flex items-center justify-center', className)}>
        <svg width={circleSize} height={circleSize} className="transform -rotate-90">
          <circle
            cx={circleSize / 2}
            cy={circleSize / 2}
            r={radius}
            stroke="hsl(0, 0%, 90%)"
            strokeWidth={strokeWidth}
            fill="transparent"
          />
          <circle
            cx={circleSize / 2}
            cy={circleSize / 2}
            r={radius}
            stroke="hsl(140, 70%, 40%)"
            strokeWidth={strokeWidth}
            fill="transparent"
            strokeDasharray={strokeDasharray}
            strokeDashoffset={strokeDashoffset}
            strokeLinecap="round"
            className="transition-all duration-300"
          />
        </svg>
        {showLabel && (
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-sm font-medium text-text">
              {Math.round(percentage)}%
            </span>
          </div>
        )}
      </div>
    );
  }

  const heights = {
    sm: 'h-1',
    md: 'h-2',
    lg: 'h-3',
  };

  return (
    <div className={cn('w-full', className)}>
      {showLabel && (
        <div className="flex justify-between text-sm text-subtle-text mb-1">
          <span>{value}</span>
          <span>{max}</span>
        </div>
      )}
      <div className={cn('progress-bar', heights[size])}>
        <div
          className="progress-fill"
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  );
}
