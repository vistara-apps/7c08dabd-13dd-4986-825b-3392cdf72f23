'use client';

import { Badge } from '@/components/ui/Badge';
import { Card, CardContent, CardHeader } from '@/components/ui/Card';
import { ProgressBar } from '@/components/ui/ProgressBar';
import { UserProgress } from '@/lib/types';
import { calculateLevel, getNextLevelPoints, formatCarbonAmount } from '@/lib/utils';
import { Award, Flame, TrendingDown, Trophy } from 'lucide-react';

interface UserProgressProps {
  progress: UserProgress;
  rewardsPoints: number;
}

export function UserProgressDisplay({ progress, rewardsPoints }: UserProgressProps) {
  const currentLevel = calculateLevel(rewardsPoints);
  const nextLevelPoints = getNextLevelPoints(rewardsPoints);
  const pointsToNext = nextLevelPoints - rewardsPoints;

  const stats = [
    {
      icon: Flame,
      label: 'Current Streak',
      value: `${progress.currentStreak} days`,
      color: 'text-orange-600',
    },
    {
      icon: Trophy,
      label: 'Activities Logged',
      value: progress.totalActivitiesLogged.toString(),
      color: 'text-blue-600',
    },
    {
      icon: TrendingDown,
      label: 'Carbon Reduced',
      value: formatCarbonAmount(progress.carbonReduced),
      color: 'text-green-600',
    },
    {
      icon: Award,
      label: 'Global Rank',
      value: `#${progress.rank}`,
      color: 'text-purple-600',
    },
  ];

  return (
    <div className="space-y-4">
      <Card>
        <CardHeader className="text-center">
          <div className="flex items-center justify-center space-x-2 mb-2">
            <Badge variant="gold">Level {currentLevel}</Badge>
            <span className="text-sm text-subtle-text">
              {rewardsPoints} points
            </span>
          </div>
          <ProgressBar
            value={rewardsPoints % 100}
            max={100}
            showLabel
            className="mb-2"
          />
          <p className="text-sm text-subtle-text">
            {pointsToNext} points to Level {currentLevel + 1}
          </p>
        </CardHeader>
      </Card>

      <div className="grid grid-cols-2 gap-3">
        {stats.map((stat) => {
          const Icon = stat.icon;
          return (
            <Card key={stat.label}>
              <CardContent className="p-4 text-center">
                <Icon className={`w-6 h-6 mx-auto mb-2 ${stat.color}`} />
                <p className="text-lg font-semibold text-text">{stat.value}</p>
                <p className="text-xs text-subtle-text">{stat.label}</p>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
}
