import { Component, h } from 'preact';
import cx from 'classnames';

interface IProps {
  /**
   * 自定义前缀
   */
  prefix?: string;
  /**
   * 自定义类名
   */
  className?: string;
  /**
   * 自定义类名
   */
  children?: any;
  /**
   * 单元宽度
   */
  width?: string;
  /**
   * 点击回调
   */
  onItemClick?: (event: TouchEvent) => void
}
class SwiperItem extends Component<IProps> {
  static displayName = 'swiperItem';
  static defaultProps = {
    prefix: 'caf-swiper__container'
  };
  render({ prefix, className, children, width, onItemClick, ...restProps }) {
    return (
      <div
        className={cx(`${prefix}__item`, className)}
        onClick={onItemClick}
        style={{ width }}
        {...restProps}
      >
        {children}
      </div>
    );
  }
}
export default SwiperItem;
