import {View, Text, TouchableOpacity, ViewStyle} from 'react-native';
import React from 'react';
import style from './style';
import {IconName} from '@fortawesome/fontawesome-svg-core';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';

type ButtonEcoProps = {
  styleButton?: ViewStyle;
  icon?: IconName;
  loading?: boolean;
  title: string;
  isFunction?: () => void;
};

export default function ButtonEco({
  styleButton,
  icon,
  loading,
  title,
  isFunction,
}: ButtonEcoProps) {
  return (
    <View style={[styleButton, style.containerButton]}>
      {!loading ? (
        <TouchableOpacity onPress={isFunction} style={style.touch}>
          {icon && <FontAwesomeIcon icon={['fas', icon]} style={style.icon} />}
          <Text style={style.text}>{title}</Text>
        </TouchableOpacity>
      ) : (
        <></>
      )}
    </View>
  );
}
