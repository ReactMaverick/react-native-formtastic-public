"use strict";

import React, { useCallback, useEffect, useState } from 'react';
import { Animated, Modal, Pressable, Text, TextInput, View } from 'react-native';
import { colors, getThemedColor, screenHeight, screenWidth, styles } from './utils';
import DateTimePicker, { useDefaultStyles } from 'react-native-ui-datepicker';
import dayjs from 'dayjs';
import Icon from './icon';
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
  firstDayOfWeek,
  headerContainerStyle,
  setShowDatePlaceholder,
  animationType,
  animationDuration,
  hideConfirmButton,
  theme = 'system',
  selectedContainerStyle,
  selectedTextStyle,
  todayContainerStyle,
  todayTextStyle,
  weekDaysContainerStyle,
  weekDaysTextStyle,
  yearContainerStyle,
  yearTextStyle,
  activeYearContainerStyle,
  activeYearTextStyle,
  selectedYearContainerStyle,
  selectedYearTextStyle,
  monthContainerStyle,
  monthTextStyle,
  selectedMonthContainerStyle,
  selectedMonthTextStyle,
  datePickerLeftButtonStyle,
  datePickerRightButtonStyle,
  datePickerDayContainerStyle,
  datePickerDayTextStyle,
  yearSelectorTextStyle,
  monthSelectorTextStyle,
  timeSelectorTextStyle,
  datePickerOutsideDayTextStyle,
  timePickerIndicatorStyle,
  timeTextStyle,
  datePickerRangeStyle,
  datePickerProps,
  datePickerStyles
}) => {
  const defaultStyles = useDefaultStyles();
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
    onRequestClose: () => closeModal(),
    children: /*#__PURE__*/_jsx(Animated.View, {
      style: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.6)',
        opacity: opacityAnimationOuter
      },
      children: /*#__PURE__*/_jsxs(View, {
        style: styles.datePickerModalContainer,
        children: [/*#__PURE__*/_jsx(Pressable, {
          style: {
            width: screenWidth,
            height: screenHeight,
            // backgroundColor: 'red',
            position: 'absolute',
            top: 0,
            // transform: 'translateX(-90%)',
            zIndex: 1
          },
          onPress: () => {
            closeModal();
          }
        }), /*#__PURE__*/_jsxs(Animated.View, {
          style: {
            flex: 1,
            // backgroundColor: 'yellow',
            zIndex: 2,
            transform: [{
              translateY: translateYAnimation
            }, {
              translateX: translateXAnimation
            }, {
              scale: scaleAnimation
            }]
          },
          children: [/*#__PURE__*/_jsx(Pressable, {
            style: {
              width: '100%',
              height: '100%',
              // backgroundColor: 'red',
              position: 'absolute',
              top: 0
              // transform: 'translateX(-90%)',
              // zIndex: 1,
            },
            onPress: () => {
              closeModal();
            }
          }), /*#__PURE__*/_jsxs(View, {
            style: [styles.datePickerModalInner, getThemedColor(theme, 'datePickerModalInner'), datePickerBackgroundColor ? {
              backgroundColor: datePickerBackgroundColor
            } : {}],
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
              onChange: onChangeDate,
              firstDayOfWeek: firstDayOfWeek ?? 1,
              maxDate: disableFutureDates ? new Date() : undefined,
              minDate: disablePastDates ? new Date() : undefined,
              showOutsideDays: true,
              styles: {
                ...defaultStyles,
                today: {
                  ...styles.todayContainerStyleCustom,
                  ...todayContainerStyle
                },
                // Today Item Container Style
                today_label: {
                  ...getThemedColor(theme, 'todayTextStyle'),
                  ...todayTextStyle
                },
                // Today Item Text Style
                selected: {
                  ...styles.selectedContainerStyleCustom,
                  ...selectedContainerStyle
                },
                // Selected Item Container Style
                selected_label: {
                  ...styles.selectedTextStyleCustom,
                  ...selectedTextStyle
                },
                // Selected Item Text Style
                weekdays: {
                  ...styles.weekDaysContainerStyleCustom,
                  ...getThemedColor(theme, 'weekDaysContainerStyle'),
                  ...weekDaysContainerStyle
                },
                // Weekdays Container Style
                weekday_label: {
                  ...styles.weekDaysTextStyleCustom,
                  ...weekDaysTextStyle
                },
                // Weekday Text Style
                year: {
                  ...styles.yearMonthContainerStyleCustom,
                  ...getThemedColor(theme, 'yearMonthContainerStyle'),
                  ...yearContainerStyle
                },
                // Year Item Container Style
                year_label: {
                  ...styles.yearMonthTextStyleCustom,
                  ...getThemedColor(theme, 'yearMonthTextStyle'),
                  ...yearTextStyle
                },
                // Year Item Text Style
                active_year: {
                  ...styles.activeYearMonthContainerStyleCustom,
                  ...activeYearContainerStyle
                },
                // Active Year Item Container Style
                active_year_label: {
                  ...styles.activeYearMonthTextStyleCustom,
                  ...activeYearTextStyle
                },
                // Active Year Item Text Style
                selected_year: {
                  ...styles.selectedYearMonthContainerStyleCustom,
                  ...selectedYearContainerStyle
                },
                // Selected Year Item Container Style
                selected_year_label: {
                  ...styles.selectedYearMonthTextStyleCustom,
                  ...selectedYearTextStyle
                },
                // Selected Year Item Text Style
                month: {
                  ...styles.yearMonthContainerStyleCustom,
                  ...getThemedColor(theme, 'yearMonthContainerStyle'),
                  ...monthContainerStyle
                },
                // Month Item Container Style
                month_label: {
                  ...styles.yearMonthTextStyleCustom,
                  ...getThemedColor(theme, 'yearMonthTextStyle'),
                  ...monthTextStyle
                },
                // Month Item Text Style
                selected_month: {
                  ...styles.activeYearMonthContainerStyleCustom,
                  ...selectedMonthContainerStyle
                },
                // Selected Month Item Container Style
                selected_month_label: {
                  ...styles.activeYearMonthTextStyleCustom,
                  ...selectedMonthTextStyle
                },
                // Selected Month Item Text Style
                header: {
                  ...styles.headerContainerStyleCustom,
                  ...getThemedColor(theme, 'headerContainerStyle'),
                  ...headerContainerStyle
                },
                // Header Container Style
                button_prev: {
                  ...styles.datePickerModalLeftRightButtonIconOuter,
                  ...getThemedColor(theme, 'datePickerModalLeftRightButtonIconOuter'),
                  ...datePickerLeftButtonStyle
                },
                // Left Button Style
                button_next: {
                  ...styles.datePickerModalLeftRightButtonIconOuter,
                  ...getThemedColor(theme, 'datePickerModalLeftRightButtonIconOuter'),
                  ...datePickerRightButtonStyle
                },
                // Right Button Style
                day: {
                  ...datePickerDayContainerStyle
                },
                // Day Button Container Style
                day_label: {
                  ...getThemedColor(theme, 'datePickerDayTextStyle'),
                  ...datePickerDayTextStyle
                },
                // Day Button Text Style
                month_selector_label: {
                  ...styles.yearMonthTimeSelectorTextStyleCustom,
                  ...getThemedColor(theme, 'yearMonthTimeSelectorTextStyle'),
                  ...monthSelectorTextStyle
                },
                // Month Selector Button Style
                year_selector_label: {
                  ...styles.yearMonthTimeSelectorTextStyleCustom,
                  ...getThemedColor(theme, 'yearMonthTimeSelectorTextStyle'),
                  ...yearSelectorTextStyle
                },
                // Year Selector Button Style
                time_selector_label: {
                  ...styles.yearMonthTimeSelectorTextStyleCustom,
                  ...getThemedColor(theme, 'yearMonthTimeSelectorTextStyle'),
                  ...timeSelectorTextStyle
                },
                // Time Selector Button Style
                outside_label: {
                  ...getThemedColor(theme, 'datePickerOutsideDayTextStyle'),
                  ...datePickerOutsideDayTextStyle
                },
                // Outside Day Button Style
                time_selected_indicator: {
                  ...styles.timePickerContainerStyleCustom,
                  ...getThemedColor(theme, 'timePickerContainerStyle'),
                  ...timePickerIndicatorStyle
                },
                // Time Picker Indicator Style
                range_fill: {
                  ...styles.datePickerRangeStyleCustom,
                  ...datePickerRangeStyle
                },
                // Range Fill Style
                time_label: {
                  ...styles.timeTextStyleCustom,
                  ...getThemedColor(theme, 'timeTextStyle'),
                  ...timeTextStyle
                },
                // Time Label Style
                ...datePickerStyles
              },
              ...datePickerProps
            }), !hideConfirmButton && /*#__PURE__*/_jsx(Pressable, {
              style: styles.datePickerConfirmButton,
              onPress: () => closeModal(),
              children: /*#__PURE__*/_jsx(Text, {
                style: styles.datePickerConfirmButtonText,
                children: "Confirm"
              })
            })]
          })]
        })]
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
  leftIconSource = 'font-awesome',
  leftIconSize = 20,
  leftIconOnPress,
  rightIcon,
  rightIconColor,
  rightIconStyle,
  rightIconContainerStyle,
  renderRightIcon,
  rightIconSource = 'font-awesome',
  rightIconSize = 20,
  rightIconOnPress,
  hiddenText,
  disabled,
  theme = 'system',
  multiline,
  numberOfLines,
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
  firstDayOfWeek,
  datePlaceholder,
  datePickerAnimationType,
  animationDuration,
  hideDatePickerConfirmButton,
  dateFormat,
  dateTimeFormat,
  selectedContainerStyle,
  selectedTextStyle,
  todayContainerStyle,
  todayTextStyle,
  weekDaysContainerStyle,
  weekDaysTextStyle,
  yearContainerStyle,
  yearTextStyle,
  activeYearContainerStyle,
  activeYearTextStyle,
  selectedYearContainerStyle,
  selectedYearTextStyle,
  monthContainerStyle,
  monthTextStyle,
  selectedMonthContainerStyle,
  selectedMonthTextStyle,
  datePickerLeftButtonStyle,
  datePickerRightButtonStyle,
  datePickerDayContainerStyle,
  datePickerDayTextStyle,
  yearSelectorTextStyle,
  monthSelectorTextStyle,
  timeSelectorTextStyle,
  datePickerOutsideDayTextStyle,
  timePickerIndicatorStyle,
  timeTextStyle,
  datePickerRangeStyle,
  datePickerProps,
  datePickerStyles
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
    style: {
      ...styles.defaultMainContainerStyle,
      ...mainContainerStyle
    },
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
      firstDayOfWeek: firstDayOfWeek,
      setShowDatePlaceholder: setShowDatePlaceholder,
      animationType: datePickerAnimationType ?? 'zoomIn',
      animationDuration: animationDuration ?? 600,
      hideConfirmButton: hideDatePickerConfirmButton,
      theme: theme,
      selectedContainerStyle: selectedContainerStyle,
      selectedTextStyle: selectedTextStyle,
      todayContainerStyle: todayContainerStyle,
      todayTextStyle: todayTextStyle,
      weekDaysContainerStyle: weekDaysContainerStyle,
      weekDaysTextStyle: weekDaysTextStyle,
      yearContainerStyle: yearContainerStyle,
      yearTextStyle: yearTextStyle,
      activeYearContainerStyle: activeYearContainerStyle,
      activeYearTextStyle: activeYearTextStyle,
      selectedYearContainerStyle: selectedYearContainerStyle,
      selectedYearTextStyle: selectedYearTextStyle,
      monthContainerStyle: monthContainerStyle,
      monthTextStyle: monthTextStyle,
      selectedMonthContainerStyle: selectedMonthContainerStyle,
      selectedMonthTextStyle: selectedMonthTextStyle,
      datePickerLeftButtonStyle: datePickerLeftButtonStyle,
      datePickerRightButtonStyle: datePickerRightButtonStyle,
      datePickerDayContainerStyle: datePickerDayContainerStyle,
      datePickerDayTextStyle: datePickerDayTextStyle,
      yearSelectorTextStyle: yearSelectorTextStyle,
      monthSelectorTextStyle: monthSelectorTextStyle,
      timeSelectorTextStyle: timeSelectorTextStyle,
      datePickerOutsideDayTextStyle: datePickerOutsideDayTextStyle,
      timePickerIndicatorStyle: timePickerIndicatorStyle,
      timeTextStyle: timeTextStyle,
      datePickerRangeStyle: datePickerRangeStyle,
      datePickerProps: datePickerProps,
      datePickerStyles: datePickerStyles
    }), !hideLabel && /*#__PURE__*/_jsxs(View, {
      style: {
        ...styles.defaultLabelTextContainerStyle,
        ...labelTextContainerStyle
      },
      ...labelTextContainerViewProps,
      children: [/*#__PURE__*/_jsx(Text, {
        style: [styles.defaultLabelTextStyle, getThemedColor(theme, 'labelTextStyle'), labelTextColor ? {
          color: labelTextColor
        } : {}, {
          ...labelTextStyle
        }],
        ...labelTextProps,
        children: labelText ?? 'Input Label'
      }), isRequired && /*#__PURE__*/_jsx(Text, {
        style: [styles.defaultRequiredTextStyle, requiredTextColor ? {
          color: requiredTextColor
        } : {}, {
          ...requiredTextStyle
        }],
        ...requiredTextProps,
        children: requiredText ?? '*'
      })]
    }), /*#__PURE__*/_jsxs(View, {
      style: [styles.defaultInputContainerStyle, getThemedColor(theme, 'inputContainerStyle'), !showCharacterLimit && {
        borderBottomStartRadius: 10,
        borderBottomEndRadius: 10
      }, inputContainerBackgroundColor ? {
        backgroundColor: inputContainerBackgroundColor
      } : {}, error && {
        backgroundColor: colors.lightError
      }, {
        ...inputContainerStyle
      }],
      ...inputContainerViewProps,
      children: [leftIcon && /*#__PURE__*/_jsx(Pressable, {
        style: {
          ...styles.defaultLeftIconContainerStyle,
          ...{
            top: showCharacterLimit ? 17 : 'auto'
          },
          ...leftIconContainerStyle
        },
        onPress: datePicker && !disabled ? () => setShowDatePicker(true) : datePicker && disabled ? () => {} : leftIconOnPress ?? (() => {}),
        children: renderLeftIcon ? renderLeftIcon : /*#__PURE__*/_jsx(Icon, {
          name: leftIcon,
          iconSource: leftIconSource,
          size: leftIconSize,
          color: leftIconColor ?? colors.slightlyDarkGrey,
          style: leftIconStyle
        })
      }), rightIcon && /*#__PURE__*/_jsx(Pressable, {
        style: {
          ...styles.defaultRightIconContainerStyle,
          ...{
            top: showCharacterLimit ? 17 : 'auto'
          },
          ...rightIconContainerStyle
        },
        onPress: rightIconOnPress ?? (() => {}),
        children: renderRightIcon ? renderRightIcon : /*#__PURE__*/_jsx(Icon, {
          name: rightIcon,
          iconSource: rightIconSource,
          size: rightIconSize,
          color: rightIconColor ?? colors.slightlyDarkGrey,
          style: rightIconStyle
        })
      }), datePicker ? /*#__PURE__*/_jsx(View, {
        style: styles.dateInputWrapperInner,
        children: /*#__PURE__*/_jsx(Pressable, {
          style: [styles.defaultInputStyle, getThemedColor(theme, 'inputStyle'), error ? {
            borderColor: colors.error
          } : {}, leftIcon ? {
            paddingLeft: 40
          } : {}, rightIcon ? {
            paddingRight: 40
          } : {}, {
            ...inputStyle
          }],
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
        style: [styles.defaultInputStyle, getThemedColor(theme, 'inputStyle'), inputTextColor ? {
          color: inputTextColor
        } : {}, error ? {
          borderColor: colors.error
        } : {}, leftIcon ? {
          paddingLeft: 40
        } : {}, rightIcon ? {
          paddingRight: 40
        } : {}, multiline && {
          height: 'auto',
          textAlignVertical: 'top'
        }, {
          ...inputStyle
        }],
        onChangeText: handleTextChange,
        maxLength: characterLimit,
        keyboardType: inputType ?? 'default',
        value: value ?? inputValue,
        autoCapitalize: autoCapitalize ?? 'sentences',
        secureTextEntry: hiddenText,
        editable: !disabled,
        multiline: multiline,
        numberOfLines: numberOfLines,
        ...textInputProps
      }), characterLimit && showCharacterLimit && /*#__PURE__*/_jsx(Text, {
        children: characterLimit ? `${value?.length ?? inputValue?.length}/${characterLimit}` : ''
      })]
    }), errorText && /*#__PURE__*/_jsx(Text, {
      style: {
        ...styles.defaultErrorTextStyle,
        ...errorTextStyle
      },
      children: errorText
    })]
  });
};
export default FormInput;
//# sourceMappingURL=formInput.js.map