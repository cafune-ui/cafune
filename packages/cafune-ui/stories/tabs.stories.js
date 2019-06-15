
import { storiesOf } from '@storybook/preact';
import { Tabs } from 'components';
import './style.css';
import notes from './markdown/tabs.md';

storiesOf('Component|Tabs', module).add(
  'Tabs',
  () => (),
  {
    notes
  }
);
    