import React from 'react';
import AppText from '@components/AppText';
import { fonts, sizes } from '@constants/theme';
import { useTheme } from '@context/ThemeContext';

const AppLabelField = ({ label }) => {
  const { colors } = useTheme();

  if (!label) return null;
  return (
    <AppText
      text={label}
      fontSize={sizes.f14}
      fontFamily={fonts.medium}
      color={colors.text}
      ml={1.5}
      mb={0.5}
    />
  );
};

export default React.memo(AppLabelField);
