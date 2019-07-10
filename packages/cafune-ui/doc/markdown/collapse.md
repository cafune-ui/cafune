# Collapse - 折叠面板

## 引入
```jsx
import { Collapse } from 'components';
```
## 使用

```javascript
const CollapseItem = Collapse.Item;
// ...
<Collapse actives={activeCol} onChange={this.onChange}>
 <CollapseItem title="标题1" id="a">
   内容1
 </CollapseItem>
 <CollapseItem title="标题2" id="b">
   内容2
 </CollapseItem>
 <CollapseItem title="标题3" id="c" disabled>
   内容3
 </CollapseItem>
</Collapse>
```



### CollapseItem 配置项
