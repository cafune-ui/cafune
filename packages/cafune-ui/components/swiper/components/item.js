import { Component } from 'preact';
import style from '../style.scss';

export class SwiperItem extends Component {
  static displayName = 'swiperItem';
  render({ children, width }) {
    return (
      <div class={style.item} style={{ width }}>
        {children}
      </div>
    );
  }
}
export default SwiperItem;
