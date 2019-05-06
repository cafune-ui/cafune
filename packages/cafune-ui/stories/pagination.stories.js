
import { storiesOf } from '@storybook/preact';
import { Pagination } from 'components';
import './style.css';
import notes from './markdown/pagination.md';

storiesOf('Component|Pagination', module).add(
  'Pagination',
  () => (),
  {
    notes
  }
);
    