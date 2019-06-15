
import { storiesOf } from '@storybook/preact';
import { Swiper } from 'components';
import './style.css';
import notes from './markdown/swiper.md';

storiesOf('Component|Swiper', module).add(
  'Swiper',
  () => (),
  {
    notes
  }
);
    