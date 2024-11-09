"use strict";

import React, { useCallback, useEffect, useState } from 'react';
import { Animated, Modal, Pressable, Text, TextInput, View } from 'react-native';
import { colors, getThemedColor, screenHeight, screenWidth, styles } from './utils';
import Icon from 'react-native-vector-icons/FontAwesome';
import DateTimePicker from 'react-native-ui-datepicker';
import dayjs from 'dayjs';
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
const DatePickerModal = ({
  date,
  setDate,
  range,
  setRange,
  dates,
  setDates,
  datePickerWithTime,
  showDatePicker,
  setShowDatePicker,
  disableFutureDates,
  disablePastDates,
  onDateChange,
  onDateRangeChange,
  onDatesChange,
  datePickerBackgroundColor,
  showDatePickerCloseButton = false,
  datePickerCloseButtonColor,
  datePickerMode = 'single',
  selectedItemColor,
  selectedTextStyle,
  firstDayOfWeek,
  headerTextContainerStyle,
  setShowDatePlaceholder,
  animationType,
  animationDuration,
  hideConfirmButton,
  theme = 'system'
}) => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [modalPosition] = useState(new Animated.Value(1)); // 1 is off screen, 0 is on screen

  const [selectedDate, setSelectedDate] = useState(date);
  const [selectedRange, setSelectedRange] = useState(range);
  const [selectedDates, setSelectedDates] = useState(dates);
  const getScaleAnimation = () => {
    switch (animationType) {
      case 'zoomIn':
        return modalPosition.interpolate({
          inputRange: [0, 1],
          outputRange: [1, 0]
        });
      default:
        return 1;
    }
  };
  const getTranslateYAnimation = () => {
    switch (animationType) {
      case 'zoomIn':
        return modalPosition.interpolate({
          inputRange: [0, 1],
          outputRange: [screenHeight / 5, 0]
        });
      case 'slideUp':
        return modalPosition.interpolate({
          inputRange: [0, 1],
          outputRange: [screenHeight / 5, screenHeight]
        });
      case 'slideDown':
        return modalPosition.interpolate({
          inputRange: [0, 1],
          outputRange: [screenHeight / 5, -screenHeight / 5]
        });
      default:
        return modalPosition.interpolate({
          inputRange: [0, 1],
          outputRange: [screenHeight / 5, screenHeight / 5]
        });
    }
  };
  const getTranslateXAnimation = () => {
    switch (animationType) {
      case 'slideLeft':
        return modalPosition.interpolate({
          inputRange: [0, 1],
          outputRange: [0, screenWidth]
        });
      case 'slideRight':
        return modalPosition.interpolate({
          inputRange: [0, 1],
          outputRange: [0, -screenWidth]
        });
      default:
        return 1;
    }
  };
  const translateYAnimation = getTranslateYAnimation();
  const translateXAnimation = getTranslateXAnimation();
  const scaleAnimation = getScaleAnimation();
  const opacityAnimationOuter = modalPosition.interpolate({
    inputRange: [0, 1],
    outputRange: [1, 0]
  });
  const onChangeDate = useCallback(params => {
    setShowDatePlaceholder && setShowDatePlaceholder(false);
    if (!params) return;
    if (datePickerMode === 'single' && setDate) {
      setSelectedDate(params.date);
      setDate && setDate(params.date);
      onDateChange && onDateChange(params.date);
    } else if (datePickerMode === 'range' && setRange) {
      setSelectedRange(params);
      setRange && setRange(params);
      onDateRangeChange && onDateRangeChange(params);
    } else if (datePickerMode === 'multiple' && setDates) {
      setSelectedDates(params.dates);
      setDates(params.dates);
      onDatesChange && onDatesChange(params.dates);
    }
  }, [datePickerMode]);
  const leftButtonIcon = () => {
    return /*#__PURE__*/_jsx(View, {
      style: styles.datePickerModalLeftRightButtonIconOuter,
      children: /*#__PURE__*/_jsx(Icon, {
        name: "angle-left",
        size: 20,
        color: colors.offWhite
      })
    });
  };
  const rightButtonIcon = () => {
    return /*#__PURE__*/_jsx(View, {
      style: styles.datePickerModalLeftRightButtonIconOuter,
      children: /*#__PURE__*/_jsx(Icon, {
        name: "angle-right",
        size: 20,
        color: colors.offWhite
      })
    });
  };
  const openModal = () => {
    setIsModalVisible(true);
    Animated.timing(modalPosition, {
      toValue: 0,
      duration: animationDuration,
      useNativeDriver: true
    }).start();
  };
  const closeModal = () => {
    Animated.timing(modalPosition, {
      toValue: 1,
      duration: animationDuration,
      useNativeDriver: true
    }).start(() => {
      setIsModalVisible(false);
      setShowDatePicker(false);
    });
  };
  useEffect(() => {
    if (showDatePicker) {
      openModal();
    }
  }, [showDatePicker]);
  return isModalVisible && /*#__PURE__*/_jsx(Modal, {
    visible: isModalVisible,
    transparent: true,
    animationType: "none",
    children: /*#__PURE__*/_jsx(Animated.View, {
      style: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.6)',
        opacity: opacityAnimationOuter
      },
      children: /*#__PURE__*/_jsx(Pressable, {
        style: styles.datePickerModalContainer,
        onPress: () => {
          closeModal();
        },
        children: /*#__PURE__*/_jsx(Animated.View, {
          style: {
            flex: 1,
            transform: [{
              translateY: translateYAnimation
            }, {
              translateX: translateXAnimation
            }, {
              scale: scaleAnimation
            }]
          },
          children: /*#__PURE__*/_jsxs(Pressable, {
            style: [styles.datePickerModalInner, getThemedColor(theme, 'datePickerModalInner'), datePickerBackgroundColor ? {
              backgroundColor: datePickerBackgroundColor
            } : {}],
            onPress: e => {
              e.stopPropagation();
            },
            children: [showDatePickerCloseButton && /*#__PURE__*/_jsx(Pressable, {
              style: [styles.datePickerModalCloseButton, datePickerCloseButtonColor ? {
                backgroundColor: datePickerCloseButtonColor
              } : {}],
              onPress: () => closeModal(),
              children: /*#__PURE__*/_jsx(Icon, {
                name: "times",
                size: 12,
                color: colors.offWhite
              })
            }), /*#__PURE__*/_jsx(DateTimePicker, {
              mode: datePickerMode ?? 'single',
              date: selectedDate,
              startDate: selectedRange.startDate,
              endDate: selectedRange.endDate,
              dates: selectedDates,
              timePicker: datePickerWithTime,
              displayFullDays: true,
              onChange: onChangeDate,
              timePickerContainerStyle: styles.timePickerContainerStyleCustom,
              weekDaysContainerStyle: styles.weekDaysContainerStyleCustom,
              weekDaysTextStyle: styles.weekDaysTextStyleCustom,
              yearContainerStyle: styles.yearContainerStyleCustom,
              monthContainerStyle: styles.monthContainerStyleCustom,
              timePickerIndicatorStyle: styles.timePickerIndicatorStyleCustom,
              buttonPrevIcon: leftButtonIcon(),
              buttonNextIcon: rightButtonIcon(),
              headerContainerStyle: styles.headerContainerStyleCustom,
              headerTextStyle: styles.headerTextStyleCustom,
              selectedItemColor: selectedItemColor ?? colors.lightGreen,
              selectedTextStyle: selectedTextStyle ?? styles.selectedTextStyleCustom,
              firstDayOfWeek: firstDayOfWeek ?? 1,
              maxDate: disableFutureDates ? new Date() : undefined,
              minDate: disablePastDates ? new Date() : undefined,
              headerTextContainerStyle: headerTextContainerStyle ?? styles.headerTextContainerStyleCustom
            }), !hideConfirmButton && /*#__PURE__*/_jsx(Pressable, {
              style: styles.datePickerConfirmButton,
              onPress: () => closeModal(),
              children: /*#__PURE__*/_jsx(Text, {
                style: styles.datePickerConfirmButtonText,
                children: "Confirm"
              })
            })]
          })
        })
      })
    })
  });
};
const FormInput = ({
  mainContainerStyle,
  inputContainerStyle,
  inputContainerBackgroundColor,
  placeholderText,
  placeholderTextColor,
  inputStyle,
  inputTextColor,
  hideLabel,
  labelText,
  labelTextStyle,
  labelTextContainerStyle,
  isRequired,
  requiredText,
  requiredTextStyle,
  requiredTextColor,
  labelTextColor,
  textInputProps,
  labelTextProps,
  requiredTextProps,
  mainContainerViewProps,
  inputContainerViewProps,
  labelTextContainerViewProps,
  characterLimit,
  showCharacterLimit,
  inputType,
  autoCapitalize,
  onTextChange,
  value,
  error,
  errorText,
  errorTextStyle,
  leftIcon,
  leftIconColor,
  leftIconStyle,
  leftIconContainerStyle,
  renderLeftIcon,
  leftIconOnPress,
  rightIcon,
  rightIconColor,
  rightIconStyle,
  rightIconContainerStyle,
  renderRightIcon,
  rightIconOnPress,
  hiddenText,
  disabled,
  theme = 'system',
  // Date Picker Props
  datePicker,
  datePickerWithTime,
  disableFutureDates,
  disablePastDates,
  initialDate,
  initialRange,
  initialDates,
  onDateChange,
  sendDateValue,
  onDateRangeChange,
  sendDateRangeValues,
  onDatesChange,
  sendDatesValues,
  datePickerBackgroundColor,
  showDatePickerCloseButton,
  datePickerCloseButtonColor,
  datePickerMode,
  selectedItemColor,
  selectedTextStyle,
  firstDayOfWeek,
  headerTextContainerStyle,
  datePlaceholder,
  datePickerAnimationType,
  animationDuration,
  hideDatePickerConfirmButton,
  dateFormat,
  dateTimeFormat
  // Date Picker Props
}) => {
  const [inputValue, setInputValue] = useState('');

  // For Single Date //
  const [date, setDate] = useState(initialDate ?? undefined);

  // For Date Range //
  const [range, setRange] = useState({
    startDate: initialRange?.startDate ?? undefined,
    endDate: initialRange?.endDate ?? undefined
  });

  // For Multiple Dates //
  const [dates, setDates] = useState(initialDates ?? undefined);
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [showDatePlaceholder, setShowDatePlaceholder] = useState(false);
  const handleTextChange = text => {
    setInputValue(text);
    onTextChange && onTextChange(text);
  };
  useEffect(() => {
    if (datePlaceholder) {
      setShowDatePlaceholder(true);
    }
  }, [datePlaceholder]);
  useEffect(() => {
    if (datePicker && sendDateValue && date) {
      datePickerWithTime ? sendDateValue(dayjs(date).format(dateTimeFormat ?? 'DD-MM-YYYY hh:mm:ss A')) : sendDateValue(dayjs(date).format(dateFormat ?? 'DD-MM-YYYY'));
    }
  }, [date]);
  useEffect(() => {
    if (datePicker && sendDateRangeValues && range.startDate && range.endDate) {
      sendDateRangeValues(dayjs(range.startDate).format(dateFormat ?? 'DD-MM-YYYY'), dayjs(range.endDate).format(dateFormat ?? 'DD-MM-YYYY'));
    }
  }, [range]);
  useEffect(() => {
    if (datePicker && sendDatesValues && dates) {
      sendDatesValues(dates.map(date => dayjs(date).format(dateFormat ?? 'DD-MM-YYYY')));
    }
  }, [dates]);
  return /*#__PURE__*/_jsxs(View, {
    style: mainContainerStyle ?? styles.defaultMainContainerStyle,
    ...mainContainerViewProps,
    children: [datePicker && showDatePicker && /*#__PURE__*/_jsx(DatePickerModal, {
      date: date,
      setDate: setDate,
      range: range,
      setRange: setRange,
      dates: dates,
      setDates: setDates,
      onDateChange: onDateChange,
      onDateRangeChange: onDateRangeChange,
      onDatesChange: onDatesChange,
      datePickerWithTime: datePickerWithTime,
      showDatePicker: showDatePicker,
      setShowDatePicker: setShowDatePicker,
      disableFutureDates: disableFutureDates,
      disablePastDates: disablePastDates,
      datePickerBackgroundColor: datePickerBackgroundColor,
      showDatePickerCloseButton: showDatePickerCloseButton,
      datePickerCloseButtonColor: datePickerCloseButtonColor,
      datePickerMode: datePickerMode,
      selectedItemColor: selectedItemColor,
      selectedTextStyle: selectedTextStyle,
      firstDayOfWeek: firstDayOfWeek,
      headerTextContainerStyle: headerTextContainerStyle,
      setShowDatePlaceholder: setShowDatePlaceholder,
      animationType: datePickerAnimationType ?? 'zoomIn',
      animationDuration: animationDuration ?? 400,
      hideConfirmButton: hideDatePickerConfirmButton,
      theme: theme
    }), !hideLabel && /*#__PURE__*/_jsxs(View, {
      style: labelTextContainerStyle ?? styles.defaultLabelTextContainerStyle,
      ...labelTextContainerViewProps,
      children: [/*#__PURE__*/_jsx(Text, {
        style: [labelTextStyle ?? styles.defaultLabelTextStyle, getThemedColor(theme, 'labelTextStyle'), labelTextColor ? {
          color: labelTextColor
        } : {}],
        ...labelTextProps,
        children: labelText ? labelText : 'Input Label'
      }), isRequired && /*#__PURE__*/_jsx(Text, {
        style: [styles.defaultRequiredTextStyle, requiredTextStyle ? requiredTextStyle : {}, requiredTextColor ? {
          color: requiredTextColor
        } : {}],
        ...requiredTextProps,
        children: requiredText ? requiredText : '*'
      })]
    }), /*#__PURE__*/_jsxs(View, {
      style: inputContainerStyle ?? [styles.defaultInputContainerStyle, getThemedColor(theme, 'inputContainerStyle'), !showCharacterLimit && {
        borderBottomStartRadius: 10,
        borderBottomEndRadius: 10
      }, inputContainerBackgroundColor ? {
        backgroundColor: inputContainerBackgroundColor
      } : {}, error && {
        backgroundColor: colors.lightError
      }],
      ...inputContainerViewProps,
      children: [leftIcon && /*#__PURE__*/_jsx(Pressable, {
        style: leftIconContainerStyle ?? styles.defaultLeftIconContainerStyle,
        onPress: datePicker && !disabled ? () => setShowDatePicker(true) : datePicker && disabled ? () => {} : leftIconOnPress ?? (() => {}),
        children: renderLeftIcon ? renderLeftIcon({
          children: leftIcon,
          style: leftIconStyle
        }) : /*#__PURE__*/_jsx(Icon, {
          name: leftIcon,
          size: 20,
          color: error ? colors.error : leftIconColor ?? colors.slightlyDarkGrey
        })
      }), rightIcon && /*#__PURE__*/_jsx(Pressable, {
        style: rightIconContainerStyle ?? styles.defaultRightIconContainerStyle,
        onPress: rightIconOnPress ?? (() => {}),
        children: renderRightIcon ? renderRightIcon({
          children: leftIcon,
          style: rightIconStyle
        }) : /*#__PURE__*/_jsx(Icon, {
          name: rightIcon,
          size: 20,
          color: error ? colors.error : rightIconColor ?? colors.slightlyDarkGrey
        })
      }), datePicker ? /*#__PURE__*/_jsx(View, {
        style: styles.dateInputWrapperInner,
        children: /*#__PURE__*/_jsx(Pressable, {
          style: [inputStyle ?? styles.defaultInputStyle, getThemedColor(theme, 'inputStyle'), error ? {
            borderColor: colors.error
          } : {}, leftIcon ? {
            paddingLeft: 40
          } : {}, rightIcon ? {
            paddingRight: 40
          } : {}],
          onPress: () => {
            if (disabled) return;
            setShowDatePicker(true);
          },
          children: showDatePlaceholder && datePlaceholder ? /*#__PURE__*/_jsx(Text, {
            style: [inputTextColor ? {
              color: inputTextColor
            } : {
              color: colors.slightlyDarkGrey
            }, disabled ? {
              color: colors.lightGrey
            } : {}],
            children: datePlaceholder
          }) : date ? /*#__PURE__*/_jsx(Text, {
            style: [inputTextColor ? {
              color: inputTextColor
            } : {
              color: colors.darkGrey
            }, disabled ? {
              color: colors.lightGrey
            } : {}],
            children: datePickerWithTime ? dayjs(date).format(dateTimeFormat ?? 'DD-MM-YYYY hh:mm:ss A') : dayjs(date).format(dateFormat ?? 'DD-MM-YYYY')
          }) : range && range.startDate && range.endDate ? /*#__PURE__*/_jsx(Text, {
            style: [inputTextColor ? {
              color: inputTextColor
            } : {
              color: colors.darkGrey
            }, disabled ? {
              color: colors.lightGrey
            } : {}],
            children: `${dayjs(range.startDate).format(dateFormat ?? 'DD-MM-YYYY')} - ${dayjs(range.endDate).format(dateFormat ?? 'DD-MM-YYYY')}`
          }) : dates && dates.length ? /*#__PURE__*/_jsx(View, {
            style: {
              flexDirection: 'row',
              flexWrap: 'wrap',
              justifyContent: 'flex-start',
              alignItems: 'center'
            },
            children: dates.slice(0, 3).map((date, index) => /*#__PURE__*/_jsx(Text, {
              style: [inputTextColor ? {
                color: inputTextColor
              } : {
                color: colors.darkGrey
              }, disabled ? {
                color: colors.lightGrey
              } : {}],
              children: `${dayjs(date).format(dateFormat ?? 'DD-MM-YYYY')}${index < dates.length - 1 && index < 2 ? ', ' : index === 2 ? '...' : ''}`
            }, index))
          }) : null
        })
      }) : /*#__PURE__*/_jsx(TextInput, {
        placeholder: placeholderText ?? 'Enter text',
        placeholderTextColor: placeholderTextColor ?? colors.grey,
        style: [inputStyle ?? styles.defaultInputStyle, getThemedColor(theme, 'inputStyle'), inputTextColor ? {
          color: inputTextColor
        } : {}, error ? {
          borderColor: colors.error
        } : {}, leftIcon ? {
          paddingLeft: 40
        } : {}, rightIcon ? {
          paddingRight: 40
        } : {}],
        onChangeText: handleTextChange,
        maxLength: characterLimit,
        keyboardType: inputType ?? 'default',
        value: value ?? inputValue,
        autoCapitalize: autoCapitalize ?? 'sentences',
        secureTextEntry: hiddenText,
        editable: !disabled,
        ...textInputProps
      }), characterLimit && showCharacterLimit && /*#__PURE__*/_jsx(Text, {
        children: characterLimit ? `${value?.length ?? inputValue?.length}/${characterLimit}` : ''
      })]
    }), errorText && /*#__PURE__*/_jsxs(Text, {
      style: errorTextStyle ?? styles.defaultErrorTextStyle,
      children: ['* ', errorText]
    })]
  });
};
export default FormInput;
//# sourceMappingURL=formInput.js.map