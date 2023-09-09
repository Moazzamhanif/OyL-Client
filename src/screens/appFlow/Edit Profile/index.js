import { View, Text, Image, ImageBackground, SafeAreaView, } from 'react-native'
import React, { useEffect, useState, useContext } from 'react'
import { appStyles } from '../../../services/utilities/appStyles'
import LinearGradient from 'react-native-linear-gradient';
import CustomTabbar from '../../../components/CustomTabbar';
import CustomTextInput from '../../../../src/components/Textinputs'
import { useNavigation } from '@react-navigation/native';
import LottieView from 'lottie-react-native';
import { responsiveHeight, } from 'react-native-responsive-dimensions';
import Button from '../../../../src/components/Button'
import { colors } from '../../../services/utilities/color';
import { ScrollView, TouchableWithoutFeedback } from 'react-native-gesture-handler';
import { BACKGROUND_IMAGE, Lotieanimation, whitearrow } from '../../../services/utilities/assets';
import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';
const EditProfile = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [birthday, setBirthday] = useState('');
  const [vehicleMake, setVehicleMake] = useState('');
  const [vehicleModel, setVehicleModel] = useState('');
  const [vehicleYear, setVehicleYear] = useState('');
  const [vehicleColor, setVehicleColor] = useState('');
  const [vehicleMileage, setVehicleMileage] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const navigation = useNavigation();
  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const user = auth().currentUser;
        if (user) {
          const userId = user.uid;
          const userDoc = await firestore().collection('users').doc(userId).get();
          if (userDoc.exists) {
            const userData = userDoc.data();
            setFirstName(userData.firstName || '');
            setLastName(userData.lastName || '');
            setBirthday(userData.birthday || '');
            setVehicleMake(userData.Vehicleinfo.vehicleMake || '');
            setVehicleModel(userData.Vehicleinfo.vehicleModel || '');
            setVehicleYear(userData.Vehicleinfo.vehicleYear || '');
            setVehicleColor(userData.Vehicleinfo.vehicleColor || '');
            setVehicleMileage(userData.Vehicleinfo.vehicleMileage || '');
          }
        }
        setIsLoading(false);
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };
    fetchUserData();
  }, []);
  useEffect(() => {
    navigation.getParent().setOptions({ tabBarStyle: { display: 'none' } });
    return () => {
      navigation.getParent().setOptions({ tabBarStyle: { display: 'flex' } });
    };
  }, []);
  const handlesavechanges = async () => {
    try {
      setIsLoading(true);
      const user = auth().currentUser;
      if (user) {
        const userId = user.uid;
        const userDocRef = firestore().collection('users').doc(userId);
        await userDocRef.set(
          {
            firstName: firstName,
            lastName: lastName,
            birthday: birthday,
            Vehicleinfo: {
              vehicleMake: vehicleMake,
              vehicleModel: vehicleModel,
              vehicleYear: vehicleYear,
              vehicleColor: vehicleColor,
              vehicleMileage: vehicleMileage,
            },
          },
          { merge: true }
        );
        navigation.navigate('AccountStackScreen', { screen: 'Account' });
      }
    } catch (error) {
      console.error('Error updating user data:', error);
    } finally {
      setIsLoading(false);
    }
  };
  const backarrow = () => {
    navigation.navigate('AccountStackScreen', { screen: 'Account' });
  };
  return (
    <SafeAreaView style={appStyles.safeArea}>
      <ImageBackground
        source={BACKGROUND_IMAGE}
        style={appStyles.imageBackground}
      >

        <View>
          <View style={appStyles.headers}>
            <TouchableWithoutFeedback onPress={backarrow}><Image source={whitearrow}
              style={appStyles.arrow1} />
            </TouchableWithoutFeedback>
            <Text style={appStyles.edittxt}>Edit Profile</Text>
          </View>
          <ScrollView contentContainerStyle={{ flexGrow: 1 }}
            showsVerticalScrollIndicator={false} >
            <CustomTextInput
              label="First Name"
              keyboardType="default"
              value={firstName}
              responsiveMarginTop={3.5}
              onChangeText={(text) => setFirstName(text)}
            />
            <CustomTextInput
              label="Last Name"
              keyboardType="default"
              value={lastName}
              onChangeText={(text) => setLastName(text)}
            />
            <CustomTextInput
              label="Birthday"
              keyboardType="numeric"
              showCalendarImage={true}
              value={birthday}
              onChangeText={(text) => setBirthday(text)} />
            <CustomTextInput
              label="Vehicle Make"
              keyboardType="default"
              value={vehicleMake}
              onChangeText={(text) => setVehicleMake(text)}
            />
            <CustomTextInput
              label="Vehicle Model"
              keyboardType="default"
              value={vehicleModel}
              onChangeText={(text) => setVehicleModel(text)}
            />
            <CustomTextInput
              label="Vehicle Year"
              keyboardType="numeric"
              value={vehicleYear}
              maxlength={4}
              onChangeText={(text) => setVehicleYear(text)}
            />
            <CustomTextInput
              label="Vehicle Color"
              keyboardType="default"
              value={vehicleColor}
              onChangeText={(text) => setVehicleColor(text)}
            />
            <CustomTextInput
              label="Vehicle Mileage"
              keyboardType="numeric"
              value={vehicleMileage}
              onChangeText={(text) => setVehicleMileage(text)}
            />
            <LinearGradient
              colors={[colors.color7, colors.color12]}
              style={{ ...appStyles.Lubemeupcontainer, marginTop: responsiveHeight(3) }}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 1 }}
            >
              <Button
                label="SAVE CHANGES"
                textColor={colors.color10}
                onPress={handlesavechanges}
              />
            </LinearGradient>
            <View style={appStyles.loadingContainer}>
              {isLoading && (
                <LottieView
                  source={Lotieanimation}
                  autoPlay
                  loop
                  style={appStyles.loadingAnimation}
                />
              )}
            </View>
          </ScrollView>
          <CustomTabbar />
        </View>
      </ImageBackground>
    </SafeAreaView>
  )
}
export default EditProfile;
