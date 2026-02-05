import { useLayoutEffect } from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import MealItem from '../components/MealItem';
import { MEALS } from '../data/dummy-data';

const MealsOverviewScreen = ({ route, navigation }) => {
  const { categoryId, categoryName } = route.params;

  const meals = MEALS.filter((meal) => meal.categoryIds.includes(categoryId));

  const renderMealItem = (itemData) => {
    return <MealItem {...itemData.item} />;
  };

  useLayoutEffect(() => {
    navigation.setOptions({ title: categoryName });
  }, [categoryName, navigation]);

  return (
    <View>
      <FlatList
        data={meals}
        keyExtractor={(item) => item.id}
        renderItem={renderMealItem}
      />
    </View>
  );
};

export default MealsOverviewScreen;

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#24180f' },
});
