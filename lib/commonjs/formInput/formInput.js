"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireWildcard(require("react"));
var _reactNative = require("react-native");
var _utils = require("./utils");
var _reactNativeUiDatepicker = _interopRequireWildcard(require("react-native-ui-datepicker"));
var _dayjs = _interopRequireDefault(require("dayjs"));
var _icon = _interopRequireDefault(require("./icon"));
var _jsxRuntime = require("react/jsx-runtime");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
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
  const defaultStyles = (0, _reactNativeUiDatepicker.useDefaultStyles)();
  const [isModalVisible, setIsModalVisible] = (0, _react.useState)(false);
  const [modalPosition] = (0, _react.useState)(new _reactNative.Animated.Value(1)); // 1 is off screen, 0 is on screen

  const [selectedDate, setSelectedDate] = (0, _react.useState)(date);
  const [selectedRange, setSelectedRange] = (0, _react.useState)(range);
  const [selectedDates, setSelectedDates] = (0, _react.useState)(dates);
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
          outputRange: [_utils.screenHeight / 5, 0]
        });
      case 'slideUp':
        return modalPosition.interpolate({
          inputRange: [0, 1],
          outputRange: [_utils.screenHeight / 5, _utils.screenHeight]
        });
      case 'slideDown':
        return modalPosition.interpolate({
          inputRange: [0, 1],
          outputRange: [_utils.screenHeight / 5, -_utils.screenHeight / 5]
        });
      default:
        return modalPosition.interpolate({
          inputRange: [0, 1],
          outputRange: [_utils.screenHeight / 5, _utils.screenHeight / 5]
        });
    }
  };
  const getTranslateXAnimation = () => {
    switch (animationType) {
      case 'slideLeft':
        return modalPosition.interpolate({
          inputRange: [0, 1],
          outputRange: [0, _utils.screenWidth]
        });
      case 'slideRight':
        return modalPosition.interpolate({
          inputRange: [0, 1],
          outputRange: [0, -_utils.screenWidth]
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
  const onChangeDate = (0, _react.useCallback)(params => {
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
    _reactNative.Animated.timing(modalPosition, {
      toValue: 0,
      duration: animationDuration,
      useNativeDriver: true
    }).start();
  };
  const closeModal = () => {
    _reactNative.Animated.timing(modalPosition, {
      toValue: 1,
      duration: animationDuration,
      useNativeDriver: true
    }).start(() => {
      setIsModalVisible(false);
      setShowDatePicker(false);
    });
  };
  (0, _react.useEffect)(() => {
    if (showDatePicker) {
      openModal();
    }
  }, [showDatePicker]);
  return isModalVisible && /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.Modal, {
    visible: isModalVisible,
    transparent: true,
    animationType: "none",
    onRequestClose: () => closeModal(),
    children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.Animated.View, {
      style: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.6)',
        opacity: opacityAnimationOuter
      },
      children: /*#__PURE__*/(0, _jsxRuntime.jsxs)(_reactNative.View, {
        style: _utils.styles.datePickerModalContainer,
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.Pressable, {
          style: {
            width: _utils.screenWidth,
            height: _utils.screenHeight,
            // backgroundColor: 'red',
            position: 'absolute',
            top: 0,
            // transform: 'translateX(-90%)',
            zIndex: 1
          },
          onPress: () => {
            closeModal();
          }
        }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_reactNative.Animated.View, {
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
          children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.Pressable, {
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
          }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_reactNative.View, {
            style: [_utils.styles.datePickerModalInner, (0, _utils.getThemedColor)(theme, 'datePickerModalInner'), datePickerBackgroundColor ? {
              backgroundColor: datePickerBackgroundColor
            } : {}],
            children: [showDatePickerCloseButton && /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.Pressable, {
              style: [_utils.styles.datePickerModalCloseButton, datePickerCloseButtonColor ? {
                backgroundColor: datePickerCloseButtonColor
              } : {}],
              onPress: () => closeModal(),
              children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_icon.default, {
                name: "times",
                size: 12,
                color: _utils.colors.offWhite
              })
            }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNativeUiDatepicker.default, {
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
                  ..._utils.styles.todayContainerStyleCustom,
                  ...todayContainerStyle
                },
                // Today Item Container Style
                today_label: {
                  ...(0, _utils.getThemedColor)(theme, 'todayTextStyle'),
                  ...todayTextStyle
                },
                // Today Item Text Style
                selected: {
                  ..._utils.styles.selectedContainerStyleCustom,
                  ...selectedContainerStyle
                },
                // Selected Item Container Style
                selected_label: {
                  ..._utils.styles.selectedTextStyleCustom,
                  ...selectedTextStyle
                },
                // Selected Item Text Style
                weekdays: {
                  ..._utils.styles.weekDaysContainerStyleCustom,
                  ...(0, _utils.getThemedColor)(theme, 'weekDaysContainerStyle'),
                  ...weekDaysContainerStyle
                },
                // Weekdays Container Style
                weekday_label: {
                  ..._utils.styles.weekDaysTextStyleCustom,
                  ...weekDaysTextStyle
                },
                // Weekday Text Style
                year: {
                  ..._utils.styles.yearMonthContainerStyleCustom,
                  ...(0, _utils.getThemedColor)(theme, 'yearMonthContainerStyle'),
                  ...yearContainerStyle
                },
                // Year Item Container Style
                year_label: {
                  ..._utils.styles.yearMonthTextStyleCustom,
                  ...(0, _utils.getThemedColor)(theme, 'yearMonthTextStyle'),
                  ...yearTextStyle
                },
                // Year Item Text Style
                active_year: {
                  ..._utils.styles.activeYearMonthContainerStyleCustom,
                  ...activeYearContainerStyle
                },
                // Active Year Item Container Style
                active_year_label: {
                  ..._utils.styles.activeYearMonthTextStyleCustom,
                  ...activeYearTextStyle
                },
                // Active Year Item Text Style
                selected_year: {
                  ..._utils.styles.selectedYearMonthContainerStyleCustom,
                  ...selectedYearContainerStyle
                },
                // Selected Year Item Container Style
                selected_year_label: {
                  ..._utils.styles.selectedYearMonthTextStyleCustom,
                  ...selectedYearTextStyle
                },
                // Selected Year Item Text Style
                month: {
                  ..._utils.styles.yearMonthContainerStyleCustom,
                  ...(0, _utils.getThemedColor)(theme, 'yearMonthContainerStyle'),
                  ...monthContainerStyle
                },
                // Month Item Container Style
                month_label: {
                  ..._utils.styles.yearMonthTextStyleCustom,
                  ...(0, _utils.getThemedColor)(theme, 'yearMonthTextStyle'),
                  ...monthTextStyle
                },
                // Month Item Text Style
                selected_month: {
                  ..._utils.styles.activeYearMonthContainerStyleCustom,
                  ...selectedMonthContainerStyle
                },
                // Selected Month Item Container Style
                selected_month_label: {
                  ..._utils.styles.activeYearMonthTextStyleCustom,
                  ...selectedMonthTextStyle
                },
                // Selected Month Item Text Style
                header: {
                  ..._utils.styles.headerContainerStyleCustom,
                  ...(0, _utils.getThemedColor)(theme, 'headerContainerStyle'),
                  ...headerContainerStyle
                },
                // Header Container Style
                button_prev: {
                  ..._utils.styles.datePickerModalLeftRightButtonIconOuter,
                  ...(0, _utils.getThemedColor)(theme, 'datePickerModalLeftRightButtonIconOuter'),
                  ...datePickerLeftButtonStyle
                },
                // Left Button Style
                button_next: {
                  ..._utils.styles.datePickerModalLeftRightButtonIconOuter,
                  ...(0, _utils.getThemedColor)(theme, 'datePickerModalLeftRightButtonIconOuter'),
                  ...datePickerRightButtonStyle
                },
                // Right Button Style
                day: {
                  ...datePickerDayContainerStyle
                },
                // Day Button Container Style
                day_label: {
                  ...(0, _utils.getThemedColor)(theme, 'datePickerDayTextStyle'),
                  ...datePickerDayTextStyle
                },
                // Day Button Text Style
                month_selector_label: {
                  ..._utils.styles.yearMonthTimeSelectorTextStyleCustom,
                  ...(0, _utils.getThemedColor)(theme, 'yearMonthTimeSelectorTextStyle'),
                  ...monthSelectorTextStyle
                },
                // Month Selector Button Style
                year_selector_label: {
                  ..._utils.styles.yearMonthTimeSelectorTextStyleCustom,
                  ...(0, _utils.getThemedColor)(theme, 'yearMonthTimeSelectorTextStyle'),
                  ...yearSelectorTextStyle
                },
                // Year Selector Button Style
                time_selector_label: {
                  ..._utils.styles.yearMonthTimeSelectorTextStyleCustom,
                  ...(0, _utils.getThemedColor)(theme, 'yearMonthTimeSelectorTextStyle'),
                  ...timeSelectorTextStyle
                },
                // Time Selector Button Style
                outside_label: {
                  ...(0, _utils.getThemedColor)(theme, 'datePickerOutsideDayTextStyle'),
                  ...datePickerOutsideDayTextStyle
                },
                // Outside Day Button Style
                time_selected_indicator: {
                  ..._utils.styles.timePickerContainerStyleCustom,
                  ...(0, _utils.getThemedColor)(theme, 'timePickerContainerStyle'),
                  ...timePickerIndicatorStyle
                },
                // Time Picker Indicator Style
                range_fill: {
                  ..._utils.styles.datePickerRangeStyleCustom,
                  ...datePickerRangeStyle
                },
                // Range Fill Style
                time_label: {
                  ..._utils.styles.timeTextStyleCustom,
                  ...(0, _utils.getThemedColor)(theme, 'timeTextStyle'),
                  ...timeTextStyle
                },
                // Time Label Style
                ...datePickerStyles
              },
              ...datePickerProps
            }), !hideConfirmButton && /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.Pressable, {
              style: _utils.styles.datePickerConfirmButton,
              onPress: () => closeModal(),
              children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.Text, {
                style: _utils.styles.datePickerConfirmButtonText,
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
  datePlaceholderStyle,
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
  const [inputValue, setInputValue] = (0, _react.useState)('');

  // For Single Date //
  const [date, setDate] = (0, _react.useState)(initialDate ?? undefined);

  // For Date Range //
  const [range, setRange] = (0, _react.useState)({
    startDate: initialRange?.startDate ?? undefined,
    endDate: initialRange?.endDate ?? undefined
  });

  // For Multiple Dates //
  const [dates, setDates] = (0, _react.useState)(initialDates ?? undefined);
  const [showDatePicker, setShowDatePicker] = (0, _react.useState)(false);
  const [showDatePlaceholder, setShowDatePlaceholder] = (0, _react.useState)(false);
  const handleTextChange = text => {
    setInputValue(text);
    onTextChange && onTextChange(text);
  };
  (0, _react.useEffect)(() => {
    if (datePlaceholder) {
      setShowDatePlaceholder(true);
    }
  }, [datePlaceholder]);
  (0, _react.useEffect)(() => {
    if (datePicker && sendDateValue && date) {
      datePickerWithTime ? sendDateValue((0, _dayjs.default)(date).format(dateTimeFormat ?? 'DD-MM-YYYY hh:mm:ss A')) : sendDateValue((0, _dayjs.default)(date).format(dateFormat ?? 'DD-MM-YYYY'));
    }
  }, [date]);
  (0, _react.useEffect)(() => {
    if (datePicker && sendDateRangeValues && range.startDate && range.endDate) {
      sendDateRangeValues((0, _dayjs.default)(range.startDate).format(dateFormat ?? 'DD-MM-YYYY'), (0, _dayjs.default)(range.endDate).format(dateFormat ?? 'DD-MM-YYYY'));
    }
  }, [range]);
  (0, _react.useEffect)(() => {
    if (datePicker && sendDatesValues && dates) {
      sendDatesValues(dates.map(date => (0, _dayjs.default)(date).format(dateFormat ?? 'DD-MM-YYYY')));
    }
  }, [dates]);
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_reactNative.View, {
    style: {
      ..._utils.styles.defaultMainContainerStyle,
      ...mainContainerStyle
    },
    ...mainContainerViewProps,
    children: [datePicker && showDatePicker && /*#__PURE__*/(0, _jsxRuntime.jsx)(DatePickerModal, {
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
    }), !hideLabel && /*#__PURE__*/(0, _jsxRuntime.jsxs)(_reactNative.View, {
      style: {
        ..._utils.styles.defaultLabelTextContainerStyle,
        ...labelTextContainerStyle
      },
      ...labelTextContainerViewProps,
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.Text, {
        style: [_utils.styles.defaultLabelTextStyle, (0, _utils.getThemedColor)(theme, 'labelTextStyle'), labelTextColor ? {
          color: labelTextColor
        } : {}, {
          ...labelTextStyle
        }],
        ...labelTextProps,
        children: labelText ?? 'Input Label'
      }), isRequired && /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.Text, {
        style: [_utils.styles.defaultRequiredTextStyle, requiredTextColor ? {
          color: requiredTextColor
        } : {}, {
          ...requiredTextStyle
        }],
        ...requiredTextProps,
        children: requiredText ?? '*'
      })]
    }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_reactNative.View, {
      style: [_utils.styles.defaultInputContainerStyle, (0, _utils.getThemedColor)(theme, 'inputContainerStyle'), !showCharacterLimit && {
        borderBottomStartRadius: 10,
        borderBottomEndRadius: 10
      }, inputContainerBackgroundColor ? {
        backgroundColor: inputContainerBackgroundColor
      } : {}, error && {
        backgroundColor: _utils.colors.lightError
      }, {
        ...inputContainerStyle
      }],
      ...inputContainerViewProps,
      children: [leftIcon && /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.Pressable, {
        style: {
          ..._utils.styles.defaultLeftIconContainerStyle,
          ...{
            top: showCharacterLimit ? 17 : 'auto'
          },
          ...leftIconContainerStyle
        },
        onPress: datePicker && !disabled ? () => setShowDatePicker(true) : datePicker && disabled ? () => {} : leftIconOnPress ?? (() => {}),
        children: renderLeftIcon ? renderLeftIcon : /*#__PURE__*/(0, _jsxRuntime.jsx)(_icon.default, {
          name: leftIcon,
          iconSource: leftIconSource,
          size: leftIconSize,
          color: leftIconColor ?? _utils.colors.slightlyDarkGrey,
          style: leftIconStyle
        })
      }), rightIcon && /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.Pressable, {
        style: {
          ..._utils.styles.defaultRightIconContainerStyle,
          ...{
            top: showCharacterLimit ? 17 : 'auto'
          },
          ...rightIconContainerStyle
        },
        onPress: rightIconOnPress ?? (() => {}),
        children: renderRightIcon ? renderRightIcon : /*#__PURE__*/(0, _jsxRuntime.jsx)(_icon.default, {
          name: rightIcon,
          iconSource: rightIconSource,
          size: rightIconSize,
          color: rightIconColor ?? _utils.colors.slightlyDarkGrey,
          style: rightIconStyle
        })
      }), datePicker ? /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.View, {
        style: _utils.styles.dateInputWrapperInner,
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.Pressable, {
          style: [_utils.styles.defaultInputStyle, (0, _utils.getThemedColor)(theme, 'inputStyle'), error ? {
            borderColor: _utils.colors.error
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
          children: showDatePlaceholder && datePlaceholder ? /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.Text, {
            style: [inputTextColor ? {
              color: inputTextColor
            } : {
              color: _utils.colors.slightlyDarkGrey
            }, disabled ? {
              color: _utils.colors.lightGrey
            } : {}, {
              ...datePlaceholderStyle
            }],
            children: datePlaceholder
          }) : date ? /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.Text, {
            style: [inputTextColor ? {
              color: inputTextColor
            } : {
              color: _utils.colors.darkGrey
            }, disabled ? {
              color: _utils.colors.lightGrey
            } : {}, {
              ...inputStyle
            }],
            children: datePickerWithTime ? (0, _dayjs.default)(date).format(dateTimeFormat ?? 'DD-MM-YYYY hh:mm:ss A') : (0, _dayjs.default)(date).format(dateFormat ?? 'DD-MM-YYYY')
          }) : range && range.startDate && range.endDate ? /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.Text, {
            style: [inputTextColor ? {
              color: inputTextColor
            } : {
              color: _utils.colors.darkGrey
            }, disabled ? {
              color: _utils.colors.lightGrey
            } : {}, {
              ...inputStyle
            }],
            children: `${(0, _dayjs.default)(range.startDate).format(dateFormat ?? 'DD-MM-YYYY')} - ${(0, _dayjs.default)(range.endDate).format(dateFormat ?? 'DD-MM-YYYY')}`
          }) : dates && dates.length ? /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.View, {
            style: {
              flexDirection: 'row',
              flexWrap: 'wrap',
              justifyContent: 'flex-start',
              alignItems: 'center'
            },
            children: dates.slice(0, 3).map((date, index) => /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.Text, {
              style: [inputTextColor ? {
                color: inputTextColor
              } : {
                color: _utils.colors.darkGrey
              }, disabled ? {
                color: _utils.colors.lightGrey
              } : {}, {
                ...inputStyle
              }],
              children: `${(0, _dayjs.default)(date).format(dateFormat ?? 'DD-MM-YYYY')}${index < dates.length - 1 && index < 2 ? ', ' : index === 2 ? '...' : ''}`
            }, index))
          }) : null
        })
      }) : /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.TextInput, {
        placeholder: placeholderText ?? 'Enter text',
        placeholderTextColor: placeholderTextColor ?? _utils.colors.grey,
        style: [_utils.styles.defaultInputStyle, (0, _utils.getThemedColor)(theme, 'inputStyle'), inputTextColor ? {
          color: inputTextColor
        } : {}, error ? {
          borderColor: _utils.colors.error
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
      }), characterLimit && showCharacterLimit && /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.Text, {
        children: characterLimit ? `${value?.length ?? inputValue?.length}/${characterLimit}` : ''
      })]
    }), errorText && /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.Text, {
      style: {
        ..._utils.styles.defaultErrorTextStyle,
        ...errorTextStyle
      },
      children: errorText
    })]
  });
};
var _default = exports.default = FormInput;
//# sourceMappingURL=formInput.js.map