import { useCallback, useLayoutEffect, useMemo } from 'react';
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import IconButton from '../components/IconButton';
import List from '../components/MealDetail/List';
import Subtitle from '../components/MealDetail/Subtitle';
import MealDetails from '../components/MealDetails';
import { MEALS } from '../data/dummy-data';
// import { useFavorites } from '../store/context/use-favorites';
import { useDispatch, useSelector } from 'react-redux';
import { addFavorite, removeFavorite } from '../store/redux/favorites';

const MealDetailScreen = ({ route, navigation }) => {
  const { mealId, mealName } = route.params;
  // const { ids: favoriteIds, addFavorite, removeFavorite } = useFavorites();
  const favoriteIds = useSelector((state) => state.favoriteMeals.ids);
  const dispatch = useDispatch();

  const meal = MEALS.find((meal) => meal.id === mealId);
  const isFavorite = useMemo(
    () => favoriteIds.includes(mealId),
    [favoriteIds, mealId],
  );

  const changeFavoriteStatusHandler = useCallback(() => {
    if (isFavorite) {
      // removeFavorite(mealId);
      dispatch(removeFavorite({ id: mealId }));
    } else {
      // addFavorite(mealId);
      dispatch(addFavorite({ id: mealId }));
    }
  }, [
    mealId,
    isFavorite,
    dispatch,
    // addFavorite,
    // removeFavorite,
  ]);

  useLayoutEffect(() => {
    navigation.setOptions({
      // title: mealName,
      headerRight: () => (
        <IconButton
          icon={isFavorite ? 'star' : 'star-outline'}
          onPress={changeFavoriteStatusHandler}
        />
      ),
    });
  }, [isFavorite, navigation, changeFavoriteStatusHandler]);

  return (
    <ScrollView style={styles.rootContainer}>
      <Image style={styles.image} source={{ uri: meal.imageUrl }} />
      <Text style={styles.title}>{meal.title}</Text>
      <MealDetails
        textStyle={styles.detailText}
        duration={meal.duration}
        complexity={meal.complexity}
        affordability={meal.affordability}
      />
      <View style={styles.listOuterContainer}>
        <View style={styles.listContainer}>
          <Subtitle style={styles.subtitle}>Ingredients</Subtitle>
          <List data={meal.ingredients} />
          <Subtitle style={styles.subtitle}>Steps</Subtitle>
          <List data={meal.steps} />
        </View>
      </View>
    </ScrollView>
  );
};

export default MealDetailScreen;

const styles = StyleSheet.create({
  rootContainer: {
    marginBottom: 32,
  },
  image: {
    width: '100%',
    height: 350,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 24,
    margin: 8,
    textAlign: 'center',
    color: 'white',
  },
  detailText: {
    color: 'white',
  },
  listOuterContainer: {
    alignItems: 'center',
  },
  listContainer: {
    width: '80%',
  },
});
