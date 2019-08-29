import { Component, createRef } from 'preact';
import { Icon } from 'cafune';
export default class Code extends Component {
  state = {
    code: null,
    isCodeOpen: false
  };

  codeMaxheight = 0;
  codeTransTime = 0.3;
  codeBlock = createRef();
  getCode(name) {
    const { compInfo } = this.props;
    if (name && compInfo[name]) {
      import(`!!caf-code-loader!../components/${name}/index.js`).then(code => {
        // code = code.match(/module.exports = ((.|\n)+);$/);
        if (code) {
          code = code.replace(/\\n+/g, '<br />').replace(/\\/g, '');
          this.setState({
            code
          });
        }
      });
    } else {
      this.setState({
        code: `<div>unavailable code</div>`
      });
    }
  }
  componentWillMount() {
    this.getCode(this.props.name);
  }

  componentDidMount() {
    this.setCodeProps();
  }
  isCodeSetted = false;
  componentDidUpdate() {
    !this.isCodeSetted && this.setCodeProps();
  }
  setCodeProps() {
    if (this.codeBlock && this.codeBlock.current) {
      // hljs.highlightBlock(this.codeBlock.current.querySelector('code'));
      const $codeContainer = this.codeBlock.current;
      const codeMaxheight = $codeContainer.getBoundingClientRect().height + 200;
      this.codeMaxheight = codeMaxheight;
      this.codeTransTime = 0.3 * (codeMaxheight / 2000);
      this.isCodeSetted = true;
    }
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.name !== nextProps.name) {
      this.getCode(nextProps.name);
      this.setState({
        showcode: false,
        isCodeOpen: false
      });
    }
  }

  toggleStatus = name => () => {
    this.setState({
      [name]: !this.state[name]
    });
  };
  render({}, { code, isCodeOpen }) {
    return (
      code && (
        <div
          class="caf-doc-code"
          style={
            isCodeOpen
              ? {
                  transitionDuration: `${this.codeTransTime}s`,
                  maxHeight: `${this.codeMaxheight}px`
                }
              : {
                  transitionDuration: `${this.codeTransTime}s`
                }
          }
        >
          <h4 class="caf-doc-code-header">
            <span class="title">代码示例</span>
            <span class="btn" onClick={this.toggleStatus('isCodeOpen')}>
              <Icon icon={isCodeOpen ? 'invisible' : 'visible '} />
            </span>
          </h4>

          <div class="caf-doc-code-body">
            <div class="caf-doc-code-wrapper" ref={this.codeBlock}>
              <div
                class="code"
                dangerouslySetInnerHTML={{ __html: code }}
              ></div>
            </div>
          </div>
        </div>
      )
    );
  }
}
