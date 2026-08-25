import React from 'react';
import { View, ViewProps, ViewStyle } from 'react-native';

type SpacingValue = number;
type AlignItems = 'flex-start' | 'flex-end' | 'center' | 'stretch' | 'baseline';
type JustifyContent =
  | 'flex-start'
  | 'flex-end'
  | 'center'
  | 'space-between'
  | 'space-around'
  | 'space-evenly';

interface VStackProps extends Omit<ViewProps, 'style'> {
  children?: React.ReactNode;
  space?: SpacingValue;
  flex?: number;
  alignItems?: AlignItems;
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

const VStack: React.FC<VStackProps> = ({
  children,
  space,
  alignItems = 'stretch',
  justifyContent = 'flex-start',
  flex,
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
  const processedChildren = React.Children.toArray(children).filter(Boolean);

  const stackStyle: ViewStyle = {
    flexDirection: 'column',
    alignItems,
    justifyContent,
    ...(flex !== undefined && { flex }),
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
    ...(borderRadius && { borderRadius }),
    ...(borderWidth !== undefined && { borderWidth }),
    ...(borderColor && { borderColor }),
  };

  if (processedChildren.length === 0) {
    return <View style={mergeStyles(stackStyle, style)} {...otherProps} />;
  }

  const renderChildren = () => {
    return processedChildren.map((child: any, index) => {
      const isLast = index === processedChildren.length - 1;
      const shouldAddSpace = space && !isLast;

      return (
        <React.Fragment key={child.key || index}>
          {child}
          {shouldAddSpace && (
            <View style={{ marginBottom: getSpacing(space) }} />
          )}
        </React.Fragment>
      );
    });
  };

  return (
    <View style={mergeStyles(stackStyle, style)} {...otherProps}>
      {renderChildren()}
    </View>
  );
};

export default React.memo(VStack);
