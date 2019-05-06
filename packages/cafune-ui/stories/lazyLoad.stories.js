import { storiesOf } from '@storybook/preact';
import { Lazyload } from 'components';
import './style.css';
import notes from './markdown/lazyload.md';

storiesOf('Component|Lazyload 懒加载', module).add(
  'Lazyload',
  () => (
    <Lazyload imgClass="lazy">
      <img
        src="https://via.placeholder.com/200x150.png?text=playholder"
        data-original="https://via.placeholder.com/200x150.png?text=original"
        class="lazy"
      />
    </Lazyload>
  ),
  {
    notes
  }
);
