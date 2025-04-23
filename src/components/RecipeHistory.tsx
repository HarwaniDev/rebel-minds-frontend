import React from 'react';
import { Clock, ChefHat } from 'lucide-react';
import { useRecipeContext } from '../context/RecipeContext';

const formatRecipeText = (text: string) => {
  return text.split('\n').map((line, index) => {
    // Handle list items
    if (line.trim().startsWith('* ')) {
      return (
        <div key={index} className="flex items-start text-gray-600 whitespace-pre-line">
          <span className="mr-2">•</span>
          <span>{line.trim().substring(2)}</span>
        </div>
      );
    }
    
    // Handle bold text
    const parts = line.split(/(\*\*.*?\*\*)/g);
    return (
      <p key={index} className="text-gray-600 whitespace-pre-line">
        {parts.map((part, i) => {
          if (part.startsWith('**') && part.endsWith('**')) {
            return <strong key={i}>{part.slice(2, -2)}</strong>;
          }
          return part;
        })}
      </p>
    );
  });
};

export const RecipeHistory: React.FC = () => {
  const { recipes } = useRecipeContext();

  return (
    <div className="bg-gray-50 rounded-lg p-5 shadow-sm">
      <h2 className="text-xl font-semibold mb-4">Recipe History</h2>
      
      {recipes.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-16 text-center">
          <ChefHat size={48} className="text-gray-300 mb-4" />
          <p className="text-gray-500 mb-2">No recipes generated yet</p>
          <p className="text-gray-400 text-sm max-w-md">
            Add items to your basket and click "Generate Recipe" to create delicious recipes based on your ingredients.
          </p>
        </div>
      ) : (
        <div className="space-y-6">
          {recipes.map((recipe) => (
            <div 
              key={recipe.id} 
              className="bg-white rounded-lg p-5 shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
            >
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-lg font-medium">{recipe.title}</h3>
                <div className="flex items-center text-sm text-gray-500">
                  <Clock size={14} className="mr-1" />
                  <span>{new Date(recipe.createdAt).toLocaleDateString()}</span>
                </div>
              </div>
              
              <div className="mb-4">
                {/* <div className="flex flex-wrap gap-2">
                  {recipe.items.map((item, index) => (
                    <span 
                      key={`${item.id}-${index}`}
                      className="bg-gray-100 text-gray-800 px-2 py-1 rounded-md text-sm"
                    >
                      {item.name}
                    </span>
                  ))}
                </div> */}
              </div>
              
              <div>
                {formatRecipeText(recipe.text)}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};