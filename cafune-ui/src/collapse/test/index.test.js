import Collapse from '../';
const { Item } = Collapse;
import { render } from 'enzyme';
import { shallow, deep } from 'preact-render-spy';

describe('Collapse', () => {
  it('should render properly', () => {
    const changFn = jest.fn();
    const wrapper = deep(
      <Collapse actives={['display', 'fds']} onActivesChange={changFn}>
        <Item title="基础组件" id="basic">
          <div style="padding: 15px">默认开启</div>
        </Item>
        <Item title="展示组件" id="display">
          <div style="padding: 15px">默认关闭</div>
        </Item>
        <Item title="展示组件" id="fds">
          <div style="padding: 15px">默认关闭</div>
        </Item>
      </Collapse>
    );
    expect(wrapper.find('.caf-collapse-item__actived').length).toEqual(2);

    wrapper
      .find('.caf-collapse-item')
      .first()
      .find('.caf-collapse-header')
      .simulate('click');
    expect(changFn).toHaveBeenCalledTimes(1);

    wrapper
      .find('.caf-collapse-item')
      .last()
      .find('.caf-collapse-header')
      .simulate('click');
    expect(changFn).toHaveBeenCalledTimes(2);
  });

  it('list data should in corret type', () => {
    const wrapper1 = deep(
      <Collapse actives={['display']} accordion>
        <Item title="基础组件" id="basic">
          <div style="padding: 15px">默认开启内容</div>
        </Item>
        <Item title="展示组件" id="display">
          <div style="padding: 15px">默认关闭</div>
        </Item>
        <Item title="展示组件(禁用)" id="disabled" disabled>
          默认关闭
        </Item>
      </Collapse>
    );
    expect(wrapper1.find('.caf-collapse-item').length).toEqual(0);

    const changFn = jest.fn();
    wrapper1.render(
      <Collapse actives="basic" accordion onActivesChange={changFn}>
        <Item title="基础组件" id="basic">
          <div style="padding: 15px">默认开启内容</div>
        </Item>
        <Item title="展示组件(禁用)" id="disabled" disabled>
          默认关闭
        </Item>
        <Item title="展示组件" id="display">
          <div style="padding: 15px">默认关闭</div>
        </Item>
      </Collapse>
    );
    wrapper1
      .find('.caf-collapse-item')
      .first()
      .find('.caf-collapse-header')
      .simulate('click');
    expect(changFn).toHaveBeenCalledWith('');

    wrapper1
      .find('.caf-collapse-item')
      .last()
      .find('.caf-collapse-header')
      .simulate('click');
    expect(changFn).toHaveBeenCalledWith('display');

    wrapper1.render(
      <Collapse actives="basic">
        <Item
          title="基础组件"
          id="basic"
          accordion
        >
          <div style="padding: 15px">默认开启内容</div>
        </Item>
        <Item title="展示组件" id="display">
          <div style="padding: 15px">默认关闭</div>
        </Item>
        <Item title="展示组件(禁用)" id="disabled" disabled>
          默认关闭
        </Item>
        <div>test</div>
      </Collapse>
    );
    wrapper1
      .find('.caf-collapse-item')
      .first()
      .find('.caf-collapse-header')
      .simulate('click');
    expect(changFn).toHaveBeenCalledTimes(2);

    wrapper1
      .find('.caf-collapse-item')
      .last()
      .find('.caf-collapse-header')
      .simulate('click');
    expect(changFn).toHaveBeenCalledTimes(2);



    wrapper1.render(
      <Collapse>
        <Item title="基础组件" id="basic">
          <div style="padding: 15px">默认开启内容</div>
        </Item>
        <Item title="展示组件" id="display">
          <div style="padding: 15px">默认关闭</div>
        </Item>
        <Item title="展示组件(禁用)" id="disabled" disabled>
          默认关闭
        </Item>
      </Collapse>
    );
    expect(wrapper1.find('.caf-collapse-item').length).toEqual(3);
  });
});
