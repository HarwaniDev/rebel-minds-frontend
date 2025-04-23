import React from 'react';
import { Header } from './components/Header';
import { MainContent } from './components/MainContent';
import { useRecipeContext } from './context/RecipeContext';

function App() {
  const { loading } = useRecipeContext();
  
  return (
    <div className="min-h-screen bg-white font-poppins flex flex-col">
      <Header />
      <main className="flex-1 container mx-auto px-4 py-6 md:px-6 lg:px-8">
        {loading && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
            <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center">
              <div className="w-12 h-12 border-4 border-primary border-t-transparent rounded-full animate-spin mb-4"></div>
              <p className="text-gray-700">Generating your recipe...</p>
            </div>
          </div>
        )}
        <MainContent />
      </main>
      <footer className="bg-gray-50 py-4">
        <div className="container mx-auto px-4 text-center text-gray-500 text-sm">
          &copy; {new Date().getFullYear()} Recipe Generator. All rights reserved.
        </div>
      </footer>
    </div>
  );
}

export default App;