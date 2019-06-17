import { Component } from 'preact';

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
