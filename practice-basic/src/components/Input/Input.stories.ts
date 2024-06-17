import { Meta, StoryObj } from "@storybook/react";
import { Input } from ".";
import { TYPE } from "@/constants";
import { faEye } from "@fortawesome/free-solid-svg-icons";

const meta: Meta<typeof Input> = {
  component: Input
}

export default meta

type Story = StoryObj<typeof Input>;

export const TypeText: Story = {
  args: {
    label: 'form input',
    name: 'Name',
    htmlFor: 'name',
    value: '',
    placeholder: 'input',
  }
}

export const TypePassword: Story = {
  args: {
    label: 'form input',
    name: 'Name',
    htmlFor: 'name',
    value: '',
    type: TYPE.PASSWORD,
    icon: faEye,
    placeholder: 'input',
  }
}

export const ErrorMessage: Story = {
  args: {
    label: 'form input',
    name: 'Name',
    htmlFor: 'name',
    value: '',
    type: TYPE.PASSWORD,
    icon: faEye,
    placeholder: 'input',
    message: 'This is message error'
  }
}