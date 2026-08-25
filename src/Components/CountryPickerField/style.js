import { StyleSheet } from 'react-native';
import { colors } from '@constants/theme';
import { moderateScale } from 'react-native-size-matters';

export const styles = StyleSheet.create({
  modalBackdrop: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  modalContent: {
    maxHeight: '90%',
    backgroundColor: colors.white,
    borderTopLeftRadius: moderateScale(16),
    borderTopRightRadius: moderateScale(16),
  },
  closeIconContainer: {
    width: moderateScale(28),
    height: moderateScale(28),
    borderRadius: moderateScale(100),
    backgroundColor: colors.light_gray,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
