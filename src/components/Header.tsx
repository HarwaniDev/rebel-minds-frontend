import React from 'react';
import { Utensils, Search } from 'lucide-react';
import { useRecipeContext } from '../context/RecipeContext';

export const Header: React.FC = () => {
  const { searchQuery, setSearchQuery } = useRecipeContext();

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-10">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Utensils className="h-7 w-7 text-primary" />
          <h1 className="text-xl font-semibold">Recipe Generator</h1>
        </div>
        
        <div className="relative">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search items..."
            className="pl-9 pr-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary"
          />
          <Search className="absolute left-2.5 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
        </div>
      </div>
    </header>
  );
};