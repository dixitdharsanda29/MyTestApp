import { StyleSheet } from 'react-native';
import { moderateScale } from 'react-native-size-matters';

export const lightColors = {
  primary: '#007AFF',
  secondary: '#5856D6',
  background: '#F5F5F5',
  surface: '#FFFFFF',
  white: '#FFFFFF',
  black: '#000000',
  gray: '#8E8E93',
  light_gray: '#F2F2F7',
  dark_gray: '#1C1C1E',
  red: '#FF3B30',
  border: '#E5E5EA',
  text: '#000000',
  subText: '#8E8E93',
  card: '#FFFFFF',
  inputBg: '#FFFFFF',
  inputBorder: '#E5E5EA',
};

export const darkColors = {
  primary: '#0A84FF',
  secondary: '#5E5CE6',
  background: '#000000',
  surface: '#1C1C1E',
  white: '#FFFFFF',
  black: '#000000',
  gray: '#8E8E93',
  light_gray: '#2C2C2E',
  dark_gray: '#1C1C1E',
  red: '#FF453A',
  border: '#38383A',
  text: '#FFFFFF',
  subText: '#98989D',
  card: '#1C1C1E',
  inputBg: '#1C1C1E',
  inputBorder: '#38383A',
};

export const colors = lightColors;

export const sizes = {
  f7: moderateScale(7),
  f8: moderateScale(8),
  f9: moderateScale(9),
  f10: moderateScale(10),
  f11: moderateScale(11),
  f12: moderateScale(12),
  f13: moderateScale(13),
  f14: moderateScale(14),
  f15: moderateScale(15),
  f16: moderateScale(16),
  f17: moderateScale(17),
  f18: moderateScale(18),
  f19: moderateScale(19),
  f20: moderateScale(20),
  f21: moderateScale(21),
  f22: moderateScale(22),
  f23: moderateScale(23),
  f24: moderateScale(24),
  f25: moderateScale(25),
  f26: moderateScale(26),
  f27: moderateScale(27),
  f28: moderateScale(28),
  f29: moderateScale(29),
  f30: moderateScale(30),
  f50: moderateScale(50),
  f100: moderateScale(100),
};

export const fonts = {
  regular: 'Inter_28pt-Regular',
  medium: 'Inter_28pt-Medium',
  semi_bold: 'Inter_28pt-SemiBold',
  bold: 'Inter_28pt-Bold',
  extra_bold: 'Inter_28pt-ExtraBold',
};

export const screenPadding = 5;

export const commonStyle = StyleSheet.create({
  inputContainer: {
    height: moderateScale(48),
    borderWidth: 1,
    borderColor: colors.light_gray,
    borderRadius: moderateScale(8),
    paddingHorizontal: moderateScale(12),
    backgroundColor: colors.white,
    justifyContent: 'center',
  },
});
