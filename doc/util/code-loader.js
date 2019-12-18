const Prism = require('prismjs');
module.exports = function(source) {
  this.cacheable && this.cacheable();
  // const highlightjs = hljs.highlight('javascript', source, true).value;
  // const code = hljs.highlightAuto(source, ['javascript', 'xml']).value;
  const code = Prism.highlight(
    source,
    Prism.languages.javascript,
    'javascript'
  );
  return `module.exports = ${JSON.stringify(code)}`;
};
