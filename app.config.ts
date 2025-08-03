import { type ConfigContext, type ExpoConfig } from "expo/config";

const BUNDLE_MAPPING = {
  development: "com.dannyhw.blogexample-development",
  preview: "com.dannyhw.blogexample-preview",
  production: "com.dannyhw.blogexample",
};

const environment = process.env
  .EXPO_PUBLIC_ENVIRONMENT as keyof typeof BUNDLE_MAPPING;

const bundleId = BUNDLE_MAPPING[environment];

if (!bundleId) {
  throw new Error(`EXPO_PUBLIC_ENVIRONMENT is not set correctly`);
}

export default ({ config }: ConfigContext): ExpoConfig => {
  return {
    name: "blog-example",
    slug: "blog-example",
    version: "1.0.0",
    orientation: "portrait",
    icon: "./assets/images/icon.png",
    scheme: "blogexample",
    userInterfaceStyle: "automatic",
    newArchEnabled: true,
    ios: {
      supportsTablet: true,
      bundleIdentifier: bundleId,
      infoPlist: {
        ITSAppUsesNonExemptEncryption: false,
      },
      appleTeamId: "KUFRY2HT2D",
    },
    android: {
      adaptiveIcon: {
        foregroundImage: "./assets/images/adaptive-icon.png",
        backgroundColor: "#ffffff",
      },
      edgeToEdgeEnabled: true,
    },
    web: {
      bundler: "metro",
      output: "static",
      favicon: "./assets/images/favicon.png",
    },
    plugins: [
      "expo-router",
      [
        "expo-splash-screen",
        {
          image: "./assets/images/splash-icon.png",
          imageWidth: 200,
          resizeMode: "contain",
          backgroundColor: "#ffffff",
        },
      ],
    ],
    experiments: {
      typedRoutes: true,
    },
    extra: {
      router: {},
      eas: {
        projectId: "480eeae0-ebf4-4a54-8afe-cc1066b3ffd7",
      },
    },
    owner: "dannyhw",
    runtimeVersion: {
      policy: "appVersion",
    },
    updates: {
      url: "https://u.expo.dev/480eeae0-ebf4-4a54-8afe-cc1066b3ffd7",
    },
  };
};
