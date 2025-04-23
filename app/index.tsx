import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import Login from './screens/LoginScreen/Login';
import { ClerkProvider, SignedIn, SignedOut } from '@clerk/clerk-expo';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <ClerkProvider publishableKey='pk_test_Y2l2aWwtY2FsZi01NS5jbGVyay5hY2NvdW50cy5kZXYk'>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Home" component={MainScreen} />
        </Stack.Navigator>
        <StatusBar style="auto" />
      </NavigationContainer>
    </ClerkProvider>
  );
}

// Ini adalah screen utama yang mengatur SignedIn dan SignedOut
function MainScreen() {
  return (
    <View style={styles.container}>
      <SignedIn>
        <Text>You are Signed in</Text>
      </SignedIn>
      <SignedOut>
        <Login />
      </SignedOut>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 20,
  },
});
