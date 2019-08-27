const ghpages = require('gh-pages');
const { resolve } = require('path');
const docPath = resolve(process.cwd(), './cafune-ui/doc/build');

ghpages.publish(docPath, function(err) {
  console.log(err);
})