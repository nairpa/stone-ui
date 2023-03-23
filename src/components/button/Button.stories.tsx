import { ComponentMeta, ComponentStory } from "@storybook/react";
import Button from "./Button";

export default {
    title: 'Components/Button',
    component: Button,
    argTypes: {
      backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
  color: 'default',
  variant: 'filled',
};

export const Primary = Template.bind({});
Primary.args = {
  color: 'primary',
  variant: 'filled',
}

export const Secondary = Template.bind({});
Secondary.args = {
  color: 'secondary',
  variant: 'filled',
}

export const Danger = Template.bind({});
Danger.args = {
  color: 'danger',
  variant: 'filled',
}

export const Disabled = Template.bind({});
Disabled.args = {
  color: 'danger',
  variant: 'filled',
  disabled: true,
}