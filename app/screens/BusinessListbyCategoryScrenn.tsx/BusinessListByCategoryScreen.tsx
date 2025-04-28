import { View, Text } from 'react-native'
import React from 'react'
import { useRoute } from '@react-navigation/native';

export default function BusinessListByCategoryScreen() {
    const param=useRoute();
  return (
    <View>
      <Text>BusinessListByCategoryScreen</Text>
    </View>
  )
}