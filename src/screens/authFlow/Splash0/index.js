import { View, Text,SafeAreaView,ImageBackground,Image,ScrollView } from 'react-native'
import React,{useEffect,useState } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { BACKGROUND_IMAGE,OylLogo } from '../../../services/utilities/assets';
import { appStyles } from '../../../services/utilities/appStyles';
import LottieView from 'lottie-react-native';
const Splashh = ({navigation}) => {
  const [loading, setLoading] = useState(false);
    useEffect(() => {
        const id = AsyncStorage.getItem("User", async (error, data) => {
            if (data) {
                navigation.navigate('AppNavigation',{screen:'home'})
            } else {
                console.log("data: ", data);
                navigation.navigate('AuthNavigation',{screen:'splash'})
            }
          })
          setLoading(true);
          setTimeout(() => {
              setLoading(false);
          }, 2000);
        console.log("User ID: ", id);
    }, []);
  return (
    <SafeAreaView style={appStyles.safeArea}>
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <ImageBackground
            source={BACKGROUND_IMAGE}
            style={appStyles.imageBackground}> 
            <Image
                source={OylLogo}
                style={appStyles.splash}
            />   
                {loading ? (
    <LottieView
        source={require('../../../assets/lottie/animation_lma39dbx.json')}
        autoPlay
        loop
        style={appStyles.loadingAnimation}
    />
) : null}
        </ImageBackground>
    </ScrollView>
</SafeAreaView>
);
}
export default Splashh;