import { Component, h } from 'preact';
// import Icon from '../../icon';
// import { isBrowser } from '../../util/isomorphic';
import Notice from './notice';
let seed = 0;
function getUuid(type) {
  const now = Date.now();
  return `cToast_${type}_${now}_${seed++}`;
}
interface IProps {
  /**
   * 自定义前缀
   */
  prefix?: string;
  /**
   * 提示内容
   */
  content?: string;
  /**
   * 唯一标识
   */
  uid?: string;
  /**
   * 提示时长(ms)，默认为2000ms
   */
  duration?: number;
  /**
   * 自定义图标
   */
  icon?:
    | string
    | {
        icon?: string;
        size?: string;
      };
  /**
   * toast 类型
   */
  type?: 'normal' | 'success' | 'error' | 'loading';
  /**
   * 消失时回调函数
   */
  onClose?: () => void;
  /**
   * 是否只显示一个toast，默认为false(`suceess` & `error` & `'loading'` 下默认为true)，将依次显示toast
   */
  multiple?: boolean;
}
// const browserPrefixs = ['-webkit-', '-moz-', '-o-', ''];

/**
 * 消息提示
 */
export default class Toast extends Component<IProps, {}> {
  state = {
    toasts: []
  };
  remove = key => {
    console.log(key);
  };
  public render({ prefix, content }, { toasts }) {
    const toastList = toasts.map((item, ind) => {
      const onClose = () => {
        this.remove(item.key);
        item.onClose && item.onClose();
      };
      return (
        <Notice prefix={prefix} onClose={onClose}>
          {item.content}
        </Notice>
      );
    });
    return <div className={prefix}>{toastList}</div>;
  }
}
