import {View, Text, Platform} from 'react-native';
import React from 'react';
import ButtonEco from '../../../../Components/ButtonEco';
import style from './style';
import {PERMISSIONS, request, RESULTS} from 'react-native-permissions';

export default function Banner() {
  const requestLocationPermission = async () => {
    let permission;

    if (Platform.OS === 'ios') {
      permission = PERMISSIONS.IOS.LOCATION_ALWAYS;
    } else {
      permission = PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION;
    }

    const result = await request(permission);

    if (result === RESULTS.GRANTED) {
      console.log('Permissão concedida');
    } else {
      console.log('Permissão negada');
    }
  };

  return (
    <View style={style.container}>
      <View style={style.viewMsg}>
        <Text style={style.text}>
          Te guiamos para o seu abastecimento ECO mais proximo
        </Text>
      </View>
      <View style={style.viewButton}>
        <ButtonEco
          isFunction={requestLocationPermission}
          title="Ligar localização"
          styleButton={style.button}
          icon="location"
        />
      </View>
    </View>
  );
}
