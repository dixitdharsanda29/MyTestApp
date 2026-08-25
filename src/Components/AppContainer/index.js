import React from 'react';
import { StatusBar, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { styles } from './style';
import { useTheme } from '@context/ThemeContext';

const AppContainer = ({ children }) => {
  const insets = useSafeAreaInsets();
  const { colors, isDarkMode } = useTheme();

  return (
    <View
      style={[
        styles.safeArea,
        {
          paddingTop: insets.top,
          paddingLeft: insets.left,
          paddingRight: insets.right,
          backgroundColor: colors.surface,
        },
      ]}
    >
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={colors.surface}
      />
      <View style={[styles.container, { backgroundColor: colors.background }]}>
        {children}
      </View>
    </View>
  );
};

export default React.memo(AppContainer);
