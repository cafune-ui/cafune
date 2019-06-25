import { Component } from "preact";
import cx from "classnames";

export class Item extends Component {
  static displayName = 'CollapseItem';
  static defaultProps = {
    prefix: "caf-collapse",
    disabled: false
  };
  onToggle = () => {
    const { id, disabled, onToggle } = this.props;
    if (!disabled) {
      onToggle(id);
    }
  };
  render({ prefix, children, title, actived, disabled }) {
    return (
      <div
        class={cx(`${prefix}-item`, { [`${prefix}-item__disabled`]: disabled })}
        data-status={actived ? 1 : 0}
        onClick={this.onChange}
      >
        <div class={`${prefix}-header`} onClick={this.onToggle}>
          <span>{title}</span>
        </div>
        <div class={`${prefix}-content`}>{children}</div>
      </div>
    );
  }
}

export default Item;
