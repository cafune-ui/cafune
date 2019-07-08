import PropType from 'prop-types';
import cx from 'classnames';

function isImage(icon) {
  return icon && icon.indexOf('/') !== -1;
}
/**
 * 图标
 * @example
 * ```javascript
 * // 使用内置图标
 * <Icon icon="back" />
 * // 使用图片地址
 * <Icon icon="http://someicon.com/someicon.png" />
 * ```
 */
const Icon = ({ prefix = 'caf-icon', icon, color, size, tag = 'i' }) => {
  const isImg = isImage(icon);
  const iconClass = cx(prefix, {[`${prefix}_${icon}`]: !isImg});
  const prop = {};
  if (isImg) {
    size = size || '16px';
    prop.style = `width: ${size};height: ${size};`;
  } else {
    if (color) prop.style = (prop.style || '') + `color: ${color};`;
    if (size) prop.style = (prop.style || '') + `font-size: ${size};`;
  }
  const Tag = tag;
  return isImg ? <Tag className={iconClass} {...prop}>
    {isImg && <img src={icon} className={`${prefix}-img`} />}
  </Tag> : <Tag className={iconClass} {...prop} />;
}
Icon.defalutProps = {
  prefix: 'caf-icon',
  tag: 'i',
}
Icon.propTypes = {
  icon: PropType.string.isRequired,
  prefix: PropType.string,
  color: PropType.string,
  size: PropType.string,
  tag: PropType.string
}
export default Icon;
