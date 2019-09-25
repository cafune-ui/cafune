import { h} from 'preact';
import getRem from './rem';

const pxReg = /\d+px/;

interface IRect {
  /**
   * 元素横坐标
   */
  x?: string | number;
  /**
   * 元素纵坐标
   */
  y?: string | number;
  /**
   * 元素半径
   */
  radius?: string | number;
  /**
   * 元素宽度
   */
  width?: string | number;
  /**
   * 元素高度
   */
  height?: string | number;
};
const Rect = ({ x = 0, y = 0, radius = 0, width = 50, height = 50 }: IRect) => {
  if (pxReg.test(x as string)) x = getRem(x);
  if (pxReg.test(y as string)) y = getRem(y);
  if (pxReg.test(radius as string)) radius = getRem(radius);
  if (pxReg.test(width as string)) width = getRem(width);
  if (pxReg.test(height as string)) height = getRem(height);
  return (
    <rect x={x} y={y} rx={radius} ry={radius} width={width} height={height} />
  );
};
Rect.defaultProps = {
  x: 0,
  y: 0,
  radius: 50
};
export default Rect;
