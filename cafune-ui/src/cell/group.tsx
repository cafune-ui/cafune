import { Component, h } from 'preact';
import cx from 'classnames';
interface IProps {
  /**
   * 自定义类名
   */
  prefix?: string;
  /**
   * 分组标题
   */
  title?: string;
  /**
   * 是否显示边框
   */
  border?: boolean;
}
/**
 * 单元格组
 */
class CellGroup extends Component<IProps> {
  static defaultProps = {
    prefix: 'caf-cellgroup',
    border: true
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
