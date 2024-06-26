import {View, Text, TouchableOpacity} from 'react-native';
import React, {useEffect} from 'react';
import auth from '@react-native-firebase/auth';

export default function HomeScreen() {
  const signOut = () => {
    auth().signOut();
  };
  useEffect(() => {
    auth().onAuthStateChanged(async user => {
      console.log(user);
    });
  }, []);
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>HomeScreen</Text>
      <TouchableOpacity onPress={signOut}>
        <Text>Sign Out</Text>
      </TouchableOpacity>
    </View>
  );
}
