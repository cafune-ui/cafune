import { Component } from 'preact';
import PropTypes from 'prop-types';

export default class TabBarItem extends Component {
  static propTypes = {
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
    disabled: false
  };
  handleChange = () => {
    const { id, disabled } = this.props;
    const { onChange } = this.context;
    !disabled && onChange && onChange(id);
  };
  render({ text, id, icons, disabled = false }, {}) {
    const { activedId, activedColor } = this.context;
    const isActived = activedId === id;
    const iconType = isActived ? 'actived' : disabled ? 'disabled' : 'normal';
    const tabStyle = isActived ? { color: activedColor } : {};
    return (
      <div
        className="caf-tabbar-item"
        onClick={this.handleChange}
        style={tabStyle}
        data-status={isActived ? 1 : disabled ? 2 : 0}
      >
        {!!icons && (
          <div
            className="caf-tabbar-item-icon"
            style={`background-image: url(${icons[iconType] || icons.normal})`}
          />
        )}
        <p>{text}</p>
      </div>
    );
  }
}
