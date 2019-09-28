import ActionSheet from '../';
import { render } from 'enzyme';
import { shallow, deep } from 'preact-render-spy';

describe('ActionSheet', () => {
  it('should render properly', () => {
    const wrapper = shallow(
      <ActionSheet
        title="test title"
        horizon={{
          wrap: false,
          list: [
            {
              name: 'hi',
              subName: 'hi sub',
              icon:
                'https://image.uisdc.com/wp-content/uploads/2018/07/uiii-ps-icon.png',
              badge: true,
              action() {
                console.log('ps hi');
              }
            },
            {
              name: 'hi2',
              subName: 'hi2 sub',
              icon: 'search',
              badge: '2',
              action: '/'
            },
            {
              name: 'hi2',
              subName: 'hi2 sub',
              icon: 'search',
              badge: '2'
            },
            {
              name: 'hi2',
              subName: 'hi2 sub',
              icon: 'search',
              badge: '2'
            },
            {
              name: 'hi2',
              subName: 'hi2 sub',
              icon: 'search',
              badge: '2'
            }
          ]
        }}
      />
    );
    expect(wrapper).toMatchSnapshot();
  });
});
