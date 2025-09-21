export const ACTIVITY_CATEGORIES = {
  transport: [
    { id: 'car', name: 'Car', unit: 'km' },
    { id: 'bus', name: 'Bus', unit: 'km' },
    { id: 'train', name: 'Train', unit: 'km' },
    { id: 'bike', name: 'Bike', unit: 'km' },
    { id: 'walk', name: 'Walk', unit: 'km' },
  ],
  food: [
    { id: 'meat', name: 'Meat', unit: 'servings' },
    { id: 'dairy', name: 'Dairy', unit: 'servings' },
    { id: 'vegetables', name: 'Vegetables', unit: 'servings' },
    { id: 'grains', name: 'Grains', unit: 'servings' },
  ],
  energy: [
    { id: 'electricity', name: 'Electricity', unit: 'kWh' },
    { id: 'gas', name: 'Natural Gas', unit: 'm³' },
    { id: 'heating', name: 'Heating', unit: 'kWh' },
  ],
  other: [
    { id: 'shopping', name: 'Shopping', unit: 'items' },
    { id: 'waste', name: 'Waste', unit: 'kg' },
  ],
};

export const SAMPLE_CHALLENGES = [
  {
    challengeId: '1',
    name: 'Car-Free Week',
    description: 'Go a full week without using a car',
    rewardType: 'badge' as const,
    rewardAmount: 50,
    startDate: new Date(),
    endDate: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
    participants: 127,
    isActive: true,
  },
  {
    challengeId: '2',
    name: 'Plant-Based Monday',
    description: 'Eat only plant-based meals every Monday this month',
    rewardType: 'points' as const,
    rewardAmount: 25,
    startDate: new Date(),
    endDate: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000),
    participants: 89,
    isActive: true,
  },
  {
    challengeId: '3',
    name: 'Energy Saver',
    description: 'Reduce energy consumption by 20% this month',
    rewardType: 'token' as const,
    rewardAmount: 10,
    startDate: new Date(),
    endDate: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000),
    participants: 156,
    isActive: true,
  },
];

export const SAMPLE_TIPS = [
  {
    id: '1',
    title: 'Walk for Short Trips',
    description: 'For trips under 1km, walking can reduce your carbon footprint by 100%',
    category: 'transport' as const,
    potentialSavings: 0.21,
    difficulty: 'easy' as const,
    isCompleted: false,
  },
  {
    id: '2',
    title: 'Meatless Monday',
    description: 'Replace one meat meal per week with a plant-based alternative',
    category: 'food' as const,
    potentialSavings: 6.61,
    difficulty: 'easy' as const,
    isCompleted: false,
  },
  {
    id: '3',
    title: 'LED Light Switch',
    description: 'Replace incandescent bulbs with LED bulbs to save energy',
    category: 'energy' as const,
    potentialSavings: 0.5,
    difficulty: 'medium' as const,
    isCompleted: false,
  },
];
