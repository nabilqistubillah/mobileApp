import { ClerkProvider, SignedIn, SignedOut } from '@clerk/clerk-expo';
import { Stack } from "expo-router";
import { NavigationContainer } from '@react-navigation/native';
import TabNavigation from './Navigation/TabNavigation';
import Login from './screens/LoginScreen/Login';
import { useFonts } from 'expo-font';
import { View, ActivityIndicator } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

export default function RootLayout() {
  const [fontsLoaded] = useFonts({
    'outfit-Regular': require('../assets/fonts/Outfit-Regular.ttf'),
    'outfit-Medium': require('../assets/fonts/Outfit-Medium.ttf'),
    'outfit-Bold': require('../assets/fonts/Outfit-Bold.ttf'),
  });

  if (!fontsLoaded) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
    <ClerkProvider publishableKey="pk_test_Y2l2aWwtY2FsZi01NS5jbGVyay5hY2NvdW50cy5kZXYk">
      <SignedIn>
          <TabNavigation />
      </SignedIn>
      <SignedOut>
        <Login />
      </SignedOut>
    </ClerkProvider>
    </GestureHandlerRootView>
  );
}
