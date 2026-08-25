import React, { useEffect } from 'react';
import { View } from 'react-native';
import { styles } from './style';
import AppContainer from '@components/AppContainer';
import { resetStackNavigation } from '@navigators/NavigationServices';
import { routes } from '@constants/routes';
import Ionicons from '@react-native-vector-icons/ionicons';
import { sizes } from '@constants/theme';
import { useTheme } from '@context/ThemeContext';

const SplashScreen = () => {
  const { colors } = useTheme();

  useEffect(() => {
    const timer = setTimeout(() => {
      resetStackNavigation(routes.BOTTOM_TAB_NAVIGATION);
    }, 0);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AppContainer>
      <View style={[styles.container, { backgroundColor: colors.card }]}>
        <Ionicons name="logo-react" size={sizes.f100} color={colors.primary} />
      </View>
    </AppContainer>
  );
};

export default SplashScreen;
