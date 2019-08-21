import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-preact-pure';

configure({ adapter: new Adapter });

global.window = {android: {
  webFinish: jest.fn()
}};
global.history = {
  back: jest.fn()
};
