import React from 'react';
import { Poppins_300Light, Poppins_400Regular, Poppins_500Medium, Poppins_600SemiBold, Poppins_700Bold } from '@expo-google-fonts/poppins';
import { useFonts } from 'expo-font';

// Assuming Navigation is compatible with web, otherwise replace it with a web-compatible navigation
import { Navigation } from './common/navigation';

const App = () => {
  const [fontsLoaded, fontError] = useFonts({
    Poppins_300Light,
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_600SemiBold,
    Poppins_700Bold
  });

  if (!fontsLoaded && !fontError) return null;

  return (
    <div style={{ flex: 1 }}> {/* Replaced SafeAreaView with div */}
      <Navigation />
    </div>
  );
};

export default App;
