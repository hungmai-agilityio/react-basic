import { Meta, StoryObj } from "@storybook/react";
import UserMenu from ".";

const meta: Meta<typeof UserMenu> = {
  component: UserMenu
}

export default meta;

type Story = StoryObj<typeof UserMenu>

export const Default: Story = {
  args: {
    avatar: '',
    name: 'Hung Mai',
  }
}

export const HasAvatar: Story = {
  args: {
    avatar: '/images/logo.png',
    name: 'Hung Mai'
  }
}