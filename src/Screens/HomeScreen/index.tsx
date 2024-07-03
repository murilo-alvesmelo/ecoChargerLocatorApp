import {View, Text, TouchableOpacity} from 'react-native';
import React, {useEffect} from 'react';
import auth from '@react-native-firebase/auth';
import Banner from './Components/Banner';
import SafeArea from '../../Components/SafeAreaView';
import colors from '../../utils/colors';

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
    <SafeArea backgroundColor={colors.pretoFundo}>
      <View style={{flex: 1}}>
        <Banner />
        <View style={{flex: 2, backgroundColor: colors.brancoFundo}}>
          <TouchableOpacity onPress={signOut}>
            <Text>Sign Out</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeArea>
  );
}
