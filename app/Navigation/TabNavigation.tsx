import { View, Text } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen/HomeScreen';
import BookingScreen from '../screens/BookingScreen/BookingScreen';
import ProfileScreen from '../screens/ProfileScreen/ProfileScreen';
import { FontAwesome } from '@expo/vector-icons';
import Colors from '../Utils/Colors';

const Tab = createBottomTabNavigator();

export default function TabNavigation() {
  return (
    <Tab.Navigator screenOptions={{
      headerShown: false,
      tabBarActiveTintColor:Colors.PRIMARY
    }}>
        <Tab.Screen name='home' component={HomeScreen}
        options={{
          tabBarLabel: ({color}) =>(
            <Text style={{color:color, fontSize:12, marginTop:-7}}>
              Home</Text>
          ),
          tabBarIcon:({color,size}) =>(
            <FontAwesome name="home" size={size} color={color} />
          )
        }}
        />
        <Tab.Screen name='booking' component={BookingScreen}
        options={{
          tabBarLabel: ({color}) =>(
            <Text style={{color:color, fontSize:12, marginTop:-7}}>
              Booking</Text>
          ),
          tabBarIcon:({color,size}) =>(
            <FontAwesome name="bookmark" size={size} color={color} />
          )
        }}
        />
        <Tab.Screen name='profile' component={ProfileScreen} 
        options={{
          tabBarLabel: ({color}) =>(
            <Text style={{color:color, fontSize:12, marginTop:-7}}>
              Profile</Text>
          ),
          tabBarIcon:({color,size}) =>(
            <FontAwesome name="users" size={size} color={color} />
          )
        }}
        />
    </Tab.Navigator>
  )
}