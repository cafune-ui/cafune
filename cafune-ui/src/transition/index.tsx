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
   * 是否跳过css检测
   */
  css?: boolean;
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
  enter?: (node: HTMLElement, done?) => void;
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
  leave?: (node: HTMLElement, done?) => void;
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
    instant: false,
    css: true
  };
  noop = function(_, cb?) {
    /* istanbul ignore next */
    cb && cb(this);
  };
  constructor(props:IProps) {
    super(props);
    this.state = {
      isShow: props.instant
    }
    this.noop = this.noop.bind(this)
  }
  cssAnimation(node) {
    const { visible, name } = this.props;
    if (visible) {
      const activeClass = [name, `${name}-enter`, `${name}-enter-active`];
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
  bindAnimationEvent(node, activeClass) {
    const eventName = this.transitionend();
    this.animate(node);
    node.addEventListener(eventName, () => {
      this.removeClassName(node, activeClass);
      this.animate(node, true);
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
      /* istanbul ignore next */
      if (el.style[t] !== undefined) {
        return transitions[t];
      }
    }
  }
  removeClassName(elem, className) {
    if (!elem) return;
    elem.classList.remove(...className);
  }
  animate(node, done = false) {
    let { visible, beforeEnter, enter, beforeLeave, leave, css, name } = this.props;
    beforeEnter = beforeEnter || /* istanbul ignore next */ this.noop;
    enter = enter /* istanbul ignore next */ || this.noop;
    beforeLeave = beforeLeave || /* istanbul ignore next */ this.noop;
    leave = leave /* istanbul ignore next */ || this.noop;
    if (visible) {
      beforeEnter(node);
      if (!(!!name && css)) {
        setTimeout(() => enter(node, this.done));
      } else {
        if (done) {
          this.done();
        } else {
          enter(node);
        }
      }
      
    } else {
      beforeLeave(node);
      if (!(!!name && css)) {
        setTimeout(() => leave(node, this.done));
      } else{
        if (done) {
          this.done();
        } else {
          leave(node);
        }
      }
    }
  }
  animationStart() {
    const node = this.base;
    const { name, css } = this.props;
    if (!!name && css) {
      this.cssAnimation(node)
    } else {
      this.animate(node);
    }
    
  }
  done() {
    const node = this.base;
    let { visible, afterEnter, afterLeave } = this.props;
    
    afterEnter = afterEnter /* istanbul ignore next */ || this.noop;
    afterLeave = afterLeave /* istanbul ignore next */ || this.noop;
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
