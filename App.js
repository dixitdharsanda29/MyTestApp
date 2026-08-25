import React, { useEffect } from 'react';
import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
} from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { navigationRef } from './src/Navigators/NavigationServices';
import StackNavigator from './src/Navigators/StackNavigator';
import { ThemeProvider, useTheme } from './src/Context/ThemeContext';
import SystemNavigationBar from 'react-native-system-navigation-bar';

const AppContent = () => {
  const { colors, isDarkMode } = useTheme();

  const navigationTheme = {
    ...(isDarkMode ? DarkTheme : DefaultTheme),
    colors: {
      ...(isDarkMode ? DarkTheme.colors : DefaultTheme.colors),
      background: colors.background,
      card: colors.card,
      text: colors.text,
      border: colors.border,
    },
  };

  useEffect(() => {
    try {
      SystemNavigationBar.setNavigationColor(
        colors.card,
        isDarkMode ? 'light' : 'dark',
      );
    } catch (e) {
      console.log('Error SystemNavigationBar :::', e);
    }
  }, [isDarkMode, colors.card]);

  return (
    <SafeAreaProvider style={{ flex: 1, backgroundColor: colors.card }}>
      <NavigationContainer ref={navigationRef} theme={navigationTheme}>
        <StackNavigator />
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

const App = () => {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
};

export default App;
