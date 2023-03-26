import { ComponentMeta, ComponentStory } from "@storybook/react";
import Button from "./Button";

export default {
    title: 'Components/Button',
    component: Button,
    argTypes: {
      color: { control: 'radio', options: ['default', 'primary', 'secondary', 'danger'] },
      disabled: { control: 'boolean' },
      variant: { control: 'select', options: ['filled', 'outline','text'] },
      size: { control: 'radio', options: ['sm', 'md', 'lg'] },
      disableShadow: { control: 'boolean' }
    },
    parameters: {
      docs: {
        description: {
          component: "Button component that can take the following states: color, size, variant, disabled, disableShadow."
        } 
      }
    }
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
  color: 'default',
  variant: 'filled',
};

export const Filled = Template.bind({});
Filled.args = {
  color: 'primary',
  variant: 'filled',
}

export const Outline = Template.bind({});

Outline.args = {
  color: 'primary',
  variant: 'outline',
  size: 'md',
}

export const Text = Template.bind({});
Text.args = {
  color: 'primary',
  variant: 'text',
}

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
  color: 'primary',
  variant: 'filled'
}