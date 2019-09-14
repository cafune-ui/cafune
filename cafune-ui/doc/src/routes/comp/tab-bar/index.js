import { TabBar } from 'cafune';
import { Component } from 'preact';
const { TabBarItem } = TabBar;

export default class TabBarComp extends Component {
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
        <div class="caf-demo-block">
          <p>{page}</p>
        </div>
        <TabBar activedId={page} onChange={this.onChange}>
          <TabBarItem
            text="news"
            id="news"
            icons={{
              actived:
                'https://image.flaticon.com/icons/png/128/2026/2026462.png',
              normal:
                'https://image.flaticon.com/icons/png/128/2026/2026450.png'
            }}
          />
          <TabBarItem
            text="match"
            id="match"
            icons={{
              actived:
                'https://image.flaticon.com/icons/png/128/2026/2026478.png',
              normal:
                'https://image.flaticon.com/icons/png/128/2026/2026469.png'
            }}
          />
          <TabBarItem
            text="leagues"
            id="leagues"
            icons={{
              actived:
                'https://image.flaticon.com/icons/png/128/2026/2026518.png',
              normal:
                'https://image.flaticon.com/icons/png/128/2026/2026521.png'
            }}
          />
        </TabBar>
      </div>
    );
  }
}
