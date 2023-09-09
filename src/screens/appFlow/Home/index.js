import React, { useState, useContext, useEffect } from 'react';
import { View, Text, StatusBar, ScrollView, SafeAreaView, } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import CustomTextInput from '../../../../src/components/Textinputs';
import Button from '../../../../src/components/Button';
import CardInput from '../../../../src/components/Cardinputs';
import Card from '../../../components/CardView';
import { useNavigation } from '@react-navigation/native';
import MyModal from '../../../../src/components/Modal';
import Toast from 'react-native-simple-toast';
import { responsiveHeight, responsiveWidth, } from 'react-native-responsive-dimensions';
import { appStyles } from '../../../../src/services/utilities/appStyles';
import { colors } from '../../../services/utilities/color';
import { Downarrow, Location } from '../../../services/utilities/assets';
import Header from '../../../components/Headers';
import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';
const Home = () => {
  const navigation = useNavigation();
  const [isModalVisible, setModalVisible] = useState(false);
  const [isoilVisible, setoilVisible] = useState(false);
  const [selectedCardIndex, setSelectedCardIndex] = useState(null);
  const [selectedInputIndex, setSelectedInputIndex] = useState(null);
  const [selectedOilType, setSelectedOilType] = useState('');
  const [enteredLocation, setEnteredLocation] = useState('');
  const [cardInputs, setCardInputs] = useState([
    { hour: '', minute: '' },
    { hour: '', minute: '' },
  ]);
  const handleLocationInput = (location) => {
    setEnteredLocation(location);
  };
  const handleSelectOilType = (oilType) => {
    setSelectedOilType(oilType);
  };
  const getDayName = (year, month, day) => {
    const daysOfWeek = [
      'Sunday',
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday',
    ];
    const date = new Date(year, month, day);
    const dayIndex = date.getDay();
    const dayName = daysOfWeek[dayIndex];
    return dayName;
  };
  const currentYear = new Date().getFullYear();
  const currentMonth = new Date().getMonth();
  const [isAMSelected, setIsAMSelected] = useState(false);
  const [isPMSelected, setIsPMSelected] = useState(false);
  const [monthDates, setMonthDates] = useState([]);
  const handleAMSelect = () => {
    setIsAMSelected(!isAMSelected);
    setIsPMSelected(false);
  };
  const handlePMSelect = () => {
    setIsPMSelected(!isPMSelected);
    setIsAMSelected(false);
  };
  const handleCardSelect = (index) => {
    setSelectedCardIndex(index);
    storeSelectedCard(index);
  };
  const storeSelectedCard = (index) => {
    if (index !== null && index >= 0 && index < monthDates.length) {
      const currentUser = auth().currentUser;
      if (currentUser) {
        const userId = currentUser.uid;
        const userScheduleRef = firestore().collection('schedules').doc(userId);
        const selectedHour = parseInt(cardInputs[0]?.hour) || 0;
        const selectedMinute = parseInt(cardInputs[1]?.minute) || 0;
        const timePeriod = isAMSelected ? 'AM' : 'PM';
        const formattedHour = selectedHour.toString().padStart(2, '0');
        const formattedMinute = selectedMinute.toString().padStart(2, '0');
        const selectedTime = `${formattedHour}:${formattedMinute} ${timePeriod}`;
        const selectedCardData = {
          Date: `${getMonthName(currentYear, currentMonth)} ${monthDates[index].dateNumber}, ${currentYear}`,
          Day: monthDates[index].dayName,
          Time: selectedTime,
          Location: enteredLocation,
          OilType: selectedOilType,
        };
        Toast.show('Storing data in Firestore...');
        userScheduleRef
          .set({
            selectedCard: selectedCardData,
          })
          .then(() => {
            console.log('Selected card data stored in Firestore.');
          })
          .catch((error) => {
            console.error('Error storing selected card data: ' + error);
          });
      } else {
        console.error('Invalid selectedCardIndex:', index);
      }
    } else {
      console.error('Invalid selectedCardIndex:', index);
    }
  };
  const handleInputSelect = (index) => {
    setSelectedInputIndex(index);
  };
  const getMonthName = (year, month) => {
    const date = new Date(year, month);
    return date.toLocaleString('en-US', { month: 'long' });
  };
  const handleNavigateToVehicleInfo = () => {
    if (
      selectedCardIndex !== null &&
      enteredLocation.trim() !== '' &&
      selectedOilType.trim() !== '' &&
      cardInputs[0]?.hour !== '' &&
      cardInputs[1]?.minute !== '' &&
      (isAMSelected || isPMSelected)
    ) {
      navigation.navigate('Vehicleinfo')
      storeSelectedCard(selectedCardIndex);
    } else {
      alert('Please fill in all required fields.');
    }
  };
  const handleToggleModal = (location) => {
    setModalVisible(!isModalVisible);
    if (location) {
      setEnteredLocation(location);
    }
  };
  const handleoilModal = () => {
    setoilVisible(!isoilVisible);
  };
  useEffect(() => {
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();
    const currentMonth = currentDate.getMonth();
    const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
    const newMonthDates = [];
    for (let i = 1; i <= daysInMonth; i++) {
      const dayName = getDayName(currentYear, currentMonth, i);
      const dateNumber = i;
      const monthName = getMonthName(currentYear, currentMonth);
      newMonthDates.push({ dayName, dateNumber, monthName });
    }
    setMonthDates(newMonthDates);
  }, []);
  return (
    <SafeAreaView
      style={{ ...appStyles.safeArea, backgroundColor: colors.color7 }}
    >
      <StatusBar hidden={true} />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View>
          <View style={appStyles.homeHeader}>
            <Header showRoundHeader={true} scheduletxt='Schedule a Time' />
            <Text style={appStyles.Detailtxt}>Please Enter Details</Text>
          </View>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            {monthDates.map((dateInfo, index) => (
              <Card
                key={index}
                day={dateInfo.dayName}
                date={dateInfo.dateNumber}
                month={dateInfo.monthName}
                onPress={() => {
                  handleCardSelect(index);
                }}
                isSelected={index === selectedCardIndex}
                index={index}
                selectedCardIndex={selectedCardIndex}
                handleCardSelect={handleCardSelect}
                enableBackgroundColorChange={true}
              />
            ))}
          </ScrollView>
          <Text style={appStyles.entertime}>Enter Time </Text>
          <View style={appStyles.InputContainer}>
            <CardInput
              placeholder='05'
              placeholderTextColor={colors.color2}
              index={0}
              selectedCardinputIndex={selectedInputIndex}
              handleCardinputSelect={handleInputSelect}
              enableBackgroundColorChange={true}
              value={cardInputs[0]?.hour}
              onChangeText={(text) => {
                if (text === '' || (parseInt(text) >= 1 && parseInt(text) <= 12)) {
                  const updatedCardInputs = [...cardInputs];
                  updatedCardInputs[0].hour = text;
                  setCardInputs(updatedCardInputs);
                }
              }}
            />
            <Text style={appStyles.timeseparator}>:</Text>
            <CardInput
              placeholder='00'
              placeholderTextColor={colors.color2}
              index={1}
              selectedCardinputIndex={selectedInputIndex}
              handleCardinputSelect={handleInputSelect}
              enableBackgroundColorChange={true}
              value={cardInputs[1]?.minute}
              onChangeText={(text) => {
                if (text === '' || (parseInt(text) >= 0 && parseInt(text) <= 59)) {
                  const updatedCardInputs = [...cardInputs];
                  updatedCardInputs[1].minute = text;
                  setCardInputs(updatedCardInputs);
                }
              }}
            />
            <View style={appStyles.main1}>
              <View
                style={[
                  appStyles.AmContainer,
                  {
                    backgroundColor: isAMSelected ? '#FFFFC8' : colors.color7,
                  },
                ]}
              >
                <Text style={appStyles.Amtxt} onPress={handleAMSelect}>
                  AM
                </Text>
              </View>
              <View
                style={[
                  appStyles.PmContainer,
                  {
                    backgroundColor: isPMSelected ? '#FFFFC8' : colors.color7,
                  },
                ]}
              >
                <Text style={appStyles.Amtxt} onPress={handlePMSelect}>
                  PM
                </Text>
              </View>
            </View>
          </View>
          <CustomTextInput
            label={'Enter Location'}
            showLabelImage={true}
            placeholder='Please enter your address'
            placeholderTextColor={colors.color1}
            labelImageSource={Location}
            inputBackgroundColor='#F7F7F7'
            onLocationImagePress={handleToggleModal}
            placeholderMarginLeft={responsiveWidth(4)}
            value={enteredLocation}
            editable={false}
          />
          <CustomTextInput
            label={'Oil type'}
            placeholder={"Please select Oil type from here \n(All Oil High Quality Synthetic)"}
            showDownImage={true}
            labelImageSource={Location}
            downImageSource={Downarrow}
            inputBackgroundColor='#F7F7F7'
            placeholderMarginLeft={responsiveWidth(4)}
            placeholderTextColor={colors.color1}
            onDownImagePress={handleoilModal}
            value={selectedOilType}
            editable={false}
          />
          <LinearGradient
            colors={[colors.color12, colors.color12]}
            style={{ ...appStyles.Lubemeupcontainer, marginTop: responsiveHeight(4) }}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
          >
            <Button label="Lock it in!"
              onPress={handleNavigateToVehicleInfo}
              textColor={colors.color10} />
          </LinearGradient>
        </View>
        <MyModal isVisible={isModalVisible}
          onLocationInput={handleLocationInput}
          toggleModal={handleToggleModal} customStyle={appStyles.modal} />
        <MyModal isVisible={isoilVisible}
          toggleModal={handleoilModal}
          onSelectOilType={handleSelectOilType}
          customStyle={appStyles.modal} oilmodalshow={true} />
      </ScrollView>
    </SafeAreaView>
  );
};
export default Home;

