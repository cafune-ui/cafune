import { h } from 'preact';
import Tabs from '../';
const { Nav, Panel } = Tabs;
import { render } from 'enzyme';
import { shallow, deep } from 'preact-render-spy';

describe('<Tabs />', () => {
  it('should render porperly', () => {
    const wrapper = render(
      <Tabs activeId="a">
        <Panel label="A" id="a" className="test">
          <div>A</div>
        </Panel>
      </Tabs>
    );
    expect(wrapper.find('.tabNav').length).toBe(1);
    expect(wrapper.find('.tabPanel').length).toBe(1);
    expect(wrapper.find('.tabItem').length).toBe(1);
  });
  it('should render round panel', () => {
    const wrapper = render(
      <Tabs activeId="a" type="round">
        <Panel label="A" id="a">
          <div>A</div>
        </Panel>
      </Tabs>
    );
    expect(wrapper.find('.tabNav__slider').length).toBe(0);
    expect(wrapper.find('.tabNav__round').length).toBe(1);
  });
  it('should render card panel', () => {
    const wrapper = render(
      <Tabs activeId="a" type="card">
        <Panel label="A" id="a">
          <div>A</div>
        </Panel>
      </Tabs>
    );
    expect(wrapper.find('.tabNav__slider').length).toBe(0);
    expect(wrapper.find('.tabNav__card').length).toBe(1);
  });
  it('should render nothing', () => {
    const wrapper = render(<Tabs activeId="a" />);
    expect(wrapper.find('.tabNav').length).toBe(0);
    expect(wrapper.find('.tabPanel').length).toBe(0);
    expect(wrapper.find('.tabItem').length).toBe(0);
  });
  it('should render nav alone', () => {
    const tabsData = [
      {
        id: 'Sporttrey320',
        actived: true,
        label: '足球'
      },
      {
        id: 'Sporttrey307',
        actived: false,
        label: '篮球'
      },
      {
        id: 'Sporttrey327',
        actived: false,
        label: 'aa球'
      }
    ];
    const wrapper = render(
      <div
        style="width: 400px;padding: 10px 20px;margin: 20px auto;background: #3f77f6;"
      >
        <Nav tabsData={tabsData} type="card" />
      </div>
    );
    expect(wrapper.find('.tabNav').length).toBe(1);
    expect(wrapper.find('.tabItem').length).toBe(3);
  });
  it('should trigger change', () => {
    const fn = jest.fn();
    const wrapper = deep(
      <Tabs activeId="b" onChange={fn}>
        <Panel label="A" id="a" className="test">
          <div>A</div>
        </Panel>
        <Panel label="B" id="b">
          <div>B</div>
        </Panel>
      </Tabs>
    );
    wrapper.find('.tabItem').simulate('click');
    expect(fn).toHaveBeenCalledWith('a');
    wrapper.render(
      <Tabs activeId="a" onChange={fn}>
        <Panel label="A" id="a" className="test">
          <div>A</div>
        </Panel>
        <Panel label="B" id="b">
          <div>B</div>
        </Panel>
      </Tabs>
    );
    expect(wrapper).toMatchSnapshot();
    wrapper.render(null);
    expect(wrapper).toMatchSnapshot();
  });
});
