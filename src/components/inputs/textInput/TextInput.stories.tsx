import { ComponentMeta, ComponentStory } from "@storybook/react";
import TextInput from "./TextInput";

export default {
    title: 'Components/Inputs',
    component: TextInput,
    argTypes: {
   
    },
    parameters: {
      docs: {
        description: {
          component: "Button component that can take the following states: color, size, variant, disabled, disableShadow."
        } 
      }
    }
} as ComponentMeta<typeof TextInput>;

const Template: ComponentStory<typeof TextInput> = (args) => <TextInput {...args} />;

export const Default = Template.bind({});
Default.args = {
  color: 'default',
};
