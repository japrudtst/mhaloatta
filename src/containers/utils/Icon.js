import React from 'react';
import {View, Text} from 'react-native';
import SvgIcon from 'react-native-svg-icon';
import {G, Path} from 'react-native-svg';
import svgs from './svgs'; // point to your svgs.js wherever that may be

const Icon = props => <SvgIcon {...props} svgs={svgs} />;

export default Icon;
