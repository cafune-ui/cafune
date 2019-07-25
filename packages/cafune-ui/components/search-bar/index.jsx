import { Component, createRef } from 'preact';
import PropTypes from 'prop-types';

/**
 * 搜索栏
 */
class SearchBar extends Component {
  static defaultProps = {
    prefix: 'caf-search',
    align: 'left'
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
     })
  };
  constructor(props) {
    super(props);
    const value = props.value || '';
    this.state = {
      value
    };
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.value && nextProps.value !== this.state.value) {
      this.setState({
        value: nextProps.value
      });
    }
  }
  onChange = e => {
    this.props.onChange && this.props.onChange();
  };
  onConfirm = e => {
    e.preventDefault();
    this.props.onConfirm && this.props.onConfirm();
  };
  focus = () => {
    if (this.inputRef && this.inputRef.current) {
      this.inputRef.current.focus();
    }
  }
  inputRef = createRef();
  render({ prefix, placeholder, maxLength }, { value }) {
    return (
      <form className={prefix} onSubmit={this.onConfirm}>
        <input
          placeholder={placeholder}
          value={value}
          maxLength={maxLength}
          onChange={this.onChange}
          ref={this.inputRef}
        />
      </form>
    );
  }
}
export default SearchBar;
