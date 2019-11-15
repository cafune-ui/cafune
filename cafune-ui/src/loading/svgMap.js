const svgMap = {
  step: {
    cSize: '45px',
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
          enable-background="new 0 0 0 0"
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
            <g transform="translate(1 1)" stroke-width="2">
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
    cSize: '50px',
    func(color, size) {
      const { cSize, cColor } = this;
      return (
        <svg
          style={{ width: size || cSize, height: size || cSize }}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 100 100"
          preserveAspectRatio="xMidYMid"
          class="lds-ripple"
        >
          <circle
            cx="50"
            cy="50"
            r="16.2741"
            fill="none"
            stroke={color || cColor}
            stroke-width="2"
          >
            <animate
              attributeName="r"
              calcMode="spline"
              values="0;40"
              keyTimes="0;1"
              dur="3.1"
              keySplines="0 0.2 0.8 1"
              begin="-1.55s"
              repeatCount="indefinite"
            ></animate>
            <animate
              attributeName="opacity"
              calcMode="spline"
              values="1;0"
              keyTimes="0;1"
              dur="3.1"
              keySplines="0.2 0 0.8 1"
              begin="-1.55s"
              repeatCount="indefinite"
            ></animate>
          </circle>
          <circle
            cx="50"
            cy="50"
            r="35.0733"
            fill="none"
            stroke={color || cColor}
            stroke-width="2"
          >
            <animate
              attributeName="r"
              calcMode="spline"
              values="0;40"
              keyTimes="0;1"
              dur="3.1"
              keySplines="0 0.2 0.8 1"
              begin="0s"
              repeatCount="indefinite"
            ></animate>
            <animate
              attributeName="opacity"
              calcMode="spline"
              values="1;0"
              keyTimes="0;1"
              dur="3.1"
              keySplines="0.2 0 0.8 1"
              begin="0s"
              repeatCount="indefinite"
            ></animate>
          </circle>
        </svg>
      );
    }
  }
};

export default svgMap;
