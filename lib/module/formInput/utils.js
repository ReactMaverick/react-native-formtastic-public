"use strict";

import { Appearance, Dimensions, StyleSheet } from "react-native";
export const screenHeight = Dimensions.get('window').height;
export const screenWidth = Dimensions.get('window').width;
const getDeviceTheme = () => {
  const colorScheme = Appearance.getColorScheme();
  return colorScheme;
};
export const deviceTheme = getDeviceTheme();

// console.log('Device Theme: ', deviceTheme);

export const colors = {
  primary: '#f7287b',
  secondary: '#c717fc',
  accent: '#ff6f00',
  black: 'black',
  white: 'white',
  offWhite: '#f5f5f5',
  transparentWhite: 'rgba(255, 255, 255, 0.02)',
  semiTransparentWhite: 'rgba(255, 255, 255, 0.4)',
  semiTransparentBlack: 'rgba(0, 0, 0, 0.4)',
  transparentGrey: 'rgba(0, 0, 0, 0.1)',
  transparentBlack: 'rgba(0, 0, 0, 0.02)',
  grey: 'grey',
  slightlyDarkGrey: '#666',
  lightGrey: '#d3d3d3',
  darkGrey: '#333',
  error: 'red',
  lightError: '#FFCCCB',
  success: 'green',
  warning: 'yellow',
  lightGreen: '#00AB41',
  transparentGreen: 'rgba(0, 171, 65, 0.1)',
  reddishOrange: '#F66666'
};
export const getThemedColor = (theme, element) => {
  if (theme === 'system' && deviceTheme) {
    theme = deviceTheme;
  }

  // console.log('Theme: ', theme, element);

  switch (element) {
    case 'inputStyle':
      return {
        backgroundColor: theme === 'dark' ? colors.lightGrey : colors.offWhite
      };
    case 'inputContainerStyle':
      return {
        backgroundColor: theme === 'dark' ? colors.semiTransparentWhite : colors.transparentGrey
      };
    case 'labelTextStyle':
      return {
        color: theme === 'dark' ? colors.lightGrey : colors.darkGrey
      };
    case 'datePickerModalInner':
      return {
        backgroundColor: theme === 'dark' ? colors.darkGrey : colors.offWhite
      };
    case 'todayTextStyle':
      return {
        color: theme === 'dark' ? colors.lightGrey : colors.grey
      };
    case 'weekDaysContainerStyle':
      return {
        backgroundColor: theme === 'dark' ? colors.transparentWhite : colors.transparentBlack
      };
    case 'yearMonthContainerStyle':
      return {
        backgroundColor: theme === 'dark' ? colors.slightlyDarkGrey : colors.white
      };
    case 'timePickerContainerStyle':
      return {
        backgroundColor: theme === 'dark' ? colors.slightlyDarkGrey : colors.lightGrey
      };
    case 'datePickerModalLeftRightButtonIconOuter':
      return {
        backgroundColor: theme === 'dark' ? colors.slightlyDarkGrey : colors.lightGrey
      };
    case 'headerContainerStyle':
      return {
        backgroundColor: theme === 'dark' ? colors.transparentWhite : colors.transparentBlack
      };
    case 'yearMonthTextStyle':
      return {
        color: theme === 'dark' ? colors.lightGrey : colors.grey
      };
    case 'datePickerDayTextStyle':
      return {
        color: theme === 'dark' ? colors.lightGrey : colors.grey
      };
    case 'yearMonthTimeSelectorTextStyle':
      return {
        color: theme === 'dark' ? colors.lightGrey : colors.slightlyDarkGrey
      };
    case 'datePickerOutsideDayTextStyle':
      return {
        color: theme === 'dark' ? colors.grey : colors.lightGrey
      };
    case 'timeTextStyle':
      return {
        color: theme === 'dark' ? colors.lightGrey : colors.grey
      };
  }
};
export const styles = StyleSheet.create({
  defaultInputStyle: {
    borderWidth: 1,
    borderColor: colors.lightGrey,
    width: '100%',
    padding: 10,
    borderRadius: 10,
    color: colors.darkGrey,
    justifyContent: 'center',
    height: 50
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
    borderRadius: 10,
    borderBottomStartRadius: 15,
    borderBottomEndRadius: 15,
    width: '100%'
  },
  defaultLabelTextStyle: {
    fontSize: 16,
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
    zIndex: 1
  },
  defaultRightIconContainerStyle: {
    position: 'absolute',
    right: 15,
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
    padding: 10,
    borderRadius: 10,
    minWidth: screenWidth * 0.9
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
    borderRadius: 10
  },
  weekDaysContainerStyleCustom: {
    borderRadius: 10,
    marginVertical: 10,
    height: 35
  },
  weekDaysTextStyleCustom: {
    color: colors.grey,
    fontWeight: '500'
  },
  yearMonthContainerStyleCustom: {
    borderRadius: 30
  },
  datePickerModalLeftRightButtonIconOuter: {
    padding: 12,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center'
  },
  headerContainerStyleCustom: {
    borderRadius: 10
  },
  headerTextStyleCustom: {
    color: colors.grey,
    fontWeight: '800'
  },
  selectedContainerStyleCustom: {
    backgroundColor: colors.lightGreen,
    borderRadius: 20
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
  },
  todayContainerStyleCustom: {
    borderColor: colors.lightGreen,
    borderWidth: 2,
    borderRadius: 20
  },
  yearMonthTextStyleCustom: {
    fontWeight: '700'
  },
  activeYearMonthContainerStyleCustom: {
    backgroundColor: colors.lightGreen,
    borderRadius: 30
  },
  activeYearMonthTextStyleCustom: {
    color: colors.white,
    fontWeight: '700'
  },
  selectedYearMonthContainerStyleCustom: {
    borderColor: colors.lightGreen,
    borderWidth: 2,
    borderRadius: 30
  },
  selectedYearMonthTextStyleCustom: {
    fontWeight: '700'
  },
  yearMonthTimeSelectorTextStyleCustom: {
    fontWeight: '700',
    fontSize: 16
  },
  datePickerRangeStyleCustom: {
    backgroundColor: colors.transparentGreen
  },
  timeTextStyleCustom: {
    fontWeight: '700'
  }
});
//# sourceMappingURL=utils.js.map