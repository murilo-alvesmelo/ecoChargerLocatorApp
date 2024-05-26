import {View, Text} from 'react-native';
import React from 'react';
import style from './style';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import colors from '../../utils/colors';
import SafeArea from '../../Components/SafeAreaView';
import ButtonInitialScreen from './Components/Button';

type InitialScreenProps = {
  navigation: any;
};

export default function InitialScreen({navigation}: InitialScreenProps) {
  function handleNavigateToLogin() {
    return;
  }

  return (
    <SafeArea backgroundColor={colors.roxo}>
      <View style={style.container}>
        <View style={style.subContainerTop}>
          <View style={style.viewLogo}>
            <Text>Logo</Text>
          </View>
          <View>
            <View style={style.viewTitle}>
              <Text style={style.title}>ECO CHARGER LOCATOR</Text>
              <FontAwesomeIcon
                icon={['fas', 'bolt']}
                size={20}
                style={style.icon}
                color={colors.brancoFundo}
              />
            </View>
          </View>
        </View>
        <View style={style.subContainerBottom}>
          <ButtonInitialScreen handleNavigateToLogin={handleNavigateToLogin} />
        </View>
      </View>
    </SafeArea>
  );
}
