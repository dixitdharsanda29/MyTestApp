import React from 'react';
import { TextInput } from 'react-native';
import { styles } from './style';
import { commonStyle } from '@constants/theme';
import { useTheme } from '@context/ThemeContext';

const AppTextInput = ({
  value,
  onChangeText,
  placeholder,
  keyboardType,
  maxLength,
  onBlur,
}) => {
  const { colors } = useTheme();

  return (
    <TextInput
      style={[
        commonStyle.inputContainer,
        styles.input,
        {
          backgroundColor: colors.inputBg,
          borderColor: colors.inputBorder,
          color: colors.text,
        },
      ]}
      placeholder={placeholder}
      value={value}
      onChangeText={onChangeText}
      keyboardType={keyboardType}
      maxLength={maxLength}
      onBlur={onBlur}
      placeholderTextColor={colors.subText}
      cursorColor={colors.primary}
      selectionColor={colors.primary}
    />
  );
};

export default React.memo(AppTextInput);
