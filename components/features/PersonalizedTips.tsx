'use client';

import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { Card, CardContent, CardHeader } from '@/components/ui/Card';
import { PersonalizedTip } from '@/lib/types';
import { formatCarbonAmount, getActivityIcon } from '@/lib/utils';
import { CheckCircle, Lightbulb } from 'lucide-react';

interface PersonalizedTipsProps {
  tips: PersonalizedTip[];
  onMarkCompleted: (tipId: string) => void;
}

export function PersonalizedTips({ tips, onMarkCompleted }: PersonalizedTipsProps) {
  const getDifficultyColor = (difficulty: PersonalizedTip['difficulty']) => {
    switch (difficulty) {
      case 'easy':
        return 'text-green-600 bg-green-50 border-green-200';
      case 'medium':
        return 'text-yellow-600 bg-yellow-50 border-yellow-200';
      case 'hard':
        return 'text-red-600 bg-red-50 border-red-200';
      default:
        return 'text-gray-600 bg-gray-50 border-gray-200';
    }
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center space-x-2">
        <Lightbulb className="w-5 h-5 text-primary" />
        <h2 className="text-heading">Personalized Tips</h2>
      </div>

      <div className="space-y-3">
        {tips.map((tip) => (
          <Card key={tip.id} className={tip.isCompleted ? 'opacity-60' : ''}>
            <CardHeader className="pb-3">
              <div className="flex items-start justify-between">
                <div className="flex items-start space-x-3 flex-1">
                  <div className="text-lg">
                    {getActivityIcon(tip.category)}
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-text mb-1">{tip.title}</h3>
                    <p className="text-sm text-subtle-text">{tip.description}</p>
                  </div>
                </div>
                {tip.isCompleted && (
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                )}
              </div>
            </CardHeader>

            <CardContent className="pt-0">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <Badge
                    className={`text-xs ${getDifficultyColor(tip.difficulty)}`}
                  >
                    {tip.difficulty}
                  </Badge>
                  <span className="text-sm text-primary font-medium">
                    Save {formatCarbonAmount(tip.potentialSavings)}
                  </span>
                </div>

                {!tip.isCompleted && (
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => onMarkCompleted(tip.id)}
                  >
                    Mark Done
                  </Button>
                )}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
