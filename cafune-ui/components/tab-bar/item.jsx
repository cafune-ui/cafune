import { Component } from 'preact';
import cx from 'classnames';
import PropTypes from 'prop-types';

export default class TabBarItem extends Component {
  static propTypes = {
    /**
     * 自定义类名
      */
    prefix: PropTypes.string,
    /**
     * 展示文字
     */
    text: PropTypes.string.isRequired,
    /**
     * tab唯一标示
     */
    id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
    /**
     * 图标集
     */
    icons: PropTypes.shape({
      actived: PropTypes.string,
      normal: PropTypes.string
    }),
    /**
     * 是否禁用
     */
    disabled: PropTypes.bool
  };
  static defaultProps = {
    disabled: false,
    prefix: 'caf-tabbar-item'
  };
  handleChange = () => {
    const { id, disabled } = this.props;
    const { onChange } = this.context;
    !disabled && onChange && onChange(id);
  };
  render({ prefix, className, text, id, icons, disabled, ...restProps }, {}) {
    const { activedId, activedColor } = this.context;
    const isActived = activedId === id;
    const iconType = isActived ? 'actived' : disabled ? 'disabled' : 'normal';
    const tabStyle = isActived ? { color: activedColor } : {};
    return (
      <div
        className={cx(prefix, className)}
        onClick={this.handleChange}
        style={tabStyle}
        data-status={isActived ? 1 : disabled ? 2 : 0}
        {...restProps}
      >
        {!!icons && (
          <div
            className={`${prefix}-icon`}
            style={`background-image: url(${icons[iconType] || icons.normal})`}
          />
        )}
        <p>{text}</p>
      </div>
    );
  }
}
