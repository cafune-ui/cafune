import { Component, createRef } from "preact";
import cx from "classnames";
import Icon from '../icon';

/**
 * 折叠面板子项
 */
class Item extends Component {
  static displayName = 'CollapseItem';
  static defaultProps = {
    prefix: "caf-collapse",
    disabled: false,
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
      style = `max-height: ${actived ? this.contentWrapRef.current.offsetHeight : 0}px`;
      this.contentRef.current.style = style;
    }
  }
  componentDidUpdate() {
    this.updateStyle();
  }
  componentDidMount() {
    this.updateStyle();
  }
  render({ prefix, children, title, actived, disabled }, {style}) {
    return (
      <div
        class={cx(`${prefix}-item`, { [`${prefix}-item__disabled`]: disabled })}
        data-status={actived ? 1 : 0}
        onClick={this.onChange}
      >
        <div class={`${prefix}-header`} onClick={this.onToggle}>
          <span>{title}</span>
          <Icon icon="arrow_right" />
        </div>
        <div class={`${prefix}-content`} ref={this.contentRef}>
          <div class={`${prefix}-content-wrapper`} ref={this.contentWrapRef} >
            {children}
          </div>
        </div>
      </div>
    );
  }
}

export default Item;
