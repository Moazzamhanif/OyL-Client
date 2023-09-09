import React from 'react';
import { TouchableOpacity, View, StyleSheet, Image } from 'react-native';
import { appStyles } from '../../../src/services/utilities/appStyles';
import { Tick } from '../../services/utilities/assets';
const RoundCheckbox = ({ checked, onPress, }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={[appStyles.checkbox, checked && appStyles.checked]}>
        {checked ? (
          <Image source={Tick} style={appStyles.tickImage} />
        ) : null}
      </View>
    </TouchableOpacity>
  );
};
export default RoundCheckbox;
