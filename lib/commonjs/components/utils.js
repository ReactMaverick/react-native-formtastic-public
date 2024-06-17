"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.styles = exports.screenWidth = exports.screenHeight = exports.colors = void 0;
var _reactNative = require("react-native");
const screenHeight = exports.screenHeight = _reactNative.Dimensions.get('window').height;
const screenWidth = exports.screenWidth = _reactNative.Dimensions.get('window').width;
const colors = exports.colors = {
  primary: '#f7287b',
  secondary: '#c717fc',
  accent: '#ff6f00',
  black: 'black',
  white: 'white',
  offWhite: '#f5f5f5',
  transparentBlack: 'rgba(0, 0, 0, 0.02)',
  grey: 'grey',
  lightGrey: '#d3d3d3',
  darkGrey: '#333',
  error: 'red',
  lightError: '#FFCCCB',
  success: 'green',
  warning: 'yellow',
  lightGreen: '#00AB41',
  reddishOrange: '#F66666'
};
const styles = exports.styles = _reactNative.StyleSheet.create({
  defaultInputStyle: {
    borderWidth: 1,
    borderColor: 'black',
    width: '100%',
    padding: 10,
    backgroundColor: 'white',
    borderRadius: 10
  },
  defaultMainContainerStyle: {
    justifyContent: 'center',
    alignItems: 'flex-start',
    padding: 10,
    width: '100%'
  },
  defaultInputContainerStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 3,
    backgroundColor: colors.lightGrey,
    borderRadius: 10,
    borderBottomStartRadius: 15,
    borderBottomEndRadius: 15,
    width: '100%'
  },
  defaultLabelTextStyle: {
    fontSize: 16,
    color: colors.darkGrey,
    marginBottom: 10
  },
  defaultLabelTextContainerStyle: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    gap: 2
  },
  defaultRequiredTextStyle: {
    color: colors.error
  },
  defaultErrorTextStyle: {
    color: colors.error,
    fontSize: 12,
    marginLeft: 5
  },
  defaultLeftIconContainerStyle: {
    position: 'absolute',
    left: 15,
    top: 17,
    zIndex: 1
  },
  defaultRightIconContainerStyle: {
    position: 'absolute',
    right: 15,
    top: 17,
    zIndex: 1
  },
  dateInputWrapperInner: {
    width: '100%'
  },
  datePickerModalContainer: {
    flex: 1,
    padding: 25,
    justifyContent: 'center',
    zIndex: 1
  },
  datePickerModalInner: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.offWhite,
    padding: 10,
    borderRadius: 10,
    zIndex: 2
  },
  datePickerModalCloseButton: {
    alignItems: 'center',
    position: 'absolute',
    top: -10,
    right: -10,
    zIndex: 3,
    backgroundColor: colors.reddishOrange,
    borderRadius: 50,
    paddingVertical: 8,
    paddingHorizontal: 9
  },
  datePickerModalCloseButtonText: {
    color: colors.white
  },
  timePickerContainerStyleCustom: {
    backgroundColor: colors.transparentBlack,
    borderRadius: 10
  },
  weekDaysContainerStyleCustom: {
    backgroundColor: colors.transparentBlack,
    borderRadius: 10
  },
  weekDaysTextStyleCustom: {
    color: colors.grey,
    fontWeight: '500'
  },
  yearContainerStyleCustom: {
    backgroundColor: colors.white,
    borderRadius: 30
  },
  monthContainerStyleCustom: {
    backgroundColor: colors.white,
    borderRadius: 30
  },
  timePickerIndicatorStyleCustom: {
    backgroundColor: colors.lightGrey,
    borderRadius: 10
  },
  datePickerModalLeftRightButtonIconOuter: {
    backgroundColor: colors.grey,
    paddingVertical: 5,
    paddingHorizontal: 12,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center'
  },
  headerContainerStyleCustom: {
    backgroundColor: colors.transparentBlack,
    borderRadius: 10
  },
  headerTextStyleCustom: {
    color: colors.grey,
    fontWeight: '800'
  },
  selectedTextStyleCustom: {
    color: colors.white,
    fontWeight: '700'
  },
  headerTextContainerStyleCustom: {
    backgroundColor: colors.transparentBlack,
    borderRadius: 10,
    paddingHorizontal: 10
  },
  datePickerConfirmButton: {
    backgroundColor: colors.lightGreen,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10
  },
  datePickerConfirmButtonText: {
    color: colors.white,
    fontWeight: '700'
  }
});
//# sourceMappingURL=utils.js.map