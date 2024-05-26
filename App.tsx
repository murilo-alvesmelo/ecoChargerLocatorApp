import React from 'react';
import './src/utils/fontawesome';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import StackRouter from './src/Routers/Stack';

function App() {
  return (
    <GestureHandlerRootView>
      <NavigationContainer>
        <StackRouter />
      </NavigationContainer>
    </GestureHandlerRootView>
  );
}

export default App;
