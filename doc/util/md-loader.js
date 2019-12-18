const MarkdownIt = require('markdown-it')({
  html: true,
  xhtmlOut: true,
  breaks: true,
  linkify: true
});
// const hljs = require('prismjs');
const Prism = require('markdown-it-prism');
MarkdownIt.use(Prism);

// const cardWrapper = require('./card-wrapper');

// function highlight(str, lang) {
//   if (lang && hljs.getLanguage(lang)) {
//     return hljs.highlight(lang, str, true).value;
//   }

//   return '';
// }

// function wrapper(content) {
//   // content = cardWrapper(content);
//   return content;
// }

// const parser = MarkdownIt({
//   html: true,
//   xhtmlOut: true,
//   breaks: true,
//   linkify: true,
//   highlight(str, lang) {
//     if (lang && hljs.getLanguage(lang)) {
//       try {
//         return hljs.highlight(lang, str).value;
//       } catch (__) {}
//     }

//     return '';
//   }
// });

module.exports = function(source) {
  this.cacheable && this.cacheable();

  // options = {
  //   wrapper
  // };

  return MarkdownIt.render(source);
};
