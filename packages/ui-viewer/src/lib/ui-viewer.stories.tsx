import type { Meta, StoryObj } from '@storybook/react';
import { UiViewer } from './ui-viewer';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<typeof UiViewer> = {
  component: UiViewer,
  title: 'UiViewer',
};
export default meta;
type Story = StoryObj<typeof UiViewer>;

export const Primary = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/Welcome to UiViewer!/gi)).toBeTruthy();
  },
};
