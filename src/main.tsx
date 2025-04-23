import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { RecipeProvider } from './context/RecipeContext.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RecipeProvider>
      <App />
    </RecipeProvider>
  </StrictMode>
);