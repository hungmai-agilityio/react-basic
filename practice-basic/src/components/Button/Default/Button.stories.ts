import { Meta, StoryObj } from "@storybook/react";

// Components
import Button from "@/components/Button/Default";

// Contants
import { SIZE, TYPE } from "@/constants";

const meta: Meta<typeof Button> = {
  component: Button
}

export default meta

type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    name: "Submit",
    size: SIZE.MEDIUM,
    type: TYPE.PRIMARY,
    onClick: () => alert('submit primary button'),
  }
}

export const Secondary: Story = {
  args: {
    name: "Submit",
    size: SIZE.MEDIUM,
    type: TYPE.SECOND,
    onClick: () => alert('submit secondary button'),
  }
}

export const ButtonLarge: Story = {
  args: {
    name: "Submit",
    size: SIZE.LARGE,
    type: TYPE.PRIMARY,
    onClick: () => alert('submit secondary button'),
  }
}

export const ButtonDisabled: Story = {
  args: {
    name: "Submit",
    size: SIZE.MEDIUM,
    type: TYPE.PRIMARY,
    disabled: true,
    onClick: () => alert('Can not submit'),
  }
}