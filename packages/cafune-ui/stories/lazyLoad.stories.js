
import { storiesOf } from '@storybook/preact';
import { Lazyload } from 'components';
import './style.css';
import notes from './markdown/lazyload.md';

storiesOf('Component|Lazyload', module).add(
  'Lazyload',
  () => (),
  {
    notes
  }
);
    