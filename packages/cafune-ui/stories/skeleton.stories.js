import { Component } from 'preact';

import { storiesOf } from '@storybook/preact';
import { Skeleton } from 'components';
const { Rect, Circle } = Skeleton;
import './style.css';
import notes from './markdown/skeleton.md';

class Page extends Component {
  render() {
    return (
      <Skeleton>
        <Circle radius={32} x={32} y={32} />
        <Rect radius={4} width={120} height={20} x={80} y={10} />
        <Rect radius={4} width={120} height={20} x={80} y={35} />
      </Skeleton>
    );
  }
}

storiesOf('Component|Skeleton 骨架屏', module).add('Skeleton', () => <Page />, {
  notes
});
