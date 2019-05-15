import { Component } from 'preact';
import { storiesOf } from '@storybook/preact';
import { TabBar } from 'components';
const { TabBarItem } = TabBar;
import './style.css';
import notes from './markdown/tabBar.md';

class TestComp extends Component {
  state = {
    page: 'news'
  };
  onChange = activedId => {
    this.setState({
      page: activedId
    });
  };
  render({}, { page }) {
    return (
      <div>
        <TabBar activedId={page} onChange={this.onChange}>
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
      </div>
    );
  }
}
storiesOf('Component|TabBar 标签栏', module).add(
  'TabBar 标签栏',
  () => <TestComp />,
  {
    notes
  }
);
