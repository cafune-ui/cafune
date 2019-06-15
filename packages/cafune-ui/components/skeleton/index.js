import { Component } from 'preact';
import Circle from './components/circle';
import Rect from './components/rect';
import getRem from './rem';

const pxReg = /\d+px/;
const uid = () =>
  Math.random()
    .toString(36)
    .substring(2);
export class Skeleton extends Component {
  static Circle = Circle;
  static Rect = Rect;
  static defaultProps = {
    speed: 2,
    width: '100%',
    height: '9.28rem',
    primaryColor: '#f5f5f5',
    secondaryColor: '#eaeaea'
  };
  render({
    width,
    height,
    style,
    speed,
    children,
    primaryColor,
    secondaryColor
  }) {
    const idClip = uid();
    const idGradient = uid();
    if (pxReg.test(width)) width = getRem(width);
    if (pxReg.test(height)) height = getRem(height);
    return (
      <svg
        width={width}
        height={height}
        version="1.1"
        style={style}
        preserveAspectRatio="xMidYMid meet"
      >
        <rect
          style={{ fill: `url(#${idGradient})` }}
          clip-path={`url(#${idClip})`}
          x="0"
          y="0"
          height={height}
          width={width}
        />
        <defs>
          <clipPath id={`${idClip}`}>{children}</clipPath>

          <linearGradient id={`${idGradient}`}>
            <stop offset="0%" stop-color={primaryColor}>
              <animate
                attributeName="offset"
                values="-2; 1"
                dur={`${speed}s`}
                repeatCount="indefinite"
              />
            </stop>
            <stop offset="50%" stop-color={secondaryColor}>
              <animate
                attributeName="offset"
                values="-1.5; 1.5"
                dur={`${speed}s`}
                repeatCount="indefinite"
              />
            </stop>
            <stop offset="100%" stop-color={primaryColor}>
              <animate
                attributeName="offset"
                values="-1; 2"
                dur={`${speed}s`}
                repeatCount="indefinite"
              />
            </stop>
          </linearGradient>
        </defs>
      </svg>
    );
  }
}

export default Skeleton;
