import { h } from 'preact';
import { Skeleton } from 'components';
const { Circle, Rect } = Skeleton;
import { render } from 'enzyme';
import { shallow } from 'preact-render-spy';

describe('<Skeleton />', () => {
  it('should render porperly', () => {
    const wrapper = render(<Skeleton>
      <Circle />
      <Rect/>
    </Skeleton>);
    expect(wrapper).toMatchSnapshot();
  });
  it('should render porperly', () => {
    const wrapper = render(<Skeleton width="50px" height="50px" >
      <Circle x="2px" y="2px" radius="50px" />
      <Rect x="2px" y="2px" radius="50px" width="50px" height="50px" />
    </Skeleton>);
    expect(wrapper).toMatchSnapshot();
  });
});
