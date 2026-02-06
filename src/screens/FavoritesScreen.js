import { StyleSheet, Text, View } from 'react-native';
import MealsList from '../components/MealsList/MealsList';
import { MEALS } from '../data/dummy-data';
// import { useFavorites } from '../store/context/use-favorites';
import { useSelector } from 'react-redux';

const FavoritesScreen = () => {
  const ids = useSelector((state) => state.favoriteMeals.ids);
  // const { ids } = useFavorites();
  const meals = MEALS.filter((meal) => ids.includes(meal.id));

  if (meals.length === 0) {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>You have no favorite meals yet.</Text>
      </View>
    );
  }

  return <MealsList list={meals} />;
};

export default FavoritesScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
  },
});
