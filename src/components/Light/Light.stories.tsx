import type {Meta, StoryObj} from "@storybook/react";

import Light from "./Light";

const meta: Meta<typeof Light> = {
  title: 'Components/Light',
  component: Light,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    variant: {
      control: { type: 'radio'},   //'select'
      options: ['green','yellow','red'],
    }
  }
}

export default meta;
type Story = StoryObj<typeof meta>;

export const Base: Story = {
  args: {
    variant: 'red'
  },
};

export const Yellow: Story = {
  args: {
    variant: 'yellow'
  },
};

export const Red: Story = {
  args: {
    variant: 'red'
  },
};

export const Another: Story = {
  args: {
    variant: 'red'
  },
  render: (args) => <Light {...args} />
};

export const Grouped: Story = {
  render: (args) => <div>
    <div className="flex flex-col bg-stone-300 p-1">
      <Light variant="red" />
      <Light variant="yellow" />
      <Light variant="green" />
    </div>
  </div>
};
