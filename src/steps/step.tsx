import { Component, h, VNode } from 'preact';
import cx from 'classnames';
import Icon from '../icon';
const defaultIconMap = (prefix, status, isDecimal, ind) => {
  if (isDecimal) {
    return <span className={`${prefix}__icon__decimal`}>{ind}</span>;
  } else {
    /* istanbul ignore next */
    if (status === 'finish') {
      return (
        <span className={`${prefix}__icon__container`}>
          <Icon icon="check" />
        </span>
      );
    }
    /* istanbul ignore next */
    if (status === 'failed') {
      return (
        <span className={`${prefix}__icon__container`}>
          <Icon icon="wrong" />
        </span>
      );
    }
    return <i className={`${prefix}__icon__circle`} />;
  }
};
interface IProps {
  /**
   * 自定义前缀
   */
  prefix?: string;
  /**
   * 顺序
   */
  ind?: number;
  /**
   * 指定步骤状态，默认根据父级`Steps` 的step 来决定状态
   */
  status?: 'pend' | 'process' | 'finish' | 'error';
  /**
   * 标题
   */
  title: string | HTMLElement | VNode;
  /**
   * 详情描述
   */
  desc?: string | HTMLElement | VNode;
  /**
   * 步骤图标
   */
  icons?: {
    /**
     * 等待状态图标
     */
    pend?: string | HTMLElement | VNode;
    /**
     * 进行中状态图标
     */
    process?: string | HTMLElement | VNode;
    /**
     * 结束状态图标
     */
    finish?: string | HTMLElement | VNode;
    /**
     * 错误状态图标
     */
    error?: string | HTMLElement | VNode;
  };
}
/**
 * 步骤条步骤单元
 */
class Step extends Component<IProps> {
  static displayName = 'Step';
  static defaultProps = {
    prefix: 'caf-step',
    status: 'pend'
  };
  renderIcon() {
    const { prefix, icons, ind, status } = this.props;
    const { isDecimalInd } = this.context;
    let iconResult;
    if (icons && icons[status]) {
      iconResult =
        typeof icons[status] === 'string' ? (
          <Icon icon={(icons[status] as string)} />
        ) : (
          icons[status]
        );
    } else {
      iconResult = defaultIconMap(prefix, status, isDecimalInd, ind);
    }
    return iconResult;
  }
  render({ prefix, className, title, desc, status, ...restProps }) {
    return (
      <div
        className={cx(prefix, className, `${prefix}--${status}`)}
        {...restProps}
      >
        <div className={`${prefix}__tail`}></div>
        <div className={`${prefix}__icon`}>{this.renderIcon()}</div>
        <div className={`${prefix}__content`}>
          {!!title && <div className={`${prefix}__content__title`}>{title}</div>}
          {!!desc && <div className={`${prefix}__content__desc`}>{desc}</div>}
        </div>
      </div>
    );
  }
}
export default Step;
