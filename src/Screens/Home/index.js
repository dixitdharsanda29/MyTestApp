import React, { useState, useEffect } from 'react';
import { View, ScrollView } from 'react-native';
import DeviceInfo from 'react-native-device-info';
import AppImage from '@components/AppImage';
import AppButton from '@components/AppButton';
import AppDivider from '@components/AppDivider';
import AppContainer from '@components/AppContainer';
import AppHeader from '@components/AppHeader';
import { constantStrings } from '@constants/constantStrings';
import Box from '@components/Box';
import AppText from '@components/AppText';
import { screenPadding, sizes, fonts } from '@constants/theme';
import { styles } from './style';
import { requestPhotoPermission } from '@utils/permissionService';
import { pickImage } from '@utils/mediaService';
import { useTheme } from '@context/ThemeContext';

const DeviceInfoRow = React.memo(({ label, value, colors }) => {
  return (
    <View style={styles.rowItem}>
      <AppText
        text={label}
        fontSize={sizes.f14}
        fontFamily={fonts.regular}
        color={colors.subText}
        flex={1}
      />
      <AppText
        text={value}
        fontSize={sizes.f14}
        fontFamily={fonts.regular}
        color={colors.text}
        flex={2}
        textAlign="right"
      />
    </View>
  );
});

const CardLabel = React.memo(({ label, colors }) => {
  return (
    <AppText
      text={label}
      fontSize={sizes.f18}
      fontFamily={fonts.semi_bold}
      color={colors.text}
      mt={5}
      mb={2.5}
    />
  );
});

const Home = () => {
  const [deviceInfo, setDeviceInfo] = useState(null);
  const [photoUri, setPhotoUri] = useState(null);
  const { colors } = useTheme();

  const getDeviceInfo = async () => {
    try {
      const [os, osVersion, deviceId, model, brand, deviceName, appVersion] =
        await Promise.all([
          DeviceInfo.getSystemName(),
          DeviceInfo.getSystemVersion(),
          DeviceInfo.getDeviceId(),
          DeviceInfo.getModel(),
          DeviceInfo.getBrand(),
          DeviceInfo.getDeviceName(),
          DeviceInfo.getVersion(),
        ]);

      setDeviceInfo({
        os: os,
        osVersion: osVersion,
        deviceId: deviceId,
        model: model,
        brand: brand,
        deviceName: deviceName,
        appVersion: appVersion,
      });
    } catch (error) {
      console.log('Error fetching device info:', error);
    } finally {
    }
  };

  useEffect(() => {
    getDeviceInfo();
  }, []);

  const handleSelectPhoto = async () => {
    try {
      const hasPermission = await requestPhotoPermission();
      if (!hasPermission) return;

      const asset = await pickImage();
      if (!asset) return;

      setPhotoUri(asset?.uri || null);
    } catch (error) {
      console.log('Error handleSelectPhoto:', error);
    }
  };

  return (
    <AppContainer>
      <AppHeader title={constantStrings.HOME} />
      <Box flex={1} px={screenPadding}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View>
            <CardLabel label={constantStrings.DEVICE_INFO} colors={colors} />
            {deviceInfo && (
              <View style={[styles.card, { backgroundColor: colors.card }]}>
                <DeviceInfoRow
                  label={constantStrings.OS}
                  value={deviceInfo?.os || '-'}
                  colors={colors}
                />
                <AppDivider />
                <DeviceInfoRow
                  label={constantStrings.OS_VERSION}
                  value={deviceInfo?.osVersion || '-'}
                  colors={colors}
                />
                <AppDivider />
                <DeviceInfoRow
                  label={constantStrings.DEVICE_ID}
                  value={deviceInfo?.deviceId || '-'}
                  colors={colors}
                />
                <AppDivider />
                <DeviceInfoRow
                  label={constantStrings.DEVICE_MODEL}
                  value={deviceInfo?.model || '-'}
                  colors={colors}
                />
                <AppDivider />
                <DeviceInfoRow
                  label={constantStrings.DEVICE_BRAND}
                  value={deviceInfo?.brand || '-'}
                  colors={colors}
                />
                <AppDivider />
                <DeviceInfoRow
                  label={constantStrings.DEVICE_NAME}
                  value={deviceInfo?.deviceName || '-'}
                  colors={colors}
                />
                <AppDivider />
                <DeviceInfoRow
                  label={constantStrings.APP_VERSION}
                  value={deviceInfo?.appVersion || '-'}
                  colors={colors}
                />
              </View>
            )}
          </View>

          <View>
            <CardLabel label={constantStrings.PHOTOS} colors={colors} />
            <AppButton
              name={constantStrings.SELECT_PHOTO}
              onPress={handleSelectPhoto}
            />
            {photoUri && (
              <AppImage
                source={{ uri: photoUri }}
                style={styles.image}
                resizeMode={'contain'}
              />
            )}
          </View>
        </ScrollView>
      </Box>
    </AppContainer>
  );
};

export default Home;
