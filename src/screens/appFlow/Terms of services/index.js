import { View, ImageBackground, Text, StatusBar, SafeAreaView, Image, TouchableOpacity } from 'react-native';
import React, { useEffect } from 'react';
import { appStyles } from '../../../services/utilities/appStyles';
import { colors } from '../../../services/utilities/color';
import { ScrollView } from 'react-native-gesture-handler';
import Header from '../../../components/Headers';
import CustomText from '../../../components/Text';
import { Arrow, BACKGROUND_IMAGE } from '../../../services/utilities/assets';
import { useNavigation } from '@react-navigation/native';
export default function Termsofpolicy() {
  const navigation = useNavigation();
  useEffect(() => {
    navigation.getParent().setOptions({ tabBarStyle: { display: 'none' } });
    return () => {
      navigation.getParent().setOptions({ tabBarStyle: { display: 'flex' } });
    };
  }, []);
  const handlearrow = () => {
    return (
      navigation.reset({
        index: 0,
        routes: [{ name: 'AccountStackScreen', params: { screen: 'Account' } }],
      })
    )
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
            headerText='Terms of Service'
            showImage={true} 
            customTextstyle={appStyles.Termheadertxt} 
            imageSource={Arrow} 
            onPress={handlearrow}
            />
          <ScrollView showsVerticalScrollIndicator={false}>
           <CustomText/>
          </ScrollView>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
}

