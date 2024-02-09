import type { Meta, StoryObj } from "@storybook/react";

import { Button } from "@edm/design-system";

const meta: Meta<typeof Button> = {
  title: "Example/Button",
  component: Button,
  tags: ["autodocs"],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: "fullscreen",
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary = {
  args: {
    children: "Hello123 🐼!",
  },
} satisfies Story;
