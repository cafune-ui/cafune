import { Component } from 'preact';
import PropTypes from 'prop-types';
import classNames from 'classnames';

export default class Panel extends Component {
  static displayName = 'TabPanel';
  static propTypes = {
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
    visable: true
  };
  render({ children, className, actived }) {
    const cx = classNames('caf-tabs-panel', className);
    return (
      <div class={cx} data-actived={actived ? 1 : 0}>
        {children}
      </div>
    );
  }
}
