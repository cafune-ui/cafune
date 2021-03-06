import { Component, createRef, h } from 'preact';
import cx from 'classnames';
import Icon from '../icon';
import Button from '../button';
import { isBrowser } from '../util/isomorphic';
const actionDefault = {
  confirm: {
    icon: 'search',
    keepShow: true
  },
  cancel: {
    icon: 'wrong',
    keepShow: false
  },
  custom: {
    keepShow: true
  }
};
function onNextFrame(cb) {
  /* istanbul ignore next */
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

type IAction = {
  /**
   * 按钮类型
   */
  type?: 'confirm' | 'cancel' | 'custom';
  /**
   * 按钮文字
   */
  text?: string;
  /**
   * 是否一直显示
   */
  keepShow?: boolean;
  /**
   * 功能按钮点击事件，默认情况下，点击时，`actionType`为`confirm`时会额外触发`onConfirm`事件，为`cancel`时会额外触发`onCancel`事件
   */
  onClick?: () => void;
}
type IProps = {
  /**
   * 自定义类名
   */
  prefix?: string;
  /**
   * 输入内容
   */
  value?: string;
  /**
   * 占位文字
   */
  placeholder?: string;
  /**
   * 最多可允许输入字符个数
   */
  maxLength?: number;
  /**
   * 确定搜索时回调，支持`enter` 触发
   */
  onConfirm?: (value?) => void;
  /**
   * 取消操作时回调
   */
  onCancel?: (value?) => void;
  /**
   * 内容变更时回调
   */
  onChange?: (value?) => void;
  /**
   * 左侧按钮图标（参考 `Icon` 组件）
   */
  leftIcon?: string;
  /**
   * 搜索框右侧附加功能
   */
  // addition?: IAdditon,
  /**
   * 右侧功能按钮
   */
  action?: IAction;
  
}
interface IState {
  focus: boolean;
  value: string | number;
}
/**
 * 搜索栏
 */
class SearchBar extends Component<IProps, IState> {
  static defaultProps = {
    prefix: 'caf-search',
    align: 'center',
    leftIcon: 'search'
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
     /* istanbul ignore next */
    if ('value' in nextProps && nextProps.value !== this.state.value) {
      this.setState({
        value: nextProps.value
      });
    }
  }
  actionSize = 0;
  componentDidMount() {
    this.componentDidUpdate();
  }
  componentDidUpdate() {
     /* istanbul ignore next */
    if (this.actionRef && this.actionRef.current && isBrowser) {
      let { action } = this.props;
      action = Object.assign({}, actionDefault[action.type], action);
      const { focus } = this.state;
      if (!action.keepShow && !focus) {
        const $actionBtn = this.actionRef.current;
        const actionStyle = window.getComputedStyle($actionBtn);
        const actionSize =
          $actionBtn.offsetWidth + parseInt(actionStyle.marginLeft, 10);
        $actionBtn.style = `margin-right: ${-1 * actionSize}px`;
        this.actionSize = actionSize;
      }
    }
  }
  onBlurTimeout;
  componentWillUnmount() {
     /* istanbul ignore next */
    if (this.onBlurTimeout && isBrowser) {
      clearNextFrameAction(this.onBlurTimeout);
      this.onBlurTimeout = null;
    }
  }
  clear = () => {
    if (!('value' in this.props)) {
      this.setState({ value: '' });
    }
    if (this.props.onChange) {
      this.props.onChange('');
    }
  };
  onInputChange = (e?) => {
    const value = e ? e.target.value : '';
    if (!('value' in this.props)) {
      this.setState({ value });
    }
    if (this.props.onChange) {
      this.props.onChange(value);
    }
  };
  onConfirm = (e?) => {
    e && e.preventDefault();
    let val;
     /* istanbul ignore next */
    if (this.inputRef && this.inputRef.current) {
      val = this.inputRef.current.value;
    } else {
      val = this.state.value;
    }
    this.props.onConfirm && this.props.onConfirm(val);
  };
  onCancel = () => {
    if (this.props.onCancel) {
      this.props.onCancel(this.state.value || '');
    } else {
      this.clear();
    }
  };
  onFocus = () => {
    this.setState({
      focus: true
    });
  };
  blurFromOnClear: boolean = true;
  onBlur = () => {
    this.onBlurTimeout = onNextFrame(() => {
       /* istanbul ignore next */
      if (!this.blurFromOnClear && isBrowser) {
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
     /* istanbul ignore next */
    if (this.inputRef && this.inputRef.current) {
      this.inputRef.current.focus();
    }
  };
  inputRef = createRef();
  actionRef = createRef();
  formRef = createRef();
  render(
    {
      prefix,
      className,
      placeholder,
      maxLength,
      action,
      leftIcon
    },
    { value, focus }
  ) {
    let isBtnHide = false;
     /* istanbul ignore next */
    if (action) {
      action = Object.assign({}, actionDefault[action.type], action);
      isBtnHide = !action.keepShow && !focus;
    }
    return (
      <form
        className={cx(prefix, className)}
        onSubmit={this.onConfirm}
      >
        <div className={`${prefix}__input`}>
          <Icon icon={leftIcon} />
          <input
            type="search"
            placeholder={placeholder}
            value={value}
            maxLength={maxLength}
            onChange={this.onInputChange}
            onFocus={this.onFocus}
            onBlur={this.onBlur}
            ref={this.inputRef}
          />
        </div>
        {!!action && (
          <div
            className={cx(`${prefix}__action`, {
              [`${prefix}__action--hide`]: isBtnHide
            })}
            style={{ marginRight: isBtnHide ? `${this.actionSize * -1}px` : 0 }}
            ref={this.actionRef}
          >
            <Button
              type={action.type === 'cancel' ? 'warning' : 'primary'}
              size="small"
              icon={action.icon ? { type: action.icon } : {}}
              onClick={() => {
                /* istanbul ignore next */
                if (action.type === 'cancel') {
                  this.onCancel();
                } else if (action.type === 'confirm') {
                  this.onConfirm();
                }
                action.onClick && action.onClick();
              }}
            >
              {action.text || ''}
            </Button>
          </div>
        )}
      </form>
    );
  }
}
export default SearchBar;
