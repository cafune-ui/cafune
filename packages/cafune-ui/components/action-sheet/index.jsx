import { Component } from 'preact';
import PropTypes from 'prop-types';
import cx from 'classnames';
import Icon from '../icon';

/**
 * 动作面板
 */
const availableAlign = ['left', 'center', 'right'];
const dataStruct = (horizon = true) =>
  PropTypes.shape({
    /**
     * 单元项目图标
     */
    icon: horizon ? PropTypes.string.isRequired : PropTypes.string,
    /**
     * 图标尺寸
     */
    iconSize: PropTypes.string,
    /**
     * 单元名称
     */
    name: PropTypes.string.isRequired,
    /**
     * 单元描述（横向数据中不展示）
     */
    subName: PropTypes.string,
    /**
     * 小徽标，当为`true` 时显示空小圆点，当为`string`类型时显示带内容的小圆点
     */
    badge: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
    /**
     * 对齐方式，当无icon时默认为`center`, 有icon时则默认为`left`
     */
    align: PropTypes.oneOf(availableAlign),
    /**
     * 是否禁用此选项
     */
    isDisabled: PropTypes.bool,
    /**
     * 是否处于加载状态
     */
    isLoading: PropTypes.bool,
    /**
     * 点击时的反馈，如果为`string`时，视为链接，如为
     */
    action: PropTypes.oneOfType([PropTypes.string, PropTypes.func])
  });
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
          item.action =
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
              onClick={item.action}
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
            </div>
          );
        })}
      </div>
    </div>
  );
}
class ActionSheet extends Component {
  state = {
    isShow: this.props.isShow
  };
  static defaultProps = {
    prefix,
    isShow: false,
    showMask: true,
    closeOnClickMask: true,
    cancelText: '取消'
  };
  static propTypes = {
    /**
     * 自定义类名
     */
    prefix: PropTypes.string,
    /**
     * 面板开启状态
     */
    isShow: PropTypes.bool.isRequired,
    /**
     * 是否显示遮罩
     */
    showMask: PropTypes.bool,
    /**
     * 是否在点击遮罩后关闭
     */
    closeOnClickMask: PropTypes.bool,
    /**
     * 横向展示的数据
     */
    horizon: PropTypes.arrayOf(dataStruct()),
    /**
     * 纵向展示的数据
     */
    vertialList: PropTypes.arrayOf(dataStruct(false)),
    /**
     * 标题栏
     */
    title: PropTypes.oneOfType([
      PropTypes.element,
      PropTypes.node,
      PropTypes.string
    ]),
    /**
     * 取消按钮文字
     */
    cancelText: PropTypes.string,
    /**
     * 关闭时触发事件
     */
    onClose: PropTypes.func
  };
  renderData = (data, horizon, wrap) => {
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
    let $horizon = this.renderData(horizon.list, true, horizon.wrap);
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
  closeAct = () => {
    this.setState({
      isShow: false
    });
    this.props.onClose && this.props.onClose();
  };
  render(
    { prefix, showMask, children, cancelText, closeOnClickMask, title },
    { isShow }
  ) {
    const content = this.renderContent();
    let maskProp = {};
    if (closeOnClickMask) {
      maskProp.onClick = this.onMaskClick;
    }
    return isShow ? (
      <div>
        {showMask && <div className={`${prefix}-mask`} />}
        <div className={`${prefix}-wrapper`} {...maskProp}>
          <div className={prefix}>
            {!!title && <div className={`${prefix}-title`}>{title}</div>}
            <div className={`${prefix}-main`}>
              {children}
              {content}
            </div>
            <div className={`${prefix}-cancel`}>{cancelText}</div>
          </div>
        </div>
      </div>
    ) : null;
  }
}
export default ActionSheet;
