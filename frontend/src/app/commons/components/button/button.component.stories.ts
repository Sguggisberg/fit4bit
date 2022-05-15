import { storiesOf } from '@storybook/angular';
import { Meta, Story } from '@storybook/angular/types-6-0';
import { ButtonComponent } from './button.component';

export default {
  title: 'Button',
  component: ButtonComponent,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta;

const Template: Story<ButtonComponent> = (args: ButtonComponent) => ({
  props: args,
});

export const Primary = Template.bind({});
Primary.args = {
  name: 'Button',
};

export const Disabled = Template.bind({});
Disabled.args = {
  name: 'Button',
  disabled: true,
};
