import { Component, h } from 'preact';
import cx from 'classnames';
interface IItemIcon {
  actived?: string,
  normal?: string
}
interface IProps {
  /**
   * 自定义类名
    */
  prefix?: string,
  /**
   * 展示文字
   */
  text: string,
  /**
   * tab唯一标示
   */
  id: number | string,
  /**
   * 图标集
   */
  icons?: IItemIcon,
  /**
   * 是否禁用
   */
  disabled?: boolean
}
export default class TabBarItem extends Component<IProps> {
  static defaultProps = {
    disabled: false,
    prefix: 'caf-tabbar__item'
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
        className={cx(prefix, className, {
          [`${prefix}--actived`]: isActived,
          [`${prefix}--disabled`]: disabled
        })}
        onClick={this.handleChange}
        style={tabStyle}
        {...restProps}
      >
        {!!icons && (
          <div
            className={`${prefix}__icon`}
            style={`background-image: url(${icons[iconType] || icons.normal})`}
          />
        )}
        <p>{text}</p>
      </div>
    );
  }
}
