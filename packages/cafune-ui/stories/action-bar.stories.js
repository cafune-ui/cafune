
  import { storiesOf } from '@storybook/preact';
  import { ActionBar } from 'components';
  import './style.css';
  import 'style/action-bar.css';
  import notes from './markdown/action-bar.md';

  storiesOf('Component|ActionBar', module).add(
    'ActionBar',
    () => (),
    {
      notes
    }
  );
    