import React, { createContext, useState, useContext, ReactNode, useEffect } from 'react';
import { Item, Recipe, RecipeContextType } from '../types';

const RecipeContext = createContext<RecipeContextType | undefined>(undefined);

interface RecipeProviderProps {
  children: ReactNode;
}

export const RecipeProvider: React.FC<RecipeProviderProps> = ({ children }) => {
  const [items, setItems] = useState<Item[]>([]);
  const [basket, setBasket] = useState<Item[]>([]);
  const [recipes, setRecipes] = useState<Recipe[]>([]);
  const [loading, setLoading] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const filteredItems = items.filter(item =>
    item.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const fetchItems = async () => {
    const response = await fetch("https://assignment-rebel-minds.onrender.com/api/items", {
      method: "GET",
    });
    const data = await response.json()
    const newItems = data.map((item: any) => ({
      id: item._id,
      name: item.name
    }));
    
    setItems(newItems);
  };

  useEffect(() => {
    const fetchData = async () => {
      await Promise.all([fetchItems(), getRecipes()]);
    };
    fetchData();
  }, []);

  const addItem = async (item: Item) => {
    setItems((prevItems) => [...prevItems, item]);
    await fetch("https://assignment-rebel-minds.onrender.com/api/items/add", {
      method: "POST",
      body: JSON.stringify({
        item: item.name
      }),
      headers: {
        "Content-Type":"application/json"
      }
    });
  };

  const addToBasket = (item: Item) => {
    setBasket((prevBasket) => [...prevBasket, item]);
  };

  const removeFromBasket = (index: number) => {
    setBasket((prevBasket) => prevBasket.filter((_, i) => i !== index));
  };

  const clearBasket = () => {
    setBasket([]);
  };

  const generateRecipe = async () => {
    if (basket.length === 0) return;

    setLoading(true);
    
    try {
      await new Promise(resolve => setTimeout(resolve, 4000));
      const items = basket.map((item) => item.name);
      const response = await fetch("https://assignment-rebel-minds.onrender.com/api/recipes/basket/generate-recipe", {
        method: "POST",
        body: JSON.stringify({
          items: items
        }),
        headers: {
          "Content-Type": "application/json"
        } 
      })
      const data = await response.json();

      const newRecipe: Recipe = {
        id: data._id,
        title: data.title,
        text: data.instructions,
        items: data.ingredients,
        createdAt: data.createdAt
      };
      
      setRecipes((prevRecipes) => [newRecipe, ...prevRecipes]);
      clearBasket();
    } catch (error) {
      console.error('Error generating recipe:', error);
    } finally {
      setLoading(false);
    }
  };

  const getRecipes = async () => {
    const response = await fetch("https://assignment-rebel-minds.onrender.com/api/recipes/history", {
      method: "GET"
    });
    const data = await response.json();
    const newRecipes = data.map((recipe: any) => ({
      id: recipe._id,
      title: recipe.title,
      text: recipe.instructions,
      items: recipe.ingredients,
      createdAt: recipe.createdAt
    }));
    setRecipes(newRecipes);
  }

  return (
    <RecipeContext.Provider
      value={{
        items: filteredItems,
        basket,
        recipes,
        loading,
        searchQuery,
        setSearchQuery,
        addItem,
        addToBasket,
        removeFromBasket,
        clearBasket,
        generateRecipe
      }}
    >
      {children}
    </RecipeContext.Provider>
  );
};

export const useRecipeContext = (): RecipeContextType => {
  const context = useContext(RecipeContext);
  if (context === undefined) {
    throw new Error('useRecipeContext must be used within a RecipeProvider');
  }
  return context;
};