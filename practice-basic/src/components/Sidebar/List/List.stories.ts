import { Meta, StoryObj } from '@storybook/react';
import { withRouter } from 'storybook-addon-react-router-v6';

// Components
import List from '.';

// Constants
import { LIST_ITEM } from '@/constants';

const meta: Meta<typeof List> = {
  component: List,
  decorators: [withRouter]
};

export default meta;

type Story = StoryObj<typeof List>;

export const Default: Story = {
  args: {
    items: LIST_ITEM
  }
};
