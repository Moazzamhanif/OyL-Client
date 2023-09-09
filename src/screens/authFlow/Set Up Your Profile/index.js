import React, { useState, useContext } from 'react';
import {
  View,
  Alert,
  ImageBackground,
  StatusBar,
  SafeAreaView,
  ScrollView,
} from 'react-native';
import { appStyles } from '../../../../src/services/utilities/appStyles';
import LinearGradient from 'react-native-linear-gradient';
import CustomTextInput from '../../../../src/components/Textinputs';
import Button from '../../../../src/components/Button';
import { responsiveHeight, } from 'react-native-responsive-dimensions';
import { colors } from '../../../services/utilities/color';
import Header from '../../../components/Headers';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import { BACKGROUND_IMAGE, Lotieanimation } from '../../../services/utilities/assets';
import LottieView from 'lottie-react-native';
import Toast from 'react-native-toast-message';
const Setupprofile = ({ navigation }) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [birthday, setBirthday] = useState('');
  const [vehicleMake, setVehicleMake] = useState('');
  const [vehicleModel, setVehicleModel] = useState('');
  const [vehicleYear, setVehicleYear] = useState('');
  const [vehicleColor, setVehicleColor] = useState('');
  const [vehicleMileage, setVehicleMileage] = useState('');
  const [loading, setLoading] = useState(false);
  const handledone = async () => {
    if (
      firstName.trim() === '' ||
      lastName.trim() === '' ||
      birthday.trim() === '' ||
      vehicleMake.trim() === '' ||
      vehicleModel.trim() === '' ||
      vehicleYear.trim() === '' ||
      vehicleColor.trim() === '' ||
      vehicleMileage.trim() === ''
    ) {
      Alert.alert('Please fill in all fields.', null, [{ text: 'OK' }]);
      return;
    }
    setLoading(true);
    try {
      const currentUser = auth().currentUser;
      if (!currentUser) {
        console.log('User is not authenticated');
        return;
      }
      const userId = currentUser.uid;
      const userEmail = currentUser.email;
      await firestore().collection('users').doc(userId).set({
        email: userEmail,
        uid: userId,
        firstName,
        lastName,
        birthday,
        Vehicleinfo: {
          vehicleMake,
          vehicleModel,
          vehicleYear,
          vehicleColor,
          vehicleMileage,
        },
      });
      Toast.show('User profile data sent to Firestore successfully');
      // navigation.navigate('AppNavigation', { screen: 'home', params: { userId: userId } });
      navigation.navigate('splash')
    } catch (error) {
      console.log('Error storing user profile data:', error);
    } finally {
      setLoading(false);
    }
  };
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ImageBackground source={BACKGROUND_IMAGE} style={appStyles.imageBackground}>
        <StatusBar backgroundColor={colors.color7} barStyle='dark-content' />
        <Header headerText='Set Up Your Profile' />
        <ScrollView contentContainerStyle={appStyles.scrollViewContainer}>
          <CustomTextInput
            label="First Name"
            keyboardType="default"
            responsiveMarginTop={3.5}
            placeholder="Mick"
            placeholderTextColor={colors.color1}
            value={firstName}
            onChangeText={(text) => setFirstName(text)}
          />
          <CustomTextInput
            label="Last Name"
            placeholder="Tason"
            placeholderTextColor={colors.color1}
            keyboardType="default"
            value={lastName}
            onChangeText={(text) => setLastName(text)}
          />
          <CustomTextInput
            label="Birthday"
            placeholder="09 / 08 / 1996"
            placeholderMarginLeft={5}
            placeholderTextColor={colors.color1}
            keyboardType="numeric"
            editable={false}
            showCalendarImage={true}
            value={birthday}
            onChangeText={(text) => setBirthday(text)}
          />
          <CustomTextInput
            label="Vehicle Make"
            placeholder="Enter the make of your Vehicle"
            placeholderTextColor={colors.color22}
            keyboardType="default"
            value={vehicleMake}
            onChangeText={(text) => setVehicleMake(text)}
          />
          <CustomTextInput
            label="Vehicle Model"
            placeholder="Enter model of your Vehicle"
            placeholderTextColor={colors.color22}
            keyboardType="default"
            value={vehicleModel}
            onChangeText={(text) => setVehicleModel(text)}
          />
          <CustomTextInput
            label="Vehicle Year"
            placeholder="Enter year of your Vehicle"
            placeholderTextColor={colors.color22}
            keyboardType="numeric"
            maxlength={4}
            value={vehicleYear}
            onChangeText={(text) => setVehicleYear(text)}
          />
          <CustomTextInput
            label="Vehicle Color"
            placeholder="Enter color of your Vehicle"
            placeholderTextColor={colors.color22}
            keyboardType="default"
            value={vehicleColor}
            onChangeText={(text) => setVehicleColor(text)}
          />
          <CustomTextInput
            label="Vehicle Mileage"
            placeholder="If unknown enter approximate"
            placeholderTextColor={colors.color22}
            keyboardType="default"
            value={vehicleMileage}
            onChangeText={(text) => setVehicleMileage(text)}
          />
          <LinearGradient
            colors={[colors.color7, colors.color12]}
            style={{ ...appStyles.Lubemeupcontainer, marginTop: responsiveHeight(6) }}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
          >
            <Button label="DONE" onPress={handledone} textColor={colors.color10} />
          </LinearGradient>
          <View style={appStyles.loadingContainer}>
            {loading && (
              <LottieView
                source={Lotieanimation}
                autoPlay
                loop
                style={appStyles.loadingAnimation}
              />
            )}
          </View>
        </ScrollView>
      </ImageBackground>
    </SafeAreaView>
  );
};
export default Setupprofile;
