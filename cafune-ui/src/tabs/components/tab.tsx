import { Component } from 'preact';
import classNames from 'classnames';

interface IProps {
  id?: string | number;
  actived?: boolean;
  onSelected?: (id?:string|number) => void
}
export default class Tab extends Component<IProps, {}> {
  static defaultProps = {
    prefix: 'caf-tabs__item'
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
