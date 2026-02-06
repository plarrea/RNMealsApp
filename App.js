import { Ionicons } from '@expo/vector-icons';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar, StyleSheet } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Provider } from 'react-redux';
import CategoriesScreens from './src/screens/CategoriesScreen';
import FavoritesScreen from './src/screens/FavoritesScreen';
import MealDetailScreen from './src/screens/MealDetailScreen';
import MealsOverviewScreen from './src/screens/MealsOverviewScreen';
// import FavoritesProvider from './src/store/context/favorites-context';
import { store } from './src/store/redux/store';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerTintColor: 'white',
        headerStyle: { backgroundColor: '#351401' },
        sceneStyle: { backgroundColor: '#3f2f25' }, // prev sceneContainerStyle
        drawerContentStyle: { backgroundColor: '#351401' },
        drawerInactiveTintColor: 'white',
        drawerActiveTintColor: '#351401',
        drawerActiveBackgroundColor: '#e4baa1',
      }}
    >
      <Drawer.Screen
        name="Categories"
        component={CategoriesScreens}
        options={{
          title: 'All Categories',
          drawerIcon: ({ color, size }) => (
            <Ionicons name="list" color={color} size={size} />
          ),
        }}
      />
      <Drawer.Screen
        name="Favorites"
        component={FavoritesScreen}
        options={{
          title: 'Favorites',
          drawerIcon: ({ color, size }) => (
            <Ionicons name="star" color={color} size={size} />
          ),
        }}
      />
    </Drawer.Navigator>
  );
};

export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <Provider store={store}>
        {/* <FavoritesProvider> */}
        <GestureHandlerRootView style={{ flex: 1 }}>
          <NavigationContainer>
            <Stack.Navigator
              initialRouteName="Drawer"
              screenOptions={{
                headerTintColor: 'white',
                headerStyle: { backgroundColor: '#351401' },
                contentStyle: { backgroundColor: '#3f2f25' },
                headerBackTitle: 'Back',
              }}
            >
              <Stack.Screen
                name="Drawer"
                component={DrawerNavigator}
                options={{
                  headerShown: false,
                }}
              />
              <Stack.Screen
                name="MealsOverview"
                component={MealsOverviewScreen}
                // options={({ route, _ }) => {
                //   const categoryName = route.params.categoryName;
                //   return {
                //     titile: categoryName,
                //   };
                // }}
              />
              <Stack.Screen
                name="MealDetail"
                component={MealDetailScreen}
                options={{
                  title: 'About the Meal',
                }}
              />
            </Stack.Navigator>
          </NavigationContainer>
        </GestureHandlerRootView>
        {/* </FavoritesProvider> */}
      </Provider>
    </>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#24180f' },
});
