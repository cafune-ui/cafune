
## 引入
```jsx
import { TabBar } from 'components';
const { TabBarItem } = TabBar;
```
## 使用

```jsx
export default class TestComp extends Component {
  state = {
    page: 'news',
  }
  onChange = activedId => {
    this.setState({
      page: activedId,
    })
  };
  render({}, {page}) {
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
          <TabBarItem text="match" id="match" />
          <TabBarItem text="leagues" id="leagues" />
        </TabBar>
      </div>
    );
  }
}
```
## 配置项
| 参数 | 说明 | 类型 | 默认值 |备选值 | 是否必须 |
| --- | --- | --- | --- | --- | --- |
| fixed | 是否固定在底部 | boolean | true | - | 否 |
| activedColor | 高亮时文字颜色 | string | `'#3f77f6'` | - | 否 | 
| onChange | 切换tab时回调 | fun | - | - | 否 |

## TabBarItem 配置项
| 参数 | 说明 | 类型 | 默认值 |备选值 | 是否必须 |
| --- | --- | --- | --- | --- | --- |
| text | 展示文字 | string | - | - | 是 |
| id | tabid | string|number | - | 是 |
| icons | 图标集 | object | - | - | 否 |
| disabled | 是否禁用 | boolean | `false` | - | 否 |