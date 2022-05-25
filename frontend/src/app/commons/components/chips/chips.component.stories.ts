import { Meta, Story } from '@storybook/angular/types-6-0';
import { ChipsComponent } from './chips.component';
import { MatBadgeModule } from '@angular/material/badge';
import { moduleMetadata } from '@storybook/angular';
import { CloseButtonComponent } from '../close-button/close-button.component';

export default {
  title: 'Chips',
  component: ChipsComponent,
  decorators: [
    moduleMetadata({
      declarations: [],
      imports: [MatBadgeModule, CloseButtonComponent],
    }),
  ],
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta;

const Template: Story<ChipsComponent> = (args: ChipsComponent) => ({
  props: args,
});

export const isActive = Template.bind({});
isActive.args = {
  text: 'Chips',
  isActive: true,
};

export const isActiveWithLength = Template.bind({});
isActiveWithLength.args = {
  text: 'Chips',
  isActive: true,
  length: 5,
};

export const inActiveWithLength = Template.bind({});
inActiveWithLength.args = {
  text: 'Chips',
  isActive: false,
  length: 5,
};
