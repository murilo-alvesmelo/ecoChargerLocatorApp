import {View} from 'react-native';
import React, {useState} from 'react';
import style from './style';
import InputEco from '../../Components/InputEco';
import ButtonEco from '../../Components/ButtonEco';
import auth from '@react-native-firebase/auth';

export default function CadastroScreen() {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [loading, setLoading] = useState(false);

  const createAccount = async () => {
    setLoading(true);
    try {
      const response = await auth().createUserWithEmailAndPassword(
        email,
        password,
      );
      console.log(response);
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
      <ButtonEco
        title="Cadastrar"
        isFunction={createAccount}
        loading={loading}
      />
    </View>
  );
}
