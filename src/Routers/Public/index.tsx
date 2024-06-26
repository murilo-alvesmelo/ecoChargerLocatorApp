import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import InitialScreen from '../../Screens/InitialScreen';
import LoginOptionsScreen from '../../Screens/LoginOptionsScreen';
import Login from '../../Screens/Login';
import CadastroScreen from '../../Screens/CadastroScreen';

const Stack = createStackNavigator();

export default function PublicStack() {
  return (
    <Stack.Navigator
      initialRouteName="InitialScreen"
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen
        name="InitialScreen"
        component={InitialScreen}
        options={{title: 'InitialScreen'}}
      />
      <Stack.Screen
        name="LoginOptionsScreen"
        component={LoginOptionsScreen}
        options={{title: 'LoginOptionsScreen'}}
      />
      <Stack.Screen name="Login" component={Login} options={{title: 'Login'}} />
      <Stack.Screen
        name="Register"
        component={CadastroScreen}
        options={{title: 'Register'}}
      />
    </Stack.Navigator>
  );
}
