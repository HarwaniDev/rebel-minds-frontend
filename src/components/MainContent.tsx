import React from 'react';
import { ItemManager } from './ItemManager';
import { Basket } from './Basket';
import { RecipeHistory } from './RecipeHistory';

export const MainContent: React.FC = () => {
  return (
    <div className="max-w-2xl mx-auto space-y-8">
      <ItemManager />
      <Basket />
      <RecipeHistory />
    </div>
  );
};