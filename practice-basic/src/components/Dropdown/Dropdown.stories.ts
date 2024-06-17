import { Meta, StoryObj } from '@storybook/react';

// Components
import Dropdown from '.';

const meta: Meta<typeof Dropdown> = {
  component: Dropdown
};

export default meta;

type Story = StoryObj<typeof Dropdown>;

export const Default: Story = {
  args: {
    title: 'Item',
    items: ['Item 1', 'Item 2', 'Item 3'],
    onSelect: (item: string) => console.log(item)
  }
};
