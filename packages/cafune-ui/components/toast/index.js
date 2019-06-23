import { render, Component } from 'preact';
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
class ToastComp extends Component {
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
    // const { onClose, uid } = this.props;
    // if (ToastList[uid]) {
    //   this.clearCloseTimer();
    //   this.setState({
    //     shouldClose: true
    //   });
    //   onClose && onClose();
    //   const node = ToastList[uid].node;
    //   delete ToastList[uid];
    //   this.cleanTimer = setTimeout(() => {
    //     notifyContainerNode && render('', notifyContainerNode, node);
    //     clearTimeout(this.cleanTimer);
    //     this.cleanTimer = null;
    //   }, 600);
    // }
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
        class="caf-toast"
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
 * 基础Toast（不包含图标）
 * @param {object} options.content 提示内容
 * @param {object} options.duration 提示时长(ms)，默认为2000ms
 * @param {object} options.type toast 类型，可选有'normal', 'success', 'error', 'loading'
 * @param {object} options.onClose 消失时回调函数
 * @param {object} options.isOnly 是否只显示一个toast，默认为false，将依次显示toast
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
 * @param {object} options.content 提示内容
 * @param {object} options.duration 提示时长(ms)，默认为2000ms
 * @param {object} options.onClose 消失时回调函数
 */
function success({ content, duration, onClose } = {}) {
  return show({ content, duration, type: 'success', onClose });
}
/**
 * 失败Toast
 * @param {object} options.content 提示内容
 * @param {object} options.duration 提示时长(ms)，默认为2000ms
 * @param {object} options.onClose 消失时回调函数
 */
function error({ content, duration, onClose } = {}) {
  return show({ content, duration, type: 'error', onClose });
}

/**
 * 加载中Toast
 * @param {object} options.content 提示内容
 * @param {object} options.duration 提示时长(ms)，默认为0ms
 * @param {object} options.onClose 消失时回调函数
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

export const Toast = {
  show,
  success,
  error,
  loading,
  hide
};

export default Toast;
