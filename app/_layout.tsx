import { Stack } from "expo-router";

const environment = process.env.EXPO_PUBLIC_ENVIRONMENT ?? "development";

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" />

      <Stack.Protected guard={["preview", "development"].includes(environment)}>
        <Stack.Screen
          name="storybook"
          options={{
            headerShown: false,
          }}
        />
      </Stack.Protected>
    </Stack>
  );
}
