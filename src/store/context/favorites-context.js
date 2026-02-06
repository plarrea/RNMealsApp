import { createContext, useCallback, useMemo, useState } from 'react';

export const FavoritesContext = createContext({
  ids: [],
  addFavorite: (_id) => {},
  removeFavorite: (_id) => {},
});

const FavoritesProvider = ({ children }) => {
  const [favoriteMealIds, setFavoriteMealIds] = useState([]);

  const addFavorite = useCallback((id) => {
    setFavoriteMealIds((currentFavIds) => [...currentFavIds, id]);
  }, []);

  const removeFavorite = useCallback((id) => {
    setFavoriteMealIds((currentFavIds) =>
      currentFavIds.filter((mealId) => mealId !== id),
    );
  }, []);

  const value = useMemo(
    () => ({
      ids: favoriteMealIds,
      addFavorite,
      removeFavorite,
    }),
    [favoriteMealIds, addFavorite, removeFavorite],
  );

  return (
    <FavoritesContext.Provider value={value}>
      {children}
    </FavoritesContext.Provider>
  );
};

export default FavoritesProvider;
