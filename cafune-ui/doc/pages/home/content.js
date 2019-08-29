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
  render({ name, compInfo }, { markdown }) {
    return (
      <div class="caf-doc-content caf-markdown">
        <div
          class="caf-markdown-contain"
          dangerouslySetInnerHTML={{ __html: markdown }}
        />
        <CodeBlock name={name} compInfo={compInfo} />
      </div>
    );
  }
}
