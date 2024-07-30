import {View, Text} from 'react-native';
import React from 'react';
import ButtonEco from '../../../../Components/ButtonEco';
import style from './style';
import Animated, {FadeOutUp} from 'react-native-reanimated';

type BannerProps = {
  askPermission: () => void;
};

export default function Banner({askPermission}: BannerProps) {
  return (
    <Animated.View style={style.container} exiting={FadeOutUp.delay(1000)}>
      <View style={style.viewMsg}>
        <Text style={style.text}>
          Te guiamos para o seu abastecimento ECO mais proximo
        </Text>
      </View>
      <View style={style.viewButton}>
        <ButtonEco
          isFunction={askPermission}
          title="Ligar localização"
          styleButton={style.button}
          icon="location"
        />
      </View>
    </Animated.View>
  );
}
