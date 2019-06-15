import { render, Component } from 'preact';
import { isBrowser } from 'util/isomorphic';
import classNames from 'classnames';
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

/**
 * 渲染模态框到容器中
 */
const modal = options => {
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

export class Modal extends Component {
  static alert = alert;
  static confirm = confirm;
  componentDidUpdate() {
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
      const Title = title && <div class={style.header}>{title}</div>;
      const contentStyle = style[`msg__${align}`] || style.msg__center;
      const Content = (!!(children && children.length) || message) && (
        <div
          class={classNames(
            style.content,
            style[`content__${align}`] || style.content__center
          )}
        >
          {children && children.length > 0 ? (
            children
          ) : (
            <div
              dangerouslySetInnerHTML={{ __html: message }}
              class={contentStyle}
            />
          )}
        </div>
      );
      const Buttons = (
        <div class={style.btngroup}>
          {showCancel && (
            <div
              class={style.btngroup__cancel}
              onClick={this.handleClick.bind(this, 'cancel')}
            >
              {cancelContent}
            </div>
          )}
          <div
            class={style.btngroup__confirm}
            onClick={this.handleClick.bind(this, 'confirm')}
          >
            {confirmContent}
          </div>
        </div>
      );
      return (
        <div class={style.modal}>
          {mask && <div class={style.modal_bg} />}
          <div class={style.modal_content}>
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
