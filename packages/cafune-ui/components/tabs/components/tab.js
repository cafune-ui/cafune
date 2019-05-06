import { Component } from 'preact';
import classNames from 'classnames';
import style from './style.scss';

export default class Tab extends Component {
  onItemClick = () => {
    const { id, actived, onSelected } = this.props;
    if (!actived) {
      onSelected(id);
    }
  };
  render({ actived, children, tabStyle }) {
    const cx = classNames(style.tabItem, {
      [style.tabItem__actived]: !!actived
    });
    return (
      <div class={cx} onClick={this.onItemClick} {...tabStyle}>
        <div class={style.tabItem_inner}>{children}</div>
      </div>
    );
  }
}
