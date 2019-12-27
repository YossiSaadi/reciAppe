import React from 'react';
import './src/firebase/fixTimerBug';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import SearchScreen from './src/screens/SearchScreen';
import RestaurantDetailScreen from './src/screens/RestaurantDetailScreen';
import SignInScreen from './src/screens/SignInScreen';
import SignUpScreen from './src/screens/SignUpScreen';
import { ThemeProvider } from 'react-native-elements';
import reactNativeElementsTheme from './src/utils/elementsTheme';

// const navigator = createStackNavigator(
//   {
//     Search: SearchScreen,
//     Restaurant: RestaurantDetailScreen
//   },
//   {
//     initialRouteName: 'Search',
//     defaultNavigationOptions: {
//       title: 'Business Search'
//     }
//   }
// );

const AppSwitchNavigator = createSwitchNavigator({
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

  Main: createStackNavigator(
    {
      // Home: HomeScreen,
      Search: SearchScreen,
      Restaurant: RestaurantDetailScreen
    },
    {
      initialRouteName: 'Search',
      defaultNavigationOptions: {
        title: 'Business Search'
      }
    }
  )
});

const App = createAppContainer(AppSwitchNavigator);

export default () =>
  <ThemeProvider theme = { reactNativeElementsTheme }>
    <App />
  </ThemeProvider>
