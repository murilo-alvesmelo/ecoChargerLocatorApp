import React, {useEffect, useState} from 'react';
import './src/utils/fontawesome';
import auth from '@react-native-firebase/auth';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import PublicStack from './src/Routers/Public';
import PrivateStack from './src/Routers/Private';

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(user => {
      setUser(user);
    });
    return subscriber;
  }, [user]);

  return (
    <GestureHandlerRootView>
      <NavigationContainer>
        {user ? <PrivateStack /> : <PublicStack />}
      </NavigationContainer>
    </GestureHandlerRootView>
  );
}

export default App;
