import { Lazyload } from 'components';
import { render } from 'enzyme';
import { shallow, deep } from 'preact-render-spy';

describe('lazyload', () => {
  it('should render properly', () => {
    const wrapper = shallow(
      <Lazyload imgClass="lazy">
        <img
          src="https://via.placeholder.com/200x150.png?text=playholder"
          data-src="https://via.placeholder.com/200x150.png?text=original"
          class="lazy"
        />
      </Lazyload>
    );
    expect(wrapper).toMatchSnapshot();
    wrapper.render(null);
    expect(wrapper).toMatchSnapshot();
  });
});
