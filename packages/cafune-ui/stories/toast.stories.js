
import { storiesOf } from '@storybook/preact';
import { Toast } from 'components';
import './style.css';
import notes from './markdown/toast.md';

storiesOf('Component|Toast', module).add(
  'Toast',
  () => (),
  {
    notes
  }
);
    