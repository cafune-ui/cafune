import { Component, cloneElement, h, VNode } from 'preact';
import cx from 'classnames';
import Step from './step';
function checkIfItem(el) {
  return el.nodeName.displayName === 'Step';
}
interface IProps {
  /**
   * 自定义类名
   */
  prefix?: string;
  /**
   * 当前步骤，从0开始计算，可在`Step`中通过`status`覆盖
   */
  step?: number;
  /**
   * 当前步骤状态
   */
  status?: 'pend' | 'process' | 'finish' | 'failed';
  /**
   * 步骤条方向
   */
  direction?: 'vertical' | 'horizontal';
  /**
   * 是否以下标(从1开始)显示图标
   */
  isDecimalInd?: boolean;
  /**
   * 步骤图标（会被子`Step` 的`icon` 属性覆盖）
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
 * 步骤条
 */
class Steps extends Component<IProps> {
  static Step = Step;
  static defaultProps = {
    prefix: 'caf-steps',
    step: 0,
    status: 'process',
    direction: 'horizontal'
  };
  getChildContext() {
    return {
      isDecimalInd: this.props.isDecimalInd
    };
  }
  renderSteps() {
    const { children, step, status, icons } = this.props;
    const stepsArr = [];
    (children as any[]).forEach((Item, ind) => {
      if (Item && checkIfItem(Item)) {
        const newProps:any = { ind };
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
      <div
        className={cx(prefix, className, `${prefix}--${direction}`)}
        {...restProps}
      >
        {this.renderSteps()}
      </div>
    );
  }
}
export default Steps;
