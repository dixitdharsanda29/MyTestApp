import React from 'react';
import { View } from 'react-native';
import { moderateScale } from 'react-native-size-matters';

const Space = ({ value = 0 }) => {
  return <View style={{ height: moderateScale(value) }} />;
};

export default React.memo(Space);
