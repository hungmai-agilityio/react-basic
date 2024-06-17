import { Meta, StoryObj } from "@storybook/react";
import Greeting from ".";

const meta: Meta<typeof Greeting> = {
  component: Greeting
}

export default meta;

type Story = StoryObj<typeof Greeting>

export const Default: Story = {
  args: {}
};