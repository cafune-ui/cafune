import { TabBar } from 'components';
const { TabBarItem } = TabBar;
import { render } from 'enzyme';
import { shallow, deep } from 'preact-render-spy';

describe('<TabBar />', () => {
  it('should render porperly', () => {

    const change = jest.fn();
    let wrapper = deep(
      <TabBar activedId="news" onChange={change}>
        <TabBarItem
          text="news"
          id="news"
          icons={{
            actived: '/assets/icons/news_actived.png',
            normal: '/assets/icons/news.png'
          }}
        />
        <TabBarItem
          text="match"
          id="match"
          disabled={true}
          icons={{
            actived: '/assets/icons/news_actived.png',
            normal: '/assets/icons/news.png'
          }}
        />
        <TabBarItem
          text="leagues"
          id="leagues"
          icons={{
            actived: '/assets/icons/news_actived.png',
            normal: '/assets/icons/news.png'
          }}
        />
      </TabBar>
    );
    wrapper.find('.tabbar_item').simulate('click');
    expect(wrapper.find('.tabbar__fixed').length).toBe(1);
    expect(wrapper.find('.tabbar_item').length).toBe(3);
    expect(change).toHaveBeenCalled();

    wrapper = deep(
      <TabBar activedId="news" fixed={false}>
        <TabBarItem
          text="news"
          id="news"
          icons={{
            actived: '/assets/icons/news_actived.png',
            normal: '/assets/icons/news.png'
          }}
        />
        <TabBarItem
          text="match"
          id="match"
          disabled={true}
          icons={{
            actived: '/assets/icons/news_actived.png',
            normal: '/assets/icons/news.png'
          }}
        />
        <TabBarItem
          text="leagues"
          id="leagues"
          icons={{
            actived: '/assets/icons/news_actived.png',
            normal: '/assets/icons/news.png'
          }}
        />
      </TabBar>
    );
    expect(wrapper.find('.tabbar__fixed').length).toBe(0);
    wrapper.render(null)
  });
});
