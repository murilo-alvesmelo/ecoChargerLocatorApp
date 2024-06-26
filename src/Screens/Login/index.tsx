import React, {useState} from 'react';
import auth from '@react-native-firebase/auth';
import {View} from 'react-native';
import style from './style';
import InputEco from '../../Components/InputEco';
import ButtonEco from '../../Components/ButtonEco';
import Toast from 'react-native-toast-message';

export default function Login({navigation}: any) {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [loading, setLoading] = useState(false);

  const handleLogin = async () => {
    setLoading(true);
    try {
      await auth()
        .signInWithEmailAndPassword(email, password)
        .then(() => {
          navigation.navigate('Home');
        })
        .catch(error => {
          if (error.code === 'auth/user-not-found') {
            Toast.show({
              type: 'error',
              text1: 'Usuário não encontrado!',
            });
          }
          if (error.code === 'auth/invalid-credential') {
            Toast.show({
              type: 'error',
              text1: 'Senha incorreta!',
            });
          }
        });
    } catch (error) {
      console.error(error);
    }
    setLoading(false);
  };

  return (
    <View style={style.container}>
      <View style={style.viewInputs}>
        <InputEco
          placeholder="Email"
          value={email}
          setValue={setEmail}
          keyboardType="email-address"
          autoCapitalize="none"
        />
        <InputEco
          secureTextEntry
          placeholder="Password"
          value={password}
          setValue={setPassword}
        />
      </View>
      <ButtonEco title="Login" isFunction={handleLogin} loading={loading} />
      <Toast />
    </View>
  );
}
