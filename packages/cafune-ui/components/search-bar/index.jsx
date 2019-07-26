import { Component, createRef } from 'preact';
import PropTypes from 'prop-types';
import cx from 'classnames';
import Icon from '../icon';

const actionDefault = {
  confirm: {
    text: '搜索',
    keepShow: true
  },
  cancel: {
    text: '取消',
    keepShow: false
  },
  custom: {
    text: '确定',
    keepShow: true
  }
};
function onNextFrame(cb) {
  if (window.requestAnimationFrame) {
    return window.requestAnimationFrame(cb);
  }
  return window.setTimeout(cb, 1);
}
function clearNextFrameAction(nextFrameId) {
  if (window.cancelAnimationFrame) {
    window.cancelAnimationFrame(nextFrameId);
  } else {
    window.clearTimeout(nextFrameId);
  }
}

/**
 * 搜索栏
 */
class SearchBar extends Component {
  static defaultProps = {
    prefix: 'caf-search',
    align: 'left',
    leftIcon: 'search'
  };
  static propTypes = {
    /**
     * 自定义类名
     */
    prefix: PropTypes.string,
    /**
     * 搜索框的
     */
    /**
     * 占位文字
     */
    placeholder: PropTypes.string,
    /**
     * 最多可允许输入字符个数
     */
    maxLength: PropTypes.number,
    /**
     * 确定搜索时回调，支持`enter` 触发
     */
    onConfirm: PropTypes.func,
    /**
     * 取消操作时回调
     */
    onCancel: PropTypes.func,
    /**
     * 内容变更时回调
     */
    onChange: PropTypes.func,
    /**
     * 输入款对齐方式
     */
    align: PropTypes.oneOf(['left', 'right']),
    /**
     * 左侧按钮图标（参考 `Icon` 组件）
     */
    leftIcon: PropTypes.string,
    /**
     * 搜索框右侧附加功能
     */
    addition: PropTypes.shape({
      /**
       * 附加功能按钮
       */
      icon: PropTypes.string,
      /**
       * 附加功能点击事件
       */
      onClick: PropTypes.func
    }),
    /**
     * 右侧功能按钮
     */
    action: PropTypes.shape({
      /**
       * 按钮类型
       */
      type: PropTypes.oneOf(['confirm', 'cancel', 'custom']),
      /**
       * 按钮文字
       */
      text: PropTypes.string,
      /**
       * 是否一直显示
       */
      keepShow: PropTypes.bool,
      /**
       * 功能按钮点击事件，默认情况下，点击时，`actionType`为`confirm`时会额外触发`onConfirm`事件，为`cancel`时会额外触发`onCancel`事件
       */
      onClick: PropTypes.func
    })
  };
  constructor(props) {
    super(props);
    const value = props.value || '';
    this.state = {
      value,
      focus: false
    };
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.value && nextProps.value !== this.state.value) {
      this.setState({
        value: nextProps.value
      });
    }
  }
  actionSize = 0
  componentDidMount() {
    if (this.actionRef && this.actionRef.current) {
      const $actionBtn = this.actionRef.current;
      const actionSize = $actionBtn.getBoundingClientRect().width;
      $actionBtn.style = `margin-right: ${-1 * actionSize}px`;
      this.actionSize = actionSize;
    }
  }
  onBlurTimeout;
  componentWillUnmount() {
    if (this.onBlurTimeout) {
      clearNextFrameAction(this.onBlurTimeout);
      this.onBlurTimeout = null;
    }
  }
  onChange = e => {
    this.props.onChange && this.props.onChange();
  };
  onConfirm = e => {
    e.preventDefault();
    this.props.onConfirm && this.props.onConfirm();
  };
  onFocus = () => {
    this.setState({
      focus: true
    });
  };
  onBlur = () => {
    this.onBlurTimeout = onNextFrame(() => {
      if (!this.blurFromOnClear) {
        if (document.activeElement !== this.inputRef) {
          this.setState({
            focus: false
          });
        }
      }
      this.blurFromOnClear = false;
    });
  };
  focus = () => {
    if (this.inputRef && this.inputRef.current) {
      this.inputRef.current.focus();
    }
  };
  inputRef = createRef();
  actionRef = createRef();
  render(
    { prefix, placeholder, maxLength, action, leftIcon },
    { value, focus }
  ) {
    let isBtnHide = false;
    if (action) {
      action = Object.assign({}, actionDefault[action.type], action);
      isBtnHide = !action.keepShow && !focus;
    }
    return (
      <form className={prefix} onSubmit={this.onConfirm}>
        <div className={`${prefix}-input`}>
          <div className={`${prefix}-input-ph`}>
            <Icon icon={leftIcon} />
            <div className={``}>{placeholder}</div>
          </div>
          <input
            type="search"
            placeholder={placeholder}
            value={value}
            maxLength={maxLength}
            onChange={this.onChange}
            onFocus={this.onFocus}
            onBlur={this.onBlur}
            ref={this.inputRef}
          />
        </div>
        {!!action && (
          <div
            className={cx(`${prefix}-action`, {
              [`${prefix}-action__hide`]: isBtnHide
            })}
            style={{ marginRight: isBtnHide ? `${this.actionSize * -1}px` : 0 }}
            ref={this.actionRef}
          >
            {action.text}
          </div>
        )}
      </form>
    );
  }
}
export default SearchBar;
