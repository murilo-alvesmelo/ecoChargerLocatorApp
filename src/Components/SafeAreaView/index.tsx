import {SafeAreaView} from 'react-native';
import React from 'react';
import style from './style';

interface SafeAreaProps {
  children: React.ReactNode;
  backgroundColor: string;
}

export default function SafeArea({children, backgroundColor}: SafeAreaProps) {
  return (
    <SafeAreaView style={[style.container, {backgroundColor: backgroundColor}]}>
      {children}
    </SafeAreaView>
  );
}
