import React, { useState } from 'react';
import { View, Text, Image, ImageBackground, SafeAreaView, StatusBar, TouchableOpacity } from 'react-native';
import { appStyles } from '../../../../src/services/utilities/appStyles';
import Card from '../../../components/CardView';
import MyModal from '../../../components/Modal';
import {responsiveHeight,responsiveWidth,} from 'react-native-responsive-dimensions';
import { colors } from '../../../services/utilities/color';
import { Arrow, BACKGROUND_IMAGE, Stripelogo, middle, applepaylogo, BitPaylogo, Affirmlogo, KlarnaLogowine } from '../../../services/utilities/assets';
import { useNavigation } from '@react-navigation/native';
import Header from '../../../components/Headers';
const Pricing = () => {
    const navigation = useNavigation();
    const handlelecontinue = () => {
        navigation.navigate('AccountStackScreen'  ,{screen:'Thankyou'});
    };
    const [isModalVisible, setModalVisible] = useState(false); 
    const [ispaymentdetailsModalVisible, setispaymentdetailsModalVisible] = useState(false);
    const [isdownVisible, setdownVisible] = useState(false);
    const toggleModal = () => {
        setModalVisible(!isModalVisible); 
    };
    const handleToggleModal = () => {
        setModalVisible(!isModalVisible); 
    };
    const handledownModal = () => {
        console.log('Toggling down modal visibility');
        setispaymentdetailsModalVisible(false);
        setdownVisible(!isdownVisible); 
    };
    const handlelebackarrowpricing = () => {
        navigation.navigate('Vehicleinfo');

    };
    const handlepaymentModal = () => {
        setispaymentdetailsModalVisible(!ispaymentdetailsModalVisible); 
    };
    return (
        <SafeAreaView style={appStyles.safeArea}>
            <ImageBackground
                source={BACKGROUND_IMAGE}
                style={appStyles.imageBackground}
            >
                <StatusBar backgroundColor={colors.color7} barStyle='dark-content' />

                <View style={appStyles.Container}>
                    <Header 
                    headerText='Select Price & Payment Method' 
                    showImage={true} customTextstyle={appStyles.PricingheaderText} imageSource={Arrow} onPress={handlelebackarrowpricing }/>
                    <View style={appStyles.pricingtop}>
                        <View style={appStyles.pricingtopview}>
                            <Text style={appStyles.changetext}> YOUR OYL AND FYLTER CHANGE WILL BE</Text>
                            <Text style={appStyles.dollortext}> $</Text>
                            <Text style={appStyles.text87}>87</Text>

                            <Text style={appStyles.changetext}>THIS WILL HAVE YOU ROLLIN FOR 10,000 MILES-</Text>
                            <Text style={appStyles.changetext}>SHOOT WE'LL EVEN TOP OFF YOUR WASHER FLUID</Text>
                            <Text style={appStyles.changetext}>AND AIR UP YOUR TIRES</Text>

                        </View>
                    </View>
                    <Text style={appStyles.Paymenttext} > Payment Methods</Text>
                    <View style={appStyles.companymainview}>
                        <View style={appStyles.companyview1}>
                            <Card cardHeight={responsiveHeight(12)} customMarginTop={2} cardWidth={responsiveWidth(27)} onPress={handlepaymentModal} imageSource={Stripelogo} />
                            <Card cardHeight={responsiveHeight(12)} customMarginTop={2} cardWidth={responsiveWidth(27)} onPress={handlepaymentModal} imageSource={middle} />
                            <Card cardHeight={responsiveHeight(12)} customMarginTop={2} cardWidth={responsiveWidth(27)} onPress={handlepaymentModal} imageSource={applepaylogo} />
                        </View>
                        <View style={appStyles.companyview2}>
                            <Card cardHeight={responsiveHeight(12)} customMarginTop={1} cardWidth={responsiveWidth(27)} onPress={handlepaymentModal} imageSource={BitPaylogo} />
                            <Card cardHeight={responsiveHeight(12)}customMarginTop={1} cardWidth={responsiveWidth(27)} onPress={handlepaymentModal} imageSource={Affirmlogo} />
                            <Card cardHeight={responsiveHeight(12)}customMarginTop={1} cardWidth={responsiveWidth(27)} onPress={handlepaymentModal} imageSource={KlarnaLogowine} />
                        </View>
                    </View>
                </View>
                <MyModal isVisible={ispaymentdetailsModalVisible}
                    handledownModal={handledownModal} // Pass the function to handle showing "down" modal
                    onPress={handleToggleModal} toggleModal={handlepaymentModal} paymentdetailsmodalshow={true} customStyle={appStyles.modal} />
                <MyModal isVisible={isdownVisible}
                    txt1='Congratulations!'
                    txt2='We will see you on'
                    txt3='[DATE SCHEDULED]'
                    toggleModal={handledownModal}
                    ModalContent={true}
                    onPress={handlelecontinue}
                />
            </ImageBackground>
        </SafeAreaView>
    );
}
export default Pricing;