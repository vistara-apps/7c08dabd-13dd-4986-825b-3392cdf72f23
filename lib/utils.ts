import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { ActivityType, ActivityDetails } from './types';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function calculateCarbonImpact(
  activityType: ActivityType,
  details: ActivityDetails
): number {
  // Simplified carbon calculation - in production, use real emission factors
  const emissionFactors = {
    transport: {
      car: 0.21, // kg CO2 per km
      bus: 0.08,
      train: 0.04,
      bike: 0,
      walk: 0,
    },
    food: {
      meat: 6.61, // kg CO2 per kg
      dairy: 3.15,
      vegetables: 0.43,
      grains: 1.57,
    },
    energy: {
      electricity: 0.5, // kg CO2 per kWh
      gas: 2.3, // kg CO2 per m³
      heating: 0.18, // kg CO2 per kWh
    },
    other: {
      default: 1.0,
    },
  };

  const categoryFactors = emissionFactors[activityType] as Record<string, number>;
  const factor = categoryFactors[details.category] || categoryFactors.default || 1.0;
  const quantity = details.quantity || 1;

  return factor * quantity;
}

export function formatCarbonAmount(amount: number): string {
  if (amount < 1) {
    return `${Math.round(amount * 1000)}g CO₂`;
  }
  return `${amount.toFixed(2)}kg CO₂`;
}

export function getActivityIcon(activityType: ActivityType): string {
  const icons = {
    transport: '🚗',
    food: '🍽️',
    energy: '⚡',
    other: '📦',
  };
  return icons[activityType];
}

export function calculateLevel(points: number): number {
  return Math.floor(points / 100) + 1;
}

export function getNextLevelPoints(currentPoints: number): number {
  const currentLevel = calculateLevel(currentPoints);
  return currentLevel * 100;
}

export function formatDate(date: Date): string {
  return new Intl.DateTimeFormat('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  }).format(date);
}

export function generatePersonalizedTips(carbonData: any): string[] {
  const tips = [];
  
  if (carbonData.categories.transport > carbonData.categories.food) {
    tips.push('Try walking or biking for short trips to reduce transport emissions');
  }
  
  if (carbonData.categories.food > 5) {
    tips.push('Consider having one plant-based meal per day');
  }
  
  if (carbonData.categories.energy > 3) {
    tips.push('Switch to LED bulbs and unplug devices when not in use');
  }
  
  return tips;
}
