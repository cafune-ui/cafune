const hljs = require('highlight.js');

module.exports = function(source) {
  this.cacheable && this.cacheable();
  const code = hljs.highlight('javascript', source, true).value;
  return `module.exports = ${JSON.stringify(code)}`;
};
