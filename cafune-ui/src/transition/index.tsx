import { Component, h, VNode } from 'preact';
import cx from 'classnames';

interface IProps {
  /**
   * 是否可见
   */
  visible?: boolean;
  /**
   * 是否一开始无动画进入
   */
  instant?: boolean;
  /**
   * 动画前缀
   */
  name?: string;
  /**
   * 进入之前钩子
   */
  beforeEnter?: (node: HTMLElement) => void;
  /**
   * 进入钩子
   */
  enter?: (node: HTMLElement, done) => void;
  /**
   * 进入之后钩子
   */
  afterEnter?: (node: HTMLElement) => void;
  /**
   * 离开之前钩子
   */
  beforeLeave?: (node: HTMLElement) => void;
  /**
   * 离开钩子
   */
  leave?: (node: HTMLElement, done) => void;
  /**
   * 离开之后钩子
   */
  afterLeave?: (node: HTMLElement) => void;
}

interface IState {
  /**
   * 是否显示
   */
  isShow: boolean
}
/**
 * 过渡
 */
class Transition extends Component<IProps, IState> {
  static defaultProps = {
    visible: false,
    instant: false
  };
  noop = function() {};
  constructor(props:IProps) {
    super(props);
    this.state = {
      isShow: props.instant
    }
  }
  cssAnimation(node) {
    const { visible, name } = this.props;
    if (visible) {
      const activeClass = [`${name}-enter`, `${name}-enter-active`];
      node.classList.add(...activeClass)
      setTimeout(() => {
        this.removeClassName(node, [`${name}-enter`]);
      });
      this.bindAnimationEvent(node, activeClass);
    } else {
      const activeClass = [`${name}-leave-active`];
      node.classList.add(...activeClass);
      setTimeout(() => {
        activeClass.push(`${name}-leave`)
        node.classList.add(`${name}-leave`);
      });
      this.bindAnimationEvent(node, activeClass);
    }
  }
  bindAnimationEvent(elem, activeClass) {
    const { visible } = this.props;
    const eventName = this.transitionend();
    elem.addEventListener(eventName, () => {
      this.removeClassName(elem, activeClass);
      !visible && this.setState({ isShow: false });
    });
  }
  transitionend() {
    let t;
    const el = document.createElement('noop');
    const transitions = {
      transition: 'transitionend',
      OTransition: 'oTransitionEnd',
      MozTransition: 'transitionend',
      WebkitTransition: 'webkitTransitionEnd'
    };

    for (t in transitions) {
      if (el.style[t] !== undefined) {
        return transitions[t];
      }
    }
  }
  removeClassName(elem, className) {
    if (!elem) return;
    // const elClassName = elem.className;
    // if (elClassName.length === 0) return;
    // if (elClassName === className) {
    //   elem.className = '';
    //   return;
    // }
    // const classes = elClassName.split(' ');
    // const removeClesses = className.split(' ');
    // const newClasses = [];
    // classes.forEach(curr => {
    //   if (curr !== '' && removeClesses.indexOf(curr) < 0) {
    //     newClasses.push(curr);
    //   }
    // });
    elem.classList.remove(...className);
  }
  animate(node) {
    let { visible, beforeEnter, enter, beforeLeave, leave } = this.props;
    beforeEnter = beforeEnter || this.noop;
    enter = enter || this.noop;
    beforeLeave = beforeLeave || this.noop;
    leave = leave || this.noop;

    if (visible) {
      beforeEnter(node);
      setTimeout(() => enter(node, this.done.bind(this)));
    } else {
      beforeLeave(node);
      setTimeout(() => leave(node, this.done.bind(this)));
    }
  }
  animationStart() {
    const node = this.base;
    const { name } = this.props;
    !!name ? this.cssAnimation(node) : this.animate(node);
  }
  done() {
    const node = this.base;
    let { visible, afterEnter, afterLeave } = this.props;
    afterEnter = afterEnter || this.noop;
    afterLeave = afterLeave || this.noop;
    if (visible) {
      afterEnter(node);
    } else {
      afterLeave(node);
      setTimeout(() => this.setState({ isShow: false }));
    }
  }
  componentWillReceiveProps(nextProps) {
    nextProps.visible && this.setState({ isShow: true });
  }
  componentDidUpdate(previousProps) {
    if (previousProps.visible !== this.props.visible) {
      this.animationStart();
    }
  }
  componentDidMount() {
    if (this.props.visible && !this.state.isShow) {
      this.setState({ isShow: true }, () => { this.animationStart(); })
    }
  }
  render({ children }, { isShow }) {
    return isShow && children[0] ? children[0] : null;
  }
}
export default Transition;
