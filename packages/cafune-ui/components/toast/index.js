import { h } from 'preact';
import { render } from 'preact';
import { isBrowser } from 'util/isomorphic';
import style from './style';

const browserPrefixs = ['-webkit-', '-moz-', '-o-', ''];
const ToastComp = ({ content, type }) => {
  return (
    <div class={style.toast} data-type={type}>
      {content}
    </div>
  );
};

let durationDefault = 2000;

const closeNotifyCallback = callback => {
  if (typeof callback === 'function') {
    callback();
  }
};
/**
 * 创建toast 容器
 */
const createNotifyContainerNode = () => {
  let notifyContainerClass = 'QNotify';
  let notifyContainerNode = document.querySelector(`.${notifyContainerClass}`);

  if (!notifyContainerNode) {
    const bodyNode = document.body;
    const div = document.createElement('div');
    div.className = notifyContainerClass;
    notifyContainerNode = bodyNode.appendChild(div);
  }

  return notifyContainerNode;
};

/**
 * 基础Toast（不包含图标）
 * @param {object} options.content 提示内容
 * @param {object} options.duration 提示时长(ms)，默认为2000ms
 * @param {object} options.type toast 类型，可选有'normal', 'success', 'error', 'loading'
 * @param {object} options.callback 消失时回调函数
 * @param {object} options.isOnly 是否只显示一个toast，默认为false，将依次显示toast
 */
function show({
  content,
  duration = durationDefault,
  type = 'normal',
  callback,
  isOnly = false
}) {
  if (!isBrowser) return null;
  const notifyContainerNode = createNotifyContainerNode();
  if (isOnly) {
    notifyContainerNode.innerHTML = '';
  }
  const props = {
    content,
    type
  };
  let toast = render(<ToastComp {...props} />, notifyContainerNode);
  toast.dataset.status = 1;
  duration > 0 && hide(toast, duration, callback);
  return toast;
}
/**
 * 成功Toast
 * @param {object} options.content 提示内容
 * @param {object} options.duration 提示时长(ms)，默认为2000ms
 * @param {object} options.callback 消失时回调函数
 * @param {object} options.isOnly 是否只显示一个toast，默认为true，将依次显示toast
 */
function success({ content, duration, callback, isOnly = true }) {
  return show({ content, duration, type: 'success', callback, isOnly });
}
/**
 * 失败Toast
 * @param {object} options.content 提示内容
 * @param {object} options.duration 提示时长(ms)，默认为2000ms
 * @param {object} options.callback 消失时回调函数
 * @param {object} options.isOnly 是否只显示一个toast，默认为true，将依次显示toast
 */
function error({ content, duration, callback, isOnly = true }) {
  return show({ content, duration, type: 'error', callback, isOnly });
}

/**
 * 加载中Toast
 * @param {object} options.content 提示内容
 * @param {object} options.duration 提示时长(ms)，默认为0ms
 * @param {object} options.callback 消失时回调函数
 * @param {object} options.isOnly 是否只显示一个toast，默认为true，将依次显示toast
 */
function loading({ content, duration = 0, callback, isOnly = true }) {
  return show({ content, duration, type: 'loading', callback, isOnly });
}

function hide(toast, duration = 0, callback) {
  const notifyContainerNode = createNotifyContainerNode();
  const timeOutId = setTimeout(() => {
    toast.dataset.status = 0;
    const clear = setTimeout(() => {
      render('', notifyContainerNode, toast);
      clearTimeout(clear);
    }, 800);
    clearTimeout(timeOutId);
    closeNotifyCallback(callback);
  }, duration);
}

export const Toast = {
  show,
  success,
  error,
  loading,
  hide
};

export default Toast;
