import React, { useEffect, useState } from 'react';
import { View, Text, SafeAreaView, TouchableOpacity } from 'react-native';
import { appStyles } from '../../../services/utilities/appStyles';
import MyModal from '../../../components/Modal';
export default function Index({ navigation, route }) {
  const [isaccountVisible, setaccountVisible] = useState(false);
  const handleaccountModal = () => {
    console.log('Toggling down modal visibility');
    setaccountVisible(!isaccountVisible); // Toggle the modal visibility
  };
  useEffect(() => {
    navigation.getParent().setOptions({ tabBarStyle: { display: 'flex' } });
    return () => {
      navigation.getParent().setOptions({ tabBarStyle: { display: 'flex' } });
    };
  }, [navigation]);
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View>
        <TouchableOpacity onPress={handleaccountModal}>
          <Text style={appStyles.Detailtxt}>modalopen</Text>
        </TouchableOpacity>
      </View>
      <MyModal isVisible={isaccountVisible} toggleModal={handleaccountModal} accountmodal={true} />
    </SafeAreaView>
  );
}
