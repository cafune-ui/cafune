
import { storiesOf } from '@storybook/preact';
import { TabBar } from 'components';
import './style.css';
import notes from './markdown/tabBar.md';

storiesOf('Component|TabBar', module).add(
  'TabBar',
  () => (),
  {
    notes
  }
);
    