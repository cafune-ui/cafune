
  import { storiesOf } from '@storybook/preact';
  import { NoticeBar } from 'components';
  import './style.css';
  import 'style/notice-bar.css';
  import notes from './markdown/notice-bar.md';

  storiesOf('Component|NoticeBar', module).add(
    'NoticeBar',
    () => (),
    {
      notes
    }
  );
    