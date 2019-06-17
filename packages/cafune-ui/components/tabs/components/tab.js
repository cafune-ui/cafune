import { Component } from 'preact';
import classNames from 'classnames';

export default class Tab extends Component {
  onItemClick = () => {
    const { id, actived, onSelected } = this.props;
    if (!actived) {
      onSelected(id);
    }
  };
  render({ actived, children, tabStyle }) {
    const cx = classNames('caf-tabs-item', {
      'caf-tabs-item__actived': !!actived
    });
    return (
      <div class={cx} onClick={this.onItemClick} {...tabStyle}>
        <div class='caf-tabs-item-inner'>{children}</div>
      </div>
    );
  }
}
