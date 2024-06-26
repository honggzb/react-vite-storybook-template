import React from 'react'
import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import Card from './Card';
import { options } from './constants'

const styles = {
  display: 'flex',
  flexDirection: 'column',
  minHeight: '400px',
  justifyContent: 'flex-start',
  flexWrap: 'wrap',
  height: '100%',
  width: '100%',
  gap: '10px 30px',
}

const meta = {
  title: 'Components/Card',
  component: Card,
  // decorators: [
  //   (Story) => (
  //     <div style={styles}> <Story /> </div>
  //   )
  // ],
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    color: {
      description: '**options:**',
      table: {
        type: { summary: options.colors.map(o => `'${o}'`).join('|') }
      },
      control: { type: 'select', options: options.colors}
    },
    size: {
      description: '**options:**',
      table: {
        type: { summary: options.sizes.map(o => `'${o}'`).join('|') }
      },
      control: { type: 'select', options: options.sizes}
    },
  },
  args: {
    children: 'I am card by default'
  },
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};

export const Secondary: Story = {
  args: {
    color: 'secondary'
  },
};

export const Big: Story = {
  args: {
    size: 'lg'
  },
};


export const Clickable: Story = {
  args: {
    isClickable: true
  },
};

export const Dragable: Story = {
  args: {
    isDragable: true
  },
};

export const Grouped: Story = {
  render: (args) =>  <div>
      <div className="flex flex-col bg-stone-300 p-1">
        Primary: <Card color="primary" />
        Secondary: <Card color="secondary" />
      </div>
      <br></br>
      <div className="flex flex-col bg-stone-300 p-1">
        Clickable: <Card isClickable={true} />
        Dragable: <Card isDragable={true} />
      </div>
    </div>
};
