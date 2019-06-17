import { Component } from 'preact';

export default class TabBarItem extends Component {
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
        class="caf-tabbar-item"
        onClick={this.handleChange}
        style={tabStyle}
        data-status={isActived ? 1 : disabled ? 2 : 0}
      >
        {!!icons && (
          <div
            class="caf-tabbar-item-icon"
            style={`background-image: url(${icons[iconType] || icons.normal})`}
          />
        )}
        <p>{text}</p>
      </div>
    );
  }
}
