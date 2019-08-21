import { h } from 'preact';
import  Modal  from '../';
import { render } from 'enzyme';
import { shallow, deep } from 'preact-render-spy';

describe('<Modal />', () => {
  beforeEach(() => {
    global.window = {};
    // Object.defineProperty(window, 'android', android);
  });
  it('should render nothing', () => {
    const wrapper = render(<Modal>test</Modal>);
    expect(wrapper.find('.caf-modal').length).toBe(0);
  });
  it('should render somthing', () => {
    const wrapper = render(<Modal visable>test</Modal>);
    expect(wrapper.find('.caf-modal-bg').length).toBe(1);
  });
  it('should render with title', () => {
    const testTitle = 'test ttitle';
    const wrapper = render(<Modal title={testTitle} visable>test</Modal>);
    expect(wrapper.find('.caf-modal-content-header').text()).toEqual(testTitle);;
  });
  it('should render with cancel button', () => {
    const testText = 'test text';
    const onCancel = jest.fn();
    const wrapper = shallow(<Modal showCancel={true} cancelContent={testText} onCancel={onCancel} visable>test</Modal>);
    expect(wrapper.find('.caf-modal-btngroup__cancel').text()).toEqual(testText);
    wrapper.find('.caf-modal-btngroup__cancel').simulate('click');
    expect(onCancel).toHaveBeenCalled();
  });
  it('should render with confirm button', () => {
    const testText = 'test text';
    const onConfirm = jest.fn();
    const wrapper = shallow(<Modal confirmContent={testText} onConfirm={onConfirm} visable>test</Modal>);
    expect(wrapper.find('.caf-modal-btngroup__confirm').text()).toEqual(testText);
    wrapper.find('.caf-modal-btngroup__confirm').simulate('click');
    expect(onConfirm).toHaveBeenCalled();
  });
  it('should render with no mask', () => {
    const wrapper = shallow(<Modal mask={false} visable>test</Modal>);
    expect(wrapper.find('.caf-modal-bg').length).toBe(0);
  });
  it('should render with align left', () => {
    const wrapper = shallow(<Modal align="left" visable>test</Modal>);
    expect(wrapper.find('.caf-modal-content__center').length).toBe(0);
  });
  it('should render with message', () => {
    const testMsg = 'test message';
    const wrapper = render(<Modal visable message={testMsg} />);
    expect(wrapper.find('.caf-modal-content__center').text()).toBe(testMsg);
  });
  it('should open dialog when alert called', () => {
    Modal.alert({
      message: 'message',
    })
    expect(document.querySelectorAll('.caf-modal').length).toBe(1);
  });
  it('should open dialog when confirm caled', () => {
    Modal.confirm({
      message: 'message',
    })
    expect(document.querySelectorAll('.caf-modal').length).toBe(1);
    setTimeout(() => {
      expect(document.body.style.overflow).toBe('hidden');
    }, 0);
    document.querySelector('.caf-modal-btngroup__cancel').dispatchEvent(new Event('click'));
    setTimeout(() => {
      expect(document.body.style.overflow).toBe('');
    }, 0);
  });
  
});
