import { Component, createRef } from 'preact';
import PropType from 'prop-types';
import cx from 'classnames';
import Icon from '../icon';

/**
 * 折叠面板子项
 */
class Item extends Component {
  static displayName = 'CollapseItem';
  static defaultProps = {
    prefix: 'caf-collapse',
    icon: 'arrow_right',
    disabled: false
  };
  static propType = {
    /**
     * 标题
     */
    title: PropType.oneOfType([PropType.string, PropType.node]).isRequired,
    /**
     * 自定义前缀
     */
    prefix: PropType.string,
    /**
     * 是否处于激活状态
     */
    actived: PropType.bool,
    /**
     * 是否禁用此单元
     */
    disabled: PropType.bool,
     /**
     * 右侧按钮
     */
    icon: PropType.string
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
  componentDidUpdate() {
    this.updateStyle();
  }
  componentDidMount() {
    this.updateStyle();
  }
  render({ prefix, children, title, actived, disabled, icon = 'arrow_right' }) {
    return (
      <div
        class={cx(`${prefix}-item`, { [`${prefix}-item__disabled`]: disabled })}
        data-status={actived ? 1 : 0}
        onClick={this.onChange}
      >
        <div class={cx(`${prefix}-header`, {[`${prefix}-header__default`]: icon === Item.defaultProps.icon })} onClick={this.onToggle}>
          <span>{title}</span>
          <Icon icon={ icon } />
        </div>
        <div class={`${prefix}-wrapper`} ref={this.contentRef}>
          <div class={`${prefix}-wrapper-content`} ref={this.contentWrapRef}>
            {children}
          </div>
        </div>
      </div>
    );
  }
}

export default Item;
