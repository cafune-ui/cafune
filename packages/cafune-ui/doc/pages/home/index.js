import { h, Component } from 'preact';
import AsyncRoute from 'preact-async-route';
import CompList from '../../complist';
export class Home extends Component {
  state = {
    markdown: null
  };
  getComp(name) {
    if (name && CompList.includes(name)) {
      return (
        <AsyncRoute
          path={`/${name}`}
          getComponent={() =>
            import(`./components/${name}`).then(module => module.default)
          }
        />
      );
    } else {
      return <div>unavailable comp</div>;
    }
  }
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
  render({ name }, { markdown }) {
    const Comp = this.getComp(name);
    return (
      <div class="caf-doc">
        <h1 class="caf-doc-head">Cafune</h1>
        <div class="home-side">sidehere</div>
        <div
          class="caf-markdown"
          dangerouslySetInnerHTML={{ __html: markdown }}
        />
        <div class="home-demo">{Comp}</div>
      </div>
    );
  }
}

export default Home;
