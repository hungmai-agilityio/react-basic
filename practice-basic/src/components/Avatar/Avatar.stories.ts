import { Meta, StoryObj } from '@storybook/react';

// Components
import Avatar from '@/components/Avatar';

// Constants
import { SIZE } from '@/constants';

const meta: Meta<typeof Avatar> = {
  component: Avatar
};

export default meta;

type Story = StoryObj<typeof Avatar>;

export const HasAvatar: Story = {
  args: {
    avatar:
      'https://png.pngtree.com/png-vector/20220807/ourmid/pngtree-man-avatar-wearing-gray-suit-png-image_6102786.png',
    size: SIZE.MEDIUM,
    name: 'test'
  }
};

export const NoAvatar: Story = {
  args: {
    size: SIZE.LARGE,
    name: 'test'
  }
};
