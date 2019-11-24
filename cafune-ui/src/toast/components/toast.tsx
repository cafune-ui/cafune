import { Component, h, render, VNode, createRef } from 'preact';
import Notice from './notice';

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
export default class CafToast extends Component<IProps, IState> {
  state = {
    toasts: []
  };

  setMessage = (key, msg) => {
    this.setState(previousState => {
      for (let i = 0, len = previousState.toasts.length; i < len; i++) {
        if (previousState.toasts[i].key == key) {
          previousState.toasts[i].content = msg;
        }
      }
     
      return {
        toasts: previousState.toasts
      };
    });
  };
  add = notice => {
    const key = notice.key;
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
        toasts: updatedNotices
      };
    });
  };

  remove = key => {
    this.setState(previousState => {
      return {
        toasts: previousState.toasts.filter(notice => notice.key !== key)
      };
    });
  };
  render({ prefix, content }, { toasts }) {
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
