import { Component, createRef } from 'preact';
import { Icon } from 'cafune';
// import SyntaxHighlighter from 'react-syntax-highlighter';
// import { atomOneDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';

export default class Content extends Component {
  state = {
    markdown: null,
    code: null,
    isCodeOpen: false
  };
  codeMaxheight = 0;
  codeTransTime = 0.3;
  codeBlock = createRef();

  getMd(name) {
    const { compInfo } = this.props;
    if (name && compInfo[name]) {
      import(`../../markdown/${name}.md`).then(data => {
        let mdHtml = data.match(/module.exports = "((.|\n)+)";$/);
        if (mdHtml) {
          mdHtml = mdHtml[1].replace(/\\n+/g, '<br />').replace(/\\/g, '');
          this.setState({
            markdown: mdHtml
          });
        }
      });
    } else {
      this.setState({
        markdown: `<div>unavailable md</div>`
      });
    }
  }
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
  componentDidUpdate() {
    this.setCodeProps();
  }
  setCodeProps() {
    if (this.codeBlock && this.codeBlock.current) {
      // hljs.highlightBlock(this.codeBlock.current.querySelector('code'));
      const $codeContainer = this.codeBlock.current;
      const codeMaxheight = $codeContainer.getBoundingClientRect().height + 200;
      this.codeMaxheight = codeMaxheight;
      this.codeTransTime = 0.3 * (codeMaxheight / 2000);
    }
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.name !== nextProps.name) {
      this.getMd(nextProps.name);
      this.getCode(nextProps.name);
      this.setState({
        showcode: false,
        isCodeOpen: false,
        shownav: false
      });
    }
  }
  componentWillMount() {
    this.getMd(this.props.name);
    this.getCode(this.props.name);
  }
  componentDidMount() {
    this.setCodeProps();
  }
  toggleStatus = name => () => {
    this.setState({
      [name]: !this.state[name]
    });
  };
  render({}, { markdown, code, isCodeOpen }) {
    return (
      <div class="caf-doc-content caf-markdown">
        <div
          class="caf-markdown-contain"
          dangerouslySetInnerHTML={{ __html: markdown }}
        />
        {code && (
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
              {/* <SyntaxHighlighter
                language="javascript"
                showLineNumbers
                style={atomOneDark}
                ref={this.codeBlock}
              >
                {code}
              </SyntaxHighlighter> */}
              <div class="caf-doc-code-wrapper" ref={this.codeBlock}>
                <pre>
                  <code
                    class="jsx"
                    dangerouslySetInnerHTML={{ __html: code }}
                  />
                </pre>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }
}
