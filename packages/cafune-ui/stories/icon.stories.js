
  import { storiesOf } from '@storybook/preact';
  import { Icon } from 'components';
  import './style.css';
  import 'style/icon.css';
  import notes from './markdown/icon.md';

  storiesOf('Component|Icon', module).add(
    'Icon',
    () => (),
    {
      notes
    }
  );
    