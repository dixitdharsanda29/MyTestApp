import React from 'react';
import { Pressable } from 'react-native';
import { styles } from './style';
import AppText from '@components/AppText';
import { fonts, sizes } from '@constants/theme';
import { useTheme } from '@context/ThemeContext';

const AppButton = ({ name, onPress }) => {
  const { colors } = useTheme();
  
  return (
    <Pressable style={[styles.button, { backgroundColor: colors.primary }]} onPress={onPress}>
      <AppText
        text={name}
        color={colors.white}
        fontSize={sizes.f16}
        fontFamily={fonts.semi_bold}
        textAlign="center"
      />
    </Pressable>
  );
};

export default AppButton;
