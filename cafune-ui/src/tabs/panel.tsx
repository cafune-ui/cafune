import { Component, h } from 'preact';
import cx from 'classnames';

interface IProps {
  /**
   * 自定义前缀
   */
  prefix?: string;
  /**
   * 标签名字
   */
  label?: string;
  /**
   * 自定义类名
   */
  className?: string;
  /**
   * 是否显示
   */
  visable?: boolean;
  /**
   * 是否激活
   */
  actived?: boolean;
}
export default class Panel extends Component<IProps> {
  static displayName = 'TabPanel';
  static defaultProps = {
    visable: true,
    prefix: 'caf-tabs__panel'
  };
  render({ prefix, children, className, actived, ...restProps }) {
    const cls = cx(prefix, className, {
      [`${prefix}--actived`]: actived
    });
    return (
      <div className={cls} {...restProps}>
        {children}
      </div>
    );
  }
}
