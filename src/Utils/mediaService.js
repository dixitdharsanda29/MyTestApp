import { launchImageLibrary } from 'react-native-image-picker';

export const pickImage = async () => {
  return new Promise((resolve, reject) => {
    launchImageLibrary({ mediaType: 'photo', quality: 1 }, response => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
        resolve(null);
      } else if (response.errorCode) {
        console.log('ImagePicker Error: ', response.errorMessage);
        reject(new Error(response.errorMessage));
      } else if (response.assets && response.assets.length > 0) {
        resolve(response.assets[0]);
      } else {
        resolve(null);
      }
    });
  });
};

export const pickVideo = async () => {
  return new Promise((resolve, reject) => {
    launchImageLibrary({ mediaType: 'video', quality: 1 }, response => {
      if (response.didCancel) {
        console.log('User cancelled video picker');
        resolve(null);
      } else if (response.errorCode) {
        console.log('VideoPicker Error: ', response.errorMessage);
        reject(new Error(response.errorMessage));
      } else if (response.assets && response.assets.length > 0) {
        resolve(response.assets[0]);
      } else {
        resolve(null);
      }
    });
  });
};
