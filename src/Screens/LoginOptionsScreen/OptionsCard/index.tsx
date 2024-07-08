import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import style from './style';
import {IconName, IconPrefix} from '@fortawesome/fontawesome-svg-core';

type OptionCardProps = {
  iconName: IconName;
  iconPrefix?: IconPrefix;
  title: string;
  isFunction?: () => void;
};

export default function OptionCard({
  iconName,
  iconPrefix,
  title,
  isFunction,
}: OptionCardProps) {
  return (
    <View style={style.container}>
      <TouchableOpacity style={style.touch} onPress={isFunction}>
        <FontAwesomeIcon
          style={style.icon}
          icon={[iconPrefix ?? 'fas', iconName]}
          size={25}
        />
        <Text style={style.text}>{title}</Text>
      </TouchableOpacity>
    </View>
  );
}
