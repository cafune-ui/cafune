
  import { storiesOf } from '@storybook/preact';
  import { Switch } from 'components';
  import './style.css';
  import 'style/switch.css';
  import notes from './markdown/switch.md';

  storiesOf('Component|Switch', module).add(
    'Switch',
    () => (),
    {
      notes
    }
  );
    