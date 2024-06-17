import { Meta, StoryObj } from '@storybook/react';
import Modal from '.';

const meta: Meta<typeof Modal> = {
  component: Modal
};

export default meta;

type Story = StoryObj<typeof Modal>;

export const Default: Story = {
  args: {
    isOpen: true,
    title: 'Example Modal',
    btnNamePrimary: 'No',
    btnNameSecondary: 'Yes',
    onClickBtnPrimary: () => alert('primary'),
    onClickBtnSecondary: () => alert('secondary'),
    onCloseModal: () => alert('close modal'),
    children: 'Are you want logout'
  }
};
