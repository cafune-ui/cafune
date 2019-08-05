import { render, Component } from 'preact';
import PropTypes from 'prop-types';
import { isBrowser } from '../../util/isomorphic';
let seed = 0;
function getUuid(type) {
  const now = Date.now();
  return `cToast_${type}_${now}_${seed++}`;
}
let notifyContainerNode;
const durationDefault = 2000;
const ToastList = {};
// const browserPrefixs = ['-webkit-', '-moz-', '-o-', ''];
/**
 * 消息提示
 * @example
 * - 不同类型提示
 *
 *  ```js
 *  Toast.show({ content: 'show' });
 *  Toast.success({ content: 'success' });
 * 
 *  Toast.error({ content: 'error' });
 * 
 *  Toast.loading({ content: 'loading' });
 *  ```
 * - 自定义时长提示
 *
 *  ```javascript
 *  Toast.show({ content: '3秒之后消失', duration: 3000 })
 *  ```
 * - 带回调函数提示
 *
 *  ```javascript
 *  Toast.show({ content: '弹出消失alert', onClose() { alert('消失！') } })
 *  ```
 * - 自定义取消Toast
 * 当 duration 为0时，toast 需要调用`hide` 方法才能让toast 消失，loading 方法默认duration 为0
 *
 *  ```javascript
 * const toast = Toast.loading({ content: '弹出消失alert', onClose() { alert('消失！') } });
 * Toast.hide(toast);
 * ```
 */

class Toast extends Component {
  static show = show;
  static success = success;
  static error = error;
  static loading = loading;
  static hide = hide;
  static propTypes = {
    /**
     * 提示内容
     */
    content: PropTypes.string.isRequired,
    /**
     * 提示时长(ms)，默认为2000ms
     */
    duration: PropTypes.number,
    /**
     * toast 类型
     */
    type: PropTypes.oneOf(['normal', 'success', 'error', 'loading']),
    /**
     * 消失时回调函数
     */
    onClose: PropTypes.func,
    /**
     * 是否只显示一个toast，默认为false(`suceess` & `error` & `'loading'` 下默认为true)，将依次显示toast
     */
    isOnly: PropTypes.bool
  };
  static defaultProps = {
    duration: 2000,
    type: 'normal',
    isOnly: false
  };
  constructor(props) {
    super(props);
    const { uid } = this.props;
    ToastList[uid] = { comp: this };
  }
  state = {
    shouldClose: false
  };
  closeTimer;
  cleanTimer;
  close = () => {
    const { onClose, uid } = this.props;
    if (ToastList[uid]) {
      this.clearCloseTimer();
      this.setState({
        shouldClose: true
      });
      onClose && onClose();
      const node = ToastList[uid].node;
      delete ToastList[uid];
      /* istanbul ignore next */
      this.cleanTimer = setTimeout(() => {
        /* istanbul ignore else */
        if (notifyContainerNode) {
          render('', notifyContainerNode, node);
        }
        clearTimeout(this.cleanTimer);
        this.cleanTimer = null;
      }, 600);
    }
  };
  clearCloseTimer() {
    if (this.closeTimer) {
      clearTimeout(this.closeTimer);
      this.closeTimer = null;
    }
  }
  componentDidMount() {
    const { duration = durationDefault } = this.props;
    if (duration > 0) {
      this.closeTimer = setTimeout(() => {
        this.close();
      }, duration);
    }
  }
  componentWillUnmount() {
    this.clearCloseTimer();
  }
  render({ content, type }, { shouldClose }) {
    return (
      <div
        className="caf-toast"
        data-type={type}
        data-status={shouldClose ? 0 : 1}
      >
        {content}
      </div>
    );
  }
}
/**
 * 创建toast 容器
 */
const createNotifyContainerNode = () => {
  let notifyContainerClass = 'caf-notify';
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
 * 基础Toast（不包含图标
 */
function show({
  content,
  duration = durationDefault,
  type = 'normal',
  onClose,
  multiple = false
}) {
  if (!isBrowser) return null;
  notifyContainerNode = createNotifyContainerNode();
  if (!multiple) {
    // notifyContainerNode.innerHTML = '';
    hide();
  }
  const uid = getUuid(type);
  const props = {
    content,
    duration,
    onClose,
    type,
    uid
  };
  let toast = render(<ToastComp {...props} />, notifyContainerNode);
  ToastList[uid].node = toast;
  return uid;
}
/**
 * 成功Toast
 */
function success({ content, duration, onClose } = {}) {
  return show({ content, duration, type: 'success', onClose });
}
/**
 * 失败Toast
 */
function error({ content, duration, onClose } = {}) {
  return show({ content, duration, type: 'error', onClose });
}

/**
 * 加载中Toast
 */
function loading({ content = '加载中', duration = 0, onClose } = {}) {
  return show({ content, duration, type: 'loading', onClose });
}

function hide(toastid) {
  if (!isBrowser) return null;
  if (toastid && ToastList[toastid]) {
    ToastList[toastid].comp.close(true);
  } else {
    for (const i in ToastList) {
      ToastList[i].comp.close(true);
    }
  }
}

// export const Toast = {
//   show,
//   success,
//   error,
//   loading,
//   hide
// };

export default Toast;
