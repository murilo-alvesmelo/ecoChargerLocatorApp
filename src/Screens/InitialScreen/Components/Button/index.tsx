import {View, Text} from 'react-native';
import React from 'react';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import style from './style';
import colors from '../../../../utils/colors';

type ButtonInitilScreenProps = {
  handleNavigateToLogin: () => void;
};

export default function ButtonInitialScreen({
  handleNavigateToLogin,
}: ButtonInitilScreenProps) {
  return (
    <TouchableOpacity onPress={handleNavigateToLogin}>
      <View style={style.touch}>
        <Text style={style.titleTouch}>Get Started</Text>
        <FontAwesomeIcon
          icon={['fas', 'arrow-right']}
          size={25}
          style={style.icon}
          color={colors.brancoFundo}
        />
      </View>
    </TouchableOpacity>
  );
}
