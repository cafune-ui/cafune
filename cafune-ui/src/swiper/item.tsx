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
   * 单元样式
   */
  style?: any;
  /**
   * 是否为当前显示项
   */
  current?: boolean;
  /**
   * 点击回调
   */
  onItemClick?: (event: TouchEvent) => void;
}
class SwiperItem extends Component<IProps> {
  static displayName = 'swiperItem';
  static defaultProps = {
    prefix: 'caf-swiper__container'
  };
  render({
    prefix,
    className,
    children,
    current,
    style,
    onItemClick,
    ...restProps
  }) {
    return (
      <div
        className={cx(`${prefix}__item`, className)}
        onClick={onItemClick}
        style={style}
        {...restProps}
      >
        <div className={cx(`${prefix}__item__container`, {
          [`${prefix}__item__container--current`]: current
        })}>
          {children}
        </div>
      </div>
    );
  }
}
export default SwiperItem;
