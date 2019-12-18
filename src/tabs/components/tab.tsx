import { Component, h } from 'preact';
import classNames from 'classnames';

interface IProps {
  id?: string | number;
  actived?: boolean;
  onSelected?: (id?:string|number) => void;
  tabStyle?: any;
}
export default class TabItem extends Component<IProps> {
  static defaultProps = {
    prefix: 'caf-tabs__nav__item'
  }
  onItemClick = () => {
    const { id, actived, onSelected } = this.props;
    if (!actived && onSelected) {
      onSelected(id);
    }
  }
  render({ prefix, actived, children, tabStyle }) {
    const cx = classNames(prefix, {
      [`${prefix}--actived`]: !!actived
    });
    return (
      <div className={cx} onClick={this.onItemClick} {...tabStyle}>
        <div className={`${prefix}__inner`}>{children}</div>
      </div>
    );
  }
}
