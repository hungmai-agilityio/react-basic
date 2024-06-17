import { Meta, StoryObj } from "@storybook/react";
import Label from ".";

const meta: Meta<typeof Label> = {
  component: Label
};

export default meta;

type Story = StoryObj<typeof Label>;

export const Borrowed: Story = {
  args: {
    isBorrow: true
  }
};

export const None: Story = {
  args: {
    isBorrow: false
  }
}