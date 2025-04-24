import { View, Text } from 'react-native'
import React from 'react'
import Header  from './Header'
import Slider from './slider'

export default function HomeScreen() {
  return (
    <View>
      {/* Header */}
      <Header/>
      {/* Slider */}
      <Slider/>
    </View>
  )
}