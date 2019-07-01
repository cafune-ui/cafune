import { Component } from "preact";
import PropTypes from "prop-types";
import cx from "classnames";
import Icon from "../icon";
import CellGroup from "./group";

class Cell extends Component {
  static CellGroup = CellGroup;
  static defaultProps = {
    prefix: "caf-cell",
    border: true
  };
  static propTypes = {
    /**
     * 自定义类名
     */
    prefix: PropTypes.string,
    /**
     * 左侧图标
     */
    icon: PropTypes.string,
    /**
     * 图标尺寸
     */
    iconSize: PropTypes.string,
    /**
     * 单元标题
     */
    title: PropTypes.string.isRequired,
    /**
     * 单元描述信息
     */
    label: PropTypes.string,
    /**
     * 单元右侧内容
     */
    value: PropTypes.string,
    /**
     * 单元链接，如果有的话将会出现右侧箭头并开启点击
     */
    url: PropTypes.string,
    /**
     * 右侧图标
     */
    rightIcon: PropTypes.string,
    /**
     * 是否垂直居中
     */
    middle: PropTypes.bool
    /**
     * @TODO
     * 是否开启右滑模式
     * swipeList: PropTypes.array
     * {
     *   label: PropTypes.string, // 标题
     *   bgColor: PropTypes.string, // 背景颜色
     *   onClick: PropTypes.func // 点击事件
     * }
     */
    // switchData: PropTypes.shape({
    //   onSwitch: PropTypes.func,
    //   value: PropTypes.bool
    // })
  };
  render({
    prefix,
    icon,
    iconSize,
    title,
    label,
    value,
    url,
    rightIcon,
    border,
    middle
  }) {
    const showRightIcon = !!url || !!rightIcon;
    const cls = cx(prefix, {
      [`${prefix}__clickable`]: showRightIcon,
      [`${prefix}__border`]: border,
      [`${prefix}__middle`]: middle
    });
    icon = icon ? <Icon icon={icon} size={iconSize} /> : null;
    title = (
      <div class={`${prefix}-title`}>
        <span>{title}</span>
        {!!label && <div class={`${prefix}-label`}>{label}</div>}
      </div>
    );
    const val = !!value ? (
      <div class={`${prefix}-value`}>
        <span>{value}</span>
      </div>
    ) : null;
    const rIcon = showRightIcon ? (
      <Icon icon={rightIcon || "arrow_right"} />
    ) : null;
    const Tag = !!url ? "a" : "div";
    const restProps = !!url ? { href: url } : {};
    return (
      <div class={cls}>
        <Tag {...restProps} class={`${prefix}-main`}>
          {icon}
          {title}
          {val}
          {rIcon}
        </Tag>
      </div>
    );
  }
}
export default Cell;
