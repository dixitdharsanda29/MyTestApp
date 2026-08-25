import React from 'react';
import { Pressable } from 'react-native';
import { styles } from './style';
import AppText from '@components/AppText';
import Ionicons from '@react-native-vector-icons/ionicons';
import { fonts, sizes } from '@constants/theme';
import HStack from '@components/HStack';
import { useTheme } from '@context/ThemeContext';

const AppHeader = ({ title }) => {
  const { colors, isDarkMode, toggleTheme } = useTheme();

  return (
    <HStack
      px={1}
      style={[
        styles.container,
        { backgroundColor: colors.surface, borderBottomColor: colors.border },
      ]}
    >
      <AppText
        text={title}
        fontSize={sizes.f18}
        color={colors.text}
        fontFamily={fonts.semi_bold}
        letterSpacing={0.5}
        flex={1}
        ml={4}
      />
      <Pressable style={styles.themeIcon} onPress={toggleTheme}>
        <Ionicons
          name={isDarkMode ? 'moon' : 'sunny'}
          size={sizes.f24}
          color={colors.text}
        />
      </Pressable>
    </HStack>
  );
};

export default React.memo(AppHeader);
