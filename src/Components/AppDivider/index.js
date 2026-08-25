import React from 'react';
import { View } from 'react-native';
import { styles } from './style';
import { moderateScale } from 'react-native-size-matters';

const AppDivider = ({ mt = 0, mb = 0 }) => {
  return (
    <View
      style={[
        styles.divider,
        {
          marginTop: moderateScale(mt * 4),
          marginBottom: moderateScale(mb * 4),
        },
      ]}
    />
  );
};

export default React.memo(AppDivider);
