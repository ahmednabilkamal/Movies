import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import categoryScreen from '../screens/category/categoryScreen';
import EditMovieScreen from '../screens/EditMovie/EditMovieScreen';
import MovieByCategoryScreens from '../screens/MovieByCategory/MovieByCategoryScreens';

const Stack = createStackNavigator();

function AppNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={'category'}>
        <Stack.Screen
          name="category"
          component={categoryScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="MovieByCategory"
          component={MovieByCategoryScreens}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="EditMovie"
          component={EditMovieScreen}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppNavigation;
