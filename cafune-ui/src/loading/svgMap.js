const svgMap = {
  step: {
    cSize: '60px',
    cColor: '#ccc',
    func(color, size) {
      const { cSize, cColor } = this;
      const boxHeight = 40;
      return (
        <svg
          version="1.1"
          id="L4"
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          viewBox={`0 0 100 ${boxHeight}`}
          enableBackground="new 0 0 0 0"
          xmlSpace="preserve"
          style={`fill: ${color || cColor};width:${size || cSize};`}
        >
          <circle stroke="none" cx="25" cy={boxHeight / 2} r="6">
            <animate
              attributeName="opacity"
              dur="1s"
              values="0;1;0"
              repeatCount="indefinite"
              begin="0.1"
            />
          </circle>
          <circle stroke="none" cx="50" cy={boxHeight / 2} r="6">
            <animate
              attributeName="opacity"
              dur="1s"
              values="0;1;0"
              repeatCount="indefinite"
              begin="0.2"
            />
          </circle>
          <circle stroke="none" cx="75" cy={boxHeight / 2} r="6">
            <animate
              attributeName="opacity"
              dur="1s"
              values="0;1;0"
              repeatCount="indefinite"
              begin="0.3"
            />
          </circle>
        </svg>
      );
    }
  },
  spinner: {
    cColor: '#ccc',
    cSize: '32px',
    func(color, size) {
      const { cSize, cColor } = this;
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={size || cSize}
          height={size || cSize}
          viewBox="0 0 38 38"
          stroke={color || cColor}
        >
          <g fill="none" fillRule="evenodd">
            <g transform="translate(1 1)" strokeWidth="2">
              <circle stroke-opacity=".5" cx="18" cy="18" r="18" />
              <path
                d="M36 18c0-9.94-8.06-18-18-18"
                transform="rotate(125.364 18 18)"
              >
                <animateTransform
                  attributeName="transform"
                  type="rotate"
                  from="0 18 18"
                  to="360 18 18"
                  dur="1s"
                  repeatCount="indefinite"
                ></animateTransform>
              </path>
            </g>
          </g>
        </svg>
      );
    }
  },
  ripple: {
    cColor: '#ccc',
    cSize: '60px',
    func(color, size) {
      const { cSize, cColor } = this;
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          style={{ width: size || cSize, height: size || cSize }}
          viewBox="0 0 45 45"
          stroke={color || cColor}
        >
          <g
            fill="none"
            fillRule="evenodd"
            transform="translate(1 1)"
            strokeWidth="2"
          >
            <circle cx="22" cy="22" r="13.2878" strokeOpacity="0">
              <animate
                attributeName="r"
                begin="1.5s"
                dur="3s"
                values="6;22"
                calcMode="linear"
                repeatCount="indefinite"
              />
              <animate
                attributeName="stroke-opacity"
                begin="1.5s"
                dur="3s"
                values="1;0"
                calcMode="linear"
                repeatCount="indefinite"
              />
              <animate
                attributeName="stroke-width"
                begin="1.5s"
                dur="3s"
                values="2;0"
                calcMode="linear"
                repeatCount="indefinite"
              />
            </circle>
            <circle cx="22" cy="22" r="21.2878" strokeOpacity="0">
              <animate
                attributeName="r"
                begin="3s"
                dur="3s"
                values="6;22"
                calcMode="linear"
                repeatCount="indefinite"
              />
              <animate
                attributeName="stroke-opacity"
                begin="3s"
                dur="3s"
                values="1;0"
                calcMode="linear"
                repeatCount="indefinite"
              />
              <animate
                attributeName="stroke-width"
                begin="3s"
                dur="3s"
                values="2;0"
                calcMode="linear"
                repeatCount="indefinite"
              />
            </circle>
            <circle cx="22" cy="22" r="5.46583">
              <animate
                attributeName="r"
                begin="0s"
                dur="1.5s"
                values="6;1;2;3;4;5;6"
                calcMode="linear"
                repeatCount="indefinite"
              />
            </circle>
          </g>
        </svg>
      );
    }
  }
};

export default svgMap;
