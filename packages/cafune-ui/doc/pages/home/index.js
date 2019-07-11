import { h, Component } from 'preact';
import CompInfo from '../../compinfo';
import { compMap } from 'util/get-comp-type';
import { Icon } from 'cafune';

export class Home extends Component {
  state = {
    markdown: null,
    showcode: false,
    shownav: false
  };
  getMd(name) {
    if (name && CompInfo[name]) {
      import(`../../markdown/${name}.md`).then(data => {
        let mdHtml = data.match(/module.exports = "((.|\n)+)";$/);
        if (mdHtml) {
          mdHtml = mdHtml[1].replace(/\\n+/g, '').replace(/\\/g, '');
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
  componentWillReceiveProps(nextProps) {
    if (this.props.name !== nextProps.name) {
      this.getMd(nextProps.name);
      this.setState({
        showcode: false,
        shownav: false
      });
    }
  }
  componentWillMount() {
    this.getMd(this.props.name);
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
          <h3 class="nav-head">{i}</h3>
          {list.map((ele, key) => (
            <div class="nav-block" key={key}>
              {ele.name && <p class="nav-name">{ele.name}</p>}
              {ele.list.map(comp => (
                <a
                  class="nav-item"
                  href={`/${prefix}/${comp.url}`}
                  key={comp.url}
                >
                  {isComps
                    ? `${CompInfo[comp.url].displayName} - ${CompInfo[comp.url].desc}`
                    : comp.name}
                </a>
              ))}
            </div>
          ))}
        </div>
      );
      mainNav.push(navItem);
    }
    return <div class="caf-doc-side-wrapper">{mainNav}</div>;
  }
  render({ name }, { markdown, showcode, shownav }) {
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
          <div class="caf-doc-content">
            <div
              class="caf-markdown"
              dangerouslySetInnerHTML={{ __html: markdown }}
            />
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
