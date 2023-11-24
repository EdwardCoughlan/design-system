import type { Meta, StoryObj } from '@storybook/react';
import { TypographyBody as Component } from './typography-body';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<typeof Component> = {
  component: Component,
  title: 'typography/Body',
  render: (props) => <Component {...props} />,
};
export default meta;
type Story = StoryObj<typeof Component>;

export const Primary: Story = {
  args: {
    as: 'p',
    level: 'body-lead',
    children: 'Lead typography component',
  },
};

export const Heading: Story = {
  args: {
    as: 'p',
    level: 'body-lead',
    children: 'Lead typography component',
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/Lead typography component/gi)).toBeTruthy();
  },
};
