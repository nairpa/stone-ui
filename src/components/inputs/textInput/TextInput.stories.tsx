import { ComponentMeta, ComponentStory } from "@storybook/react";
import TextInput from "./TextInput";

export default {
    title: 'Components/Inputs',
    component: TextInput,
    argTypes: {
      disabled: { control: 'boolean' },
      inputSize: { control: 'radio', options: ['sm', 'md'] },
      error: { control: 'string' }
    },
    parameters: {
      docs: {
        description: {
          component: "Text Input component that can be set to error state or disabled state"
        } 
      }
    }
} as ComponentMeta<typeof TextInput>;

const Template: ComponentStory<typeof TextInput> = (args) => <TextInput {...args} />;

export const Default = Template.bind({});

export const Playground = Template.bind({});
Playground.args = {};

export const Error = Template.bind({});
Error.args = {
  error: 'El campo es requerido'
};

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true
};