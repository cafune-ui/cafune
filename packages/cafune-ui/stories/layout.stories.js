
  import { storiesOf } from '@storybook/preact';
  import { Layout } from 'components';
  import './style.css';
  import 'style/layout.css';
  import notes from './markdown/layout.md';

  storiesOf('Component|Layout', module).add(
    'Layout',
    () => (),
    {
      notes
    }
  );
    