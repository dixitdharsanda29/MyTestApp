import React from 'react';
import AppText from '@components/AppText';
import { colors, fonts, sizes } from '@constants/theme';

const AppInputLabel = ({ label }) => {
  if (!label) return null;
  return (
    <AppText
      text={label}
      fontSize={sizes.f14}
      fontFamily={fonts.medium}
      color={colors.black}
      mb={4}
    />
  );
};

export default React.memo(AppInputLabel);
