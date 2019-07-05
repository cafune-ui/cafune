import { Component } from 'preact';
import { setPadding } from '../../util/isomorphic';
import PropTypes from 'prop-types';

/**
 * 动作栏
 * @example
 * ```jsx
 * <ActionBar
 *   descContent="描述文字"
 *   btnContent="按钮文字"
 *   handleClick={ () => console.log('click') }
 * />
 * ```
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
      <div className={prefix} ref={c => (this.actionbar = c)}>
        {!!additionMsg && <div className={`${prefix}-tip`}>{additionMsg}</div>}
        <div className={`${prefix}-main`}>
          <div className={`${prefix}-main-tip`}>{descContent}</div>
          <div
            className={`${prefix}-main-btn`}
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
