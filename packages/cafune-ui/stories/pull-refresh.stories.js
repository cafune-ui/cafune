
  import { storiesOf } from '@storybook/preact';
  import { PullRefresh } from 'components';
  import './style.css';
  import 'style/pull-refresh.css';
  import notes from './markdown/pull-refresh.md';

  storiesOf('Component|PullRefresh', module).add(
    'PullRefresh',
    () => (),
    {
      notes
    }
  );
    