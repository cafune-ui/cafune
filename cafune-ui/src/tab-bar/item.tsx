import { Component, h } from 'preact';
import cx from 'classnames';
import Icon from '../icon';
type IItemIcon = {
  actived?: string;
  normal?: string;
}
interface IProps {
  /**
   * 自定义类名
   */
  prefix?: string;
  /**
   * 展示文字
   */
  text: string;
  /**
   * tab唯一标示
   */
  id: number | string;
  /**
   * 图标集
   */
  icons?: IItemIcon;
  /**
   * 激活时文字颜色
   */
  activedColor?: string;
  /**
   * 未激活时文字颜色
   */
  inactivedColor?: string;
  /**
   * bubble 类型激活时背景颜色
   */
  activedBgColor?: string;
  /**
   * 是否禁用
   */
  disabled?: boolean;
}
export default class TabBarItem extends Component<IProps> {
  static defaultProps = {
    disabled: false,
    prefix: 'caf-tabbar-item'
  };
  handleChange = () => {
    const { id, disabled } = this.props;
    const { onChange } = this.context;
    !disabled && onChange && onChange(id);
  };
  render(
    {
      prefix,
      className,
      text,
      id,
      icons,
      activedColor,
      inactivedColor,
      activedBgColor,
      disabled,
      ...restProps
    },
    {}
  ) {
    const { activedId, type } = this.context;
    const isActived = activedId === id;
    const iconType = isActived ? 'actived' : disabled ? 'disabled' : 'normal';
    const tabStyle = isActived
      ? { color: activedColor || this.context.activedColor || '' }
      : { color: inactivedColor || this.context.inactivedColor || '' };
    const containerStyle:any = {};
     /* istanbul ignore next */
    if (type === 'bubble' && isActived && !!activedBgColor) {
      containerStyle.backgroundColor = activedBgColor;
    }
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
        <div className={`${prefix}__container`} style={containerStyle}>
          {!!icons && (
            <div className={`${prefix}__icon`}>
              <Icon icon={icons[iconType] || icons.normal} />
            </div>
          )}
          <div className={`${prefix}__title`}>
            <p className={`${prefix}__title__text`}>{text}</p>
          </div>
        </div>
      </div>
    );
  }
}
