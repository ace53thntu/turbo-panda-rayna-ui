// import { Hello } from "./Hello";
import { Button } from "@edm/design-system";

export default {
  title: "Example/Hello",
  component: Button,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: "fullscreen",
  },
};

export const Default = {
  args: {
    children: "Hello123 🐼!",
  },
};
