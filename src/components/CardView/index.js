import React from 'react';
import { View, Text, Image, TouchableWithoutFeedback, TouchableOpacity } from 'react-native';
import { appStyles } from '../../services/utilities/appStyles';
import { responsiveWidth,responsiveHeight,} from 'react-native-responsive-dimensions';
const Card = ({
  day,
  date,
  month,
  onPress,
  cardWidth,
  imageSource,
  cardHeight,
  customMarginTop,
  index,
  enableBackgroundColorChange, 
  selectedCardIndex,
  handleCardSelect,
}) => {
  const isSelected = index === selectedCardIndex;
  const dynamicBackgroundColor = enableBackgroundColorChange && isSelected
    ? '#FFFFC8'
    : '#FFFFFF';
  return (
    <TouchableWithoutFeedback onPress={() => handleCardSelect(index)}>
      <View
        style={[
          appStyles.card,
          {
            width: cardWidth || responsiveWidth(30),
            height: cardHeight || responsiveHeight(13),
            backgroundColor: dynamicBackgroundColor, // Use dynamic background color
            marginTop :customMarginTop ||responsiveHeight(8)
          },
        ]} >
        <TouchableOpacity onPress={onPress}>{imageSource && <Image source={imageSource} style={appStyles.cardImage} />}</TouchableOpacity>
        <Text style={appStyles.content}>{day}</Text>
        <Text style={appStyles.content}>{date}</Text>
        <Text style={appStyles.content}>{month}</Text>
      </View>
    </TouchableWithoutFeedback>
  );
};
export default Card;
