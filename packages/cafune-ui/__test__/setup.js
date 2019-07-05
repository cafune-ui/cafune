const Enzyme = require('enzyme');
const { Adapter } = require('enzyme-adapter-preact');

Enzyme.configure({ adapter: new Adapter() });

global.window = {android: {
  webFinish: jest.fn()
}};
global.history = {
  back: jest.fn()
};
