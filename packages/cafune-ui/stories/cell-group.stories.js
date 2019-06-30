
  import { storiesOf } from '@storybook/preact';
  import { CellGroup } from 'components';
  import './style.css';
  import 'style/cell-group.css';
  import notes from './markdown/cell-group.md';

  storiesOf('Component|CellGroup', module).add(
    'CellGroup',
    () => (),
    {
      notes
    }
  );
    