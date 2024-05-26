import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import InitialScreen from '../../Screens/InitialScreen';
const Stack = createStackNavigator();

export default function StackRouter() {
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
    </Stack.Navigator>
  );
}
