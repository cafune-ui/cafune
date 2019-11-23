import { Component, h, render } from 'preact';
// import Icon from '../../icon';
// import { isBrowser } from '../../util/isomorphic';
import Notice from './notice';
let seed = 0;
function getUuid() {
  const now = Date.now();
  return `cToast_${now}_${seed++}`;
}
interface IProps {
    /**
   * 自定义前缀
   */
  prefix?: string;
  /**
   * 提示内容
   */
  content: string | HTMLElement | VNode;
    /**
   * 提示时长(ms)，默认为2000ms
   */
  duration?: number;
  // mask?: boolean;
  /**
   * 消失时回调函数
   */
  onClose?: (() => void) | undefined | null;
   /**
   * toast 类型
   */
  type?: 'normal' | 'success' | 'error' | 'loading';
   /**
   * 自定义图标
   */
  icon?:
    | string
    | {
        icon?: string;
        size?: string;
      };
}

interface IState {
  toasts: any[];
}
// const browserPrefixs = ['-webkit-', '-moz-', '-o-', ''];

/**
 * 消息提示
 */
export default class Toast extends Component<IProps, IState> {
  state = {
    toasts: []
  };
  static newInstance(properties, callback) {
    const { getContainer, ...props } = properties || {};
    const div = document.createElement('div');
    if (getContainer) {
      const root = getContainer();
      root.appendChild(div);
    } else {
      document.body.appendChild(div);
    }
    let called = false;
    function ref(notification) {
      if (called) {
        return;
      }
      called = true;
      callback({
        notice(noticeProps) {
          notification.add(noticeProps);
        },
        removeNotice(key) {
          notification.remove(key);
        },
        component: notification,
        destroy() {
          render('', div, div)
          //  div.parentNode.removeChild(div);
        },
      });
    }
    render(<Toast {...props} ref={ref} />, div);
  };
  
  add = (notice) => {
    const key = notice.key = notice.key || getUuid();
    this.setState(previousState => {
      const notices = previousState.toasts;
      const noticeIndex = notices.map(v => v.key).indexOf(key);
      const updatedNotices = notices.concat();
      if (noticeIndex !== -1) {
        updatedNotices.splice(noticeIndex, 1, notice);
      } else {
        updatedNotices.push(notice);
      }
      return {
        toasts: updatedNotices,
      };
    });
  }

  remove = (key) => {
    this.setState(previousState => {
      return {
        toasts: previousState.toasts.filter(notice => notice.key !== key),
      };
    });
  }
  render({ prefix }, { toasts }) {
    const toastList = toasts.map((item, ind) => {
      const onClose = () => {
        this.remove(item.key);
        item.onClose && item.onClose();
      };
      return (
        <Notice prefix={prefix} {...item} onClose={onClose}>
          {item.content}
        </Notice>
      );
    });
    return <div className={prefix}>{toastList}</div>;
  }
}
