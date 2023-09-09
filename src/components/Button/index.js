import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import { appStyles } from '../../../src/services/utilities/appStyles'; 
import {responsiveHeight,} from 'react-native-responsive-dimensions';
const Button = ({
    label,
    onPress,
    textColor,
    shadowColor,
    fontSize,
    fontFamily,
    responsiveMarginTop = 0,
}) => {
    const buttonStyle = {
        ...appStyles.Lubemeupcontainer,   
        marginTop: responsiveHeight(responsiveMarginTop),
        shadowColor: shadowColor || appStyles.Lubemeupcontainer.shadowColor,
    };
    const textStyle = {
        ...appStyles.Lubemeuptext,
        color: textColor || appStyles.Lubemeuptext.color,
        fontSize: fontSize || appStyles.Lubemeuptext.fontSize, 
        fontFamily: fontFamily || appStyles.Lubemeuptext.fontFamily,
    };
    return (
        <TouchableOpacity onPress={onPress} style={buttonStyle}>
            <Text style={textStyle}>{label}</Text>
        </TouchableOpacity>
    );
};
export default Button;
