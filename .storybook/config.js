import { configure, addParameters } from '@storybook/preact';
// automatically import all files ending in *.stories.js
const req = require.context('../stories', true, /\.stories\.js$/);
function loadStories() {
  req.keys().forEach(filename => req(filename));
}

addParameters({
  options: {
    name: '球匠 组件文档',
  }
})
configure(loadStories, module);