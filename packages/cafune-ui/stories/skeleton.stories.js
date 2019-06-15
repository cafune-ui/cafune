
import { storiesOf } from '@storybook/preact';
import { Skeleton } from 'components';
import './style.css';
import notes from './markdown/skeleton.md';

storiesOf('Component|Skeleton', module).add(
  'Skeleton',
  () => (),
  {
    notes
  }
);
    