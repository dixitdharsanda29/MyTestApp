import React from 'react';
import { Text } from 'react-native';
import { moderateScale } from 'react-native-size-matters';
import { fonts, sizes } from '@constants/theme';
import { useTheme } from '@context/ThemeContext';

const AppText = ({
  text,
  color,
  fontSize = sizes.f14,
  fontFamily = fonts.regular,
  textAlign,
  mt = 0,
  mb = 0,
  ml = 0,
  mr = 0,
  mx = 0,
  my = 0,
  pt = 0,
  pb = 0,
  pl = 0,
  pr = 0,
  px = 0,
  py = 0,
  numberOfLines,
  flex,
  letterSpacing,
  flexShrink,
}) => {
  const { colors } = useTheme();
  
  return (
    <Text
      style={{
        color: color || colors.text,
        fontSize: fontSize,
        fontFamily: fontFamily,
        textAlign: textAlign,
        marginTop: moderateScale(mt * 4),
        marginBottom: moderateScale(mb * 4),
        marginLeft: moderateScale(ml * 4),
        marginRight: moderateScale(mr * 4),
        marginHorizontal: moderateScale(mx * 4),
        marginVertical: moderateScale(my * 4),
        paddingTop: moderateScale(pt * 4),
        paddingBottom: moderateScale(pb * 4),
        paddingLeft: moderateScale(pl * 4),
        paddingRight: moderateScale(pr * 4),
        paddingHorizontal: moderateScale(px * 4),
        paddingVertical: moderateScale(py * 4),
        flex: flex,
        letterSpacing: letterSpacing,
        includeFontPadding: false,
        flexShrink: flexShrink,
      }}
      numberOfLines={numberOfLines}
      allowFontScaling={false}
    >
      {text}
    </Text>
  );
};

export default React.memo(AppText);
