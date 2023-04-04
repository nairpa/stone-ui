import { ComponentMeta, ComponentStory } from "@storybook/react";
import SearchInput from "./SearchInput";

export default {
    title: 'Components/Inputs/SearchInput',
    component: SearchInput,
    argTypes: {
      disabled: { control: 'boolean' },
      inputSize: { control: 'radio', options: ['sm', 'md'] },
      error: { control: 'string' },
      options: { control: 'object' }
    },
    parameters: {
      docs: {
        description: {
          component: "Search Input component that can be set to error state or disabled state"
        } 
      }
    }
} as ComponentMeta<typeof SearchInput>;

const Template: ComponentStory<typeof SearchInput> = (args) => <SearchInput {...args} />;

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