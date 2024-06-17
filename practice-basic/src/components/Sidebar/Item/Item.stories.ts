import { Meta, StoryObj } from '@storybook/react';
import { withRouter } from 'storybook-addon-react-router-v6';

// Components
import { Item } from '.';

const meta: Meta<typeof Item> = {
  component: Item,
  decorators: [withRouter]
};

export default meta;

type Story = StoryObj<typeof Item>;

export const Default: Story = {
  args: {
    name: 'Home',
    icon: 'src/assets/images/home.svg',
    path: '/'
  }
};
