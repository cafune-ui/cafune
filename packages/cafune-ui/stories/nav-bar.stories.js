
  import { storiesOf } from '@storybook/preact';
  import { NavBar } from 'components';
  import './style.css';
  import 'style/nav-bar.css';
  import notes from './markdown/nav-bar.md';

  storiesOf('Component|NavBar', module).add(
    'NavBar',
    () => (),
    {
      notes
    }
  );
    