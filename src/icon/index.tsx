import { h } from 'preact';
import cx from 'classnames';

function isImage(icon) {
  return icon && icon.indexOf('/') !== -1;
}

interface IProps {
  /**
   * 图标
   */
  icon: string;
  /**
   * 自定义前缀
   */
  prefix?: string;
  /**
   * 图标颜色
   */
  color?: string;
  /**
   * 图标尺寸
   */
  size?: string;
  /**
   * 图标标签名
   */
  tag?: string;
  /**
   * 自定义类名
   */
  className?: string;
  /**
   * 自定义字体前缀
   */
  customPrefix?: string;
}
/**
 * 图标
 * @自定义图标
 * 如需在现有基础上拓展更多图标，可引入第三方 iconfont 对应的字体文件和 CSS 文件
 * ```css
 * // 引入第三方或自定义的字体图标样式
 * @font-face {
 *   font-family: 'ri-icon';
 *   src: url('./ri-icon.ttf') format('truetype');
 * }

 * .ri {
 *   font-family: 'my-icon';
 * }

 * .ri-home::before {
 *   content: '\e626';
 * }
 * ```
 * 在组件中指定字体前缀
 * ```jsx
 * <Icon classPrefix="ri" name="home" />
 * ```
 * ---
 */
const Icon = ({
  prefix,
  className,
  icon,
  color,
  size,
  tag,
  customPrefix,
  ...restProps
}: IProps) => {
  const isImg = isImage(icon);
  const iconClass = cx(prefix, className, customPrefix, {
    [`${customPrefix}-${icon}`]: !isImg
  });
  const prop: any = { ...restProps };
  if (isImg) {
    size = size || '16px';
    prop.style = `width: ${size};height: ${size};line-height: ${size};`;
  } else {
    if (color) prop.style = (prop.style || /* istanbul ignore next  */'') + `color: ${color};`;
    if (size) prop.style = (prop.style || /* istanbul ignore next  */'') + `font-size: ${size};`;
  }
  const Tag = tag;
  return isImg ? (
    <Tag className={iconClass} {...prop}>
      {isImg && <img src={icon} className={`${prefix}-img`} />}
    </Tag>
  ) : (
    <Tag className={iconClass} {...prop} />
  );
};
Icon.defaultProps = {
  prefix: 'caf-icons',
  customPrefix: 'caf-icon',
  tag: 'i'
};
export default Icon;
