import { Component } from 'preact';
import PropTypes from 'prop-types';

/**
 * 宫格单元
 */
class GridItem extends Component {
  static defaultProps = {
    prefix: 'caf-grid-item'
  };
  static propTypes = {
    /**
     * 自定义前缀
     */
    prefix: PropTypes.string,
    /**
     * 列数
     */
    icon: PropTypes.string,
    /**
     * 是否固定为正方形
     */
    text: PropTypes.string
  };
  render({ prefix, icon, text, children }, {}, { square, center }) {
    return <div />;
  }
}
export default Grid;
