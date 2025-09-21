export interface User {
  farcasterId: string;
  walletAddress?: string;
  carbonFootprintData: CarbonFootprintData;
  rewardsPoints: number;
  badgesEarned: Badge[];
  createdAt: Date;
  updatedAt: Date;
}

export interface CarbonFootprintData {
  dailyTotal: number;
  weeklyTotal: number;
  monthlyTotal: number;
  categories: {
    transport: number;
    food: number;
    energy: number;
    other: number;
  };
}

export interface ActivityLog {
  logId: string;
  userId: string;
  activityType: ActivityType;
  activityDetails: ActivityDetails;
  carbonImpactEstimate: number;
  timestamp: Date;
}

export type ActivityType = 'transport' | 'food' | 'energy' | 'other';

export interface ActivityDetails {
  category: string;
  description: string;
  quantity?: number;
  unit?: string;
  metadata?: Record<string, any>;
}

export interface Challenge {
  challengeId: string;
  name: string;
  description: string;
  rewardType: 'points' | 'badge' | 'token';
  rewardAmount: number;
  startDate: Date;
  endDate: Date;
  participants: number;
  isActive: boolean;
}

export interface Badge {
  id: string;
  name: string;
  description: string;
  iconUrl: string;
  rarity: 'bronze' | 'silver' | 'gold' | 'custom';
  earnedAt: Date;
}

export interface PersonalizedTip {
  id: string;
  title: string;
  description: string;
  category: ActivityType;
  potentialSavings: number;
  difficulty: 'easy' | 'medium' | 'hard';
  isCompleted: boolean;
}

export interface UserProgress {
  currentStreak: number;
  totalActivitiesLogged: number;
  carbonReduced: number;
  rank: number;
  level: number;
}
