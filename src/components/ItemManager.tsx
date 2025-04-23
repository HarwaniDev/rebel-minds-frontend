import React, { useState } from 'react';
import { Plus } from 'lucide-react';
import { useRecipeContext } from '../context/RecipeContext';

export const ItemManager: React.FC = () => {
  const { items, addItem, addToBasket } = useRecipeContext();
  const [newItemName, setNewItemName] = useState('');

  const handleAddItem = async () => {
    if (newItemName.trim()) {
      try {
        await axios.post("http://localhost:3000/api/items/add", {
          item: newItemName.trim()
        });  
      } catch (error) {
        console.log("error adding item: ", error);
        
      }
      addItem({ id: Date.now().toString(), name: newItemName.trim() });
      setNewItemName('');
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleAddItem();
    }
  };

  return (
    <div className="bg-gray-50 rounded-lg p-5 shadow-sm">
      <h2 className="text-xl font-semibold mb-4">Item Manager</h2>
      
      <div className="flex gap-2 mb-4">
        <input
          type="text"
          value={newItemName}
          onChange={(e) => setNewItemName(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Add a new item..."
          className="flex-1 border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
        />
        <button
          onClick={handleAddItem}
          className="bg-primary text-white px-3 py-2 rounded-md hover:bg-primary-dark transition-colors flex items-center gap-1"
          disabled={!newItemName.trim()}
        >
          <Plus size={16} />
          <span>Add</span>
        </button>
      </div>
      
      <div className="h-60 overflow-y-auto pr-2 custom-scrollbar">
        {items.length === 0 ? (
          <p className="text-gray-500 text-center py-8">No items available. Add some items to get started!</p>
        ) : (
          <ul className="space-y-2">
            {items.map((item) => (
              <li 
                key={item.id}
                onClick={() => addToBasket(item)}
                className="bg-white p-3 rounded-md shadow-sm border border-gray-100 cursor-pointer hover:border-primary hover:shadow-md transition-all flex justify-between items-center"
              >
                <span>{item.name}</span>
                <button className="text-primary hover:bg-primary-light hover:text-white p-1 rounded-full transition-colors">
                  <Plus size={16} />
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};