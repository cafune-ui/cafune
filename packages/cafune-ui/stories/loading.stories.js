
  import { storiesOf } from '@storybook/preact';
  import { Loading } from 'components';
  import './style.css';
  import 'style/loading.css';
  import notes from './markdown/loading.md';

  storiesOf('Component|Loading', module).add(
    'Loading',
    () => (),
    {
      notes
    }
  );
    