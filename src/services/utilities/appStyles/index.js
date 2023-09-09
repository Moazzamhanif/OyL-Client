import { StyleSheet } from 'react-native';
import { fontSize, fontFamily } from '../fonts';
import { responsiveHeight, responsiveWidth, } from 'react-native-responsive-dimensions';
import { scale } from 'react-native-size-matters';
import { colors } from '../color';
export const appStyles = StyleSheet.create({
  imageBackground: {
    flex: 1,
    resizeMode: 'cover',
  },
  thankbackground: {
    flex: 1
  },
  arrowview: {
    width: scale(20),
    height: scale(20),
    backgroundColor: 'blue'
  },
  policycontainer: {
    height: responsiveHeight(100),
    marginLeft: responsiveWidth(2.5),
    width: responsiveWidth(95),
    alignItems: 'center',
    marginTop: responsiveHeight(4)
  },
  Container: {
    flex: 1,
  },
  Termheadertxt: {
    color: colors.color1,
    fontFamily: fontFamily.RobotoBold,
    fontSize: fontSize.h6,
    marginLeft: responsiveWidth(25),
  },
  LogoView: {
    width: responsiveWidth(100),
    height: responsiveHeight(15),
    backgroundColor: 'pink'
  },
  logo: {
    width: responsiveWidth(72),
    height: responsiveHeight(20),
    resizeMode: 'contain',
    alignSelf: 'center',
    marginTop: responsiveHeight(20)
  },
  splash: {
    width: responsiveWidth(72),
    height: responsiveHeight(20),
    resizeMode: 'contain',
    alignSelf: 'center',
    marginTop: responsiveHeight(40)
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginRight: responsiveWidth(3),
    marginTop: -responsiveHeight(1.2),
  },
  calendarImage: {
    height: scale(15),
    width: scale(15),
    marginTop: responsiveHeight(2)
  },
  label1: {
    color: colors.color2,
    fontSize: fontSize.h2,
    marginTop: responsiveHeight(1),
    marginLeft: responsiveWidth(3)
  },
  label2: {
    color: colors.color3,
    fontSize: fontSize.h2,
    marginTop: responsiveHeight(1),
    marginLeft: responsiveWidth(3),
    fontFamily: fontFamily.RobotoBold
  },
  label3: {
    color: colors.color4,
    fontSize: fontSize.h1,
    marginLeft: responsiveWidth(3),
  },
  label: {
    fontSize: fontSize.h2,
    fontFamily: fontFamily.RobotoBold,
    color: colors.color2,
    marginStart: responsiveWidth(3.3),
    textAlign: 'left',
  },
  input: {
    height: responsiveHeight(6.5),
    width: responsiveWidth(80),
    color: colors.color1,
  },
  Location: {
    width: scale(20),
    height: scale(20),
    resizeMode: 'cover',
    marginLeft: responsiveWidth(1),
    marginTop: responsiveHeight(2)
  },
  locationView: {
    height: responsiveHeight(8),
    width: responsiveWidth(90),
    borderRadius: responsiveWidth(2),
    alignSelf: 'center',
    marginTop: responsiveHeight(1),
    backgroundColor: colors.color14,
    elevation: 3,
    flexDirection: 'row',
    shadowOffset: {
      width: 0,
      height: responsiveHeight(0.3),
    },
    shadowRadius: responsiveWidth(1.2),
    shadowOpacity: 1,
    elevation: responsiveHeight(0.3),
  },
  txt: {
    color: colors.color6,
    alignSelf: 'center',
    fontSize: fontSize.h4,
    marginTop: responsiveHeight(13)
  },
  loadingAnimation: {
    width: '30%',
    height: '12%',
    alignSelf: 'center',

  },
  loadingContainer: {
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
  },
  accounttxt: {
    color: colors.color7,
    marginTop: responsiveHeight(1),
    marginStart: responsiveWidth(40),
    fontSize: fontSize.h2,
    fontFamily: fontFamily.PoppinsLight
  },
  createtxt: {
    color: colors.color6,
    fontSize: fontSize.h2,
    marginTop: responsiveHeight(1),
  },
  accountRow: {
    flexDirection: 'row'
  },
  emailView: {
    height: responsiveHeight(8),
    width: responsiveWidth(80),
    fontSize: fontSize.h7,
    alignSelf: 'center',
    backgroundColor: colors.color6,
    borderRadius: 12,
  },
  Lubemeupcontainer: {
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    width: responsiveWidth(70),
    height: responsiveHeight(6),
    borderRadius: responsiveWidth(50),
    shadowColor: colors.color9,
  },
  Lubemeuptext: {
    color: colors.color10,
    fontSize: fontSize.h6,
    fontFamily: fontFamily.RobotoBold,
  },
  safeArea: {
    flex: 1
  },
  scrollViewContainer: {
    flexGrow: 1
  },
  calendarImageStyle: {
    justifyContent: 'flex-end'
  },
  inputView: {
    height: responsiveHeight(8),
    width: responsiveWidth(90),
    borderRadius: responsiveWidth(2.5),
    alignSelf: 'center',
    backgroundColor: colors.color6,
    elevation: 5
  },
  InputContainer: {
    flexDirection: 'row',
  },
  eyeIcon: {
    width: scale(15),
    height: scale(15),
    alignItems: 'center',
    marginVertical: responsiveHeight(0.7)
  },
  maincolor: {
    flexGrow: 1
  },
  Downarrow: {
    width: scale(25),
    height: scale(25),
    marginLeft: responsiveWidth(4),
    marginTop: responsiveHeight(2)
  },
  headerContainer: {
    width: responsiveWidth(100),
    height: responsiveHeight(7),
    backgroundColor: colors.color7,
    borderWidth: 1,
    borderColor: colors.color11,
    alignItems: 'center',
    flexDirection: 'row',
    paddingLeft: 23,
  },
  termstxt: {
    color: colors.color12,
    fontFamily: fontFamily.RobotoBold,
    fontSize: fontSize.h2,
  },
  txtaccept: {
    fontFamily: fontFamily.RobotoRegular,
    color: colors.color7,
    fontSize: fontSize.h2,
    marginLeft: responsiveWidth(3)
  },
  txtand: {
    fontFamily: fontFamily.RobotoRegular,
    color: colors.color7,
    fontSize: fontSize.h2,
  },
  termspolicyview: {
    marginTop: responsiveHeight(3.5),
    width: responsiveWidth(90),
    height: responsiveWidth(15),
    alignSelf: 'center',
    flexDirection: 'row'
  },
  headerText: {
    color: colors.color1,
    alignItems: 'center',
    marginLeft: responsiveWidth(26),
    fontSize: fontSize.h6,
    fontFamily: fontFamily.RobotoBold
  },
  PricingheaderText: {
    color: colors.color1,
    alignItems: 'center',
    marginLeft: responsiveWidth(10),
    fontSize: fontSize.h6,
    fontFamily: fontFamily.RobotoBold
  },
  arrow: {
    width: responsiveWidth(2.5),
    height: responsiveHeight(2.5),
  },
  arrowview: {
    width: scale(40),
    height: scale(40),
    justifyContent: 'center',
    alignItems: 'center'
  },
  pricingtopview: {
    width: responsiveWidth(80),
    height: responsiveHeight(30),
    backgroundColor: colors.color7,
    alignItems: 'center',
  },
  changetext: {
    color: colors.color10,
    fontSize: fontSize.h2,
    fontFamily: fontFamily.RobotoRegular,
  },
  changetextview: {
    width: responsiveWidth(80),
    height: responsiveHeight(6),
    justifyContent: 'center',
    alignItems: 'center',
  },
  text87: {
    color: colors.color10,
    fontSize: fontSize.h12,
    marginTop: -responsiveHeight(8),
    fontFamily: fontFamily.RobotoBold
  },
  dollortext: {
    color: colors.color10,
    fontSize: fontSize.h10,
    marginRight: responsiveWidth(37),
    marginTop: responsiveHeight(2),
    fontFamily: fontFamily.RobotoBold
  },
  Paymenttext: {
    color: colors.color6,
    alignSelf: 'center',
    marginTop: responsiveHeight(3),
    fontSize: fontSize.h6,
    fontFamily: fontFamily.RobotoMedium
  },
  pricingtop: {
    alignSelf: 'center',
    marginTop: responsiveHeight(4),
    borderRadius: responsiveWidth(6),
    width: responsiveWidth(80),
    height: responsiveHeight(40),
    backgroundColor: colors.color6,
    alignItems: 'stretch',
    justifyContent: 'center',
    flex: 1
  },
  companymainview: {
    width: responsiveWidth(100),
    height: responsiveHeight(35),
    marginTop: responsiveHeight(5),
  },
  companyview1: {
    width: responsiveWidth(100),
    height: responsiveHeight(15),
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  companyview2: {
    width: responsiveWidth(100),
    height: responsiveHeight(15),
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  checkbox: {
    width: scale(19),
    height: scale(19),
    borderRadius: responsiveWidth(50),
    borderWidth: 1,
    borderColor: 'red',
    backgroundColor: colors.color7,
    justifyContent: 'center',
    alignItems: 'center',
  },
  pulltxt: {
    color: colors.color10,
    fontFamily: fontFamily.RobotoMedium,
    marginRight: responsiveWidth(42),
    fontSize: fontSize.h2,
  },
  checkcontainer: {
    flexDirection: 'row',
    width: responsiveWidth(100),
    height: responsiveHeight(6),
    justifyContent: 'center',
    alignItems: 'center',
    gap: 10
  },
  modal: {
    backgroundColor: colors.color7,
    padding: responsiveHeight(2),
    alignItems: 'center',
    borderRadius: responsiveWidth(4),
    width: responsiveWidth(90),
    shadowColor: colors.color13, // Shadow color
    shadowOffset: {
      width: 0, // x offset
      height: -responsiveHeight(2.5), // y offset
    },
    shadowOpacity: 0.5, // Shadow opacity
    shadowRadius: responsiveHeight(9.9), // Blur radius
  },
  downmodal: {
    backgroundColor: 'black',
    padding: responsiveHeight(2),
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
    alignItems: 'center',
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: responsiveHeight(43),
    shadowColor: colors.color13, // Shadow color
    shadowOffset: {
      width: 0, // x offset
      height: -responsiveHeight(2.5), // y offset
    },
    shadowOpacity: 0.5, // Shadow opacity
    shadowRadius: responsiveHeight(9.9), // Blur radius
  },
  customTxt1: {
    color: colors.color7,
    fontSize: fontSize.h7,
  },
  adddetail: {
    color: colors.color10,
    fontFamily: fontFamily.PoppinsRegular,
    fontSize: fontSize.h6,
    marginTop: responsiveHeight(2)
  },
  adddetailsecond: {
    color: colors.color10,
    fontSize: fontSize.h6,
    fontFamily: fontFamily.PoppinsRegular,
    marginTop: responsiveHeight(1)
  },
  paymentdetailsmodalview: {
    width: scale(315),
    height: scale(370),
    backgroundColor: colors.color7,
    alignItems: 'center',
    borderRadius: responsiveWidth(3)
  },
  paymentpic: {
    width: responsiveWidth(10),
    height: responsiveHeight(10),
    resizeMode: 'contain'
  },
  oilsecondview: {
    width: responsiveWidth(85.8),
    height: responsiveHeight(42.4),
    marginLeft: responsiveWidth(2),
    borderRadius: responsiveWidth(3),
    borderWidth: responsiveWidth(0.2),
    marginTop: responsiveHeight(1),
    borderColor: colors.color15,
  },
  oilmodalview: {
    width: responsiveWidth(90),
    height: responsiveHeight(54),
    backgroundColor: colors.color14,
    borderRadius: responsiveWidth(5)
  },
  miniview: {
    width: responsiveWidth(85),
    height: responsiveHeight(6),
    backgroundColor: colors.color14,
    borderBottomWidth: 1,
    borderColor: colors.color15,
  },
  manufactureview: {
    width: responsiveWidth(85),
    height: responsiveHeight(6),
    backgroundColor: colors.color14,
    borderBottomWidth: 1,
    borderColor: colors.color15,
    justifyContent: 'center',
  },
  manufacture: {
    fontSize: fontSize.h6,
    marginLeft: responsiveWidth(5),
    color: colors.color2
  },
  bottomview: {
    width: responsiveWidth(85),
    height: responsiveHeight(6),
    backgroundColor: colors.color14,
  },
  or: {
    fontSize: fontSize.h6,
    alignItems: 'center',
    color: colors.color2
  },
  orview: {
    width: responsiveWidth(85),
    height: responsiveHeight(6),
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.color14,
    borderBottomWidth: 1,
    borderColor: colors.color15,
  },
  thunbsimageview: {
    width: responsiveWidth(100),
    height: responsiveHeight(50),
    backgroundColor: colors.color6,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: colors.color11,
    borderWidth: 1
  },
  thunbsimageview2: {
    width: scale(150),
    height: scale(150),
    backgroundColor: colors.color7,
    elevation: 4,
    borderRadius: responsiveWidth(100),
    justifyContent: 'center',
    alignItems: 'center'
  },
  oiltypemodalmodal: {
    width: responsiveWidth(90),
    height: responsiveHeight(40),
  },
  instafacebookimageview: {
    width: responsiveWidth(100),
    height: responsiveHeight(50),
    justifyContent: 'center',
    alignItems: 'center'
  },
  Thankyoutxt: {
    color: colors.color7,
    fontFamily: fontFamily.RobotoBold,
    fontSize: fontSize.h9,
    marginTop: responsiveHeight(3),
  },
  Thankyouothertxt: {
    color: colors.color7,
    fontFamily: fontFamily.RobotoBold,
    fontSize: fontSize.h6,
    marginTop: responsiveHeight(2)
  },
  Thankyouothertxt2: {
    color: colors.color7,
    fontFamily: fontFamily.RobotoBold,
    fontSize: fontSize.h6,
  },
  thunbsimage: {
    width: scale(120),
    height: scale(120),
    marginBottom: responsiveHeight(1)
  },
  facebookimage: {
    width: responsiveWidth(16.5),
    height: responsiveHeight(16.5),
    marginTop: responsiveHeight(1),
    resizeMode: 'contain'
  },
  instaimage: {
    width: responsiveWidth(14),
    height: responsiveHeight(14),
    marginLeft: responsiveWidth(2),
    marginTop: responsiveHeight(2),
    resizeMode: 'contain'
  },
  customTxt2: {
    color: colors.color7,
    fontSize: fontSize.h7,
    marginTop: -responsiveHeight(0.3)
  },
  map: {
    width: responsiveWidth(7),
    height: responsiveHeight(7),
    resizeMode: 'contain'
  },
  checkcircle: {
    width: responsiveWidth(16),
    height: responsiveHeight(16),
    resizeMode: 'contain'
  },
  modalText1: {
    color: colors.color7,
    fontSize: fontSize.h9,
    fontFamily: fontFamily.RobotoBold
  },
  modalText2: {
    color: colors.color7,
    fontSize: fontSize.h7,
    fontFamily: fontFamily.RobotoBold,
    marginTop: responsiveHeight(2),
  },
  modalText3: {
    color: colors.color7,
    fontSize: fontSize.h7,
    fontFamily: fontFamily.RobotoBold,
  },
  circleview: {
    width: scale(65),
    height: scale(65),
    borderRadius: responsiveWidth(50),
    backgroundColor: 'black',
    marginTop: -responsiveHeight(7),
    justifyContent: 'center',
    alignItems: 'center'
  },
  detailsview: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  ticktick: {
    width: responsiveWidth(4),
    height: responsiveHeight(4),
    resizeMode: 'contain',
  },
  addlocation: {
    color: colors.color10,
    fontSize: fontSize.h6,
    fontFamily: fontFamily.PoppinsMedium,
  },
  checkboxView: {
    width: responsiveWidth(6),
    height: responsiveHeight(3),
    backgroundColor: colors.color7,
    borderWidth: 1,
    borderColor: colors.color10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  tickImage: {
    width: responsiveWidth(6),
    height: responsiveHeight(3),
  },
  headers: {
    width: responsiveWidth(100),
    height: responsiveWidth(6),
    marginTop: responsiveHeight(3),
    flexDirection: 'row',
    alignItems: 'center',
  },
  arrow1: {
    width: responsiveWidth(2),
    height: responsiveHeight(2),
    marginLeft: responsiveWidth(5)
  },
  edittxt: {
    color: colors.color6,
    alignItems: 'center',
    fontSize: fontSize.h6,
    marginStart: responsiveWidth(30)
  },
  homeHeader: {
    width: responsiveWidth(100),
    height: responsiveHeight(22),
    borderBottomLeftRadius: responsiveWidth(12),
    borderBottomEndRadius: responsiveWidth(12),
    backgroundColor: colors.color10
  },
  tabimagesview: {
    marginTop: responsiveHeight(2),
    width: responsiveWidth(100),
    height: responsiveHeight(7),
    flexDirection: 'row',
    alignSelf: 'flex-end',
    justifyContent: 'space-around'
  },
  headerBackground: {
    width: responsiveWidth(100),
    height: responsiveHeight(100),
  },
  HOMEtab: {
    width: scale(37),
    height: scale(37),
    marginLeft: responsiveWidth(1.8)
  },
  profiletab: {
    width: scale(37),
    height: scale(37)
  },
  hometabtext: {
    color: colors.color26,
    marginLeft: responsiveWidth(2)
  },
  Accounttabtxt: {
    color: colors.color26,
  },
  hometabview: {
    width: scale(70),
    height: scale(100),
    justifyContent: 'flex-start',
    alignItems: 'center'
  },
  ProfiletabView: {
    width: scale(70),
    height: scale(100),
    justifyContent: 'flex-start',
    alignItems: 'center'
  },
  scheduletxt: {
    fontFamily: fontFamily.RobotoMedium,
    fontSize: fontSize.h8,
    color: colors.color7,
    position: 'absolute'
  },
  Detailtxt: {
    fontFamily: fontFamily.RobotoMedium,
    fontSize: fontSize.h7,
    color: colors.color1,
    alignSelf: 'center',
    marginTop: responsiveHeight(2),
  },
  content: {
    marginTop: responsiveHeight(1),
    color: colors.color2
  },
  checked: {
    backgroundColor: colors.color7,
    borderColor: colors.color7,
  },
  time: {
    color: colors.color2,
    fontSize: fontSize.h10,
  },
  ScrollView: {
    marginTop: responsiveHeight(7),
  },
  entertime: {
    color: colors.color2,
    fontSize: fontSize.h2,
    fontFamily: fontFamily.RobotoBold,
    marginLeft: responsiveWidth(3.5),
    marginTop: responsiveHeight(1),
    marginBottom: responsiveHeight(0.5)
  },
  card: {
    backgroundColor: colors.color7,
    borderRadius: responsiveWidth(5), // Responsive border radius using width
    shadowOffset: {
      width: 0,
      height: responsiveHeight(1),
    },
    shadowOpacity: 7,
    shadowRadius: responsiveWidth(2),
    elevation: 4,
    padding: responsiveWidth(4),
    margin: responsiveWidth(1),
    marginTop: responsiveHeight(8),
    width: responsiveWidth(30),
    height: responsiveHeight(13),
    marginLeft: responsiveWidth(2.5),
    justifyContent: 'center',
    alignItems: 'center',
  },
  cardImage: {
    width: responsiveWidth(24),
    height: responsiveHeight(7),
    marginTop: responsiveHeight(10),
    resizeMode: 'contain'
  },
  input2: {
    color: 'black',
    width: responsiveWidth(15),
    height: responsiveHeight(10),
    fontSize: fontSize.h10,
    padding: 1
  },
  timeseparator: {
    fontSize: fontSize.h11,
    color: colors.color1,
    marginLeft: responsiveWidth(4),
    marginRight: responsiveWidth(4),
  },
  column: {
    flexDirection: 'column'
  },
  thrutxt: {
    color: colors.color1,
    fontFamily: fontFamily.MonstserratMedium,
    marginLeft: responsiveWidth(4),
    fontSize: fontSize.h13,
  },
  main1: {
    width: responsiveWidth(12),
    height: responsiveHeight(15),
    marginLeft: responsiveWidth(4),
    borderRadius: responsiveWidth(15)
  },
  detailsecondcontainer: {
    backgroundColor: colors.color7,
    elevation: 2,
    width: scale(295),
    height: scale(150),
    borderRadius: responsiveWidth(1)
  },
  smalldown: {
    width: scale(8),
    height: scale(8),
    marginRight: responsiveWidth(2)
  },
  editview: {
    width: responsiveWidth(91),
    height: responsiveHeight(5),
    borderBottomWidth: 1,
    alignItems: 'center',
    borderTopLeftRadius: responsiveWidth(5),
    borderTopRightRadius: responsiveWidth(5),
    backgroundColor: colors.color7,
    borderColor: colors.color15,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  edittx: {
    marginLeft: responsiveWidth(3.2),
    color: colors.color16,
    fontFamily: fontFamily.RobotoRegular,
    fontSize: fontSize.h3,
  },
  edit2view: {
    width: responsiveWidth(91),
    height: responsiveHeight(5),
    borderBottomWidth: 1,
    alignItems: 'center',
    backgroundColor: colors.color7,
    borderColor: colors.color15,
    justifyContent: 'space-between',
    flexDirection: 'row'
  },
  logoutview: {
    width: responsiveWidth(91),
    height: responsiveHeight(5),
    borderBottomLeftRadius: responsiveWidth(3),
    borderBottomRightRadius: responsiveWidth(3),
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  logoutx: {
    marginLeft: responsiveWidth(3.2),
    fontFamily: fontFamily.RobotoBold,
    fontSize: fontSize.h3,
    color: colors.color10
  },
  accountsecondview: {
    width: responsiveWidth(92),
    height: responsiveHeight(30),
    marginTop: responsiveHeight(4),
    borderRadius: responsiveWidth(5),
    borderColor: colors.color15,
    borderWidth: 1,
  },
  Accountmodal: {
    backgroundColor: colors.color7,
    padding: responsiveHeight(2),
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
    alignItems: 'center',
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: responsiveHeight(43),
    shadowColor: colors.color13, // Shadow color
    shadowOffset: {
      width: 0, // x offset
      height: -responsiveHeight(2.5), // y offset
    },
    shadowOpacity: 0.5, // Shadow opacity
    shadowRadius: responsiveHeight(9.9), // Blur radius
  },
  policytxt: {
    color: colors.color12,
    fontFamily: fontFamily.RobotoRegular,
    fontSize: fontSize.h5,
  },
  Privicyheadertxt: {
    color: colors.color1,
    fontFamily: fontFamily.RobotoBold,
    fontSize: fontSize.h6,
    marginLeft: responsiveWidth(25),
  },
  dateview: {
    flexDirection: 'row'
  },
  slashtxt: {
    color: colors.color1,
    fontFamily: fontFamily.MonstserratRegular,
    fontSize: fontSize.h7,
    marginTop: responsiveHeight(1),
    marginLeft: responsiveWidth(2),
  },
  AmContainer: {
    width: responsiveWidth(12),
    height: responsiveHeight(6.5),
    borderTopLeftRadius: responsiveWidth(2),
    borderTopRightRadius: responsiveWidth(2),
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.color7,
    borderWidth: 0.6,
    borderColor: colors.color10
  },
  contentContainer: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  PmContainer: {
    width: responsiveWidth(12),
    height: responsiveHeight(6.5),
    backgroundColor: colors.color7,
    borderBottomLeftRadius: responsiveWidth(2),
    borderBottomRightRadius: responsiveWidth(2),
    justifyContent: 'center',
    borderColor: colors.color10,
    alignItems: 'center',
    borderWidth: 0.6,
  },
  Amtxt: {
    color: colors.color10,
  },
})