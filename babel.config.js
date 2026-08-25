module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        alias: {
          '@assets': './src/Assets',
          '@components': './src/Components',
          '@constants': './src/Constants',
          '@context': './src/Context',
          '@navigators': './src/Navigators',
          '@screens': './src/Screens',
          '@utils': './src/Utils',
        },
        extensions: ['.ts', '.tsx', '.js', '.jsx', '.json'],
      },
    ],
  ],
};
