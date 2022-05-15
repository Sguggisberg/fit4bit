import { Meta, Story } from '@storybook/angular/types-6-0';
import { BubbleComponent } from './bubble.component';

export default {
  title: 'Bubble',
  component: BubbleComponent,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta;

const Template: Story<BubbleComponent> = (args: BubbleComponent) => ({
  props: args,
  template: '<mat-icon>add</mat-icon>',
});

export const Primary = Template.bind({});
Primary.args = {};
