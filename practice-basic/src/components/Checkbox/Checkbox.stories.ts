import { Meta, StoryObj } from "@storybook/react"
import Checkbox from "."

const meta: Meta<typeof Checkbox> = {
  component: Checkbox
}

export default meta;

type Story = StoryObj<typeof Checkbox>;

export const Default: Story = {
  args: {
    label: 'Remember me',
    htmlFor: 'remember'
  }
}