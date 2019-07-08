import { Component } from 'preact';
import PropTypes from 'prop-types';
import cx from 'classnames';

import svgMap from './svgMap';
const typeMap = Object.keys(svgMap);
/**
 * 加载
 * @example
 * ```javascript
 * <Loading />
 * <Loading type="spinner" />
 * // ...
 * ```
 */
class Loading extends Component {
  static defaultProps = {
    prefix: 'caf-loading',
    type: 'spinner',
    vertical: false
  };
  static propTypes = {
    /**
     * 加载图标类型
      */
    type: PropTypes.oneOf(['step', 'spin', 'ripple']),
    /**
     * 加载提示文字
      */
    text: PropTypes.string,
    /**
     * 自定义颜色
      */
    color: PropTypes.string,
    /**
     * 自定义加载图标尺寸
      */
    size: PropTypes.string
  };
  getSvg(type) {
    const { color, size } = this.props;
    return svgMap[type] && svgMap[type].func(color, size);
  }
  render({ prefix, type, text, vertical }) {
    const resultSvg = this.getSvg(type);
    return !!resultSvg && <div className={cx(prefix, {[`${prefix}__vertical`]: vertical })}>
      { resultSvg }
      { !!text && <span className={`${prefix}-text`}>{text}</span> }
    </div>;
  }
}
export default Loading;
