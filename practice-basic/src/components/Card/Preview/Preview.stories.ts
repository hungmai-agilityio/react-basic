import { Meta, StoryObj } from "@storybook/react";
import { Preview } from ".";

const meta: Meta<typeof Preview> = {
  component: Preview
}

export default meta;

type Story = StoryObj<typeof Preview>

export const Default: Story = {
  args: {
    image: 'https://th.bing.com/th/id/OIG3.5u5ZBGkvLQn1ELp4UqXH',
    title: 'Image design by AI',
  }
}