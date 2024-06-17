import { Meta, StoryObj } from "@storybook/react";
import Author from ".";

const meta: Meta<typeof Author> = {
  component: Author
}

export default meta;

type Story = StoryObj<typeof Author>

export const Default: Story = {
  args: {
    author: 'Hung Mai',
    title: 'Learning React'
  }
}