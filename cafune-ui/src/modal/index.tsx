import { render, Component, VNode, h } from 'preact';
import { isBrowser } from '../util/isomorphic';
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
  visable: true
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
   * 确认事件回调
   */
  onConfirm: () => void;
  /**
   * 取消事件回调
   */
  onCancel: () => void;
  /**
   * 是否显示模态框
   */
  visable?: boolean;
  children: any;
}
/**
 * 渲染模态框到容器中
 */
const modal = options => {
  /* istanbul ignore next */
  if (!isBrowser) return null;
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
/**
 * 模态框
 */
class Modal extends Component<IProps, {}> {
  static defaultProps = {
    prefix: 'caf-modal',
    align: 'center',
    showCancel: false,
    confirmContent: '确定',
    cancelContent: '取消',
    mask: true,
    visable: true
  };
  static alert = alert;
  static confirm = confirm;
  componentDidUpdate() {
    /* istanbul ignore next  */
    viewWrap && (viewWrap.style.overflow = this.props.visable ? 'hidden' : '');
  }
  handleClick(action) {
    if (modalComp && containerNode) {
      render('', containerNode, modalComp);
      modalComp = null;
    }
    if (action === 'confirm') {
      this.props.onConfirm && this.props.onConfirm();
    } else {
      this.props.onCancel && this.props.onCancel();
    }
  }
  render({
    prefix = 'caf-modal',
    title = '', // 标题
    message = '', // 消息内容，如有children 优先children
    align = 'center', // 文本对齐方式
    children, // 自定义内容
    showCancel = false, // 是否显示取消按钮
    confirmContent = '确定',
    cancelContent = '取消',
    mask = true,
    visable = false
  }) {
    if (visable) {
      /* istanbul ignore if */
      const Title = title && (
        <div className={`${prefix}-content-header`}>{title}</div>
      );
      /* istanbul ignore else */
      const Content = (!!(children && children.length) || message) && (
        <div className={`${prefix}-content-content ${prefix}-content-content__${align}`}>
          {children && children.length > 0 ? (
            children
          ) : (
            <div
              dangerouslySetInnerHTML={{ __html: message }}
              className={`${prefix}-content-content ${prefix}-content__${align}`}
            />
          )}
        </div>
      );
      const Buttons = (
        <div className={`${prefix}-btngroup`}>
          {showCancel && (
            <div
              className={`${prefix}-btngroup__cancel`}
              onClick={this.handleClick.bind(this, 'cancel')}
            >
              {cancelContent}
            </div>
          )}
          <div
            className={`${prefix}-btngroup__confirm`}
            onClick={this.handleClick.bind(this, 'confirm')}
          >
            {confirmContent}
          </div>
        </div>
      );
      return (
        <div className={prefix}>
          {mask && <div className={`${prefix}-bg`} />}
          <div className={`${prefix}-content`}>
            {Title}
            {Content}
            {Buttons}
          </div>
        </div>
      );
    } else {
      return null;
    }
  }
}
export default Modal;
