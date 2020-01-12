import React from 'react';
import './src/firebase/fixTimerBug';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import HomeScreen from './src/screens/HomeScreen';
import FavoritesScreen from './src/screens/FavoritesScreen';
import RecipeDetailedScreen from './src/screens/RecipeDetailedScreen';
import LocalRecipeDetailedScreen from "./src/screens/LocalRecipeDetailedScreen";
import SignInScreen from './src/screens/SignInScreen';
import SignUpScreen from './src/screens/SignUpScreen';
import { ThemeProvider } from 'react-native-elements';
import reactNativeElementsTheme from './src/utils/elementsTheme';
import NewRecipeScreen from './src/screens/NewRecipeScreen';
import IngredientsScreen from './src/screens/IngredientsScreen';
import { Icon } from 'react-native-elements';

// noinspection JSCheckFunctionSignatures
createBottomTabNavigator({
    Main: createStackNavigator(
      {
        Home: HomeScreen,
        Recipe: RecipeDetailedScreen
      },
      {
        initialRouteName: 'Home',
        defaultNavigationOptions: {
          title: 'Recipes Search'
        }
      }
    )
  },
  {
    initialRouteName: 'Main',
    defaultNavigationOptions: {
      title: 'Something Else'
    }
  });

// noinspection JSCheckFunctionSignatures
const AppSwitchNavigator =
  createSwitchNavigator({
    LoginFlow: createStackNavigator({
      SignIn: SignInScreen,
      SignUp: SignUpScreen
    }, {
      initialRouteName: 'SignIn',
      headerMode: 'none',
      navigationOptions: {
        header: null
      }
    }),
    Bottom: createBottomTabNavigator({
      Main: {
        screen: createStackNavigator({
          Home: HomeScreen,
          Recipe: RecipeDetailedScreen,
          LocalRecipe: LocalRecipeDetailedScreen
        }, {
          initialRouteName: 'Home',
          navigationOptions: ({ navigation }) => {
            return {
              title: 'Home',
              tabBarVisible: navigation.state.index <= 0
            };
          }
        })
      },
      Favorites: {
        screen: createStackNavigator({
          Favorites: FavoritesScreen,
          Ingredients: IngredientsScreen
        }, {
          initialRouteName: 'Favorites',
          navigationOptions: ({ navigation }) => {
            return {
              title: 'Favorites',
              tabBarVisible: navigation.state.index <= 0
            };
          }
        })
      },
      NewRecipe: {
        screen: createStackNavigator({
          NewRecipe: NewRecipeScreen,
          Ingredients: IngredientsScreen
        }, {
          initialRouteName: 'NewRecipe',
          navigationOptions: ({ navigation }) => {
            return {
              title: 'New',
              tabBarVisible: navigation.state.index <= 0
            };
          }
        })
      }
    }, {
      initialRouteName: 'Main',
      defaultNavigationOptions: ({ navigation }) => ({
        tabBarIcon: ({ focused, horizontal, tintColor }) => {
          const { routeName } = navigation.state;
          let iconName;
          let IconComponent = Icon;

          if (routeName === 'Main') {
            iconName = 'home';
          } else if (routeName === 'Favorites') {
            iconName = 'star';
          } else if (routeName === 'NewRecipe') {
            iconName = 'plus-circle';
          }

          return <IconComponent type = 'font-awesome' name = { iconName } size = { 25 } color = { tintColor } />;
        },
        tabBarOptions: {
          activeTintColor: 'tomato',
          inactiveTintColor: 'gray'
        }

      })
    })
  }, {
    initialRouteName: 'LoginFlow'
  });

const App = createAppContainer(AppSwitchNavigator);

export default () =>
  <ThemeProvider theme = { reactNativeElementsTheme }>
    <App />
  </ThemeProvider>
