import React from 'react';
import Ion from 'react-native-vector-icons/Ionicons';
import FA5 from 'react-native-vector-icons/FontAwesome5';
import Feather from 'react-native-vector-icons/Feather';

export const Ionicon = ({
  iconName = 'arrow-back-outline',
  size = 20,
  color = '#333',
}) => {
  return <Ion name={iconName} size={size} color={color} />;
};

export const FontAwesome5 = ({
  iconName = 'bars',
  size = 20,
  color = '#333',
}) => {
  return <FA5 name={iconName} size={size} color={color} />;
};

export const FeatherIcon = ({
  iconName = 'bars',
  size = 20,
  color = '#333',
}) => {
  return <Feather name={iconName} size={size} color={color} />;
};
