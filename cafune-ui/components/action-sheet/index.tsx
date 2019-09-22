import { Component, h } from 'preact';
import PropTypes from 'prop-types';
import cx from 'classnames';
import Icon from '../icon';
import Loading from '../loading';
export interface iOption {
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
  action?: String | Function;
}

export interface IHorizon {
  list: iOption[];
  wrap: boolean;
}
export interface IActionSheet {
  /**
   * 自定义类名
   */
  prefix?: string;
  /**
   * 元素类名
   */
  className?: string;
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
  horizon: IHorizon;
  /**
   * 纵向展示的数据
   */
  vertialList: iOption[];
  /**
   * 标题栏
   */
  title?: any;
  /**
   * 取消按钮文字
   */
  cancelText?: string;
  /**
   * 关闭时触发事件
   */
  onClose?: Function;
  /**
   *  开启时触发事件*/
  onOpen?: Function;
  /**
   * 是否显示取消按钮
   */
  showCancel?: boolean;
}


const availableAlign = ['left', 'center', 'right'];
const prefix = 'caf-actsheet';

function renderList(list = [], horizon, wrap = false) {
  return (
    <div
      className={cx(`${prefix}-list`, {
        [`${prefix}-list__hori`]: horizon,
        [`${prefix}-list__vert`]: !horizon
      })}
    >
      <div
        className={cx(`${prefix}-list-wrapper`, {
          [`${prefix}-list-wrapper__wrap`]: wrap
        })}
      >
        {list.map(item => {
          const hasBadge = item.badge === '' || !!item.badge;
          const Badge = (
            <span className={`${prefix}-item-badge`}>{item.badge}</span>
          );
          if (item.align) {
            item.align =
              availableAlign.indexOf(item.align) === -1 ? 'center' : item.align;
          } else if (!horizon) {
            item.align = !!item.icon ? 'left' : 'center';
          }
          const action =
            typeof item.action === 'string'
              ? () => {
                  location.href = item.action;
                }
              : item.action;
          const alignClass = `${prefix}-item__${item.align}`;
          const icon = <Icon icon={item.icon} size={item.iconSize || '24px'} />;
          return (
            <div
              className={cx(`${prefix}-item`, {
                [alignClass]: !horizon,
                [`${prefix}-item__loading`]: item.isLoading,
                [`${prefix}-item__disabled`]: item.isDisabled
              })}
              onClick={action}
            >
              {horizon ? (
                <div className={`${prefix}-item-icon`}>
                  {icon}
                  {hasBadge && Badge}
                </div>
              ) : (
                !!item.icon && (
                  <div className={`${prefix}-item-icon`}>{icon}</div>
                )
              )}
              <div className={`${prefix}-item-name`}>
                <p className={`${prefix}-item-name-main`}>{item.name}</p>
                {!!item.subName && (
                  <p className={`${prefix}-item-name-sub`}>{item.subName}</p>
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

/**
 * 动作面板
 */
class ActionSheet extends Component<IActionSheet, {}> {
  state = {
    isShow: this.props.isShow,
    isFadding: true
  };
  static defaultProps = {
    prefix,
    isShow: false,
    showMask: true,
    closeOnClickMask: true,
    cancelText: '取消',
    showCancel: true
  };
  componentWillReceiveProps(nextProps) {
    if (nextProps.isShow !== this.state.isShow) {
      if (nextProps.isShow === true) {
        setTimeout(() => {
          this.setState({
            isFadding: false
          });
        });
      } else {
        this.closeAct();
      }
    }
  }
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
      horizon.wrap
    );
    let $vertical = this.renderData(vertialList, false);
    return (
      <div className={`${prefix}-content`}>
        {$horizon}
        {$vertical}
      </div>
    );
  };
  onMaskClick = e => {
    const $target = e.target;
    const className = $target.className;
    if (className === `${prefix}-wrapper`) {
      this.closeAct();
    }
  };
  openAct = () => {
    setTimeout(() => {
      this.setState(
        {
          isFadding: false
        },
        () => {
          this.props.onOpen && this.props.onOpen();
        }
      );
    }, 100);
  };
  closeAct = () => {
    this.setState(
      {
        isFadding: true
      },
      () => {
        setTimeout(() => {
          this.props.onClose && this.props.onClose();
        }, 500);
      }
    );
  };
  render() {
    const {
      prefix,
      className,
      showMask,
      children,
      cancelText,
      closeOnClickMask,
      title,
      isShow,
      showCancel,
      ...restProps
    } = this.props;
    const { isFadding } = this.state;
    const content = this.renderContent();
    let maskProp = {};
    if (closeOnClickMask) {
      maskProp.onClick = this.onMaskClick;
    }
    return isShow ? (
      <div className={cx(prefix, className)} {...restProps}>
        {showMask && <div className={`${prefix}-mask`} />}
        <div className={`${prefix}-wrapper`} {...maskProp}>
          <div
            className={`${prefix}-container`}
            data-status={isFadding ? 0 : 1}
          >
            {!!title && <div className={`${prefix}-title`}>{title}</div>}
            <div className={`${prefix}-main`}>
              {children}
              {content}
            </div>
            {showCancel && (
              <div className={`${prefix}-cancel`} onClick={this.closeAct}>
                {cancelText}
              </div>
            )}
          </div>
        </div>
      </div>
    ) : null;
  }
}
export default ActionSheet;
