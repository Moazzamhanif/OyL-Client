import React, { useState, useEffect, useContext } from 'react';
import { View, StatusBar, TouchableOpacity, Image, Text, Alert, ScrollView } from 'react-native';
import CustomTextInput from '../../../components/Textinputs';
import Button from '../../../components/Button';
import { useNavigation } from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';
import MyModal from '../../../../src/components/Modal';
import { colors } from '../../../services/utilities/color';
import { SafeAreaView } from 'react-native-safe-area-context';
import Header from '../../../components/Headers';
import { Boxtick } from '../../../services/utilities/assets';
import firestore from '@react-native-firebase/firestore';
import { AuthContext } from '../../../navigation/AuthProvider';
import { appStyles } from '../../../services/utilities/appStyles';
import { responsiveHeight } from 'react-native-responsive-dimensions';

export default function Index() {
  const navigation = useNavigation();
  const radius = 12;
  const [isChecked, setIsChecked] = useState(false);
  const [isdownVisible, setdownVisible] = useState(false);
  const [vehicleYear, setVehicleYear] = useState('');
  const [vehicleMake, setVehicleMake] = useState('');
  const [vehicleModel, setVehicleModel] = useState('');
  const [vehicleColor, setVehicleColor] = useState('');
  const [vehicleMileage, setVehicleMileage] = useState('');
  const [areInputsFilled, setAreInputsFilled] = useState(false);
  const { user } = useContext(AuthContext);

  useEffect(() => {
    if (
      vehicleYear.trim() !== '' &&
      vehicleMake.trim() !== '' &&
      vehicleModel.trim() !== '' &&
      vehicleColor.trim() !== '' &&
      vehicleMileage.trim() !== ''
    ) {
      setAreInputsFilled(true);
    } else {
      setAreInputsFilled(false);
    }
  }, [vehicleYear, vehicleMake, vehicleModel, vehicleColor, vehicleMileage]);

  useEffect(() => {
    // Fetch user data when the component mounts and when the user changes
    if (user) {
      const fetchUserData = async () => {
        const userId = user.uid;
        console.log('Fetching user data for userId:', userId);

        try {
          const userDoc = firestore().collection('users').doc(userId);
          const doc = await userDoc.get();

          if (doc.exists) {
            const data = doc.data();
            console.log('Fetched user data:', data);

            if (!isChecked) {
              // Clear the input fields if isChecked is false
              setVehicleYear('');
              setVehicleMake('');
              setVehicleModel('');
              setVehicleColor('');
              setVehicleMileage('');
            } else {
              const vehicleInfo = data?.Vehicleinfo || {};
              setVehicleYear(vehicleInfo.vehicleYear || '');
              setVehicleMake(vehicleInfo.vehicleMake || '');
              setVehicleModel(vehicleInfo.vehicleModel || '');
              setVehicleColor(vehicleInfo.vehicleColor || '');
              setVehicleMileage(vehicleInfo.vehicleMileage || '');
            }
          } else {
            console.log('User document does not exist');
          }
        } catch (error) {
          console.log('Error fetching data from Firestore:', error);
        }
      };

      fetchUserData();
    }
  }, [isChecked, user]);

  const addOrUpdateVehicleData = async () => {
    if (!user) {
      return;
    }
    const userId = user.uid;
    const userData = {
      Vehicleinfo: {
        vehicleYear,
        vehicleMake,
        vehicleModel,
        vehicleColor,
        vehicleMileage,
      },
    };

    try {
      const userDoc = firestore().collection('users').doc(userId);
      const doc = await userDoc.get();

      if (doc.exists) {
        if (isChecked) {
          await userDoc.update(userData);
        }
      } else {
        await userDoc.set(userData);
      }
      console.log('Data added/updated successfully');
    } catch (error) {
      console.error('Error adding/updating data:', error);
    }
  };

  const handledownModal = () => {
    console.log('Toggling down modal visibility');
    setdownVisible(!isdownVisible);
  };

  const handleAddButton = async () => {
    if (areInputsFilled) {
      try {
        await addOrUpdateVehicleData();
        handledownModal(); // Toggle the modal only after Firestore operation is successful
      } catch (error) {
        console.error('Error adding/updating data:', error);
      }
    } else {
      Alert.alert('Please fill in all fields.', null, [{ text: 'OK' }]);
    }
  };

  const handlecontinue = () => {
    navigation.navigate('Pricing');
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: colors.color7 }}>
      <StatusBar hidden={true} />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{ alignItems: 'center' }}>
          <Header showRoundHeader={true} scheduletxt='Vehicle Info' />
          <Text style={appStyles.Detailtxt}>Please Enter Details</Text>
        </View>
        <CustomTextInput
          label={'Vehicle Year'}
          inputBackgroundColor={colors.color14}
          placeholder={'Enter the year of your Vehicle'}
          placeholderTextColor={colors.color27}
          responsiveMarginTop={8}
          value={vehicleYear}
          onChangeText={(text) => setVehicleYear(text)}
          editable={true}
          maxlength={4}
        />
        <CustomTextInput
          label={'Vehicle Make'}
          inputBackgroundColor={colors.color14}
          placeholder={'Enter make of your Vehicle'}
          placeholderTextColor={colors.color27}
          value={vehicleMake}
          onChangeText={(text) => setVehicleMake(text)}
          editable={true}
        />
        <CustomTextInput
          label={'Vehicle Model'}
          inputBackgroundColor={colors.color14}
          placeholder={'Enter model of your Vehicle'}
          placeholderTextColor={colors.color27}
          value={vehicleModel}
          onChangeText={(text) => setVehicleModel(text)}
          editable={true}
        />
        <CustomTextInput
          label={'Vehicle Color'}
          inputBackgroundColor={colors.color14}
          placeholder={'Enter color of your Vehicle'}
          placeholderTextColor={colors.color27}
          value={vehicleColor}
          onChangeText={(text) => setVehicleColor(text)}
          editable={true}
        />
        <CustomTextInput
          label={'Vehicle Mileage'}
          inputBackgroundColor={colors.color14}
          placeholder={'If unknown enter approximate'}
          placeholderTextColor={colors.color27}
          value={vehicleMileage}
          onChangeText={(text) => setVehicleMileage(text)}
          editable={true}
        />
        <View style={appStyles.checkcontainer}>
          <TouchableOpacity
            onPress={() => setIsChecked(!isChecked)}
          >
            <View style={appStyles.checkboxView}>
              {isChecked ? (
                <Image source={Boxtick} style={appStyles.ticktick} />
              ) : null}
            </View>
          </TouchableOpacity>
          <Text style={appStyles.pulltxt}>Pull info from profile here</Text>
        </View>
        <LinearGradient
          colors={[colors.color23, colors.color10]}
          style={{ ...appStyles.Lubemeupcontainer, marginTop: responsiveHeight(4) }}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
        >
          <Button
            label="ADD"
            textColor={colors.color7}
            shadowColor={colors.color24}
            onPress={handleAddButton}
          />
        </LinearGradient>
        <MyModal
          txt1='Vehicle has been added'
          txt2='successfully! One step'
          txt3='left!'
          txtStyle1={appStyles.customTxt1}
          txtStyle2={appStyles.customTxt2}
          txtStyle3={appStyles.customTxt2}
          isVisible={isdownVisible}
          toggleModal={handledownModal}
          ModalContent={true}
          onPress={handlecontinue}
        />
      </ScrollView>
    </SafeAreaView>
  );
}
