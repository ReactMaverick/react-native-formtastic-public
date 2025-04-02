"use strict";

import React from 'react';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicon from 'react-native-vector-icons/Ionicons';
import Octicon from 'react-native-vector-icons/Octicons';
import ZocialIcon from 'react-native-vector-icons/Zocial';
import SimpleLineIcon from 'react-native-vector-icons/SimpleLineIcons';
import EntypoIcon from 'react-native-vector-icons/Entypo';
import EvilIcon from 'react-native-vector-icons/EvilIcons';
import FeatherIcon from 'react-native-vector-icons/Feather';
import AntDesignIcon from 'react-native-vector-icons/AntDesign';
import FoundationIcon from 'react-native-vector-icons/Foundation';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';
import FontistoIcon from 'react-native-vector-icons/Fontisto';
import { jsx as _jsx } from "react/jsx-runtime";
const Icon = ({
  iconSource = 'font-awesome',
  name = 'rocket',
  size = 30,
  color = '#900',
  style = {}
}) => {
  switch (iconSource) {
    case 'font-awesome':
      return /*#__PURE__*/_jsx(FontAwesomeIcon, {
        name: name,
        size: size,
        color: color,
        style: style
      });
    case 'material':
      return /*#__PURE__*/_jsx(MaterialIcon, {
        name: name,
        size: size,
        color: color,
        style: style
      });
    case 'material-community':
      return /*#__PURE__*/_jsx(MaterialCommunityIcon, {
        name: name,
        size: size,
        color: color,
        style: style
      });
    case 'ionicon':
      return /*#__PURE__*/_jsx(Ionicon, {
        name: name,
        size: size,
        color: color,
        style: style
      });
    case 'octicon':
      return /*#__PURE__*/_jsx(Octicon, {
        name: name,
        size: size,
        color: color,
        style: style
      });
    case 'zocial':
      return /*#__PURE__*/_jsx(ZocialIcon, {
        name: name,
        size: size,
        color: color,
        style: style
      });
    case 'simple-line-icon':
      return /*#__PURE__*/_jsx(SimpleLineIcon, {
        name: name,
        size: size,
        color: color,
        style: style
      });
    case 'entypo':
      return /*#__PURE__*/_jsx(EntypoIcon, {
        name: name,
        size: size,
        color: color,
        style: style
      });
    case 'evil':
      return /*#__PURE__*/_jsx(EvilIcon, {
        name: name,
        size: size,
        color: color,
        style: style
      });
    case 'feather':
      return /*#__PURE__*/_jsx(FeatherIcon, {
        name: name,
        size: size,
        color: color,
        style: style
      });
    case 'ant-design':
      return /*#__PURE__*/_jsx(AntDesignIcon, {
        name: name,
        size: size,
        color: color,
        style: style
      });
    case 'foundation':
      return /*#__PURE__*/_jsx(FoundationIcon, {
        name: name,
        size: size,
        color: color,
        style: style
      });
    case 'font-awesome5':
      return /*#__PURE__*/_jsx(FontAwesome5Icon, {
        name: name,
        size: size,
        color: color,
        style: style
      });
    case 'fontisto':
      return /*#__PURE__*/_jsx(FontistoIcon, {
        name: name,
        size: size,
        color: color,
        style: style
      });
    default:
      return /*#__PURE__*/_jsx(FontAwesomeIcon, {
        name: name,
        size: size,
        color: color,
        style: style
      });
  }
};
export default Icon;
//# sourceMappingURL=icon.js.map