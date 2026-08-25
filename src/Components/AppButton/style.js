import { StyleSheet } from 'react-native';
import { moderateScale } from 'react-native-size-matters';
import { colors } from '@constants/theme';

export const styles = StyleSheet.create({
  button: {
    height: moderateScale(46),
    borderRadius: moderateScale(12),
    overflow: 'hidden',
    backgroundColor: colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
