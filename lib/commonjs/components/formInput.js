"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireWildcard(require("react"));
var _reactNative = require("react-native");
var _utils = require("./utils");
var _FontAwesome = _interopRequireDefault(require("react-native-vector-icons/FontAwesome"));
var _reactNativeUiDatepicker = _interopRequireDefault(require("react-native-ui-datepicker"));
var _dayjs = _interopRequireDefault(require("dayjs"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
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
  hideConfirmButton
}) => {
  const [isModalVisible, setIsModalVisible] = (0, _react.useState)(false);
  const [modalPosition] = (0, _react.useState)(new _reactNative.Animated.Value(1)); // 1 is off screen, 0 is on screen

  const [selectedDate, setSelectedDate] = (0, _react.useState)(date);
  const [selectedRange, setSelectedRange] = (0, _react.useState)(range);
  const [selectedDates, setSelectedDates] = (0, _react.useState)(dates);

  // console.log("Selected date ==> ", date, typeof date);

  // console.log("Selected range ==> ", selectedRange);

  // console.log("Selected dates ==> ", selectedDates);

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
    // console.log("Params ==> ", params);

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
    return /*#__PURE__*/_react.default.createElement(_reactNative.View, {
      style: _utils.styles.datePickerModalLeftRightButtonIconOuter
    }, /*#__PURE__*/_react.default.createElement(_FontAwesome.default, {
      name: "angle-left",
      size: 20,
      color: _utils.colors.offWhite
    }));
  };
  const rightButtonIcon = () => {
    return /*#__PURE__*/_react.default.createElement(_reactNative.View, {
      style: _utils.styles.datePickerModalLeftRightButtonIconOuter
    }, /*#__PURE__*/_react.default.createElement(_FontAwesome.default, {
      name: "angle-right",
      size: 20,
      color: _utils.colors.offWhite
    }));
  };
  const openModal = () => {
    setIsModalVisible(true);
    _reactNative.Animated.timing(modalPosition, {
      toValue: 0,
      duration: animationDuration,
      // Custom Animation Duration or 400
      useNativeDriver: true
    }).start();
  };
  const closeModal = () => {
    _reactNative.Animated.timing(modalPosition, {
      toValue: 1,
      duration: animationDuration,
      // Custom Animation Duration or 400
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
  return isModalVisible && /*#__PURE__*/_react.default.createElement(_reactNative.Modal, {
    visible: isModalVisible,
    transparent: true,
    animationType: "none"
  }, /*#__PURE__*/_react.default.createElement(_reactNative.Animated.View, {
    style: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'rgba(0, 0, 0, 0.6)',
      opacity: opacityAnimationOuter
    } // This is the outer container
  }, /*#__PURE__*/_react.default.createElement(_reactNative.Pressable, {
    style: _utils.styles.datePickerModalContainer,
    onPress: () => {
      // console.log("Pressed outside");
      closeModal();
    }
  }, /*#__PURE__*/_react.default.createElement(_reactNative.Animated.View, {
    style: {
      flex: 1,
      transform: [{
        translateY: translateYAnimation
      }, {
        translateX: translateXAnimation
      }, {
        scale: scaleAnimation
      }]
    }
  }, /*#__PURE__*/_react.default.createElement(_reactNative.Pressable, {
    style: [_utils.styles.datePickerModalInner, {
      backgroundColor: datePickerBackgroundColor ?? _utils.colors.offWhite
    }],
    onPress: e => {
      e.stopPropagation();
    }
  }, showDatePickerCloseButton && /*#__PURE__*/_react.default.createElement(_reactNative.Pressable, {
    style: [_utils.styles.datePickerModalCloseButton, {
      backgroundColor: datePickerCloseButtonColor ?? _utils.colors.reddishOrange
    }],
    onPress: () => closeModal()
  }, /*#__PURE__*/_react.default.createElement(_FontAwesome.default, {
    name: "times",
    size: 12,
    color: _utils.colors.offWhite
  })), /*#__PURE__*/_react.default.createElement(_reactNativeUiDatepicker.default, {
    mode: datePickerMode ?? 'single',
    date: selectedDate,
    startDate: selectedRange.startDate,
    endDate: selectedRange.endDate,
    dates: selectedDates,
    timePicker: datePickerWithTime,
    displayFullDays: true // Display Previous and Next Month Days in the Calendar
    ,
    onChange: onChangeDate,
    timePickerContainerStyle: _utils.styles.timePickerContainerStyleCustom,
    weekDaysContainerStyle: _utils.styles.weekDaysContainerStyleCustom,
    weekDaysTextStyle: _utils.styles.weekDaysTextStyleCustom,
    yearContainerStyle: _utils.styles.yearContainerStyleCustom,
    monthContainerStyle: _utils.styles.monthContainerStyleCustom,
    timePickerIndicatorStyle: _utils.styles.timePickerIndicatorStyleCustom,
    buttonPrevIcon: leftButtonIcon(),
    buttonNextIcon: rightButtonIcon(),
    headerContainerStyle: _utils.styles.headerContainerStyleCustom,
    headerTextStyle: _utils.styles.headerTextStyleCustom,
    selectedItemColor: selectedItemColor ?? _utils.colors.lightGreen,
    selectedTextStyle: selectedTextStyle ?? _utils.styles.selectedTextStyleCustom,
    firstDayOfWeek: firstDayOfWeek ?? 1,
    maxDate: disableFutureDates ? new Date() : undefined,
    minDate: disablePastDates ? new Date() : undefined,
    headerTextContainerStyle: headerTextContainerStyle ?? _utils.styles.headerTextContainerStyleCustom
  }), !hideConfirmButton && /*#__PURE__*/_react.default.createElement(_reactNative.Pressable, {
    style: _utils.styles.datePickerConfirmButton,
    onPress: () => closeModal()
  }, /*#__PURE__*/_react.default.createElement(_reactNative.Text, {
    style: _utils.styles.datePickerConfirmButtonText
  }, "Confirm")))))));
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
  const [showAllDates, setShowAllDates] = (0, _react.useState)(false);
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
      // console.log("Date ==> ", date, typeof date);

      // console.log("Date in FormInput ==> ", dayjs(date).format('YYYY-MM-DD '));

      datePickerWithTime ? sendDateValue((0, _dayjs.default)(date).format(dateTimeFormat ?? 'DD-MM-YYYY hh:mm:ss A')) : sendDateValue((0, _dayjs.default)(date).format(dateFormat ?? 'DD-MM-YYYY'));
    }
  }, [date]);
  (0, _react.useEffect)(() => {
    if (datePicker && sendDateRangeValues && range.startDate && range.endDate) {
      // console.log("Range ==> ", range);

      sendDateRangeValues((0, _dayjs.default)(range.startDate).format(dateFormat ?? 'DD-MM-YYYY'), (0, _dayjs.default)(range.endDate).format(dateFormat ?? 'DD-MM-YYYY'));
    }
  }, [range]);
  (0, _react.useEffect)(() => {
    if (datePicker && sendDatesValues && dates) {
      // console.log("Dates ==> ", dates);

      sendDatesValues(dates.map(date => (0, _dayjs.default)(date).format(dateFormat ?? 'DD-MM-YYYY')));
    }
  }, [dates]);

  // console.log('Range ==> ', range);

  // console.log('Dates ==> ', dates);

  return /*#__PURE__*/_react.default.createElement(_reactNative.View, _extends({
    style: mainContainerStyle ?? _utils.styles.defaultMainContainerStyle
  }, mainContainerViewProps), datePicker && showDatePicker && /*#__PURE__*/_react.default.createElement(DatePickerModal, {
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
    hideConfirmButton: hideDatePickerConfirmButton
  }), !hideLabel && /*#__PURE__*/_react.default.createElement(_reactNative.View, _extends({
    style: labelTextContainerStyle ?? _utils.styles.defaultLabelTextContainerStyle
  }, labelTextContainerViewProps), /*#__PURE__*/_react.default.createElement(_reactNative.Text, _extends({
    style: [labelTextStyle ?? _utils.styles.defaultLabelTextStyle, labelTextColor ? {
      color: labelTextColor
    } : {}]
  }, labelTextProps), labelText ? labelText : 'Input Label'), isRequired && /*#__PURE__*/_react.default.createElement(_reactNative.Text, _extends({
    style: [_utils.styles.defaultRequiredTextStyle, requiredTextStyle ? requiredTextStyle : {}, requiredTextColor ? {
      color: requiredTextColor
    } : {}]
  }, requiredTextProps), requiredText ? requiredText : '*')), /*#__PURE__*/_react.default.createElement(_reactNative.View, _extends({
    style: inputContainerStyle ?? [_utils.styles.defaultInputContainerStyle, !showCharacterLimit && {
      borderBottomStartRadius: 10,
      borderBottomEndRadius: 10
    }, inputContainerBackgroundColor ? {
      backgroundColor: inputContainerBackgroundColor
    } : {}, error && {
      backgroundColor: _utils.colors.lightError
    }]
  }, inputContainerViewProps), leftIcon && /*#__PURE__*/_react.default.createElement(_reactNative.Pressable, {
    style: leftIconContainerStyle ?? _utils.styles.defaultLeftIconContainerStyle,
    onPress: datePicker && !disabled ? () => setShowDatePicker(true) : datePicker && disabled ? () => {} : leftIconOnPress ?? (() => {})
  }, renderLeftIcon ? renderLeftIcon({
    children: leftIcon,
    style: leftIconStyle
  }) : /*#__PURE__*/_react.default.createElement(_FontAwesome.default, {
    name: leftIcon,
    size: 20,
    color: error ? _utils.colors.error : leftIconColor ?? _utils.colors.grey
  })), rightIcon && /*#__PURE__*/_react.default.createElement(_reactNative.Pressable, {
    style: rightIconContainerStyle ?? _utils.styles.defaultRightIconContainerStyle,
    onPress: rightIconOnPress ?? (() => {})
  }, renderRightIcon ? renderRightIcon({
    children: leftIcon,
    style: rightIconStyle
  }) : /*#__PURE__*/_react.default.createElement(_FontAwesome.default, {
    name: rightIcon,
    size: 20,
    color: error ? _utils.colors.error : rightIconColor ?? _utils.colors.grey
  })), datePicker ? /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: _utils.styles.dateInputWrapperInner
  }, /*#__PURE__*/_react.default.createElement(_reactNative.Pressable, {
    style: [inputStyle ?? _utils.styles.defaultInputStyle, inputStyle ?? {
      justifyContent: 'center',
      height: 50
    }, error ? {
      borderColor: _utils.colors.error
    } : {}, leftIcon ? {
      paddingLeft: 40
    } : {}, rightIcon ? {
      paddingRight: 40
    } : {}],
    onPress: () => {
      if (disabled) return;
      setShowDatePicker(true);
    }
  }, showDatePlaceholder && datePlaceholder ? /*#__PURE__*/_react.default.createElement(_reactNative.Text, {
    style: [inputTextColor ? {
      color: inputTextColor
    } : {}, disabled ? {
      color: _utils.colors.lightGrey
    } : {}]
  }, datePlaceholder) : date ? /*#__PURE__*/_react.default.createElement(_reactNative.Text, {
    style: [inputTextColor ? {
      color: inputTextColor
    } : {}, disabled ? {
      color: _utils.colors.lightGrey
    } : {}]
  }, datePickerWithTime ? (0, _dayjs.default)(date).format(dateTimeFormat ?? 'DD-MM-YYYY hh:mm:ss A') : (0, _dayjs.default)(date).format(dateFormat ?? 'DD-MM-YYYY')) : range && range.startDate && range.endDate ? /*#__PURE__*/_react.default.createElement(_reactNative.Text, {
    style: [inputTextColor ? {
      color: inputTextColor
    } : {}, disabled ? {
      color: _utils.colors.lightGrey
    } : {}]
  }, `${(0, _dayjs.default)(range.startDate).format(dateFormat ?? 'DD-MM-YYYY')} - ${(0, _dayjs.default)(range.endDate).format(dateFormat ?? 'DD-MM-YYYY')}`) : dates && dates.length ? /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'flex-start',
      alignItems: 'center'
    }
  }, dates.slice(0, 3).map((date, index) => /*#__PURE__*/_react.default.createElement(_reactNative.Text, {
    key: index,
    style: [inputTextColor ? {
      color: inputTextColor
    } : {}, disabled ? {
      color: _utils.colors.lightGrey
    } : {}]
  }, `${(0, _dayjs.default)(date).format(dateFormat ?? 'DD-MM-YYYY')}${index < dates.length - 1 && index < 2 ? ', ' : index === 2 ? '...' : ''}`))) : null)) : /*#__PURE__*/_react.default.createElement(_reactNative.TextInput, _extends({
    placeholder: placeholderText ?? 'Enter text',
    placeholderTextColor: placeholderTextColor ?? _utils.colors.grey,
    style: [inputStyle ?? _utils.styles.defaultInputStyle, inputTextColor ? {
      color: inputTextColor
    } : {}, error ? {
      borderColor: _utils.colors.error
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
    editable: !disabled
  }, textInputProps)), characterLimit && showCharacterLimit && /*#__PURE__*/_react.default.createElement(_reactNative.Text, null, characterLimit ? `${value?.length ?? inputValue?.length}/${characterLimit}` : '')), errorText && /*#__PURE__*/_react.default.createElement(_reactNative.Text, {
    style: errorTextStyle ?? _utils.styles.defaultErrorTextStyle
  }, '* ', errorText));
};
var _default = exports.default = FormInput;
//# sourceMappingURL=formInput.js.map