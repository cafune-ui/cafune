
  import { storiesOf } from '@storybook/preact';
  import { Drawer } from 'components';
  import './style.css';
  import 'style/drawer.css';
  import notes from './markdown/drawer.md';

  storiesOf('Component|Drawer', module).add(
    'Drawer',
    () => (),
    {
      notes
    }
  );
    