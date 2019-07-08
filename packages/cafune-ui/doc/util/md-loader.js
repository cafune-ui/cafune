const MarkdownIt = require('markdown-it');
const hljs = require('highlight.js');
// const cardWrapper = require('./card-wrapper');

function highlight(str, lang) {
  if (lang && hljs.getLanguage(lang)) {
    return hljs.highlight(lang, str, true).value;
  }

  return '';
}

// function wrapper(content) {
//   // content = cardWrapper(content);
//   return content;
// }

const parser = new MarkdownIt({
  html: true,
  highlight
});

module.exports = function(source) {
  this.cacheable && this.cacheable();

  // options = {
  //   wrapper
  // };

  return parser.render(source);
};
