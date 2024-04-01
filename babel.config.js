/* eslint-disable no-undef */
module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: ['react-native-reanimated/plugin', [
      "expo-build-properties",
      {
        ios: {
          deploymentTarget: "13.0",
        },
      },
    ],]
  };
};

