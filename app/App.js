import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Text } from 'react-native';
import Login from '../app/screens/LoginScreen/Login';
import { ClerkProvider, SignedIn, SignedOut } from '@clerk/clerk-expo';
import { NavigationContainer } from '@react-navigation/native';
import TabNavigation from './Navigation/TabNavigation';
import { useFonts } from 'expo-font';

export default function App() {
  const [fontsLoaded] = useFonts({
    'outfit': require('../assets/fonts/Outfit-Regular.ttf'),
    'outfit-medium': require('../assets/fonts/Outfit-Medium.ttf'),
    'outfit-bold': require('../assets/fonts/Outfit-Bold.ttf'),
  });
  return (
    <ClerkProvider publishableKey='pk_test_Y2l2aWwtY2FsZi01NS5jbGVyay5hY2NvdW50cy5kZXYk'>
    <View style={styles.container}>

      {/* Sign In Component */}
      <SignedIn>
      <NavigationContainer>
        <TabNavigation/>
      </NavigationContainer>
        <Text>You are Signed in</Text>
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
