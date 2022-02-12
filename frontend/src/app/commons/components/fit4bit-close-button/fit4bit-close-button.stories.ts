import { storiesOf } from '@storybook/angular';
import { Fit4bitCloseButtonComponent } from './fit4bit-close-button.component';

storiesOf('Close button', module).add('Custom title property', () => ({
  component: Fit4bitCloseButtonComponent,
  props: {
    title: 'Storybook'
  },
}));
