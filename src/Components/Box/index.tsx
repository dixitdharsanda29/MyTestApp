import React from 'react';
import { View, ViewProps, ViewStyle } from 'react-native';

type SpacingValue = number;
type AlignItems = 'flex-start' | 'flex-end' | 'center' | 'stretch' | 'baseline';
type AlignSelf =
  | 'auto'
  | 'flex-start'
  | 'flex-end'
  | 'center'
  | 'stretch'
  | 'baseline';
type JustifyContent =
  | 'flex-start'
  | 'flex-end'
  | 'center'
  | 'space-between'
  | 'space-around'
  | 'space-evenly';

interface BoxProps extends Omit<ViewProps, 'style'> {
  children?: React.ReactNode;
  flex?: number;
  alignItems?: AlignItems;
  alignSelf?: AlignSelf;
  justifyContent?: JustifyContent;
  mt?: SpacingValue;
  mr?: SpacingValue;
  mb?: SpacingValue;
  ml?: SpacingValue;
  mx?: SpacingValue;
  my?: SpacingValue;
  pt?: SpacingValue;
  pr?: SpacingValue;
  pb?: SpacingValue;
  pl?: SpacingValue;
  px?: SpacingValue;
  py?: SpacingValue;
  backgroundColor?: string;
  borderRadius?: number;
  borderWidth?: number;
  borderColor?: string;
  style?: ViewStyle | ViewStyle[];
}

const getSpacing = (value: SpacingValue): number => {
  if (typeof value === 'number') return value * 4;
  if (typeof value === 'string') {
    const num = parseFloat(value);
    return isNaN(num) ? 0 : num * 4;
  }
  return 0;
};

const mergeStyles = (
  defaultStyle: ViewStyle,
  customStyle?: ViewStyle | ViewStyle[],
): ViewStyle | ViewStyle[] => {
  if (!customStyle) return defaultStyle;
  if (Array.isArray(customStyle)) {
    return [defaultStyle, ...customStyle];
  }
  return [defaultStyle, customStyle];
};

const Box: React.FC<BoxProps> = ({
  children,
  flex,
  alignItems,
  alignSelf,
  justifyContent,
  mt,
  mr,
  mb,
  ml,
  mx,
  my,
  pt,
  pr,
  pb,
  pl,
  px,
  py,
  backgroundColor,
  borderRadius,
  borderWidth,
  borderColor,
  style,
  ...otherProps
}) => {
  const boxStyle: ViewStyle = {
    ...(flex !== undefined && { flex }),
    ...(alignItems && { alignItems }),
    ...(alignSelf && { alignSelf }),
    ...(justifyContent && { justifyContent }),
    ...(mt !== undefined && { marginTop: getSpacing(mt) }),
    ...(mr !== undefined && { marginRight: getSpacing(mr) }),
    ...(mb !== undefined && { marginBottom: getSpacing(mb) }),
    ...(ml !== undefined && { marginLeft: getSpacing(ml) }),
    ...(mx !== undefined && { marginHorizontal: getSpacing(mx) }),
    ...(my !== undefined && { marginVertical: getSpacing(my) }),
    ...(pt !== undefined && { paddingTop: getSpacing(pt) }),
    ...(pr !== undefined && { paddingRight: getSpacing(pr) }),
    ...(pb !== undefined && { paddingBottom: getSpacing(pb) }),
    ...(pl !== undefined && { paddingLeft: getSpacing(pl) }),
    ...(px !== undefined && { paddingHorizontal: getSpacing(px) }),
    ...(py !== undefined && { paddingVertical: getSpacing(py) }),
    ...(backgroundColor && { backgroundColor }),
    ...(borderRadius !== undefined && { borderRadius }),
    ...(borderWidth !== undefined && { borderWidth }),
    ...(borderColor && { borderColor }),
  };

  return (
    <View style={mergeStyles(boxStyle, style)} {...otherProps}>
      {children}
    </View>
  );
};

export default React.memo(Box);
