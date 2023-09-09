import { View, Text, Image, ImageBackground } from 'react-native';
import React, { useEffect } from 'react';
import Button from '../../../components/Button';
import LinearGradient from 'react-native-linear-gradient';
import { appStyles } from '../../../services/utilities/appStyles';
import { responsiveHeight, responsiveWidth,} from 'react-native-responsive-dimensions';
import { colors } from '../../../services/utilities/color';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ScrollView } from 'react-native-gesture-handler';
import { BACKGROUND_IMAGE, Thumbsup, insta, logofacebook } from '../../../services/utilities/assets';
const Thankyou = ({ navigation }) => {
  useEffect(() => {
    navigation.getParent().setOptions({ tabBarStyle: { display: 'none' } });
    return () => {
      navigation.getParent().setOptions({ tabBarStyle: { display: 'flex' } });
    };
  }, []);
 const handleHomePress = () => {
    return (
        navigation.reset({
            index: 0,
            routes: [{ name: 'HomeStackScreen', params: { screen: 'home' } }],
        })
    )
};
  return (
    <SafeAreaView style={appStyles.safeArea}>
    <ImageBackground
      source={BACKGROUND_IMAGE}
      style={appStyles.thankbackground}
    >
      <ScrollView showsVerticalScrollIndicator={false}>
      <View style={appStyles.thunbsimageview}>
        <View style={appStyles.thunbsimageview2}>
          <Image
            source={Thumbsup}
            style={appStyles.thunbsimage}
          />
        </View>
      </View>
      <View style={appStyles.instafacebookimageview}>
        <Text style={appStyles.Thankyoutxt}>Thank You!</Text>
        <Text style={appStyles.Thankyouothertxt}>
          Thanks for using our app, We hope
        </Text>
        <Text style={appStyles.Thankyouothertxt2}>you like it and use it again.</Text>
        <View style={appStyles.InputContainer}>
          <Image
            source={logofacebook}
            style={appStyles.facebookimage}
          />
          <Image
            source={insta}
            style={appStyles.instaimage}
          />
        </View>
        <LinearGradient
          colors={[colors.color7, colors.color6]}
          style={{
            ...appStyles.Lubemeupcontainer,
            width: responsiveWidth(60),
            height: responsiveHeight(6),
            marginTop: responsiveHeight(1),
          }}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
        >
          {/* Use your Button component here */}
          <Button
            label="Go Home"
            onPress={handleHomePress}
            textColor={colors.color10}
          />
        </LinearGradient>
      </View>
      </ScrollView>
    </ImageBackground>
</SafeAreaView>
  );
};
export default Thankyou;
