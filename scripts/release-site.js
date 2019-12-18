const ghpages = require('gh-pages');
const { resolve } = require('path');
const docPath = resolve(process.cwd(), './doc/build');

ghpages.publish(
  docPath,
  { repo: 'https://github.com/cafune-ui/cafune-ui.git' },
  function(err) {
    console.log(err, 'ok');
  }
);
