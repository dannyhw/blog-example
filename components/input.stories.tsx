import { Meta, StoryObj } from "@storybook/react-native";
import { View } from "react-native";
import { fn } from "storybook/test";
import { Input } from "./input";

const meta = {
  component: Input,
  decorators: [
    (Story) => (
      <View style={{ padding: 16 }}>
        <Story />
      </View>
    ),
  ],
  args: {
    // if you open the actions panel you can see the onchange events being logged
    onChangeText: fn(),
  },
} satisfies Meta<typeof Input>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    label: "First Name",
    error: "",
    disabled: false,
    placeholder: "John Smith",
  },
};

export const Error: Story = {
  args: {
    label: "Email",
    error: "Email is required",
    disabled: false,
    placeholder: "example@example.com",
  },
};

export const Disabled: Story = {
  args: {
    label: "Disabled",
    error: "",
    disabled: true,
    placeholder: "Disabled",
  },
};
