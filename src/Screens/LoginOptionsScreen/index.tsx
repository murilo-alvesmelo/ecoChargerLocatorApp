import {View, Text} from 'react-native';
import React from 'react';
import style from './style';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import colors from '../../utils/colors';
import {TouchableOpacity} from 'react-native-gesture-handler';
import OptionCard from './OptionsCard';
import SafeArea from '../../Components/SafeAreaView';

type LoginOptionsScreenProps = {
  navigation: any;
};

export default function LoginOptionsScreen({
  navigation,
}: LoginOptionsScreenProps) {
  const navigateToLogin = () => navigation.navigate('Login');
  const navigateToRegister = () => navigation.navigate('Register');

  return (
    <SafeArea backgroundColor={colors.pretoFundo}>
      <View style={style.container}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <FontAwesomeIcon
            style={style.icon}
            icon={['fas', 'arrow-left']}
            size={20}
            color={colors.cinza}
          />
        </TouchableOpacity>
        <OptionCard
          title="Já tenho cadastro"
          iconName="user"
          isFunction={navigateToLogin}
        />
        <OptionCard
          title="Quero me cadastrar"
          iconName="user-plus"
          isFunction={navigateToRegister}
        />
        <Text style={style.textOption}>Escolha uma opção para entrar</Text>
      </View>
    </SafeArea>
  );
}
