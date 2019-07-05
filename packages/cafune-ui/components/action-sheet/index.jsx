import { Component } from 'preact';
import PropTypes from 'prop-types';
import cx from 'classnames';

/**
 * 动作面板
 */
class ActionSheet extends Component {
  static defaultProps = {
    prefix: 'caf-actsheet',
    isShow: false,
    showMask: true,
  }
  static propTypes = {
    /**
     * 自定义类名
      */
    prefix: PropTypes.string,
    /**
     * 面板开启状态
      */
    isShow: PropTypes.bool.isRequired,
    /**
     * 是否显示遮罩
      */
    showMask: PropTypes.bool,
    /**
     * 是否在点击遮罩后关闭
      */
    closeOnClickMask: PropTypes.bool
  }
  render({ prefix, isShow, showMask }) {
    return isShow ? <div className={prefix}>
      { showMask && <div className={`${prefix}-mask`} /> } 
    </div> : null;
  }
}
export default ActionSheet;
