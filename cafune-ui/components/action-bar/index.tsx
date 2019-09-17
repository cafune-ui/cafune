import { Component, h } from 'preact';
import cx from 'classnames';
import { setPadding } from '../../util/isomorphic';

interface IProps {
  /**
     * 左侧描述内容
     */
  descContent: any,
  /**
     * 按钮内容
     */
  btnContent: any,
  /**
     * 附加信息
     */
  additionMsg?: any,
  /**
     * action 触发事件
     */
  handleClick?: Function,
   /**
     * 是否禁止按钮，默认为false
     */
  disabled?: boolean
}

/**
 * 动作栏
 * @example
 * ```javascript
 * <ActionBar
 *   descContent="描述文字"
 *   btnContent="按钮文字"
 *   handleClick={ () => console.log('click') }
 * />
 * ```
 */
class ActionBar extends Component<IProps, {}> {
  static defaultProps = {
    handleClick: () => {},
    disabled: false,
    prefix: 'caf-actionbar'
  };
  actionbar;
  componentDidMount() {
    setPadding(`${this.actionbar.getBoundingClientRect().height}px`);
  }
  componentWillUnmount() {
    setPadding('');
  }
  public render({
    prefix,
    className,
    descContent,
    btnContent,
    additionMsg,
    handleClick,
    disabled = false,
    ...restProps
  }) {
    return (
      <div className={cx(prefix, className)} ref={c => (this.actionbar = c)} {...restProps}>
        {!!additionMsg && <div className={`${prefix}-tip`}>{additionMsg}</div>}
        <div className={`${prefix}-main`}>
          <div className={`${prefix}-main-desc`}>{descContent}</div>
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
