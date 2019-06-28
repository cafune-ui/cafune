# Tabs - 标签卡

## 引入
```jsx
import { Tabs } from 'components';
```
## 使用

```jsx
class NormalTab extends Component {
  state = {
    activeId: 'a'
  }
  onChange = id =>  {
   this.setState({
      activeId: id,
   })
  }
 render({}, { activeId }) {
   return (
     <Tabs activeId={ activeId } onChange={ this.onChange }>
       <TabPanel label="A" id="a">
        <div>A</div>
        </TabPanel>
        <TabPanel label="B" id="b">
          <div>B</div>
       </TabPanel>
       <TabPanel label="C" id="c" visable={false}>
         <div>C</div>
       </TabPanel>
   </Tabs>
    )
  }
}
```

单独使用Nav

```jsx
const tabsData = [
  {
    id: 'Sporttrey320',
   actived: true,
   label: '足球'
 },
 {
   id: 'Sporttrey307',
   actived: false,
  label: '篮球'
 },
{
   id: 'Sporttrey327',
   actived: false,
   label: 'aa球'
 }
];
// ...
<TabNav tabsData={tabsData} type="card" />
// ...
```

当需要隐藏掉某个tab但里面涉及的功能需要保留时，使用visable将该tab标签隐藏掉，需要配合activeId 更改

## 配置项
| 参数 | 说明 | 类型 | 默认值 |备选值 | 是否必须 |
| --- | --- | --- | --- | --- | --- |
| activeId | 当前激活id | union | - | - | ✅  |
| type | 组件类型 | enum | `'slider'` | `'slider'`,`'round'`,`'card'` | ❌ |
| onTabChange | 切换tab时回调 | func | - | - | ❌ |
| navClass | 自定义标签栏类名 | string | - | - | ❌ |
| maxCount | 最大可容纳标签数 | number | `5` | - | ❌ |


---

### Nav 配置项

| 参数 | 说明 | 类型 | 默认值 |备选值 | 是否必须 |
| --- | --- | --- | --- | --- | --- |
| tabsData | 当前激活id | id - union(✅ )<br>label - string(✅ )<br>actived - bool(✅ )<br>className - string(❌)<br>visable - bool(❌)<br> | - | - | ✅  |
| type | 组件类型 | enum | `'slider'` | `'slider'`,`'round'`,`'card'` | ❌ |
| onChange | 切换tab时回调 | func | - | - | ❌ |
| navClass | 自定义标签栏类名 | string | - | - | ❌ |
| maxCount | 最大可容纳标签数 | number | `5` | - | ❌ |


---

### TabPanel 配置项

| 参数 | 说明 | 类型 | 默认值 |备选值 | 是否必须 |
| --- | --- | --- | --- | --- | --- |
| id | 面板的id | union | - | - | ✅  |
| label | 标签名字 | string | - | - | ❌ |
| className | 自定义类名 | string | - | - | ❌ |
| visable | 是否显示 | bool | `true` | - | ❌ |
