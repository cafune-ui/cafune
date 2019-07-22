import { Component, createRef } from 'preact';
import { inViewPort } from '../../util/browser';
import PropTypes from 'prop-types';
/**
 * 懒加载包裹组件
 * @example
 * ```javascript
 * <Lazyload imgclassName="lazy">
 * // ...
 * <img src="/placeholder" data-src={originalpic} className="lazy" />
 * // ...
 * </Lazyload>
 * ```
 */
class Lazyload extends Component {
  lazyLoadIns;
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
    if (this.container) {
      const imgsInfo = [];
      // eslint-disable-next-line prettier/prettier
      const imgs = this.container.querySelectorAll(`.${this.props.imgClass}`) || [];
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
    window.removeEventListener('scroll', this.onScroll);
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
