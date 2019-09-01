# 安装
``` bash
$ npm install cafune-ui --save
```

---

# 引入

## 正常引入
  ### 组件引入
  ```jsx
  import { Button } from 'cafune';
  ```

  ### 样式引入

  1. 引入全部样式
      ```jsx
      import 'cafune/style';
      ```

  2. 引入单个样式
      ```jsx
      import 'cafune/style/button'
      ```

## 按需加载

`cafune` 支持使用`babel-plugin-import` 来进行按需引入组件的方式

```bash
$ npm install babel-plugin-import --save-dev
```
在.babelrc中配置
```js
{
  "plugins": [
    ["import", { libraryName: "cafune", style: "css" }] // `style: true` 会加载 less 文件
  ]
}
```
然后只需引入组件即可，无需再引入样式
```jsx
// babel-plugin-import 会帮助你加载 JS 和 CSS
import { Button } from 'cafune';
```