import { h, Component } from 'preact';
import getRem from './rem';

interface ICicle {
  /**
   * 元素横坐标（计算时以圆心为原点）
   */
  x?: string | number;
  /**
   * 元素纵坐标（计算时以圆心为原点）
   */
  y?: string | number;
  /**
   * 元素半径
   */
  radius?: string | number;
}
const pxReg = /\d+px/;
class  Circle extends Component<ICicle> {
  defaultProps: {
    x: 0,
    y: 0,
    radius: 50
  };
  render({ x, y, radius }, {}, { remRate }) {
    if (remRate && remRate > 0) {
      if (pxReg.test(x as string)) x = getRem(x);
      if (pxReg.test(y as string)) y = getRem(y);
      if (pxReg.test(radius as string)) radius = getRem(radius);
    }
    return <circle cx={x} cy={y} r={radius} />;
  }
}
export default Circle;
