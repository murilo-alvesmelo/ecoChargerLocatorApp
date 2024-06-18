import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import style from './style';

type ButtonEcoProps = {
  title: string;
  isFunction?: () => void;
};

export default function ButtonEco({title, isFunction}: ButtonEcoProps) {
  return (
    <View style={style.containerButton}>
      <TouchableOpacity onPress={isFunction}>
        <Text style={style.text}>{title}</Text>
      </TouchableOpacity>
    </View>
  );
}
