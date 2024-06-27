import type { Meta, StoryObj } from '@storybook/react';
import { within, userEvent } from '@storybook/test';
import TextInput from './TextInput';
import { options } from './constants'

const meta = {
  title: 'Components/TextInput',
  component: TextInput,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    size: {
      description: '**options:**',
      table: {
        type: { summary: options.sizes.map(o => `'${o}'`).join('|') }
      },
      control: { type: 'select', options: options.sizes}
    },
    type: {
      description: '**options:**',
      table: {
        type: { summary: options.types.map(o => `'${o}'`).join('|') }
      },
      control: { type: 'select', options: options.types}
    },
  },
} satisfies Meta<typeof TextInput>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    size: 'sm'
  },
};

export const Large: Story = {
  args: {
    size: 'lg',
    value: 'Large text input'
  },
};

export const Placeholder: Story = {
  args: {
    placeholder: 'this is placeholder',
  },
};

export const Email: Story = {
  args: {
    placeholder: 'email@xxx.xom',
    type: 'email'
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const emailInput = await canvas.getByPlaceholderText('email@xxx.xom');
    await userEvent.click(emailInput);
    await userEvent.keyboard('sand@email.com');
  },
};
