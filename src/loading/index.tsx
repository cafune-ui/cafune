import { Component, h } from 'preact';
import cx from 'classnames';

import svgMap from './svgMap';
// const typeMap = Object.keys(svgMap);

interface IProps {
  /**
   * 加载图标类型
   */
  type?: 'step' | 'spinner' | 'ripple';
  /**
   * 加载提示文字
   */
  text?: string;
  /**
   * 自定义颜色
   */
  color?: string;
  /**
   * 自定义加载图标尺寸
   */
  size?: string;
}
/**
 * 加载
 */
class Loading extends Component<IProps> {
  static defaultProps = {
    prefix: 'caf-loading',
    type: 'spinner',
    vertical: false
  };
  getSvg(type) {
    const { color, size } = this.props;
    return svgMap[type] && svgMap[type].func(color, size);
  }
  render({ className, prefix, type, text, vertical, ...restProps }) {
    const resultSvg = this.getSvg(type);
    return (
      !!resultSvg && (
        <div
          className={cx(prefix, className, {
            [`${prefix}--vertical`]: vertical
          })}
          {...restProps}
        >
          {resultSvg}
          {!!text && <span className={`${prefix}__text`}>{text}</span>}
        </div>
      )
    );
  }
}
export default Loading;
