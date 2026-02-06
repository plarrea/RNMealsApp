import { useContext } from 'react';
import { FavoritesContext } from './favorites-context';

export const useFavorites = () => {
  const context = useContext(FavoritesContext);

  if (!context) {
    throw new Error('useFavoritesContext must be used within FavoritesContext');
  }

  return context;
};
