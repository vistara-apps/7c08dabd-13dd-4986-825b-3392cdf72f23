'use client';

import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { Card, CardContent, CardHeader } from '@/components/ui/Card';
import { Challenge } from '@/lib/types';
import { Calendar, Users } from 'lucide-react';

interface ChallengesListProps {
  challenges: Challenge[];
  onJoinChallenge: (challengeId: string) => void;
}

export function ChallengesList({ challenges, onJoinChallenge }: ChallengesListProps) {
  const formatDate = (date: Date) => {
    return new Intl.DateTimeFormat('en-US', {
      month: 'short',
      day: 'numeric',
    }).format(date);
  };

  const getRewardBadgeVariant = (rewardType: Challenge['rewardType']) => {
    switch (rewardType) {
      case 'badge':
        return 'gold';
      case 'points':
        return 'silver';
      case 'token':
        return 'custom';
      default:
        return 'bronze';
    }
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-heading">Active Challenges</h2>
        <Badge variant="custom">{challenges.length} available</Badge>
      </div>

      <div className="space-y-3">
        {challenges.map((challenge) => (
          <Card key={challenge.challengeId} variant="interactive">
            <CardHeader className="pb-3">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <h3 className="font-semibold text-text mb-1">{challenge.name}</h3>
                  <p className="text-sm text-subtle-text">{challenge.description}</p>
                </div>
                <Badge variant={getRewardBadgeVariant(challenge.rewardType)}>
                  {challenge.rewardAmount} {challenge.rewardType}
                </Badge>
              </div>
            </CardHeader>

            <CardContent className="pt-0">
              <div className="flex items-center justify-between text-sm text-subtle-text mb-3">
                <div className="flex items-center space-x-4">
                  <div className="flex items-center space-x-1">
                    <Calendar className="w-4 h-4" />
                    <span>Ends {formatDate(challenge.endDate)}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Users className="w-4 h-4" />
                    <span>{challenge.participants} joined</span>
                  </div>
                </div>
              </div>

              <Button
                variant="outline"
                size="sm"
                className="w-full"
                onClick={() => onJoinChallenge(challenge.challengeId)}
              >
                Join Challenge
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
