import React, { useState ,useContext} from 'react';
import CustomTextInput from '../Textinputs';
import { useNavigation } from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';
import { View, TouchableOpacity, Text, Image } from 'react-native';
import { responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';
import { appStyles } from '../../services/utilities/appStyles';
import { Downarrow, ImageLocation, Smalldown, checkcircle, payment } from '../../services/utilities/assets';
import Modal from 'react-native-modal'
import Button from '../Button';
import CardInput from '../Cardinputs';
import { AuthContext } from '../../navigation/AuthProvider';
import { scale } from 'react-native-size-matters';
import { colors } from '../../services/utilities/color';
import { fontFamily } from '../../services/utilities/fonts';
import AsyncStorage from '@react-native-async-storage/async-storage';
const MyModal = ({
  isVisible,
  toggleModal,
  paymentdetailsmodalshow,
  onPress,
  downImageSource,
  oilmodalshow,
  ModalContent,
  txtStyle1,
  txtStyle2,
  txtStyle3,
  txt1,
  txt2,
  txt3,
  customStyle,
  handledownModal,
  accountmodal,
  onSelectOilType,
  onLocationInput,
}) => {
  const navigation = useNavigation();
  const { logout } = useContext(AuthContext);
  const [location, setLocation] = useState('');
  const [isoilVisible, setoilVisible] = useState(false);
  const [selectedOilType, setSelectedOilType] = useState('');
  const handlesubmit = () => {
    onLocationInput(location);
    toggleModal();
  };
  const handleLogout = async () => {
    try {
      await logout(); 
      AsyncStorage.removeItem("User")
     navigation.navigate('AuthNavigation', {screen:'splash'})
    } catch (error) {
      console.log('Error logging out:', error);
    }
  };
  const handleoilModal = () => {
    setoilVisible(!isoilVisible);
  };
  if (accountmodal) {
    return (
      <Modal
        isVisible={isVisible}
        animationIn="slideInUp"
        animationOut="slideOutDown"
        style={{ justifyContent: 'center', alignItems: 'center', margin: 0 }}
        onBackdropPress={toggleModal}
        backdropColor="white"
        backdropOpacity={0}
      >
        <View style={appStyles.Accountmodal}>
          <View style={appStyles.accountsecondview}>
            <TouchableOpacity onPress={() => navigation.navigate('EditProfile')}>
              <View style={appStyles.editview}>
                <Text style={appStyles.edittx}>Edit Profile</Text>
                <Image source={Smalldown} style={appStyles.smalldown} />
              </View>
            </TouchableOpacity >
            <TouchableOpacity onPress={() => navigation.navigate('Thankyou')}>
              <View style={appStyles.edit2view}>
                <Text style={appStyles.edittx}>Share Your Feedback</Text>
                <Image source={Smalldown} style={appStyles.smalldown} />
              </View></TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Termsofservices')}>
              <View style={appStyles.edit2view}>
                <Text style={appStyles.edittx}>Terms of Service</Text>
                <Image source={Smalldown} style={appStyles.smalldown} />
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('PrivicyPolicy')}>
              <View style={appStyles.edit2view}>
                <Text style={appStyles.edittx}>Privacy Policy</Text>
                <Image source={Smalldown} style={appStyles.smalldown} />
              </View></TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Thankyou')}>
              <View style={appStyles.edit2view}>
                <Text style={appStyles.edittx}>About Us</Text>
                <Image source={Smalldown} style={appStyles.smalldown} />
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={handleLogout}>
              <View style={appStyles.logoutview}>
                <Text style={appStyles.logoutx}>Logout</Text>
                <Image source={Smalldown} style={appStyles.smalldown} />
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    )
  };
  if (paymentdetailsmodalshow) {
    return (
      <Modal
        isVisible={isVisible}
        animationIn="fadeIn" // Set the desired animation for appearing
        animationOut="fadeOut"
        style={{ justifyContent: 'center', alignItems: 'center', margin: 0 }}
        onBackdropPress={toggleModal}
      >
        <View style={appStyles.paymentdetailsmodalview}>
          <View style={{
            width: scale(80),
            height: scale(80),
            borderRadius: responsiveWidth(50),
            marginTop: -responsiveHeight(5.8),
            justifyContent: 'center',
            shadowColor: colors.color6,
            opacity: 1,
            alignItems: 'center',
          }}>
            <LinearGradient
              colors={[colors.color18, colors.color17, colors.color10]}
              style={{
                width: '100%',
                height: '100%',
                borderRadius: responsiveWidth(50),
                justifyContent: 'center',
                alignItems: 'center',
              }}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 1 }}
              useAngle={true}
              angle={37}
              angleCenter={{ x: 0.5, y: 0.5 }}
            >
              <Image
                source={payment}
                style={appStyles.paymentpic}
              />
            </LinearGradient>
          </View>
          <View style={appStyles.detailsview}>
            <Text style={appStyles.adddetail}>Add New Details</Text>
            <Text style={appStyles.adddetailsecond}>Please enter your Payment Details</Text>
          </View>
          <View style={appStyles.detailsecondcontainer}>
            <CardInput
              customWidth={responsiveWidth(75)}
              customHeight={responsiveHeight(4)}
              backgroundColor={colors.color19}
              placeholder="Card holder name"
              placeholderTextColor={colors.color1}
              borderRadius={responsiveWidth(0.1)}
              inputFontSize={9}
              inputHeight={responsiveHeight(4)}
              padding={responsiveWidth(2.5)}
              inputWidth={responsiveWidth(77)}
              keyboardType='default'
              marginLeft={responsiveWidth(4.3)}
              maxLength={40}
            />
            <CardInput
              customWidth={responsiveWidth(75)}
              customHeight={responsiveHeight(4)}
              backgroundColor={colors.color19}
              placeholder="Number of card"
              padding={responsiveWidth(2.5)}
              placeholderTextColor={colors.color1}
              borderRadius={responsiveWidth(0.1)}
              inputFontSize={9}
              marginLeft={responsiveWidth(4.3)}
              inputHeight={responsiveHeight(4)}
              inputWidth={responsiveWidth(77)}
              keyboardType='default'
              maxLength={50}
            />
            <View style={appStyles.thruview}>
              <Text style={appStyles.thrutxt}>VALID THRU</Text>
            </View>
            <View style={appStyles.dateview}>
              <CardInput
                customWidth={responsiveWidth(19)}
                customHeight={responsiveHeight(4)}
                backgroundColor={colors.color19}
                placeholder="MM"
                placeholderTextColor={colors.color1}
                borderRadius={responsiveWidth(0.1)}
                inputFontSize={9}
                padding={responsiveWidth(2.5)}
                marginLeft={responsiveWidth(4.3)}
                inputHeight={responsiveHeight(4)}
                inputWidth={responsiveWidth(22)}
                maxLength={3}
              />
              <Text style={appStyles.slashtxt}>/</Text>
              <CardInput
                customWidth={responsiveWidth(19)}
                customHeight={responsiveHeight(4)}
                backgroundColor={colors.color19}
                placeholder="YY"
                padding={responsiveWidth(2.5)}
                placeholderTextColor={colors.color1}
                borderRadius={responsiveWidth(0.1)}
                inputFontSize={9}
                inputHeight={responsiveHeight(4)}
                inputWidth={responsiveWidth(22)}
                marginLeft={responsiveWidth(4.3)}
                maxLength={3}
              />
              <CardInput
                customWidth={responsiveWidth(19)}
                customHeight={responsiveHeight(4)}
                backgroundColor={colors.color19}
                placeholder="CVV"
                padding={responsiveWidth(2.5)}
                placeholderTextColor={colors.color1}
                borderRadius={responsiveWidth(0.1)}
                inputFontSize={9}
                inputHeight={responsiveHeight(4)}
                inputWidth={responsiveWidth(22)}
                marginLeft={responsiveWidth(7.7)}
                maxLength={5}
              />
            </View>
          </View>
          <LinearGradient
            colors={[colors.color20, colors.color10]}
            style={{
              ...appStyles.Lubemeupcontainer,
              width: responsiveWidth(30), // Set your custom width here
              height: responsiveHeight(5.3), // Set your custom height here
              marginTop: responsiveHeight(4),
            }}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
          >
            <Button
              label="Save"
              textColor={colors.color7}
              fontFamily={fontFamily.PoppinsRegular}
              fontSize={15}
              onPress={handledownModal}
            />
          </LinearGradient>
        </View>
      </Modal>
    )
  }
  if (oilmodalshow) {
    return (
      <Modal
        isVisible={isVisible}
        animationIn="fadeIn"
        animationOut="fadeOut"
        style={{ justifyContent: 'center', alignItems: 'center', margin: 0 }}
        onBackdropPress={toggleModal}
      >
        <View style={appStyles.oilmodalview}>
          <CustomTextInput
            label={'Oil type'}
            placeholder={"   Please select Oil type from here \n   (All Oil High Quality Synthetic)"}
            showDownImage={true}
            downImageSource={Downarrow}
            inputBackgroundColor='#F7F7F7'
            placeholderTextColor={colors.color1}
            onDownImagePress={handleoilModal}
            value={selectedOilType}
          />
          <View style={appStyles.oilsecondview}>
            <TouchableOpacity onPress={() => {
              onSelectOilType('Manufacturers Recommendation');
              toggleModal();
            }}>
            <View style={appStyles.manufactureview}> 
              <Text style={appStyles.manufacture}>Manufacturers Recommendation</Text> 
            </View>
            </TouchableOpacity>
            <View style={appStyles.orview}>
              <Text style={appStyles.or}>------- OR -------</Text>
            </View>
            <TouchableOpacity onPress={() => {
              onSelectOilType('0W-20');
              toggleModal();
            }}>
              <View style={appStyles.miniview}>
                <Text style={appStyles.or}>0W-20</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {
              onSelectOilType('5W-20');
              toggleModal();
            }}>
              <View style={appStyles.miniview}>
                <Text style={appStyles.or}>5W-20</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {
              onSelectOilType('5W-30');
              toggleModal();
            }}>
              <View style={appStyles.miniview}>
                <Text style={appStyles.or}>5W-30</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {
              onSelectOilType('10W-30');
              toggleModal();
            }}>
              <View style={appStyles.miniview}>
                <Text style={appStyles.or}>10W-30</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {
              onSelectOilType('10W-40');
              toggleModal();
            }}>
              <View style={appStyles.bottomview}>
                <Text style={appStyles.or}>10W-40</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    )
  };
  if (ModalContent) {
    return (
      <Modal
        isVisible={isVisible}
        animationIn="slideInUp"
        animationOut="slideOutDown"
        style={{ justifyContent: 'center', alignItems: 'center', margin: 0 }}
        onBackdropPress={toggleModal}
        backdropColor="white"
        backdropOpacity={1}
      >
        <View style={appStyles.downmodal}>
          <Image
            source={checkcircle}
            style={appStyles.checkcircle}
          />
          <Text style={[appStyles.modalText1, txtStyle1]}>{txt1}</Text>
          <Text style={[appStyles.modalText2, txtStyle2]}>{txt2}</Text>
          <Text style={[appStyles.modalText3, txtStyle3]}>{txt3}</Text>
          <LinearGradient
            colors={[colors.color7, colors.color6]}
            style={{
              ...appStyles.Lubemeupcontainer,
              width: responsiveWidth(70), 
              height: responsiveHeight(6), 
              marginTop: responsiveHeight(2),
            }}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
          >
            <Button label="CONTINUE" onPress={onPress}
            />
          </LinearGradient>
        </View>
      </Modal>
    );
  }
  return (
    <Modal
      isVisible={isVisible}
      animationIn="fadeIn"
      animationOut="fadeOut"
      style={{ justifyContent: 'center', alignItems: 'center', margin: 0 }}
      onBackdropPress={toggleModal}
    >
      <View style={[customStyle]}>
        <View style={appStyles.circleview}>
          <Image
            source={ImageLocation}
            style={appStyles.map}
          />
        </View>
        <Text style={appStyles.addlocation}> Add Location</Text>
        <CustomTextInput
          placeholder='Search here'
          placeholderTextColor='#3A3A3A'
          placeholderFontFamily='Poppins, Light'
          inputWidth={responsiveWidth(80)}
          inputHeight={responsiveHeight(5)}
          placeholderMarginTop={2.5}
          placeholderMarginLeft={5}
          responsiveMarginTop={2}
          inputBackgroundColor={colors.color19}
          onChangeText={(text) => setLocation(text)}
        />
        <LinearGradient
          colors={[colors.color21, colors.color10]}
          style={{
            ...appStyles.Lubemeupcontainer,
            width: responsiveWidth(30), 
            height: responsiveHeight(5.7), 
            marginTop: responsiveHeight(4),
          }}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
        >
          <Button
            label="Press Me"
            textColor={colors.color7}
            fontFamily={fontFamily.PoppinsRegular}
            fontSize={13}
            onPress={handlesubmit}
          />
        </LinearGradient>
      </View>
    </Modal>
  );
};
export default MyModal;
