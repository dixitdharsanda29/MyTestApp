import React from 'react';
import AppText from '@components/AppText';
import { fonts, sizes } from '@constants/theme';
import { useTheme } from '@context/ThemeContext';

const AppErrorField = ({ message }) => {
  const { colors } = useTheme();

  if (!message) return null;
  return (
    <AppText
      text={message}
      fontSize={sizes.f12}
      fontFamily={fonts.regular}
      color={colors.red}
      ml={1.5}
      mt={0.5}
    />
  );
};

export default React.memo(AppErrorField);
