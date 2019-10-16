import { Component, createRef, h, VNode } from 'preact';
import cx from 'classnames';
import Cell from '../cell';
import { isBrowser } from '../util/isomorphic';
// import Icon from '../icon';

interface IProps {
  /**
   * 标题
   */
  title: string | VNode;
  /**
   * 唯一标识
   */
  id?: string;
  /**
   * 自定义前缀
   */
  prefix?: string;
  /**
   * 是否处于激活状态
   */
  actived?: boolean;
  /**
   * 是否禁用此单元
   */
  disabled?: boolean;
  /**
   * 右侧按钮
   */
  icon?: string;
  /**
   * 切换回调
   */
  onToggle?: (id: any) => void;
}
/**
 * 折叠面板子项
 */
class Item extends Component<IProps> {
  static displayName = 'CollapseItem';
  static defaultProps = {
    prefix: 'caf-collapse',
    icon: 'arrow-right',
    disabled: false
  };
  contentRef = createRef();
  contentWrapRef = createRef();
  onToggle = () => {
    const { id, disabled, onToggle } = this.props;
    if (!disabled) {
      onToggle(id);
    }
  };
  updateStyle() {
    if (isBrowser) {
      let style = '';
      const { actived } = this.props;
      /* istanbul ignore if  */
      if (this.contentWrapRef.current && this.contentRef.current) {
        style = `max-height: ${
          actived ? this.contentWrapRef.current.offsetHeight : 0
        }px`;
        this.contentRef.current.style = style;
      }
    }
  }
  componentDidUpdate() {
    this.updateStyle();
  }
  componentDidMount() {
    this.updateStyle();
  }
  render({
    prefix,
    className,
    children,
    title,
    actived,
    disabled,
    icon,
    ...restProps
  }) {
    return (
      <div
        className={cx(`${prefix}-item`, className, {
          [`${prefix}-item__disabled`]: disabled
        })}
        data-status={actived ? 1 : 0}
        {...restProps}
      >
        <div
          className={cx(`${prefix}-header`, {
            [`${prefix}-header__default`]: icon === Item.defaultProps.icon
          })}
          onClick={this.onToggle}
        >
          <Cell title={title} rightIcon={icon} />
        </div>
        <div className={`${prefix}-wrapper`} ref={this.contentRef}>
          <div
            className={`${prefix}-wrapper-content`}
            ref={this.contentWrapRef}
          >
            {children}
          </div>
        </div>
      </div>
    );
  }
}

export default Item;
