import { Meta, StoryObj } from "@storybook/react";

// FontAwesome
import { faPen, faXmark } from "@fortawesome/free-solid-svg-icons";

// Components
import ButtonIcon from "@/components/Button/Icon";

// Constants
import { SIZE } from "@/constants";

const meta: Meta<typeof ButtonIcon> = {
  component: ButtonIcon
}

export default meta

type Story = StoryObj<typeof ButtonIcon>;

export const Primary: Story = {
  args: {
    icon: faXmark,
    size: SIZE.LARGE,
    onClick: () => {
      alert('close Modal');
    },
  }
}

export const Secondary: Story = {
  args: {
    icon: faPen,
    circle: true,
    size: SIZE.SMALL,
    onClick: () => {
      alert('Edit');
    },
  }
}

export const IconWithText: Story = {
  args: {
    icon: faPen,
    text: "Edit",
    onClick: () => {
      alert('Edit');
    },
  }
}