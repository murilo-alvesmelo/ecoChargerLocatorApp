import {TextInput, View} from 'react-native';
import React from 'react';
import style from './style';
import {MaskedTextInput} from 'react-native-mask-text';

type InputEcoProps = {
  placeholder?: string;
  value?: string;
  setValue?: (value: string) => void;
  mask?: string;
  secureTextEntry?: boolean;
  autoCapitalize?: 'none' | 'sentences' | 'words' | 'characters' | undefined;
  keyboardType?:
    | 'default'
    | 'number-pad'
    | 'decimal-pad'
    | 'numeric'
    | 'email-address'
    | 'phone-pad';
};

export default function InputEco({
  placeholder,
  value,
  setValue,
  mask,
  secureTextEntry,
  keyboardType,
  autoCapitalize,
}: InputEcoProps) {
  return (
    <View>
      {mask ? (
        <MaskedTextInput
          secureTextEntry={secureTextEntry}
          mask={mask}
          onChangeText={(text, rawText) => setValue && setValue(rawText)}
          keyboardType={keyboardType}
          value={value}
          placeholder={placeholder}
          autoCapitalize={autoCapitalize}
          style={style.input}
        />
      ) : (
        <TextInput
          secureTextEntry={secureTextEntry}
          onChangeText={setValue}
          keyboardType={keyboardType}
          value={value}
          placeholder={placeholder}
          autoCapitalize={autoCapitalize}
          style={style.input}
        />
      )}
    </View>
  );
}
