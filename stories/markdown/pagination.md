## 引入
```javascript
import { Pagination } from 'components';
```

## API

```jsx
class Page extends Component {
  state = {
    pn: 1,
    pages: 3,
  }
  onChange = pn =>  {
    this.setState({
      pn,
    })
  }
  render({}, { pn, pages }) {
    return (
      <Pagination pn={ pn } pages={ pages } onChange={ this.onChange } />
    )
  }
}
```

## 配置项
| 参数 | 说明 | 类型 | 默认值 | 备选值 | 是否必须 |
| --- | --- | --- | --- | --- | --- |
| pn | 当前页码 | number | - | - | 是 |
| pages | 总页数 | number | - | - | 是 |
| onChange | 点击切换时回调  | pn => any | - | - | 否 |