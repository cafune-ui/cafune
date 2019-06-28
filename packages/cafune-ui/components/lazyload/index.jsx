import { Component, createRef } from 'preact';
import { inViewPort } from '../../util/browser';
import PropTypes from 'prop-types';
/**
 * 懒加载包裹组件
 * @example
 * ```jsx
 * <Lazyload imgClass="lazy">
 * // ...
 * <img src="/placeholder" data-src={originalpic} class="lazy" />
 * // ...
 * </Lazyload>
 * ```
 */
class Lazyload extends Component {
  lazyLoadIns;
  imgs = [];
  imgsInfo = {};
  static propTypes = {
    /**
     * 懒加载图片类名
     */
    imgClass: PropTypes.string
  };
  static defaultProps = {
    imgClass: 'lazyImg'
  };
  container;
  componentDidMount() {
    const container = this.lazyContainer.current;
    this.container = container;
    this.updateImgs();
    window.addEventListener('scroll', this.onScroll);
  }
  componentDidUpdate() {
    /* istanbul ignore next  */
    this.updateImgs();
  }
  updateImgs() {
    this.imgs = this.container.querySelectorAll(`.${this.props.imgClass}`);
    const imgsInfo = [];
    this.imgs.forEach(ele => {
      imgsInfo.push({
        dom: ele,
        isLoaded: false,
        src: ele.dataset.src
      });
    });
    this.imgsInfo = imgsInfo;
    this.updateLazy();
  }
  componentWillUnmount() {
    window.removeEventListener('scroll', this.onScroll);
  }
  updateLazy() {
    const { imgsInfo } = this;
    imgsInfo.forEach(ele => {
      /* istanbul ignore else */
      if (!ele.isLoaded && inViewPort(ele.dom)) {
        ele.isLoaded = true;
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
      <div ref={this.lazyContainer} class="lazyContainer">
        {children}
      </div>
    );
  }
}

export default Lazyload;
