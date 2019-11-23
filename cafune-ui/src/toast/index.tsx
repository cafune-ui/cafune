import { Component, h, VNode } from 'preact';
import Toast from './components/toast';
import Icon from '../icon';

const prefix = 'caf-toast';

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

let messageInstance: any;
let messageNeedHide: boolean;

function getMessageInstance(
  mask: boolean,
  callback: (notification: any) => void
) {
  Toast.newInstance(
    {
      prefix
    },
    (notification: any) => callback && callback(notification)
  );
}

const durationDefault = 2000;
function notice(
  options: IProps = {
    content: '',
    duration: durationDefault,
    type: 'normal'
  }
) {
  const { content, icon, type, duration, onClose } = options;
  messageNeedHide = false;
  getMessageInstance(false, notification => {
    if (!notification) {
      return;
    }

    if (messageInstance) {
      messageInstance.destroy();
      messageInstance = null;
    }

    if (messageNeedHide) {
      notification.destroy();
      messageNeedHide = false;
      return;
    }

    messageInstance = notification;
    
    notification.notice({
      duration,
      content,
      icon,
      type,
      closable: true,
      onClose() {
        if (onClose) {
          onClose();
        }
        notification.destroy();
        notification = null;
        messageInstance = null;
      }
    });
  });
}

// export default {
//   show(options: IBaseOption) {
//     return notice(options);
//   },
//   success(options: IBaseOption) {
//     options.type = 'success';
//     options.icon = 'success';
//     return notice(options);
//   },
//   error(options: IBaseOption) {
//     options.type = 'error';
//     options.icon = 'error';
//     return notice(options);
//   },
//   loading(options: IBaseOption) {
//     options.type = 'loading';
//     options.duration = 0;
//     return notice(options);
//   },
//   hide() {
//     if (messageInstance) {
//       messageInstance.destroy();
//       messageInstance = null;
//     } else {
//       messageNeedHide = true;
//     }
//   }
// };


export default class CafToast extends Component<IProps> {
  static show(options: IProps) {
    return notice(options);
  }
  static success(options: IProps) {
    options.type = 'success';
    options.icon = 'success';
    return notice(options);
  }
  static error(options: IProps) {
    options.type = 'error';
    options.icon = 'error';
    return notice(options);
  }
  static loading(options: IProps) {
    options.type = 'loading';
    options.duration = 0;
    return notice(options);
  }
  static hide() {
    if (messageInstance) {
      messageInstance.destroy();
      messageInstance = null;
    } else {
      messageNeedHide = true;
    }
  }
  render() {
    return null;
  }
}