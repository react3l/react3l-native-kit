const path = require('path');
const pak = require('../package.json');

module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    'macros',
    [
      'module-resolver',
      {
        extensions: ['.tsx', '.ts', '.js', '.json'],
        alias: {
          example: path.resolve(__dirname),
          assets: path.resolve(__dirname, 'assets'),
          src: path.resolve(__dirname, 'src'),
          [pak.name]: path.join(__dirname, '..', pak.source),
        },
      },
    ],
  ],
};
