import { StyleSheet } from 'react-native';
import { colors } from '@constants/theme';
import { moderateScale } from 'react-native-size-matters';

export const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.white,
    borderRadius: moderateScale(12),
    padding: moderateScale(16),
    gap: moderateScale(8),
  },
  rowItem: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: moderateScale(200),
    borderRadius: moderateScale(12),
    marginTop: moderateScale(15),
  },
});
