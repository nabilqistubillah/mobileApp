// app/_layout.tsx
import { ClerkProvider, SignedIn, SignedOut } from '@clerk/clerk-expo';
import { Slot } from 'expo-router';
import * as SecureStore from 'expo-secure-store';
import Login from './screens/LoginScreen/Login';

const tokenCache = {
  async getToken (key: string) {
    try {
      return SecureStore.getItemAsync(key);
    }catch {
      return null;
    }
  },
  async saveToken (key: string, value: string) {
    try {
      return SecureStore.setItemAsync(key, value);
    }catch {
      return;
    }
  },
};

export default function Layout() {
  return (
    <ClerkProvider tokenCache={tokenCache} publishableKey='pk_test_Y2l2aWwtY2FsZi01NS5jbGVyay5hY2NvdW50cy5kZXYk'>
      <SignedIn>
        <Slot /> {/* ini akan render semua halaman seperti index.tsx */}
      </SignedIn>
      <SignedOut>
        <Login />
      </SignedOut>
    </ClerkProvider>
  );
}
