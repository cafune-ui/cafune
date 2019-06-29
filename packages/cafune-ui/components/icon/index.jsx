import { Component } from 'preact';
import cx from 'classnames';

function isImage(icon) {
  return icon && icon.indexOf('/') !== -1;
}
class Icon extends Component {
  static defaultProps = {
    prefix: "caf-icon",
    disabled: false,
    tag: 'i'
  };
  render({ prefix, icon, color, size }) {
    const isImg = isImage(icon);
    const iconClass = cx(prefix, {[`${prefix}-${icon}`]: !isImg});
    const prop = {
      style: '',
    };
    if (color) prop.style += `color: ${color};`;
    if (size) prop.style += `font-size: ${size};`;
    return <this.props.tag class={iconClass} />;
  }
}
export default Icon;
