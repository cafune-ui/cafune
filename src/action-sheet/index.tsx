import { Component, h, VNode } from 'preact';
import cx from 'classnames';
import Icon from '../icon';
import Loading from '../loading';
import Button from '../button';
import Transition from '../transition';

export type iOption = {
  /**
   * 单元项目图标
   */
  icon?: string;
  /**
   * 图标尺寸
   */
  iconSize?: string;
  /**
   * 单元名称
   */
  name: string;
  /**
   * 单元描述（横向数据中不展示）
   */
  subName?: string;
  /**
   * 小徽标，当为`true` 时显示空小圆点，当为`string`类型时显示带内容的小圆点
   */
  badge?: string | boolean;
  /**
   * 对齐方式，当无icon时默认为`center`, 有icon时则默认为`left`
   */
  align?: 'left' | 'center' | 'right';
  /**
   * 是否禁用此选项
   */
  isDisabled?: boolean;
  /**
   * 是否处于加载状态
   */
  isLoading?: boolean;
  /**
   * 点击时的反馈，如果为`string`时，视为链接，如为
   */
  action?: string | Function;
};

export type IHorizon = {
  list: iOption[];
  wrap: boolean;
};
export type IActionSheet = {
  /**
   * 自定义类名
   */
  prefix?: string;
  /**
   * 面板开启状态
   */
  isShow: boolean;
  /**
   * 是否显示遮罩
   */
  showMask?: boolean;
  /**
   * 是否在点击遮罩后关闭
   */
  closeOnClickMask?: boolean;
  /**
   * 横向展示的数据
   */
  horizon?: IHorizon;
  /**
   * 纵向展示的数据
   */
  vertialList?: iOption[];
  /**
   * 标题栏
   */
  title?: string | VNode | Component | HTMLElement;
  /**
   * 取消按钮文字
   */
  cancelText?: string;
  /**
   * 确认按钮文字
   */
  confirmText?: string;
  /**
   * 关闭时触发事件
   */
  onClose?: Function;
  /**
   * 确认时触发事件
   */
  onConfirm?: Function;
  /**
   *  开启时触发事件*/
  onOpen?: Function;
  /**
   * 是否显示取消按钮
   */
  showCancel?: boolean;
  /**
   * 是否显示确认按钮
   */
  showConfirm?: boolean;
};

const availableAlign = ['left', 'center', 'right'];
const prefix = 'caf-actsheet';

function renderList(list = [], horizon, wrap = false) {
  return (
    <div
      className={cx(`${prefix}-list`, {
        [`${prefix}-list--hori`]: horizon,
        [`${prefix}-list--vert`]: !horizon
      })}
    >
      <div
        className={cx(`${prefix}-list__wrapper`, {
          [`${prefix}-list__wrapper--wrap`]: wrap
        })}
      >
        {list.map(item => {
          const hasBadge = item.badge === '' || !!item.badge;
          const Badge = (
            <span className={`${prefix}-item__badge`}>{item.badge}</span>
          );
          if (item.align) {
            item.align =
              availableAlign.indexOf(item.align) === -1 ? 'left' : item.align;
          } else if (!horizon) {
            item.align = 'left';
          }
          const action =
            typeof item.action === 'string'
              ? () => {
                  location.href = item.action;
                }
              : item.action;
          const alignClass = `${prefix}-item--${item.align}`;
          const icon = <Icon icon={item.icon} size={item.iconSize || '24px'} />;
          return (
            <div
              className={cx(`${prefix}-item`, {
                [alignClass]: !horizon,
                [`${prefix}-item--loading`]: item.isLoading,
                [`${prefix}-item--disabled`]: item.isDisabled
              })}
              onClick={action}
            >
              {horizon ? (
                <div className={`${prefix}-item__icon`}>
                  {icon}
                  {hasBadge && Badge}
                </div>
              ) : (
                !!item.icon && (
                  <div className={`${prefix}-item__icon`}>{icon}</div>
                )
              )}
              <div className={`${prefix}-item__name`}>
                <p className={`${prefix}-item__name--main`}>{item.name}</p>
                {!!item.subName && !horizon && (
                  <p className={`${prefix}-item__name--sub`}>{item.subName}</p>
                )}
                {!horizon && hasBadge && Badge}
              </div>
              {item.isLoading && <Loading size="24px" />}
            </div>
          );
        })}
      </div>
    </div>
  );
}

const transitionEnd = window.ontransitionend
  ? 'transitionend'
  : 'webkitTransitionEnd';

/**
 * 动作面板
 */
class ActionSheet extends Component<IActionSheet, {}> {
  static defaultProps = {
    prefix,
    isShow: false,
    showMask: true,
    closeOnClickMask: true,
    cancelText: '取消',
    confirmText: '确定',
    showCancel: true
  };
  renderData = (data, horizon, wrap?) => {
    let result;
    const illegalMsg = '列表数据应为全数组或全对象';
    if (data && data.length) {
      // 如果为二维数组，则将每个数组单独渲染，否则直接渲染
      if (
        data.every(
          item => Object.prototype.toString.call(item) === '[object Array]'
        )
      ) {
        result = data.map(list => renderList(list, horizon, wrap));
      } else if (
        data.every(
          item => Object.prototype.toString.call(item) === '[object Object]'
        )
      ) {
        result = renderList(data, horizon, wrap);
      } else {
        console.error(illegalMsg);
      }
    }
    return result;
  };
  renderContent = () => {
    const { prefix, horizon, vertialList } = this.props;
    let $horizon = this.renderData(
      horizon ? horizon.list || [] : [],
      true,
      horizon && horizon.wrap
    );
    let $vertical = this.renderData(vertialList, false);
    return (
      <div className={`${prefix}__content`}>
        {$horizon}
        {$vertical}
      </div>
    );
  };
  onMaskClick = e => {
    const $target = e.target;
    const className = $target.className;
    if (className === `${prefix}__wrapper`) {
      this.handleAction('close');
    }
  };
  handleAction(type) {
    if (type === 'confirm') {
      this.props.onConfirm && this.props.onConfirm();
    }
    this.props.onClose && this.props.onClose();
  }
  afterEnter = () => {
    this.props.onOpen && this.props.onOpen();
  };
  render({
    prefix,
    className,
    showMask,
    children,
    cancelText,
    confirmText,
    closeOnClickMask,
    title,
    isShow,
    showCancel,
    showConfirm,
    ...restProps
  }) {
    const content = this.renderContent();
    let maskProp = {};
    if (closeOnClickMask) {
      maskProp = {
        onClick: this.onMaskClick
      };
    }
    return (
      <div className={cx(prefix, className)} {...restProps}>
        <Transition
          visible={isShow}
          name={`${prefix}-fade`}
          afterEnter={this.afterEnter}
        >
          {showMask && <div className={`${prefix}__mask`} />}
        </Transition>
        <Transition
          visible={isShow}
          name={`${prefix}-slide`}
          afterEnter={this.afterEnter}
        >
          <div className={`${prefix}__wrapper`} {...maskProp}>
            <div className={`${prefix}__container`}>
              {!!title && <div className={`${prefix}__title`}>{title}</div>}
              <div className={`${prefix}__main`}>
                {children}
                {content}
              </div>
              {(showCancel || showConfirm) && (
                <div className={`${prefix}__action`}>
                  {showCancel && (
                    <div
                      className={`${prefix}__action__btn ${prefix}__action__btn--cancel`}
                      onClick={this.handleAction.bind(this, 'cancel')}
                    >
                      <Button block type="cancel">
                        {cancelText}
                      </Button>
                    </div>
                  )}
                  {showConfirm && (
                    <div
                      className={`${prefix}__action__btn ${prefix}__action__btn--confirm`}
                      onClick={this.handleAction.bind(this, 'confirm')}
                    >
                      <Button block type="primary">
                        {confirmText}
                      </Button>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        </Transition>
      </div>
    );
  }
}
export default ActionSheet;
