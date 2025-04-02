"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _FontAwesome = _interopRequireDefault(require("react-native-vector-icons/FontAwesome"));
var _MaterialIcons = _interopRequireDefault(require("react-native-vector-icons/MaterialIcons"));
var _MaterialCommunityIcons = _interopRequireDefault(require("react-native-vector-icons/MaterialCommunityIcons"));
var _Ionicons = _interopRequireDefault(require("react-native-vector-icons/Ionicons"));
var _Octicons = _interopRequireDefault(require("react-native-vector-icons/Octicons"));
var _Zocial = _interopRequireDefault(require("react-native-vector-icons/Zocial"));
var _SimpleLineIcons = _interopRequireDefault(require("react-native-vector-icons/SimpleLineIcons"));
var _Entypo = _interopRequireDefault(require("react-native-vector-icons/Entypo"));
var _EvilIcons = _interopRequireDefault(require("react-native-vector-icons/EvilIcons"));
var _Feather = _interopRequireDefault(require("react-native-vector-icons/Feather"));
var _AntDesign = _interopRequireDefault(require("react-native-vector-icons/AntDesign"));
var _Foundation = _interopRequireDefault(require("react-native-vector-icons/Foundation"));
var _FontAwesome2 = _interopRequireDefault(require("react-native-vector-icons/FontAwesome5"));
var _Fontisto = _interopRequireDefault(require("react-native-vector-icons/Fontisto"));
var _jsxRuntime = require("react/jsx-runtime");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
const Icon = ({
  iconSource = 'font-awesome',
  name = 'rocket',
  size = 30,
  color = '#900',
  style = {}
}) => {
  switch (iconSource) {
    case 'font-awesome':
      return /*#__PURE__*/(0, _jsxRuntime.jsx)(_FontAwesome.default, {
        name: name,
        size: size,
        color: color,
        style: style
      });
    case 'material':
      return /*#__PURE__*/(0, _jsxRuntime.jsx)(_MaterialIcons.default, {
        name: name,
        size: size,
        color: color,
        style: style
      });
    case 'material-community':
      return /*#__PURE__*/(0, _jsxRuntime.jsx)(_MaterialCommunityIcons.default, {
        name: name,
        size: size,
        color: color,
        style: style
      });
    case 'ionicon':
      return /*#__PURE__*/(0, _jsxRuntime.jsx)(_Ionicons.default, {
        name: name,
        size: size,
        color: color,
        style: style
      });
    case 'octicon':
      return /*#__PURE__*/(0, _jsxRuntime.jsx)(_Octicons.default, {
        name: name,
        size: size,
        color: color,
        style: style
      });
    case 'zocial':
      return /*#__PURE__*/(0, _jsxRuntime.jsx)(_Zocial.default, {
        name: name,
        size: size,
        color: color,
        style: style
      });
    case 'simple-line-icon':
      return /*#__PURE__*/(0, _jsxRuntime.jsx)(_SimpleLineIcons.default, {
        name: name,
        size: size,
        color: color,
        style: style
      });
    case 'entypo':
      return /*#__PURE__*/(0, _jsxRuntime.jsx)(_Entypo.default, {
        name: name,
        size: size,
        color: color,
        style: style
      });
    case 'evil':
      return /*#__PURE__*/(0, _jsxRuntime.jsx)(_EvilIcons.default, {
        name: name,
        size: size,
        color: color,
        style: style
      });
    case 'feather':
      return /*#__PURE__*/(0, _jsxRuntime.jsx)(_Feather.default, {
        name: name,
        size: size,
        color: color,
        style: style
      });
    case 'ant-design':
      return /*#__PURE__*/(0, _jsxRuntime.jsx)(_AntDesign.default, {
        name: name,
        size: size,
        color: color,
        style: style
      });
    case 'foundation':
      return /*#__PURE__*/(0, _jsxRuntime.jsx)(_Foundation.default, {
        name: name,
        size: size,
        color: color,
        style: style
      });
    case 'font-awesome5':
      return /*#__PURE__*/(0, _jsxRuntime.jsx)(_FontAwesome2.default, {
        name: name,
        size: size,
        color: color,
        style: style
      });
    case 'fontisto':
      return /*#__PURE__*/(0, _jsxRuntime.jsx)(_Fontisto.default, {
        name: name,
        size: size,
        color: color,
        style: style
      });
    default:
      return /*#__PURE__*/(0, _jsxRuntime.jsx)(_FontAwesome.default, {
        name: name,
        size: size,
        color: color,
        style: style
      });
  }
};
var _default = exports.default = Icon;
//# sourceMappingURL=icon.js.map