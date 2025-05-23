import { View, Text } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import HomeScreen from '../screens/HomeScreen/HomeScreen';
import BusinessListByCategoryScreen from '../screens/BusinessListbyCategoryScrenn.tsx/BusinessListByCategoryScreen';

const Stack = createStackNavigator();
export default function HomeNavigation() {
  return (
    <Stack.Navigator screenOptions={{
        headerShown: false
    }}>
        <Stack.Screen name='home' component={HomeScreen}/>
        <Stack.Screen name='business-list'
        component={BusinessListByCategoryScreen}/>
    </Stack.Navigator>
  )
}