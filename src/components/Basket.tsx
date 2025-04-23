import React from 'react';
import { Trash2, CookingPot } from 'lucide-react';
import { useRecipeContext } from '../context/RecipeContext';

export const Basket: React.FC = () => {
  const { basket, removeFromBasket, clearBasket, generateRecipe } = useRecipeContext();
  
  return (
    <div className="bg-gray-50 rounded-lg p-5 shadow-sm">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold">Basket <span className="text-sm text-gray-500">({basket.length} items)</span></h2>
        
        {basket.length > 0 && (
          <button 
            onClick={clearBasket}
            className="text-red-500 hover:text-red-700 text-sm flex items-center gap-1 transition-colors"
          >
            <Trash2 size={14} />
            Clear
          </button>
        )}
      </div>
      
      <div className="h-40 overflow-y-auto pr-2 custom-scrollbar mb-4">
        {basket.length === 0 ? (
          <p className="text-gray-500 text-center py-8">Your basket is empty. Click on items to add them here.</p>
        ) : (
          <ul className="space-y-2">
            {basket.map((item, index) => (
              <li 
                key={`${item.id}-${index}`}
                className="bg-white p-3 rounded-md shadow-sm border border-gray-100 flex justify-between items-center group"
              >
                <span>{item.name}</span>
                <button 
                  onClick={() => removeFromBasket(index)}
                  className="text-gray-400 hover:text-red-500 opacity-0 group-hover:opacity-100 transition-opacity"
                >
                  <Trash2 size={16} />
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
      
      <button
        onClick={generateRecipe}
        disabled={basket.length === 0}
        className={`w-full py-3 rounded-md flex items-center justify-center gap-2 transition-all ${
          basket.length === 0 
            ? 'bg-gray-300 text-gray-500 cursor-not-allowed' 
            : 'bg-primary text-white hover:bg-primary-dark'
        }`}
      >
        <CookingPot size={18} />
        Generate Recipe
      </button>
    </div>
  );
};