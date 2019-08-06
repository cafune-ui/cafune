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
  render({ prefix, className, border, title, children, ...restProps }) {
    return (
      <div className={cx(prefix, className)} {...restProps}>
        {!!title && <div className={`${prefix}-title`}>{title}</div>}
        <div
          className={cx(`${prefix}-wrapper`, {
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
