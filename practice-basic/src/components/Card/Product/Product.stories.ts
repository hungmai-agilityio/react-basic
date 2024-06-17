import { Meta, StoryObj } from "@storybook/react";
import Product from ".";

const meta: Meta<typeof Product> = {
  component: Product
}

export default meta;

type Story = StoryObj<typeof Product>

export const Default: Story = {
  args: {
    author: 'Hung Mai Quang',
    createdAt: '2024-04-24T15:58:05.791Z',
    image: 'https://th.bing.com/th/id/OIG3.5u5ZBGkvLQn1ELp4UqXH',
    title: 'Image design by AI',
    rating: 4
  }
}