import { h } from 'preact';
import { ActionBar } from '../';
import { shallow, render } from 'enzyme';

describe('<ActionBar />', () => {
  beforeEach(() => {
    global.window = {};
  });
  it('should render porperly', () => {
    const descContent = 'test desc';
    const btnContent = 'btn content';
    const additionMsg = 'additionMsg';
    const wrapper = render(
      <ActionBar
        descContent={descContent}
        btnContent={btnContent}
        additionMsg={additionMsg}
        disabled={true}
      />
    );
    expect(wrapper.find('.caf-actionbar-main-desc').text()).toEqual(descContent);
    expect(wrapper.find('.caf-actionbar-main-btn').text()).toEqual(btnContent);
    expect(wrapper.find('.caf-actionbar-main-btn').is('[data-disabled="1"]')).toBe(true);
    expect(wrapper.find('.caf-actionbar-tip').length).toBe(1);
    expect(wrapper.find('.caf-actionbar-tip').text()).toEqual(additionMsg);
  });
  it('should trigger click on btn click', () => {
    const onClick = jest.fn();
    const wrapper = shallow(<ActionBar handleClick={onClick} />);
    wrapper.find('.caf-actionbar-main-btn').simulate('click');
    expect(onClick).toHaveBeenCalled();
  });
  it('should set padding', () => {
    const wrapElement = 'body';
    const wrapper = shallow(<ActionBar wrapElement={wrapElement} />);
    setTimeout(() => {
      expect(document.querySelector(wrapElement).style.paddingBottom).not.toBe(
        ''
      );
    }, 0);
    wrapper.render(null);
    expect(document.querySelector(wrapElement).style.paddingBottom).toBe('');
  });
});
