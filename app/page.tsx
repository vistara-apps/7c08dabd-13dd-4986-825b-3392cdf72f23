'use client';

import { Header } from '@/components/layout/Header';
import { Navigation } from '@/components/layout/Navigation';
import { CarbonFootprintDisplay } from '@/components/features/CarbonFootprintDisplay';
import { ActivityLogger } from '@/components/features/ActivityLogger';
import { ChallengesList } from '@/components/features/ChallengesList';
import { PersonalizedTips } from '@/components/features/PersonalizedTips';
import { UserProgressDisplay } from '@/components/features/UserProgress';
import { useState, useEffect } from 'react';
import { ActivityType, ActivityDetails, CarbonFootprintData, UserProgress } from '@/lib/types';
import { SAMPLE_CHALLENGES, SAMPLE_TIPS } from '@/lib/constants';

export default function Home() {
  const [activeTab, setActiveTab] = useState('home');
  const [carbonData, setCarbonData] = useState<CarbonFootprintData>({
    dailyTotal: 12.5,
    weeklyTotal: 87.5,
    monthlyTotal: 375,
    categories: {
      transport: 1.8,
      food: 7.3,
      energy: 2.5,
      other: 0.9,
    },
  });

  const [userProgress] = useState<UserProgress>({
    currentStreak: 7,
    totalActivitiesLogged: 23,
    carbonReduced: 45.2,
    rank: 156,
    level: 3,
  });

  const [rewardsPoints, setRewardsPoints] = useState(287);
  const [tips, setTips] = useState(SAMPLE_TIPS);
  const [challenges] = useState(SAMPLE_CHALLENGES);

  const handleActivityLogged = (
    activityType: ActivityType,
    details: ActivityDetails,
    impact: number
  ) => {
    // Update carbon data
    setCarbonData(prev => ({
      ...prev,
      dailyTotal: prev.dailyTotal + impact,
      categories: {
        ...prev.categories,
        [activityType]: prev.categories[activityType] + impact,
      },
    }));

    // Award points (more points for lower impact activities)
    const pointsEarned = Math.max(1, Math.floor(10 - impact));
    setRewardsPoints(prev => prev + pointsEarned);

    // Show success notification (in a real app, this would be a toast)
    console.log(`Activity logged! Earned ${pointsEarned} points.`);
  };

  const handleJoinChallenge = (challengeId: string) => {
    console.log(`Joined challenge: ${challengeId}`);
    // In a real app, this would update the user's challenge participation
  };

  const handleMarkTipCompleted = (tipId: string) => {
    setTips(prev =>
      prev.map(tip =>
        tip.id === tipId ? { ...tip, isCompleted: true } : tip
      )
    );
    
    // Award points for completing tips
    setRewardsPoints(prev => prev + 15);
  };

  const renderTabContent = () => {
    switch (activeTab) {
      case 'home':
        return (
          <div className="space-y-6">
            <CarbonFootprintDisplay data={carbonData} />
            <PersonalizedTips
              tips={tips.slice(0, 2)}
              onMarkCompleted={handleMarkTipCompleted}
            />
          </div>
        );
      
      case 'log':
        return (
          <ActivityLogger onActivityLogged={handleActivityLogged} />
        );
      
      case 'challenges':
        return (
          <ChallengesList
            challenges={challenges}
            onJoinChallenge={handleJoinChallenge}
          />
        );
      
      case 'profile':
        return (
          <UserProgressDisplay
            progress={userProgress}
            rewardsPoints={rewardsPoints}
          />
        );
      
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-bg flex flex-col">
      <Header />
      
      <main className="flex-1 px-4 py-6">
        <div className="max-w-xl mx-auto">
          {renderTabContent()}
        </div>
      </main>
      
      <Navigation activeTab={activeTab} onTabChange={setActiveTab} />
    </div>
  );
}
