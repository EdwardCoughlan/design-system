import type { Meta, StoryObj } from '@storybook/react';
import { TypograhpyHeading as Component } from './typography-heading';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<typeof Component> = {
  component: Component,
  title: 'typography/Heading',
  render: (props) => <Component {...props} />,
};
export default meta;
type Story = StoryObj<typeof Component>;

export const Primary: Story = {
  args: {
    children: 'Heading',
    as: 'h1',
    level: '2xl',
  },
};

export const Heading: Story = {
  args: {
    children: 'Heading',
    as: 'h1',
    level: '2xl',
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/Welcome to Heading!/gi)).toBeTruthy();
  },
};
