import React, { useState } from 'react';
import { View, Pressable } from 'react-native';
import Ionicons from '@react-native-vector-icons/ionicons';
import AppText from '@components/AppText';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import { fonts, sizes, commonStyle } from '@constants/theme';
import { appDisplayDate } from '@utils/dateUtils';
import HStack from '@components/HStack';
import { useTheme } from '@context/ThemeContext';

const AppDatePicker = ({ value, onChange }) => {
  const [isVisible, setIsVisible] = useState(false);
  const { colors, isDarkMode } = useTheme();

  return (
    <View>
      <Pressable
        style={[
          commonStyle.inputContainer,
          { backgroundColor: colors.inputBg, borderColor: colors.inputBorder },
        ]}
        onPress={() => setIsVisible(true)}
      >
        <HStack alignItems="center" space={2}>
          <AppText
            text={value ? appDisplayDate(value) : 'Select Date'}
            color={value ? colors.text : colors.subText}
            fontSize={sizes.f14}
            fontFamily={fonts.regular}
            flex={1}
          />
          <Ionicons
            name="calendar-outline"
            size={sizes.f20}
            color={colors.subText}
          />
        </HStack>
      </Pressable>
      <DateTimePickerModal
        isVisible={isVisible}
        mode="date"
        themeVariant={isDarkMode ? 'dark' : 'light'}
        isDarkModeEnabled={isDarkMode}
        textColor={colors.text}
        onConfirm={date => {
          setIsVisible(false);
          onChange(date);
        }}
        onCancel={() => setIsVisible(false)}
        date={value ? new Date(value) : new Date()}
        maximumDate={new Date()}
      />
    </View>
  );
};

export default React.memo(AppDatePicker);
