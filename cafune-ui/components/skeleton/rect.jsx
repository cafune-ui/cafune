import PropTypes from 'prop-types';
import getRem from './rem';

const pxReg = /\d+px/;
const Rect = ({ x = 0, y = 0, radius = 0, width = 50, height = 50 }) => {
  if (pxReg.test(x)) x = getRem(x);
  if (pxReg.test(y)) y = getRem(y);
  if (pxReg.test(radius)) radius = getRem(radius);
  if (pxReg.test(width)) width = getRem(width);
  if (pxReg.test(height)) height = getRem(height);
  return (
    <rect x={x} y={y} rx={radius} ry={radius} width={width} height={height} />
  );
};
Rect.propTypes = {
  /**
   * 元素横坐标
   */
  x: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  /**
   * 元素纵坐标
   */
  y: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  /**
   * 元素半径
   */
  radius: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  /**
   * 元素宽度
   */
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  /**
   * 元素高度
   */
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};
Rect.defaultProps = {
  x: 0,
  y: 0,
  radius: 50
};
export default Rect;
