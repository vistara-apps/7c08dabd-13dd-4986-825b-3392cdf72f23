'use client';

import { cn } from '@/lib/utils';
import { forwardRef, InputHTMLAttributes, SelectHTMLAttributes } from 'react';

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  variant?: 'text' | 'number';
}

const InputWithLabel = forwardRef<HTMLInputElement, InputProps>(
  ({ className, label, error, variant = 'text', ...props }, ref) => {
    return (
      <div className="space-y-2">
        {label && (
          <label className="text-sm font-medium text-text">
            {label}
          </label>
        )}
        <input
          type={variant}
          className={cn(
            'input-field',
            error && 'border-red-500 focus:ring-red-500',
            className
          )}
          ref={ref}
          {...props}
        />
        {error && (
          <p className="text-sm text-red-600">{error}</p>
        )}
      </div>
    );
  }
);

InputWithLabel.displayName = 'InputWithLabel';

export interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
  error?: string;
  options: { value: string; label: string }[];
}

const SelectWithLabel = forwardRef<HTMLSelectElement, SelectProps>(
  ({ className, label, error, options, ...props }, ref) => {
    return (
      <div className="space-y-2">
        {label && (
          <label className="text-sm font-medium text-text">
            {label}
          </label>
        )}
        <select
          className={cn(
            'input-field',
            error && 'border-red-500 focus:ring-red-500',
            className
          )}
          ref={ref}
          {...props}
        >
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        {error && (
          <p className="text-sm text-red-600">{error}</p>
        )}
      </div>
    );
  }
);

SelectWithLabel.displayName = 'SelectWithLabel';

export { InputWithLabel, SelectWithLabel };
