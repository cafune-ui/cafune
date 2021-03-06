import { Component, createRef, h } from 'preact';
import { inViewPort } from '../util/browser';
import { isBrowser } from '../util/isomorphic';
interface IProps {
  /**
   * 懒加载图片类名
   */
  imgClass?: string;
}
/**
 * 懒加载包裹组件
 */
class Lazyload extends Component<IProps> {
  lazyLoadIns;
  imgsInfo = [];
  static defaultProps = {
    imgClass: 'lazyImg'
  };
  container;
  componentDidMount() {
    /* istanbul ignore next  */
    if (isBrowser) {
      const container = this.lazyContainer.current;
      this.container = container;
      this.updateImgs();
      window.addEventListener('scroll', this.onScroll);
    }
  }
  componentDidUpdate() {
    /* istanbul ignore next  */
    this.updateImgs();
  }
  updateImgs() {
    /* istanbul ignore next  */
    if (this.container && isBrowser) {
      const imgsInfo = [];
      // eslint-disable-next-line prettier/prettier
      const imgs =
        this.container.querySelectorAll(`.${this.props.imgClass}`) || [];
      for (let i = 0, len = imgs.length; i < len; i += 1) {
        const ele = imgs[i];
        if (ele.dataset.src !== ele.src) {
          imgsInfo.push({
            dom: ele,
            src: ele.dataset.src
          });
        }
      }
      this.imgsInfo = imgsInfo;
      this.updateLazy();
    }
  }
  componentWillUnmount() {
    /* istanbul ignore next  */
    if (isBrowser) window.removeEventListener('scroll', this.onScroll);
  }
  updateLazy() {
    const { imgsInfo } = this;
    imgsInfo.forEach(ele => {
      /* istanbul ignore else */
      if (ele.dom.src !== ele.src && inViewPort(ele.dom)) {
        ele.dom.src = ele.src;
      }
    });
  }
  onScroll = () => {
    /* istanbul ignore next  */
    this.updateLazy();
  };
  lazyContainer = createRef();
  render({ children }) {
    return (
      <div ref={this.lazyContainer} className="caf-lazyload">
        {children}
      </div>
    );
  }
}

export default Lazyload;
