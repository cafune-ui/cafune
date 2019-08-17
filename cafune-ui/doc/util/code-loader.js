import hljs from 'highlight.js';
// import javascript from 'highlight.js/lib/languages/javascript';
// import xml from 'highlight.js/lib/languages/xml';

// hljs.registerLanguage('javascript', javascript);
// hljs.registerLanguage('xml', xml);

module.exports = function(source) {
  this.cacheable && this.cacheable();
  // const highlightjs = hljs.highlight('javascript', source, true).value;
  const code = hljs.highlightAuto(source, ['javascript', 'xml']).value;
  return `module.exports = ${JSON.stringify(code)}`;
};
