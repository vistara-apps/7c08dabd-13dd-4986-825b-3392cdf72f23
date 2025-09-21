'use client';

import { Button } from '@/components/ui/Button';
import { Card, CardContent, CardHeader } from '@/components/ui/Card';
import { InputWithLabel, SelectWithLabel } from '@/components/ui/InputWithLabel';
import { ACTIVITY_CATEGORIES } from '@/lib/constants';
import { ActivityType, ActivityDetails } from '@/lib/types';
import { calculateCarbonImpact, formatCarbonAmount, getActivityIcon } from '@/lib/utils';
import { useState } from 'react';

interface ActivityLoggerProps {
  onActivityLogged: (activityType: ActivityType, details: ActivityDetails, impact: number) => void;
}

export function ActivityLogger({ onActivityLogged }: ActivityLoggerProps) {
  const [selectedType, setSelectedType] = useState<ActivityType>('transport');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [quantity, setQuantity] = useState('');
  const [description, setDescription] = useState('');
  const [isLogging, setIsLogging] = useState(false);

  const currentCategories = ACTIVITY_CATEGORIES[selectedType];
  const selectedCategoryData = currentCategories.find(cat => cat.id === selectedCategory);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedCategory || !quantity) return;

    setIsLogging(true);

    const details: ActivityDetails = {
      category: selectedCategory,
      description: description || `${selectedCategoryData?.name} activity`,
      quantity: parseFloat(quantity),
      unit: selectedCategoryData?.unit,
    };

    const impact = calculateCarbonImpact(selectedType, details);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    onActivityLogged(selectedType, details, impact);
    
    // Reset form
    setSelectedCategory('');
    setQuantity('');
    setDescription('');
    setIsLogging(false);
  };

  return (
    <Card>
      <CardHeader>
        <h2 className="text-heading flex items-center space-x-2">
          <span>Log Activity</span>
          <span>{getActivityIcon(selectedType)}</span>
        </h2>
      </CardHeader>

      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-4 gap-2">
            {(Object.keys(ACTIVITY_CATEGORIES) as ActivityType[]).map((type) => (
              <button
                key={type}
                type="button"
                onClick={() => {
                  setSelectedType(type);
                  setSelectedCategory('');
                }}
                className={`p-3 rounded-md border text-center transition-colors duration-200 ${
                  selectedType === type
                    ? 'border-primary bg-primary/10 text-primary'
                    : 'border-border hover:bg-gray-50'
                }`}
              >
                <div className="text-lg mb-1">{getActivityIcon(type)}</div>
                <div className="text-xs font-medium capitalize">{type}</div>
              </button>
            ))}
          </div>

          <SelectWithLabel
            label="Activity"
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            options={[
              { value: '', label: 'Select activity...' },
              ...currentCategories.map(cat => ({
                value: cat.id,
                label: cat.name,
              })),
            ]}
            required
          />

          {selectedCategoryData && (
            <InputWithLabel
              label={`Quantity (${selectedCategoryData.unit})`}
              variant="number"
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
              placeholder={`Enter ${selectedCategoryData.unit}...`}
              min="0"
              step="0.1"
              required
            />
          )}

          <InputWithLabel
            label="Description (optional)"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Add details about this activity..."
          />

          {selectedCategory && quantity && (
            <div className="p-3 bg-gray-50 rounded-md">
              <p className="text-sm text-subtle-text">Estimated impact:</p>
              <p className="text-lg font-semibold text-text">
                {formatCarbonAmount(calculateCarbonImpact(selectedType, {
                  category: selectedCategory,
                  description: '',
                  quantity: parseFloat(quantity) || 0,
                }))}
              </p>
            </div>
          )}

          <Button
            type="submit"
            className="w-full"
            disabled={!selectedCategory || !quantity}
            isLoading={isLogging}
          >
            {isLogging ? 'Logging Activity...' : 'Log Activity'}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
