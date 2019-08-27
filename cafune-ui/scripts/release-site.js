const ghpages = require('gh-pages');
const { resolve } = require('path');
const docPath = resolve(process.cwd(), './cafune-ui/doc/build');

ghpages.publish(
  docPath,
  { add: true, push: false, repo: 'https://github.com/cafune-ui/cafune-ui.git' },
  function(err) {
    console.log(err, 'ok');
  }
);
