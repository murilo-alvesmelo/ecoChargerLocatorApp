import {KeyboardAvoidingView, View} from 'react-native';
import React, {useState} from 'react';
import style from './style';
import InputEco from '../../Components/InputEco';
import ButtonEco from '../../Components/ButtonEco';
import auth from '@react-native-firebase/auth';
import Toast from 'react-native-toast-message';

export default function CadastroScreen() {
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [confirmPassword, setConfirmPassword] = useState<string>('');
  const [loading, setLoading] = useState(false);

  const validateFields = () => {
    if (name === '') {
      Toast.show({
        type: 'error',
        text1: 'Precisamos do seu nome!',
      });
      return false;
    }
    if (email === '') {
      Toast.show({
        type: 'error',
        text1: 'Precisamos do seu email!',
      });
      return false;
    }
    if (password === '') {
      Toast.show({
        type: 'error',
        text1: 'Precisamos de uma senha!',
      });
      return false;
    }
    if (confirmPassword === '') {
      Toast.show({
        type: 'error',
        text1: 'Digite a senha novamente!',
      });
      return false;
    }
    if (password.length < 6) {
      Toast.show({
        type: 'error',
        text1: 'Senha precisa ter no mínimo 6 caracteres!',
      });
      return false;
    }
    if (password !== confirmPassword) {
      Toast.show({
        type: 'error',
        text1: 'Senhas não coincidem!',
      });
      return false;
    }
    return true;
  };

  const createAccount = async () => {
    setLoading(true);
    validateFields();
    try {
      const response = await auth().createUserWithEmailAndPassword(
        email,
        password,
      );
      await response.user?.updateProfile({
        displayName: name,
      });
      Toast.show({
        type: 'success',
        text1: 'Conta criada com sucesso!',
      });
    } catch (error) {
      console.error(error);
    }
    setLoading(false);
  };

  return (
    <KeyboardAvoidingView style={style.container} behavior="padding">
      <View style={style.container}>
        <View style={style.viewInputs}>
          <InputEco
            placeholder="Name"
            value={name}
            setValue={setName}
            autoCapitalize="words"
          />
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
          <InputEco
            secureTextEntry
            placeholder="Confirm Password"
            value={confirmPassword}
            setValue={setConfirmPassword}
          />
        </View>
        <ButtonEco
          title="Cadastrar"
          isFunction={createAccount}
          loading={loading}
        />
      </View>
      <Toast />
    </KeyboardAvoidingView>
  );
}
