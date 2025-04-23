export interface Item {
  id: string;
  name: string;
}

export interface Recipe {
  id: string;
  title: string;
  text: string;
  items: Item[];
  createdAt: number;
}

export interface RecipeContextType {
  items: Item[];
  basket: Item[];
  recipes: Recipe[];
  loading: boolean;
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  addItem: (item: Item) => void;
  addToBasket: (item: Item) => void;
  removeFromBasket: (index: number) => void;
  clearBasket: () => void;
  generateRecipe: () => void;
}