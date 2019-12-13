import { render, Component, h } from 'preact';
import { isBrowser } from '../util/isomorphic';
import Button from '../button';
import Transition from '../transition';

let modalComp;
let containerNode = isBrowser && document.body;
const viewWrap = containerNode;
const defaultOptions = {
  title: '', // 标题
  message: '', // 消息内容，如有children 优先children
  align: 'center', // 文本对齐方式
  showCancel: false, // 是否显示取消按钮
  confirmContent: '确定',
  cancelContent: '取消',
  mask: true,
  visible: true
};

interface IProps {
  /**
   * 自定义前缀
   */
  prefix?: string;
  /**
   * 标题
   */
  title?: string;
  /**
   * 消息内容，如有children 优先children
   */
  message?: string;
  /**
   * 文本对齐方式
   */
  align?: 'center' | 'left' | 'right';
  /**
   * 是否显示取消按钮
   */
  showCancel?: boolean;
  /**
   * 是否显示蒙层
   */
  mask?: boolean;
  /**
   * 确认按钮内容
   */
  confirmContent?: string;
  /**
   * 取消按钮内容
   */
  cancelContent?: string;
  /**
   * 关闭之前的回调
   */
  beforeClose?: (action: string, done: (state?: boolean) => void) => void;
  /**
   * 确认事件回调
   */
  onConfirm?: () => void;
  /**
   * 取消事件回调
   */
  onCancel?: () => void;
  /**
   * 是否显示模态框
   */
  visible?: boolean;
}
/**
 * 渲染模态框到容器中
 */
const modal = options => {
  /* istanbul ignore next */
  if (!isBrowser) return null;
  /* istanbul ignore next */
  if (containerNode && modalComp) {
    render('', containerNode, modalComp);
    modalComp = null;
  }
  const props = Object.assign({}, defaultOptions, options);
  modalComp = render(<Modal {...props} />, containerNode);
};
/**
 * 默认模态框
 */
const alert = options => {
  modal(options);
};
/**
 * 带取消按钮的模态框
 */
const confirm = options => {
  modal({
    showCancel: true,
    ...options
  });
};

interface IState {
  visible: boolean;
  loading: {
    confirm: boolean;
    cancel: boolean;
  };
}
/**
 * 模态框
 */
class Modal extends Component<IProps, IState> {
  static defaultProps = {
    prefix: 'caf-modal',
    align: 'center',
    showCancel: false,
    confirmContent: '确定',
    cancelContent: '取消',
    mask: true,
    visible: true
  };
  state: IState = {
    visible: this.props.visible,
    loading: {
      confirm: false,
      cancel: false
    }
  };
  static alert = alert;
  static confirm = confirm;
  componentDidUpdate() {
    /* istanbul ignore next  */
    viewWrap && (viewWrap.style.overflow = this.props.visible ? 'hidden' : '');
  }
  /* istanbul ignore next */
  destroy = () => {
    if (modalComp && containerNode) {
      render('', containerNode, modalComp);
      modalComp = null;
    }
  };
  handleAction(action) {
    /* istanbul ignore next */
    if (this.state.loading[action]) {
      return;
    }
    const { beforeClose } = this.props;
    if (beforeClose) {
      /* istanbul ignore next */
      this.setState(previousState => {
        previousState.loading[action] = true;
        return {
          loading: previousState.loading
        };
      });
      /* istanbul ignore next */
      beforeClose(action, state => {
        if (state !== false && this.state.loading[action]) {
          this.onClose(action);
          this.setState({
            loading: {
              confirm: false,
              cancel: false
            }
          });
        }
      });
    } else {
      this.onClose(action);
    }
  }
  onClose(action) {
    if (action === 'confirm') {
      this.props.onConfirm && this.props.onConfirm();
    } else {
      this.props.onCancel && this.props.onCancel();
    }
    /* istanbul ignore next */
    setTimeout(() =>
      this.setState({
        visible: false
      })
    );
  }
  render(
    {
      prefix,
      title,
      message,
      align,
      children,
      showCancel,
      confirmContent,
      cancelContent,
      mask
    },
    { visible, loading }
  ) {
    /* istanbul ignore if */
    const Title = title && (
      <div className={`${prefix}__box__header`}>{title}</div>
    );
    /* istanbul ignore else */
    const Content = (!!(children && children.length) || message) && (
      <div className={`${prefix}__box__main ${prefix}__box__main--${align}`}>
        {children && children.length > 0 ? (
          children
        ) : (
          <div
            dangerouslySetInnerHTML={{ __html: message }}
            className={`${prefix}__box__main ${prefix}__box__main--${align}`}
          />
        )}
      </div>
    );
    const { confirm, cancel } = loading;
    const Buttons = (
      <div className={`${prefix}__btngroup`}>
        {showCancel && (
          <div
            className={`${prefix}__btn ${prefix}__btn--cancel`}
            onClick={this.handleAction.bind(this, 'cancel')}
          >
            <Button type="cancel" block loading={cancel}>
              {cancelContent}
            </Button>
          </div>
        )}
        <div
          className={`${prefix}__btn ${prefix}__btn--confirm`}
          onClick={this.handleAction.bind(this, 'confirm')}
        >
          <Button type="primary" block loading={confirm}>
            {confirmContent}
          </Button>
        </div>
      </div>
    );
    return (
      <div className={prefix}>
        {mask && <div className={`${prefix}__mask`} />}
        <Transition
          visible={visible}
          name="caf-modal-fade"
          afterLeave={this.destroy}
        >
          <div className={`${prefix}__box`}>
            {Title}
            {Content}
            {Buttons}
          </div>
        </Transition>
      </div>
    );
  }
}
export default Modal;
