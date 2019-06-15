
import { storiesOf } from '@storybook/preact';
import { Modal } from 'components';
import './style.css';
import notes from './markdown/modal.md';

storiesOf('Component|Modal', module).add(
  'Modal',
  () => (),
  {
    notes
  }
);
    