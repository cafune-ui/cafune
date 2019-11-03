import { Component, h } from 'preact';
import cx from 'classnames';
import Item from './item';
import { setPadding } from '../util/isomorphic';
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
   * 子元素
   */
  children?: any;
  /**
   * 标签栏类型
   */
  type?: 'normal' | 'bubble' | 'flashy';
  /**
   * 是否使用 `fixed` 定位
   */
  fixed?: boolean;
  /**
   * 当前激活的id
   */
  activedId: string | number;
  /**
   * 激活时文字颜色
   */
  activedColor?: string;
  /**
   * 未激活时文字颜色
   */
  inactivedColor?: string;
  /**
   * 切换时回调
   */
  onChange?: (activedId: string | number) => void;
}
/**
 * 标签栏
 */
class TabBar extends Component<IProps> {
  static TabBarItem = Item;
  static defaultProps = {
    prefix: 'caf-tabbar',
    fixed: true
  };
  currentActive = this.props.activedId;
  componentDidMount() {
    setPadding(`${this.base.getBoundingClientRect().height}px`);
  }
  componentWillUnmount() {
    setPadding('');
  }
  onChange = activedId => {
    if (this.currentActive !== activedId) {
      const { onChange } = this.props;
      onChange && onChange(activedId);
      this.currentActive = activedId;
    }
  };
  getChildContext() {
    return {
      activedId: this.props.activedId,
      activedColor: this.props.activedColor,
      inactivedColor: this.props.inactivedColor,
      type: this.props.type,
      onChange: this.onChange
    };
  }
  render({
    prefix,
    type,
    className,
    activedId,
    fixed,
    children,
    ...restProps
  }) {
    const cls = cx(prefix, className, {
      [`${prefix}--fixed`]: fixed,
      [`${prefix}--${type}`]: !!type
    });
    return (
      <div className={cls} {...restProps}>
        {children}
      </div>
    );
  }
}
export default TabBar;
