import { h, Component } from 'preact';
import CompList from '../../complist';
import { Icon } from 'cafune';

export class Home extends Component {
  state = {
    markdown: null,
    showcode: false,
    shownav: false
  };
  getMd(name) {
    if (name && CompList.includes(name)) {
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
  componentWillMount() {
    this.getMd(this.props.name);
  }
  toggleStatus = name => () => {
    this.setState({
      [name]: !this.state[name]
    });
  };
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
            sidehere
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
