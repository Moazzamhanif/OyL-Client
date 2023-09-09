import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import EditProfile from '../../../src/screens/appFlow/Edit Profile'
import Termsofservices from '../../../src/screens/appFlow/Terms of services'
import Home from '../../../src/screens/appFlow/Home'; /// Import Home
import { Image } from 'react-native'
import Pricing from '../../screens/appFlow/Pricing'
import Thankyou from '../../screens/appFlow/Thank you'
import Account from '../../screens/appFlow/Account'
import PrivicyPolicy from '../../../src/screens/appFlow/Privicy Policy'
import Vehicleinfo from '../../screens/appFlow/Vehicle info'
import { Home1, Profile } from '../../services/utilities/assets';
import { colors } from '../../services/utilities/color';
const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();
const HomeStackScreen = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName='home'>
            <Stack.Screen name="home" component={Home} />
            <Stack.Screen name="Vehicleinfo" component={Vehicleinfo} />
            <Stack.Screen name="Pricing" component={Pricing} />
        </Stack.Navigator>
    );
};
const AccountStackScreen = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}  initialRouteName='Account'>
            <Stack.Screen name="Account" component={Account} />
            <Stack.Screen name="Termsofservices" component={Termsofservices} />
            <Stack.Screen name="PrivicyPolicy" component={PrivicyPolicy} />
            <Stack.Screen name="Thankyou" component={Thankyou} />
            <Stack.Screen name="EditProfile" component={EditProfile} />
        </Stack.Navigator>
    );
};
const AppNavigation = () => {
    return (
        <Tab.Navigator
        initialRouteName="HomeStackScreen"
            screenOptions={{
                headerShown: false,
                tabBarStyle: { backgroundColor: colors.color7 }, // Add your background color here
                tabBarActiveTintColor: colors.color25,
            }}
        >
            <Tab.Screen
                name="HomeStackScreen"
                component={HomeStackScreen}
                options={{
                    tabBarLabel: 'Home', // Text for the tab
                    tabBarIcon: ({ color, size }) => (
                        <Image
                            source={Home1} // Provide your image path
                            style={{ width: size, height: size, tintColor: color }}
                        />
                    ),
                }}
            />
            <Tab.Screen
                name="AccountStackScreen"
                component={AccountStackScreen}
                options={{
                    tabBarLabel: 'Account', // Text for the tab
                    tabBarIcon: ({ color, size }) => (
                        <Image
                            source={Profile} // Provide your image path
                            style={{ width: size, height: size, tintColor: color }}
                        />
                    ),
                }}
            />
        </Tab.Navigator>
    );
};
export default AppNavigation;