import { h, Component, createRef } from 'preact';
import cx from 'classnames';
import compInfo from '../../comp-info';
import compMap from '../../comp-type';
import { Icon } from 'cafune';
// import hljs from 'highlight.js/lib/highlight';
// import javascript from 'highlight.js/lib/languages/javascript';
// import 'highlight.js/styles/github.css';
// hljs.registerLanguage('javascript', javascript);

export class Home extends Component {
  state = {
    markdown: null,
    code: null,
    showcode: false,
    shownav: false,
    isCodeOpen: false
  };
  getMd(name) {
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
  codeMaxheight = 0;
  codeTransTime = 0.3;
  componentDidUpdate() {
    this.setCodeProps();
  }
  setCodeProps() {
    if (this.codeBlock && this.codeBlock.current) {
      // hljs.highlightBlock(this.codeBlock.current.querySelector('code'));
      const $codeContainer = this.codeBlock.current;
      const codeMaxheight = $codeContainer.offsetHeight + 200;
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
  renderSide() {
    const mainNav = [];
    for (const i in compMap) {
      const item = compMap[i];
      const { prefix, list } = item;
      const isComps = prefix === 'components';
      const navItem = (
        <div class="nav">
          <h3 class="nav-head">{item.name}</h3>
          {list.map((ele, key) => (
            <div class="nav-block" key={key}>
              {ele.name && <p class="nav-name">{ele.name}</p>}
              {ele.list.map(comp => {
                if ((isComps && compInfo[comp.url]) || !isComps) {
                  return (
                    <a
                      class={cx('nav-item', {
                        'nav-item__actived': comp.url === this.props.name
                      })}
                      href={`/${prefix}/${comp.url}`}
                      key={comp.url}
                    >
                      {isComps
                        ? // eslint-disable-next-line prettier/prettier
                          `${compInfo[comp.url].displayName} - ${
                            compInfo[comp.url].desc
                          }`
                        : comp.name}
                    </a>
                  );
                }
                return null;
              })}
            </div>
          ))}
        </div>
      );
      mainNav.push(navItem);
    }
    return <div class="caf-doc-side-wrapper">{mainNav}</div>;
  }
  codeBlock = createRef();
  codeContainer = createRef();
  render({ name }, { markdown, code, isCodeOpen, showcode, shownav }) {
    return (
      <div class="caf-doc">
        <h1 class="caf-doc-head">
          <span
            class="head-icon head-icon__menu"
            onClick={this.toggleStatus('shownav')}
          >
            <Icon icon="menu" />
          </span>
          <div class="head-bar">
            <img src="/assets/Cafune.png" class="head-bar-logo" />
          </div>
          <span
            class="head-icon head-icon__code"
            onClick={this.toggleStatus('showcode')}
          >
            <Icon icon="more" />
          </span>
        </h1>
        <div class="caf-doc-main">
          <div class="caf-doc-side" data-status={shownav ? 1 : 0}>
            <div
              class="caf-doc-side-mask"
              onClick={this.toggleStatus('shownav')}
            />
            {this.renderSide()}
          </div>
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
          <div class="caf-doc-simulator" data-status={showcode ? 1 : 0}>
            <div class="simulator-head" />
            <iframe src={`/comp/${name}`} frameBorder="0" />
            <div class="simulator-foot" />
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
