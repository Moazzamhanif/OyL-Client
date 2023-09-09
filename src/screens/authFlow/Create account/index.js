import React, { useState, useContext } from 'react';
import { View, Text, Alert, ImageBackground, SafeAreaView, ScrollView, TouchableOpacity } from 'react-native';
import { appStyles } from '../../../../src/services/utilities/appStyles';
import LinearGradient from 'react-native-linear-gradient';
import CustomTextInput from '../../../../src/components/Textinputs';
import Header from '../../../components/Headers';
import Button from '../../../../src/components/Button';
import RoundCheckbox from '../../../../src/components/Checkbox';
import { responsiveHeight, } from 'react-native-responsive-dimensions';
import { colors } from '../../../services/utilities/color';
import auth from '@react-native-firebase/auth'
import firestore from '@react-native-firebase/firestore';
import { AuthContext } from '../../../navigation/AuthProvider';
import { Arrow, BACKGROUND_IMAGE } from '../../../services/utilities/assets';
import LottieView from 'lottie-react-native';
const CreateAccount = ({ navigation }) => {
    const [checkboxChecked, setCheckboxChecked] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { register } = useContext(AuthContext);
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const toggleCheckbox = () => {
        setCheckboxChecked((prevChecked) => !prevChecked);
    };
    const handlearrow =()=>{
        navigation.navigate('splash');
    }

    const [loading, setLoading] = useState(false);
    const handleletsgo = async () => {
        if (!email && !password) {
            Alert.alert('Error', 'Email and password are required');
            return;
        }
        if (!emailRegex.test(email)) {
            Alert.alert('Error', 'Please enter a valid email address');
            return;
        }
        if (!email) {
            Alert.alert('Error', 'Email is required');
            return;
        }
        if (!password) {
            Alert.alert('Error', 'Password is required');
            return;
        }
        if (!checkboxChecked) {
            Alert.alert('Error', 'You must accept the Terms of Service and Privacy Policy');
            return;
        }
        setLoading(true);
        try {
            const emailExists = await firestore()
                .collection('users')
                .where('email', '==', email)
                .get();
            if (!emailExists.empty) {
                Alert.alert('Error', 'This email is already registered');
                setLoading(false);
                return;
            }
            await register(email, password);
            const userCredential = await auth().signInWithEmailAndPassword(email, password);
            if (!userCredential.user) {
                console.log('User is not authenticated');
                return;
            }
            const userId = userCredential.user.uid;
            await firestore().collection('users').doc(userId).set({
                email,
                uid: userId,
            });
            console.log("Data sent to Firestore successfully");
            navigation.navigate('Setupprofile');
        } catch (error) {
            console.log("Error registering:", error);
        } finally {
            setLoading(false);
        }
    };
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <ImageBackground
                source={BACKGROUND_IMAGE}
                style={appStyles.imageBackground}
            >
                <View style={appStyles.Container}>
                    <Header imageSource={Arrow}
                     headerText='Create Account'
                      showImage={true} 
                      onPress={handlearrow}
                      />
                    <ScrollView contentContainerStyle={appStyles.scrollViewContainer}>
                        <CustomTextInput label="Email"
                            placeholder='micktason@email.com'
                            placeholderTextColor={colors.color1}
                            style={appStyles.input}
                            responsiveMarginTop={4}
                            value={email}
                            onChangeText={(userEmail) => setEmail(userEmail)}
                        />
                        <CustomTextInput label="Password"
                            placeholder='• • • • • • • • • • • • • • •'
                            placeholderTextColor={colors.color1}
                            style={appStyles.input}
                            secureTextEntry={true}
                            responsiveMarginTop={4}
                            placeholderMarginLeft={5}
                            value={password}
                            onChangeText={(userPassword) => setPassword(userPassword)}
                        />
                        <View style={appStyles.termspolicyview}>
                            <RoundCheckbox checked={checkboxChecked} onPress={toggleCheckbox} />
                            <Text style={appStyles.txtaccept}>I accept the </Text>
                            <TouchableOpacity>
                                <Text style={appStyles.termstxt}>Terms of Service</Text>
                            </TouchableOpacity>
                            <Text style={appStyles.txtand}> and </Text>
                            <TouchableOpacity>
                                <Text style={appStyles.termstxt}>Privacy Policy</Text>
                            </TouchableOpacity>
                        </View>
                        <LinearGradient
                            colors={[colors.color7, colors.color12]}
                            style={{ ...appStyles.Lubemeupcontainer, marginTop: responsiveHeight(2) }}
                            start={{ x: 0, y: 0.5 }}
                            end={{ x: 1, y: 0.5 }}
                        >
                            <Button
                                label="Lets go!"
                                onPress={handleletsgo}
                                textColor={colors.color10}
                            />
                        </LinearGradient>
                    </ScrollView>
                    <View style={appStyles.loadingContainer}>
                        {loading && (
                            <LottieView
                                source={require('../../../assets/lottie/animation_lma39dbx.json')} // Replace with the actual path to your Lottie animation file
                                autoPlay
                                loop
                                style={appStyles.loadingAnimation}
                            />
                        )}
                    </View>
                </View>
            </ImageBackground>
        </SafeAreaView>
    );
}
export default CreateAccount;
