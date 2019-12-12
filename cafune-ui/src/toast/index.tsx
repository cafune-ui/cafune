import { Component, render, h, VNode, createRef } from 'preact';
import CafToast from './components/toast';

const prefix = 'caf-toast';
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
  /**
   * 是否支持同时多个
   */
  multiple?: boolean;
}

let messageInstance: any;
let messageNeedHide: boolean;

const durationDefault = 2000;

function getContainer() {
  let container;
  const toastId = 'caf-toast';
  if (document.getElementById(toastId)) {
    container = document.getElementById(toastId);
  } else {
    container = document.createElement('div');
    container.id = toastId;
    document.body.appendChild(container);
  }
  return container;
}
function newInstance(properties) {
  const { ...props } = properties || {};
  const container = getContainer();
  const ref = createRef();
  render(<CafToast {...props} ref={ref} />, container);
  return ref.current;
}
function destroy() {
  const container = getContainer();
  messageInstance = null;
  render('', container, container);
}

function notice(options: IProps) {
  options = Object.assign(
    {},
    {
      content: '',
      duration: durationDefault,
      type: 'normal',
      multiple: false
    },
    options
  );
  const { content, icon, type, duration, multiple, onClose } = options;
  messageNeedHide = false;
  if (!multiple) {
    destroy();
  }
  /* istanbul ignore next */
  if (!messageInstance) {
    const notification = newInstance({
      prefix
    });
    messageInstance = notification;
  }
  /* istanbul ignore next */
  if (messageNeedHide) {
    messageNeedHide = false;
    return;
  }
  let key = getUuid();
  messageInstance.add({
    key,
    duration,
    content,
    icon,
    type,
    visible: true,
    onClose() {
      if (onClose) {
        onClose();
      }
    }
  });
  return key;
}

/**
 * 轻提示
 * @示例
 * ```jsx
 * Toast.show({ content: 'some msg' });
 * Toast.success({ content: 'some msg' });
 * Toast.error({ content: 'some msg' });
 * //...
 * const loadingToast = Toast.loading({ content: 'some msg' });
 * Toast.setMsg(loadingToast, 'toast msg changed');
 * Toast.hide(loadingToast);
 * ```
 * ---
 */
export default class Toast extends Component<IProps> {
  static defaultProps = {
    prefix,
    multiple: false
  };
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
  static hide(key) {
    /* istanbul ignore else */
    if (messageInstance) {
      if (key) {
        messageInstance.remove(key);
      } else {
        destroy();
      }
    } else {
      messageNeedHide = true;
    }
  }
  static setMsg(key, msg) {
    /* istanbul ignore else */
    if (messageInstance) {
      messageInstance.setMessage(key, msg);
    }
  }
  /* istanbul ignore next */
  render() {
    return null;
  }
}
