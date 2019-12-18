import Tabs from '../';
const { Nav, Panel } = Tabs;
import { render } from 'enzyme';
import { shallow, deep } from 'preact-render-spy';

const tabsData = [
  {
    id: 'label1',
    actived: false,
    label: '标签一'
  },
  {
    id: 'label2',
    actived: true,
    label: '标签二'
  },
  {
    id: 'label3',
    actived: false,
    label: '标签三'
  },
  {
    id: 'label4',
    actived: false,
    label: '标签四'
  }
];

describe('<Tabs />', () => {
  it('should render porperly', () => {
    const wrapper = deep(
      <Tabs activeId="a">
        {tabsData.map(item => (
          <Panel label={item.label} id={item.id}>
            {item.label}
          </Panel>
        ))}
      </Tabs>
    );
    expect(wrapper.find('.caf-tabs__nav').length).toBe(1);
    expect(wrapper.find('.caf-tabs__panel').length).toBe(tabsData.length);
    expect(wrapper.find('.caf-tabs__nav__item').length).toBe(tabsData.length);
  });

  it('should have maxwidth', () => {
    const wrapper = deep(
      <Tabs activeId="a" maxCount={2}>
        {tabsData.map(item => (
          <Panel label={item.label} id={item.id}>
            {item.label}
          </Panel>
        ))}
      </Tabs>
    );
    expect(wrapper.find('.caf-tabs__nav__item').first().attr('style')).toEqual(
      'min-width:50%'
    );
  });
  it('should render different type', () => {
    const wrapper = shallow(
      <Tabs activeId="a" type="slider">
        <Panel label="A" id="a">
          <div>A</div>
        </Panel>
      </Tabs>
    );
    expect(wrapper).toMatchSnapshot();

    wrapper.render(
      <Tabs activeId="a" type="contrast">
        <Panel label="A" id="a">
          <div>A</div>
        </Panel>
      </Tabs>
    );
    expect(wrapper).toMatchSnapshot();
    wrapper.render(
      <Tabs activeId="a" type="card">
        <Panel label="A" id="a">
          <div>A</div>
        </Panel>
      </Tabs>
    );
    expect(wrapper).toMatchSnapshot();
  });

  it('should render nothing', () => {
    const wrapper = render(<Tabs activeId="a" />);
    expect(wrapper.find('.caf-tabs__nav').length).toBe(0);
    expect(wrapper.find('.caf-tabs__panel').length).toBe(0);
    expect(wrapper.find('.caf-tabs__nav__item').length).toBe(0);
  });

  it('should render nav alone', () => {
    const wrapper = render(
      <div >
        <Nav tabsData={tabsData} activeId="label2" />
      </div>
    );
    expect(wrapper.find('.caf-tabs__nav').length).toBe(1);
    expect(wrapper.find('.caf-tabs__nav__item').length).toBe(tabsData.length);

    const wrapper2 = render(
      <div>
        <Tabs tabs={tabsData} activeId="label3" />
      </div>
    );
    expect(wrapper2.find('.caf-tabs__nav').length).toBe(1);
    expect(wrapper2.find('.caf-tabs__nav__item').length).toBe(tabsData.length);
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
        <Panel label="B">
          <div>B</div>
        </Panel>
      </Tabs>
    );
    wrapper.find('.caf-tabs__nav__item').first().simulate('click');
    expect(fn).toHaveBeenCalledWith('a');
    expect(fn).toHaveBeenCalledTimes(1);
    wrapper.render(
      <Tabs>
        <Panel label="A" id="a" className="test">
          <div>A</div>
        </Panel>
        <Panel label="B" id="b">
          <div>B</div>
        </Panel>
        <div>test</div>
      </Tabs>
    );
    wrapper.find('.caf-tabs__nav__item').last().simulate('click');
    expect(fn).toHaveBeenCalledTimes(1);
    expect(wrapper).toMatchSnapshot();
    wrapper.render(null);
    expect(wrapper).toMatchSnapshot();
  });
});
