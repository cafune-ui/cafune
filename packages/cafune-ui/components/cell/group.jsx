import { Component } from "preact";
import PropTypes from "prop-types";
import cx from "classnames";
/**
 *
 */
class CellGroup extends Component {
  static defaultProps = {
    prefix: "caf-cellgroup",
    border: true
  };
  static propTypes = {
    /**
     * 自定义类名
     */
    prefix: PropTypes.string,
    /**
     * 分组标题
     */
    title: PropTypes.string,
    /**
     * 是否显示边框
     */
    border: PropTypes.bool
  };
  render({ prefix, border, title, children }) {
    return (
      <div class={prefix}>
        {!!title && <div class={`${prefix}-title`}>{title}</div>}
        <div
          class={cx(`${prefix}-wrapper`, {
            [`${prefix}-wrapper__border`]: border
          })}
        >
          {children}
        </div>
      </div>
    );
  }
}
export default CellGroup;
