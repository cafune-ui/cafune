import { storiesOf } from '@storybook/preact';
import { LazyLoad } from 'components';
import './style.css';
import notes from './markdown/lazyLoad.md';

storiesOf('Component|LazyLoad 懒加载', module).add(
  'LazyLoad',
  () => (
    <LazyLoad imgClass="lazy">
      <img
        src="https://via.placeholder.com/200x150.png?text=playholder"
        data-original="https://via.placeholder.com/200x150.png?text=original"
        class="lazy"
      />
    </LazyLoad>
  ),
  {
    notes
  }
);
