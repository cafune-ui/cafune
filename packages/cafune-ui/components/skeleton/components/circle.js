import getRem from '../rem';

const pxReg = /\d+px/;
const Circle = ({ x = 0, y = 0, radius = 50 }) => {
  if (pxReg.test(x)) x = getRem(x);
  if (pxReg.test(y)) y = getRem(y);
  if (pxReg.test(radius)) radius = getRem(radius);
  return <circle cx={x} cy={y} r={radius} />;
};

export default Circle;
