import React from 'react';
import AppText from '@components/AppText';
import { fonts, sizes } from '@constants/theme';
import { constantStrings } from '@constants/constantStrings';
import Box from '@components/Box';
import { useTheme } from '@context/ThemeContext';

const NoDataFound = ({ loading }) => {
  const { colors } = useTheme();
  
  return (
    <Box flex={1} justifyContent="center" alignItems="center">
      <AppText
        text={
          loading ? constantStrings.FETCHING : constantStrings.NO_DATA_AVAILABLE
        }
        color={colors.subText}
        fontFamily={fonts.medium}
        fontSize={sizes.f16}
      />
    </Box>
  );
};

export default React.memo(NoDataFound);
