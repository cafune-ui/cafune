import { Component, cloneElement } from 'preact';
import PropTypes from 'prop-types';
import cx from 'classnames';
import Step from './step';
function checkIfItem(el) {
  return el.nodeName.displayName === 'Step';
}
/**
 * 步骤条
 */
class Steps extends Component {
  static Step = Step;
  static defaultProps = {
    prefix: 'caf-steps',
    step: 0,
    status: 'process',
    direction: 'horizontal'
  };
  static propTypes = {
    /**
     * 自定义类名
     */
    prefix: PropTypes.string,
    /**
     * 当前步骤，从0开始计算，可在`Step`中通过`status`覆盖
     */
    step: PropTypes.number,
    /**
     * 当前步骤状态
     */
    status: PropTypes.oneOf(['pend', 'process', 'finish', 'error']),
    /**
     * 步骤条方向
     */
    direction: PropTypes.oneOf(['vertical', 'horizontal']),
    /**
     * 是否以下标(从1开始)显示图标
      */
    isDecimalInd: PropTypes.bool,
    /**
     * 步骤图标（会被子`Step` 的`icon` 属性覆盖）
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
  getChildContext() {
    return {
      isDecimalInd: this.props.isDecimalInd
    }
  }
  renderSteps() {
    const { children, step, status, icons } = this.props;
    const stepsArr = [];
    children.forEach((Item, ind) => {
      if (Item && checkIfItem(Item)) {
        const newProps = { ind };
        const props = Item.attributes;
        if (!props.status) {
          if (step === ind) {
            newProps.status = status;
          } else if (ind < step) {
            newProps.status = 'finish';
          } else {
            newProps.status = 'pend';
          }
        }
        if (props.icons && (icons && Object.keys(icons).length)) {
          newProps.icons = Object.assign({}, icons, props.icons);
        }
        stepsArr.push(cloneElement(Item, newProps));
      }
    });
    return stepsArr;
  }
  render({ prefix, className, direction, ...restProps }) {
    return (
      <div className={cx(prefix, className, `${prefix}__${direction}`)} {...restProps}>
        {this.renderSteps()}
      </div>
    );
  }
}
export default Steps;
