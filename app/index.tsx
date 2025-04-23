import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import * as SecureStore from 'expo-secure-store';
import Login from './screens/LoginScreen/Login'
import { ClerkProvider, SignedIn, SignedOut } from '@clerk/clerk-expo';
import { NavigationContainer } from '@react-navigation/native';
import TabNavigation from './Navigation/TabNavigation';

const tokenCache = {
  async getToken (key: string) {
    try {
      return SecureStore.getItemAsync(key);
    }catch (err) {
      return null;
    }
  },
  async saveToken (key: string, value: string) {
    try {
      return SecureStore.setItemAsync(key, value);
    }catch (err) {
      return;
    }
  },
};
export default function App() {
  return (
    <ClerkProvider
    tokenCache={tokenCache} 
    publishableKey='pk_test_Y2l2aWwtY2FsZi01NS5jbGVyay5hY2NvdW50cy5kZXYk'>
    <View style={styles.container}>
      {/* Sign In Component */}
      <SignedIn>
        <NavigationContainer>
          <TabNavigation/>
        </NavigationContainer>
      </SignedIn>
      {/* SignedOut */}
      <SignedOut>
        <Login/>
      </SignedOut>
      <StatusBar style="auto" />
    </View>
    </ClerkProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop:20,
  },
});

