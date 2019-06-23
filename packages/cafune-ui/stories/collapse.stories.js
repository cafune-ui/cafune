
  import { storiesOf } from '@storybook/preact';
  import { Collapse } from 'components';
  import './style.css';
  import 'style/collapse.css';
  import notes from './markdown/collapse.md';

  storiesOf('Component|Collapse', module).add(
    'Collapse',
    () => (),
    {
      notes
    }
  );
    