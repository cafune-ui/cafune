import PropTypes from 'prop-types';
import getRem from './rem';

const pxReg = /\d+px/;
const Circle = ({ x = 0, y = 0, radius = 50 }) => {
  if (pxReg.test(x)) x = getRem(x);
  if (pxReg.test(y)) y = getRem(y);
  if (pxReg.test(radius)) radius = getRem(radius);
  return <circle cx={x} cy={y} r={radius} />;
};

Circle.propTypes = {
  /**
   * 元素横坐标（计算时以圆心为原点）
   */
  x: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  /**
   * 元素纵坐标（计算时以圆心为原点）
   */
  y: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  /**
   * 元素半径
   */
  radius: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};
Circle.defaultProps = {
  x: 0,
  y: 0,
  radius: 50
};
export default Circle;
