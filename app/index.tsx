import { View, Text } from 'react-native';
import React from 'react';

export default function Home() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontFamily: 'outfit-bold', fontSize: 24 }}>Welcome to the App!</Text>
    </View>
  );
}