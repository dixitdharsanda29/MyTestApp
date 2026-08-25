import React, { useState, useMemo } from 'react';
import { View, Pressable, Modal, FlatList } from 'react-native';
import AppText from '@components/AppText';
import {
  fonts,
  sizes,
  commonStyle,
  screenPadding,
} from '@constants/theme';
import { countriesData } from '@constants/defaultData';
import { constantStrings } from '@constants/constantStrings';
import Ionicons from '@react-native-vector-icons/ionicons';
import HStack from '@components/HStack';
import { styles } from './style';
import Box from '@components/Box';
import Space from '@components/Space';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useTheme } from '@context/ThemeContext';

const CountryPickerField = ({ value, onChange }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const insets = useSafeAreaInsets();
  const { colors } = useTheme();

  const selectedCountry = useMemo(() => {
    return countriesData?.find(item => item?.code === value);
  }, [value]);

  return (
    <View>
      <Pressable
        style={[
          commonStyle.inputContainer,
          { backgroundColor: colors.inputBg, borderColor: colors.inputBorder },
        ]}
        onPress={() => setModalVisible(true)}
      >
        <AppText
          text={
            selectedCountry
              ? `${selectedCountry?.flag} ${selectedCountry?.name}`
              : constantStrings.SELECT_COUNTRY
          }
          color={selectedCountry ? colors.text : colors.subText}
          fontSize={sizes.f14}
          fontFamily={fonts.regular}
        />
      </Pressable>
      <Modal
        visible={modalVisible}
        animationType="fade"
        onRequestClose={() => setModalVisible(false)}
        transparent={true}
      >
        <Pressable
          style={styles.modalBackdrop}
          onPress={() => setModalVisible(false)}
        >
          <Pressable
            style={[
              styles.modalContent,
              {
                backgroundColor: colors.surface,
                paddingBottom: insets.bottom || 20,
              },
            ]}
          >
            <Box px={screenPadding}>
              <HStack alignItems="center" pt={5} pb={3}>
                <AppText
                  text={constantStrings.SELECT_COUNTRY}
                  fontSize={sizes.f16}
                  fontFamily={fonts.semi_bold}
                  color={colors.text}
                  flex={1}
                />
                <Pressable
                  onPress={() => setModalVisible(false)}
                  style={[
                    styles.closeIconContainer,
                    { backgroundColor: colors.light_gray },
                  ]}
                >
                  <Ionicons name="close" size={sizes.f20} color={colors.text} />
                </Pressable>
              </HStack>
              <FlatList
                data={countriesData}
                keyExtractor={item => item?.code?.toString()}
                renderItem={({ item }) => {
                  return (
                    <Pressable
                      onPress={() => {
                        onChange(item?.code);
                        setModalVisible(false);
                      }}
                    >
                      <HStack alignItems="center" py={2} space={2}>
                        <AppText text={item?.flag || ''} fontSize={sizes.f20} />
                        <AppText
                          text={item?.name || ''}
                          fontSize={sizes.f16}
                          fontFamily={fonts.medium}
                          color={colors.text}
                        />
                      </HStack>
                    </Pressable>
                  );
                }}
                initialNumToRender={20}
                maxToRenderPerBatch={10}
                windowSize={5}
                showsVerticalScrollIndicator={false}
                ListFooterComponent={<Space value={70} />}
              />
            </Box>
          </Pressable>
        </Pressable>
      </Modal>
    </View>
  );
};

export default React.memo(CountryPickerField);
