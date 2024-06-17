import { Meta, StoryObj } from '@storybook/react';

// Components
import Quote from '@/components/Quote';

const meta: Meta<typeof Quote> = {
  component: Quote
};

export default meta;

type Story = StoryObj<typeof Quote>;

export const Default: Story = {
  args: {}
};
