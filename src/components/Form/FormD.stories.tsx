import type {Meta, StoryObj} from "@storybook/react";

import { within, userEvent, expect } from '@storybook/test';

import FormD from "./FormD";

const meta: Meta<typeof FormD> = {
  title: 'Components/Form-Testing-Demo',
  component: FormD,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
}

export default meta;
type Story = StoryObj<typeof meta>;

export const Base: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    //const submitButton = canvas.getByText('Post question');
    const submitButton = canvas.getByRole('button', { name: /Post/i });
    await expect(submitButton).toBeInTheDocument();
  },
};

export const EmptySubmit: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const submitButton = canvas.getByRole('button', { name: /Post/i });
    await userEvent.click(submitButton);
    await expect(canvas.getByText(/enter your email/i)).toBeInTheDocument();
    await expect(canvas.getByText(/enter a question/i)).toBeInTheDocument();
  },
};

export const InvalidEmail: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const submitButton = canvas.getByRole('button', { name: /Post/i });
    const email = canvas.getByLabelText(/email/i);
    await userEvent.type(email, 'i-am-not-an-email');
    await userEvent.click(submitButton);
    await expect(canvas.getByText(/valid email/i)).toBeInTheDocument();
    await expect(canvas.getByText(/enter a question/i)).toBeInTheDocument();
  },
};

export const ValidInput: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const submitButton = canvas.getByRole('button', { name: /Post/i });
    const email = canvas.getByLabelText(/email/i);
    const question = canvas.getByLabelText(/question/i);

    await userEvent.type(email, 'test@email.com');
    await userEvent.type(question, 'Did you smash the like button and subscribed');

    await userEvent.click(submitButton);

    await expect(canvas.queryByText(/enter your email/i)).not.toBeInTheDocument();
    await expect(canvas.queryByText(/enter a question/i)).not.toBeInTheDocument();
    
    await expect(canvas.getByText(/Thanks for your submission! Now subscribe!/i)).toBeInTheDocument();
  },
};
