import type {Meta, StoryObj} from "@storybook/react";

import Spinner from "./Spinner";

const meta: Meta<typeof Spinner> = {
  title: 'Components/Spinner-module-styled',
  component: Spinner,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
}

export default meta;

type Story = StoryObj<typeof meta>;

export const Base: Story = {}