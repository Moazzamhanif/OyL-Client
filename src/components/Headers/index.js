import React from 'react';
import { Image, View, Text, ImageBackground } from 'react-native';
import { appStyles } from '../../services/utilities/appStyles';
import { responsiveWidth } from 'react-native-responsive-dimensions';
import { BACKGROUND_IMAGE } from '../../services/utilities/assets';
import { TouchableOpacity } from 'react-native-gesture-handler';
export default function Header({
  showImage,
  headerText,
  scheduletxt,
  onPress,
  imageSource,
  customTextstyle,
  showRoundHeader
}) {
  const radius = 12;
  if (showRoundHeader) {
    return (
      <View
        style={{
          ...appStyles.homeHeader,
          borderBottomLeftRadius: responsiveWidth(radius),
          borderBottomRightRadius: responsiveWidth(radius),
          overflow: 'hidden',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <ImageBackground source={BACKGROUND_IMAGE} style={appStyles.homeHeader} />
        <Text style={appStyles.scheduletxt}>{scheduletxt}</Text>
      </View>
    );
  }
  const headerStyle = {
    ...appStyles.headerContainer,
  };
  return (
    <View style={headerStyle}>
      {showImage && (
        <TouchableOpacity onPress={onPress}>
          <Image
            source={imageSource}
            style={appStyles.arrow}
          />
        </TouchableOpacity>
      )}
      <Text style={[appStyles.headerText, customTextstyle]}>{headerText}</Text>
    </View>
  );
}
