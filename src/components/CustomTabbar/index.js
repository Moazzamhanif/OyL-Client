import React from 'react';
import { View, Text, TouchableWithoutFeedback, Image } from 'react-native';
import { appStyles } from '../../services/utilities/appStyles';
import { Home1, Profile1 } from '../../services/utilities/assets';
import { useNavigation,useRoute } from '@react-navigation/native'; // Import useNavigation hook
export default function CustomTabbar() {
  const navigation = useNavigation(); // Get the navigation object
  const route = useRoute(); 
  const handleHomeTabPress = () => {
    navigation.reset({
        index: 0,
        routes: [{ name: 'HomeStackScreen', params: { screen: 'home' } }],
    }) 
  };
  const handleAccountTabPress = () => {
    navigation.reset({
        index: 0,
        routes: [{ name: 'AccountStackScreen', params: { screen: 'Account' } }],
    }) 
  };
  return (
    <View style={appStyles.tabimagesview}>
      <TouchableWithoutFeedback onPress={handleHomeTabPress}>
        <View style={appStyles.hometabview}>
          <Image source={Home1} style={appStyles.HOMEtab} />
          <Text style={appStyles.hometabtext}>Home</Text>
        </View>
      </TouchableWithoutFeedback>
      <TouchableWithoutFeedback onPress={handleAccountTabPress}>
        <View style={appStyles.ProfiletabView}>
          <Image source={Profile1} style={appStyles.profiletab} />
          <Text style={appStyles.hometabtext}>Account</Text>
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
}
