import  ActionBar  from '../';
import { shallow, render } from 'enzyme';

describe('<ActionBar />', () => {
  beforeEach(() => {
    global.window = {};
  });
  it('should render porperly', () => {
    const descContent = 'test desc';
    const btnContent = 'btn content';
    const btns = [
      {
        children: 'btn content'
      },
    ];
    const additionMsg = 'additionMsg';
    const wrapper = render(
      <ActionBar
        desc={descContent}
        btns={btns}
        additionMsg={additionMsg}
        disabled={true}
      />
    );
    expect(wrapper.find('.caf-actionbar__main__desc').text()).toEqual(descContent);
    expect(wrapper.find('.caf-btn').text()).toEqual(btnContent);
    expect(wrapper.find('.caf-actionbar__tip').length).toBe(1);
    expect(wrapper.find('.caf-actionbar__tip').text()).toEqual(additionMsg);
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
   
    setTimeout(() => {
      expect(document.querySelector(wrapElement).style.paddingBottom).toBe('');
    }, 500);
  });
});
