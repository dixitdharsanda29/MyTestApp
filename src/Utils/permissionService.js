import { Platform, Alert, Linking } from 'react-native';
import { check, request, PERMISSIONS, RESULTS } from 'react-native-permissions';
import { constantStrings } from '../Constants/constantStrings';

export const requestPhotoPermission = async () => {
  const permission =
    Platform.OS === 'ios'
      ? PERMISSIONS.IOS.PHOTO_LIBRARY
      : Platform.Version >= 33
      ? PERMISSIONS.ANDROID.READ_MEDIA_IMAGES
      : PERMISSIONS.ANDROID.READ_EXTERNAL_STORAGE;

  try {
    let result = await check(permission);

    if (result === RESULTS.DENIED) {
      result = await request(permission);
    }

    if (result === RESULTS.GRANTED || result === RESULTS.LIMITED) {
      return true;
    }

    if (result === RESULTS.BLOCKED) {
      Alert.alert(
        constantStrings.PHOTO_ACCESS_DISABLED_TITLE,
        constantStrings.PHOTO_ACCESS_DISABLED,
        [
          {
            text: constantStrings.CANCEL,
            style: 'cancel',
          },
          {
            text: constantStrings.OPEN_SETTINGS,
            onPress: () => Linking.openSettings(),
          },
        ],
      );
    } else {
      Alert.alert(
        constantStrings.PERMISSION_REQUIRED_TITLE,
        constantStrings.PHOTO_PERMISSION_REQUIRED,
      );
    }

    return false;
  } catch (error) {
    console.log('Error checking photo permission:', error);
    return false;
  }
};
