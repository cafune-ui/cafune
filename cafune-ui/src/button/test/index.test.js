import Button from '../';
import { render } from 'enzyme';
import { shallow, deep } from 'preact-render-spy';

describe('<Button />', () => {
  it('should render with diffrent type', () => {
    const wrapper = deep(
      <div>
        <Button radius={false} size="large">
          默认按钮
        </Button>
        <Button ghost type="primary" size="normal">
          主要按钮
        </Button>
        <Button type="warning" radius size="small">
          警告按钮
        </Button>
        <Button loading radius={{}} type="cancel" size="tiny">
          取消按钮
        </Button>
        <Button block radius="16px">
          块状按钮
        </Button>
      </div>
    );
    expect(wrapper).toMatchSnapshot();
  });

  it('should render with icon', () => {
    const wrapper = deep(
      <div>
        <Button icon={{ type: 'search', positon: { right: '21px' } }}>图标按钮</Button>
        <Button icon={{ type: <div>fd</div>, position: 'right' }}>
          图标位置
        </Button>
        <Button
          icon={{
            type: 'arrow-right',
            position: { left: '10px', right: '20px' }
          }}
          style={{ width: '120px', justifyContent: 'flex-start' }}
        >
          图标位置
        </Button>

        <Button
          icon={{
            type: 'arrow-right',
            position: "left"
          }}
          style={{ width: '120px', justifyContent: 'flex-start' }}
        >
          图标位置
        </Button>
      </div>
    );
    expect(wrapper).toMatchSnapshot();
  });

  it('should render with loading', () => {
    const wrapper = deep(
      <div>
        <Button loading>加载按钮</Button>
        <Button
          type="primary"
          loading
          loadingInfo={{ color: '#369', type: 'ripple', size: '24px' }}
        >
          加载按钮
        </Button>
        <Button
          type="warning"
          loading
          loadingInfo={{ type: 'step', size: '20px' }}
        >
          加载按钮
        </Button>

        <Button
          type="warning"
          loading
          ghost
          loadingInfo={{ type: 'step', size: '20px' }}
        >
          加载按钮
        </Button>
      </div>
    );
    expect(wrapper).toMatchSnapshot();
  });
  it('should render with gradient', () => {
    const wrapper = deep(
      <div>
        <Button
          gradient={{
            angle: 30,
            from: '#FC5C7D',
            to: '#6A82FB',
            shadow: '0 6px 8px -3px #d9669e'
          }}
        >
          渐变按钮
        </Button>
        <Button
          gradient={{}}
        >
          渐变按钮
        </Button>
      </div>
    );
    expect(wrapper).toMatchSnapshot();
  });

  it('should trigger event', () => {
    const clickFn = jest.fn();
    const wrapper = shallow(<div><Button onClick={clickFn}>非禁用按钮</Button></div>);
    wrapper.find('Button').simulate('click');
    expect(clickFn).toHaveBeenCalled();
  });

  it('should not trigger event', () => {
    const clickFn = jest.fn();
    const wrapper = shallow(
      <div>
        <Button disabled={true} onClick={clickFn}>
          禁用按钮
        </Button>
      </div>
    );
    wrapper.simulate('click');
    expect(clickFn).not.toHaveBeenCalled();
  });
});
