import {responsiveFontSize,} from 'react-native-responsive-dimensions';
const fontFamily = {
  RobotoLight:'Roboto-Light',
  RobotoRegular:'Roboto-Regular',
  RobotoMedium:'Roboto-Medium',
  RobotoBold:'Roboto-Bold',
  PoppinsRegular:'Poppins-Regular',
  PoppinsMedium:'Poppins-Medium',
  PoppinsLight:'Poppins-Light',
  MonstserratMedium:'Montserrat-Medium',
  MonstserratRegular:'Montserrat-Regular',
  TangerineBold:'Tangerine-Bold',
}
const fontSize = {
 h1:responsiveFontSize(1.4),
 h2:responsiveFontSize(1.5),
 h3:responsiveFontSize(1.7),
 h4:responsiveFontSize(1.8),
 h5:responsiveFontSize(1.9),
 h6:responsiveFontSize(2),
 h7:responsiveFontSize(2.5),
 h8:responsiveFontSize(3),
 h9:responsiveFontSize(4),
 h10:responsiveFontSize(5),
 h11:responsiveFontSize(10),
 h12:responsiveFontSize(12),
 h13:responsiveFontSize(1)
}
export  {fontSize ,fontFamily}
