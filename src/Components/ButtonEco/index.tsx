import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import style from './style';

type ButtonEcoProps = {
  loading?: boolean;
  title: string;
  isFunction?: () => void;
};

export default function ButtonEco({
  loading,
  title,
  isFunction,
}: ButtonEcoProps) {
  return (
    <View style={style.containerButton}>
      {!loading ? (
        <TouchableOpacity onPress={isFunction} style={style.touch}>
          <Text style={style.text}>{title}</Text>
        </TouchableOpacity>
      ) : (
        <></>
      )}
    </View>
  );
}
