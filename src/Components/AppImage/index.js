import React from 'react';
import { Image } from 'react-native';
import { styles } from './style';

const AppImage = ({ source, style, resizeMode = 'cover', ...props }) => {
  return (
    <Image 
      source={source} 
      style={[styles.image, style]} 
      resizeMode={resizeMode}
      {...props} 
    />
  );
};

export default AppImage;
