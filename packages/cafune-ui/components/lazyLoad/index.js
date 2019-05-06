import { Component, createRef } from 'preact';
import { inViewPort } from 'util/browser';

export class LazyLoad extends Component {
  lazyLoadIns;
  imgs = [];
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
    this.updateImgs();
  }
  updateImgs() {
    this.imgs = this.container.querySelectorAll(`.${this.props.imgClass}`);
    this.updateLazy();
  }
  componentWillUnmount() {
    window.removeEventListener('scroll', this.onScroll);
  }
  updateLazy() {
    this.imgs.forEach(ele => {
      if (
        inViewPort(ele) &&
        !ele.isLoaded &&
        ele.tagName.toLowerCase() === 'img'
      ) {
        ele.isLoaded = true;
        ele.src = ele.dataset.original;
        delete ele.dataset.original;
      }
    });
  }
  onScroll = () => {
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

export default LazyLoad;
