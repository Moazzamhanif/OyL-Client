import React, { useState, useContext } from 'react';
import { View, Text, Alert, Image, ImageBackground, StatusBar, SafeAreaView, KeyboardAvoidingView, ScrollView, Platform } from 'react-native';
import { appStyles } from '../../../../src/services/utilities/appStyles';
import { TouchableOpacity } from 'react-native-gesture-handler';
import LinearGradient from 'react-native-linear-gradient';
import LottieView from 'lottie-react-native';
import CustomTextInput from '../../../../src/components/Textinputs'; // Adjust the import path as needed
import Button from '../../../../src/components/Button'; // Adjust the import path for your Button component
import { responsiveFontSize, responsiveScreenHeight } from 'react-native-responsive-dimensions';
import { AuthContext } from '../../../navigation/AuthProvider';
import { colors } from '../../../services/utilities/color';
import { BACKGROUND_IMAGE, Lotieanimation, OylLogo } from '../../../services/utilities/assets';
import AsyncStorage from '@react-native-async-storage/async-storage';
const Splash = ({ navigation }) => {
    const { login, user } = useContext(AuthContext);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const handlecreate = () => {
        navigation.navigate('CreateAccount');
    };
    const handleLubeme = async () => {
        try {
            setLoading(true);
            if (!email) {
                setLoading(false);
                Alert.alert('Error', 'Email is required');
                return;
            }
            if (!password) {
                setLoading(false);
                Alert.alert('Error', 'Password is required');
                return;
            }
            await login(email, password);
            AsyncStorage.setItem("User", JSON.stringify(user));
            navigation.navigate('AppNavigation', { screen: 'home' });
        } catch (error) {
            console.log("Error logging in:", error);
            Alert.alert('Login Failed', 'This user is not registered.');
        } finally {
            setLoading(false);
        }
    };
    return (
        <SafeAreaView style={appStyles.safeArea}>
            <ScrollView contentContainerStyle={{ flexGrow: 1 }}
                keyboardShouldPersistTaps="handled" >
                <ImageBackground
                    source={BACKGROUND_IMAGE}
                    style={appStyles.imageBackground}>
                    <StatusBar backgroundColor={colors.color10} barStyle='light-content' />
                    <Image
                        source={OylLogo}
                        style={appStyles.logo}
                    />
                    <Text style={appStyles.txt}>Enter your Email & Password to log in!</Text>
                    <CustomTextInput
                        label="Email"
                        style={appStyles.input}
                        placeholder='Enter Email'
                        placeholderFontSize={5}
                        placeholderTextColor={colors.color1}
                        value={email}
                        onChangeText={setEmail}
                    />
                    <CustomTextInput
                        label="Password"
                        style={appStyles.input} // You can pass additional styles if needed
                        placeholder='Enter Password'
                        placeholderFontSize={5}
                        placeholderTextColor={colors.color1}
                        placeholderMarginLeft={3}
                        secureTextEntry={true}
                        value={password}
                        onChangeText={setPassword}
                    />
                    <View style={appStyles.accountRow}>
                        <Text style={appStyles.accounttxt}>Do not have an account?</Text>
                        <TouchableOpacity onPress={handlecreate}>
                            <Text style={appStyles.createtxt}>Create</Text>
                        </TouchableOpacity>
                    </View>
                    <LinearGradient
                        colors={[colors.color7, colors.color12]}
                        style={[appStyles.Lubemeupcontainer, { marginTop: responsiveScreenHeight(7) }]}
                        start={{ x: 0, y: 0 }}
                        end={{ x: 1, y: 1 }}
                    >
                        <Button
                            label="LUBE ME UP!"
                            onPress={handleLubeme}
                            textColor={colors.color10}
                        />
                    </LinearGradient>
                    {loading && (
                        <LottieView
                            source={Lotieanimation}
                            autoPlay
                            loop
                            style={appStyles.loadingAnimation}
                        />
                    )}
                </ImageBackground>
            </ScrollView>
        </SafeAreaView>
    );
}
export default Splash;
