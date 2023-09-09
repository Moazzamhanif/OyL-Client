import React, { useState } from 'react';
import { View, TextInput, Text, Image, TouchableOpacity, } from 'react-native';
import { appStyles } from '../../../src/services/utilities/appStyles';
import DateTimePicker from '@react-native-community/datetimepicker';
import { responsiveHeight,responsiveWidth,} from 'react-native-responsive-dimensions';
import { MaskGroup19, closeeye, Calendar1 } from '../../services/utilities/assets';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
const CustomTextInput = ({
    label,
    keyboardType,
    secureTextEntry,
    showLabelImage,
    labelImageSource,
    showDownImage,
    downImageSource,
    showCalendarImage,
    labelMarginTop,
    label1MarginTop,
    placeholderMarginTop,
    placeholderMarginLeft = -responsiveWidth(2),
    label2MarginTop,
    inputBackgroundColor,
    responsiveMarginTop = 1,
    placeholder,
    inputWidth,
    value,
    onChangeText,
    onDownImagePress,
    inputHeight,
    customLocationViewWidth,
    customLocationViewHeight,
    placeholderFontSize,
    placeholderFontFamily,
    placeholderTextColor,
    shadowColor,
    onLocationImagePress,
    downImageMarginLeft,
    customLabelMarginLeft,
    editable,
    maxlength,
    ...rest
}) => {
    const [selectedDate, setSelectedDate] = useState(null);
    const [isPasswordVisible, setPasswordVisible] = useState(false);
    const [isDatePickerVisible, setDatePickerVisible] = useState(false);
    const togglePasswordVisibility = () => {
        setPasswordVisible(!isPasswordVisible);
    };
    const showDatePicker = () => {
        setDatePickerVisible(true);
    };
    const handleDateConfirm = (event, date) => {
        if (date !== undefined) {
            setSelectedDate(date);
        }
        setDatePickerVisible(false);
    };
    return (
        <View
            style={[
                appStyles.inputView,
                {
                    marginTop: responsiveHeight(responsiveMarginTop),
                    backgroundColor: inputBackgroundColor || appStyles.inputView.backgroundColor,
                    width: inputWidth || responsiveWidth(90), // Set custom width or use default full width
                    height: inputHeight || responsiveHeight(8),
                    shadowColor: shadowColor || appStyles.inputView.shadowColor,
                },
            ]}
        >
            <Text style={appStyles.label}>{label}</Text>
            <View style={appStyles.inputContainer}>
                <TextInput
                    style={[
                        appStyles.input,
                        {
                            marginTop: -responsiveHeight(placeholderMarginTop || 0),
                            marginLeft: placeholderMarginLeft,           
                        },
                    ]}
                    secureTextEntry={isPasswordVisible}
                    keyboardType={keyboardType}
                    placeholder={placeholder}
                    placeholderTextColor={placeholderTextColor}
                    placeholderFontSize={placeholderFontSize}
                    placeholderFontFamily={placeholderFontFamily}
                    value={value}
                    onChangeText={onChangeText}
                    editable={editable}
                maxLength={maxlength}
                />
                {secureTextEntry && (
                    <TouchableOpacity onPress={togglePasswordVisibility}>
                        <Image
                            source={!isPasswordVisible ? MaskGroup19 : closeeye}
                            style={appStyles.eyeIcon}
                        />
                    </TouchableOpacity>
                )}
                {showCalendarImage && (
                    <TouchableOpacity onPress={showDatePicker}>
                        <Image
                            source={Calendar1}
                            style={appStyles.calendarImage}
                        />
                    </TouchableOpacity>
                )}
                <TouchableWithoutFeedback onPress={onLocationImagePress}>
                {showLabelImage && (
                    <Image source={labelImageSource} style={appStyles.Location} />
                )}
                </TouchableWithoutFeedback>
                {showDownImage && (
                    <TouchableWithoutFeedback onPress={onDownImagePress}>
                        <Image
                            source={downImageSource}
                            style={[
                                appStyles.Downarrow,
                                {
                                    marginLeft: downImageMarginLeft,
                                },
                            ]}
                        />
                    </TouchableWithoutFeedback>
                )}
            </View>
            {isDatePickerVisible && (
                <DateTimePicker
                    value={selectedDate || new Date()}
                    mode="date"
                    display="default"
                    onChange={(event, date) => {
                        handleDateConfirm(event, date);
                        const formattedDate = `${date.getDate()} / ${date.getMonth() + 1} / ${date.getFullYear()}`;
                        onChangeText(formattedDate);
                    }}
                />
            )}
        </View>
    );
};
export default CustomTextInput;
