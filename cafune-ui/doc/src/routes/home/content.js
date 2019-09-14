import { Component } from 'preact';
import CodeBlock from './code';
// import SyntaxHighlighter from 'react-syntax-highlighter';
// import { atomOneDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';

export default class Content extends Component {
  state = {
    markdown: null
  };

  getMd(name) {
    const { compInfo } = this.props;
    if (name) {
      let mdPromise;
      if (compInfo[name]) {
        mdPromise = import(`@docmd/components/${name}.md`);
      } else {
        mdPromise = import(`@docmd/doc/${name}.md`);
      }
      mdPromise
        .then(data => {
          let mdHtml = data.default.match(/module.exports = "((.|\n)+)";$/);
          if (mdHtml) {
            mdHtml = mdHtml[1]
              .replace(/\\n(?!(<\/|$))/g, '&#10;')
              .replace(/\\n/g, '')
              .replace(/\\/g, '');
            this.setState({
              markdown: mdHtml
            });
          }
        })
        .catch(e => {
          console.error(e);
          this.setState({
            markdown: `<div>markdown not exist</div>`
          });
        });
    }
  }
  componentWillReceiveProps(nextProps) {
    if (this.props.name !== nextProps.name) {
      this.getMd(nextProps.name);
      this.setState({
        shownav: false
      });
    }
  }
  componentWillMount() {
    this.getMd(this.props.name);
  }
  render({ name, compInfo, type }, { markdown }) {
    return (
      <div class="caf-doc-content caf-markdown">
        <div
          class="caf-markdown-contain"
          dangerouslySetInnerHTML={{ __html: markdown }}
        />
        {type === 'component' && <CodeBlock name={name} compInfo={compInfo} />}
      </div>
    );
  }
}
