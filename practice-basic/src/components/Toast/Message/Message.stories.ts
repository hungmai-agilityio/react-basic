import { Meta, StoryObj } from '@storybook/react';

// Constants
import { TYPE } from '@/constants';

// Components
import Message from '.';

const meta: Meta<typeof Message> = {
  component: Message
};

export default meta;

type Story = StoryObj<typeof Message>;

export const Success: Story = {
  args: {
    message: 'Message success',
    type: TYPE.SUCCESS
  }
};

export const Error: Story = {
  args: {
    message: 'Message error',
    type: TYPE.ERROR
  }
};
