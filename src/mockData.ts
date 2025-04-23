import { Item, Recipe } from './types';

export const mockItems: Item[] = [
  // { id: '1', name: 'Chicken' },
  // { id: '2', name: 'Rice' },
  // { id: '3', name: 'Tomatoes' },
  // { id: '4', name: 'Onions' },
  // { id: '5', name: 'Garlic' },
  // { id: '6', name: 'Olive Oil' },
  // { id: '7', name: 'Bell Peppers' },
  // { id: '8', name: 'Pasta' },
  // { id: '9', name: 'Cheese' },
  // { id: '10', name: 'Eggs' },
  // { id: '11', name: 'Milk' },
  // { id: '12', name: 'Potatoes' },
  // { id: '13', name: 'Carrots' },
  // { id: '14', name: 'Broccoli' },
  // { id: '15', name: 'Spinach' }
];

export const mockRecipes: Recipe[] = [
  {
    id: '1',
    title: 'Tomato and Egg Stir-fry',
    text: `This classic tomato and egg stir-fry is a quick and delicious dish.\n\nInstructions:\n1. Beat the eggs in a bowl and season with salt.\n2. Heat oil in a wok and scramble the eggs until just cooked. Remove and set aside.\n3. In the same wok, stir-fry chopped tomatoes until soft.\n4. Return eggs to the wok, add a pinch of sugar and salt to taste.\n5. Stir together gently and serve hot with rice.`,
    items: [
      { id: '3', name: 'Tomatoes' },
      { id: '10', name: 'Eggs' },
      { id: '2', name: 'Rice' }
    ],
    createdAt: Date.now() - 86400000 // 1 day ago
  },
  {
    id: '2',
    title: 'Garlic Pasta with Cheese',
    text: `A simple and flavorful pasta dish with garlic and cheese.\n\nInstructions:\n1. Cook pasta according to package instructions until al dente.\n2. In a pan, heat olive oil and sauté minced garlic until fragrant.\n3. Add cooked pasta to the pan and toss to coat with the garlic oil.\n4. Remove from heat and sprinkle generously with cheese.\n5. Season with salt and pepper to taste, and serve immediately.`,
    items: [
      { id: '8', name: 'Pasta' },
      { id: '5', name: 'Garlic' },
      { id: '9', name: 'Cheese' },
      { id: '6', name: 'Olive Oil' }
    ],
    createdAt: Date.now() - 172800000 // 2 days ago
  }
];