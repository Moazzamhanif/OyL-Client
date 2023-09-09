// RootNavigation.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import AuthNavigation from '../navigation/authNavigation'; // Import your AuthNavigation component
import AppNavigation from '../navigation/appNavigation'; // Import your AppNavigation component
const Stack = createStackNavigator();
const RootNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName='AuthNavigation'>
        <Stack.Screen name='AppNavigation' component={AppNavigation} />
        <Stack.Screen name='AuthNavigation' component={AuthNavigation} />

      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default RootNavigation;
