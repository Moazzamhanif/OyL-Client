import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import CreateAccount from '../../../src/screens/authFlow/Create account';
import Splash from '../../../src/screens/authFlow/Splash';
import Setupprofile from '../../../src/screens/authFlow/Set Up Your Profile';
import Splashh from '../../screens/authFlow/Splash0';
const Stack = createStackNavigator();
const AuthNavigation = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Splashh" component={Splashh} />
      <Stack.Screen name="splash" component={Splash} />
      <Stack.Screen name="CreateAccount"  component={CreateAccount}/>
      <Stack.Screen name="Setupprofile" component={Setupprofile} />  
    </Stack.Navigator>
  );
};
export default AuthNavigation;
