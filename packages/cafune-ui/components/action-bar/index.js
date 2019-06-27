import { Component } from 'preact';
import { setPadding } from 'util/isomorphic';
import PropTypes from 'prop-types';

import style from './style.scss';

/**
 * 动作栏
 */
class ActionBar extends Component {
  static propTypes = {
    /**
     * 左侧描述内容
     */
    descContent: PropTypes.any.isRequired,
    /**
     * 按钮内容
     */
    btnContent: PropTypes.any.isRequired,
    /**
     * 附加信息
     */
    additionMsg: PropTypes.any,
    /**
     * action 触发事件
     */
    handleClick: PropTypes.func,
    /**
     * 是否禁止按钮，默认为false
     */
    disabled: PropTypes.bool
  };
  static defaultProps = {
    handleClick: () => {},
    disabled: false,
    prefix: 'caf-actionbar'
  };

  componentDidMount() {
    setPadding(`${this.actionbar.getBoundingClientRect().height}px`);
  }
  componentWillUnmount() {
    setPadding('');
  }
  render({
    prefix,
    descContent,
    btnContent,
    additionMsg,
    handleClick,
    disabled = false
  }) {
    return (
      <div class={prefix} ref={c => (this.actionbar = c)}>
        {!!additionMsg && <div class={`${prefix}-tip`}>{additionMsg}</div>}
        <div class={`${prefix}-main`}>
          <div class={`${prefix}-main-tip`}>{descContent}</div>
          <div
            class={`${prefix}-main-btn`}
            onClick={handleClick}
            data-disabled={disabled ? 1 : 0}
          >
            {btnContent || '确定'}
          </div>
        </div>
      </div>
    );
  }
}
/// export { ActionBar };
export default ActionBar;
