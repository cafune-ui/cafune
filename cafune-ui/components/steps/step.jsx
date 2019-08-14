import { Component } from 'preact';
import PropTypes from 'prop-types';
import cx from 'classnames';
import Icon from '../icon';
const defaultIconMap = (prefix, status, isDecimal, ind) => {
  if (isDecimal) {
    return <span className={`${prefix}-icon-decimal`}>{ind}</span>;
  } else {
    if (status === 'finish') {
      return (
        <span className={`${prefix}-icon-container`}>
          <Icon icon="check" />
        </span>
      );
    }
    if (status === 'error') {
      return (
        <span className={`${prefix}-icon-container`}>
          <Icon icon="wrong" />
        </span>
      );
    }
    return <i className={`${prefix}-icon-circle`} />;
  }
};
/**
 * 步骤条步骤单元
 */
class Step extends Component {
  static displayName = 'Step';
  static defaultProps = {
    prefix: 'caf-step',
    status: 'pend'
  };
  static propTypes = {
    /**
     * 自定义类名
     */
    prefix: PropTypes.string,
    /**
     * 指定步骤状态，默认根据父级`Steps` 的step 来决定状态
     */
    status: PropTypes.oneOf(['pend', 'process', 'finish', 'error']),
    /**
     * 标题
     */
    title: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.element,
      PropTypes.node
    ]).isRequired,
    /**
     * 详情描述
     */
    desc: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.element,
      PropTypes.node
    ]),
    /**
     * 步骤图标
     */
    icons: PropTypes.shape({
      /**
       * 等待状态图标
       */
      pend: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.element,
        PropTypes.node
      ]),
      /**
       * 进行中状态图标
       */
      process: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.element,
        PropTypes.node
      ]),
      /**
       * 结束状态图标
       */
      finish: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.element,
        PropTypes.node
      ]),
      /**
       * 错误状态图标
       */
      error: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.element,
        PropTypes.node
      ])
    })
  };
  renderIcon() {
    const { prefix, icons, ind, status } = this.props;
    const { isDecimalInd } = this.context;
    let iconResult;
    if (icons && icons[status]) {
      iconResult =
        typeof icons[status] === 'string' ? (
          <Icon icon={icons[status]} />
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
      <div className={cx(prefix, className, `${prefix}__${status}`)} {...restProps}>
        <div className={`${prefix}-tail`}></div>
        <div className={`${prefix}-icon`}>{this.renderIcon()}</div>
        <div className={`${prefix}-content`}>
          {!!title && <div className={`${prefix}-content-title`}>{title}</div>}
          {!!desc && <div className={`${prefix}-content-desc`}>{desc}</div>}
        </div>
      </div>
    );
  }
}
export default Step;
