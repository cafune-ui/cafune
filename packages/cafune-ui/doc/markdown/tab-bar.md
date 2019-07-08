# TabBar - 标签栏

## 引入
```javascript
import { TabBar } from 'components';
```
## 使用

```javascript
const { TabBarItem } = TabBar;
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


---

### TabBarItem 配置项

| 参数 | 说明 | 类型 | 默认值 |备选值 | 是否必须 |
| --- | --- | --- | --- | --- | --- |
| text | 展示文字 | string | - | - | ✅  |
| id | tab唯一标示 | union | - | - | ✅  |
| icons | 图标集 | actived - string(❌)<br>normal - string(❌)<br> | - | - | ❌ |
| disabled | 是否禁用 | bool | `false` | - | ❌ |
