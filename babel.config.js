module.exports = function (api) {
  api.cache(true);
  return {
    presets: [['babel-preset-expo', { jsxRuntime: 'automatic' }]],
    plugins: [
      // Only add this if you are using Reanimated 4/Worklets
      'react-native-worklets/plugin',
    ],
  };
};
