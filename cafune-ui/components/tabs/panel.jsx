import { Component } from 'preact';
import PropTypes from 'prop-types';
import cx from 'classnames';

export default class Panel extends Component {
  static displayName = 'TabPanel';
  static propTypes = {
    /**
     * 自定义类名
      */
    prefix: PropTypes.string,
    /**
     * 面板的id
     */
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    /**
     * 标签名字
     */
    label: PropTypes.string,
    /**
     * 自定义类名
     */
    className: PropTypes.string,
    /**
     * 是否显示
     */
    visable: PropTypes.bool
  };
  static defaultProps = {
    visable: true,
    prefix: 'caf-tabs-panel'
  };
  render({ prefix, children, className, actived, ...restProps }) {
    const cls = cx(prefix, className);
    return (
      <div className={cls} data-actived={actived ? 1 : 0} {...restProps}>
        {children}
      </div>
    );
  }
}
