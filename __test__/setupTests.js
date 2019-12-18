import { JSDOM } from 'jsdom';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-preact-pure';

const dom = new JSDOM('', {
  // Enable `requestAnimationFrame` which Preact uses internally.
  pretendToBeVisual: true,
});


global.window = {
  android: {
    webFinish: jest.fn()
  }
};

global.history = {
  back: jest.fn()
};

// // @ts-ignore
// global.Event = dom.window.Event;
// // @ts-ignore
// global.Node = dom.window.Node;
// // @ts-ignore
// // global.document = dom.window.document;
// // @ts-ignore
// global.requestAnimationFrame = dom.window.requestAnimationFrame;

configure({ adapter: new Adapter() });