
  import { storiesOf } from '@storybook/preact';
  import { Calendar } from 'components';
  import './style.css';
  import 'style/calendar.css';
  import notes from './markdown/calendar.md';

  storiesOf('Component|Calendar', module).add(
    'Calendar',
    () => (),
    {
      notes
    }
  );
    