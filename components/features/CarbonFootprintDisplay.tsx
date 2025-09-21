'use client';

import { Card, CardContent, CardHeader } from '@/components/ui/Card';
import { ProgressBar } from '@/components/ui/ProgressBar';
import { formatCarbonAmount } from '@/lib/utils';
import { CarbonFootprintData } from '@/lib/types';
import { TrendingDown, TrendingUp } from 'lucide-react';

interface CarbonFootprintDisplayProps {
  data: CarbonFootprintData;
  target?: number;
}

export function CarbonFootprintDisplay({ data, target = 50 }: CarbonFootprintDisplayProps) {
  const { dailyTotal, categories } = data;
  const isUnderTarget = dailyTotal < target;
  
  const categoryData = [
    { name: 'Transport', value: categories.transport, color: 'bg-blue-500', percentage: 15 },
    { name: 'Food', value: categories.food, color: 'bg-green-500', percentage: 58.5 },
    { name: 'Energy', value: categories.energy, color: 'bg-orange-500', percentage: 20 },
    { name: 'Other', value: categories.other, color: 'bg-purple-500', percentage: 6.5 },
  ];

  return (
    <Card className="mb-6">
      <CardHeader className="text-center">
        <div className="flex items-center justify-center mb-4">
          <div className="relative">
            <ProgressBar
              value={dailyTotal}
              max={target}
              variant="circular"
              size="lg"
              showLabel
            />
          </div>
        </div>
        
        <div className="space-y-2">
          <h2 className="text-heading">Today's Footprint</h2>
          <p className="text-2xl font-bold text-text">
            {formatCarbonAmount(dailyTotal)}
          </p>
          <div className={`flex items-center justify-center space-x-1 text-sm ${
            isUnderTarget ? 'text-green-600' : 'text-red-600'
          }`}>
            {isUnderTarget ? (
              <TrendingDown className="w-4 h-4" />
            ) : (
              <TrendingUp className="w-4 h-4" />
            )}
            <span>
              {isUnderTarget ? 'Under' : 'Over'} target by{' '}
              {formatCarbonAmount(Math.abs(dailyTotal - target))}
            </span>
          </div>
        </div>
      </CardHeader>

      <CardContent>
        <div className="space-y-4">
          <h3 className="text-sm font-medium text-subtle-text">Breakdown</h3>
          <div className="grid grid-cols-2 gap-4">
            {categoryData.map((category) => (
              <div key={category.name} className="space-y-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <div className={`w-3 h-3 rounded-full ${category.color}`} />
                    <span className="text-sm text-text">{category.name}</span>
                  </div>
                  <span className="text-sm font-medium text-text">
                    {category.percentage}%
                  </span>
                </div>
                <div className="text-xs text-subtle-text">
                  {formatCarbonAmount(category.value)}
                </div>
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
