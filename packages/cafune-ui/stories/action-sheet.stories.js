
  import { storiesOf } from '@storybook/preact';
  import { ActionSheet } from 'components';
  import './style.css';
  import 'style/action-sheet.css';
  import notes from './markdown/action-sheet.md';

  storiesOf('Component|ActionSheet', module).add(
    'ActionSheet',
    () => (),
    {
      notes
    }
  );
    