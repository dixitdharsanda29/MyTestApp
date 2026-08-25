import { StyleSheet } from 'react-native';
import { colors } from '@constants/theme';
import { moderateScale } from 'react-native-size-matters';

export const styles = StyleSheet.create({
  container: {
    height: moderateScale(56),
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.white,
    borderBottomWidth: 0.75,
    borderBottomColor: colors.border,
  },
  themeIcon: {
    width: moderateScale(50),
    height: moderateScale(50),
    borderRadius: moderateScale(200),
    justifyContent: 'center',
    alignItems: 'center',
  },
});
