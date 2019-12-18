import { Component, h } from 'preact';
import Icon from '../../icon';
import Loading from '../../loading';

interface IProps {
  prefix?: string;
  duration?: number;
  onClose?: () => void;
}
interface IState {
  test: string;
}
export default class Notice extends Component<IProps, IState> {
  static defaultProps = {
    duration: 2000
  };
  componentDidMount() {
    this.startTimer();
  }
  // componentDidUpdate(prevProps) {
  //   if (this.props.duration !== prevProps.duration) {
  //     this.reset();
  //   }
  // }
  componentWillUnmount() {
    this.clear();
  }

  close = (e?: MouseEvent) => {
    e && e.stopPropagation();
    this.clear();
    this.props.onClose();
  };
  closeTimer;
  startTimer = () => {
    if (this.props.duration) {
      this.closeTimer = setTimeout(() => {
        this.close();
      }, this.props.duration);
    }
  };

  clear = () => {
    if (this.closeTimer) {
      clearTimeout(this.closeTimer);
      this.closeTimer = null;
    }
  };

  // reset() {
  //   this.clear();
  //   this.startTimer();
  // }
  render({ prefix, icon, type, children }) {
    let toastIcon = null;
    if (icon) {
      if (typeof icon === 'string') {
        toastIcon = <Icon icon={icon} size="42px" />;
      } else if (icon.icon) {
        toastIcon = <Icon icon={icon.icon} size={icon.size || '42px'} />;
      }
    } else if (type === 'loading') {
      toastIcon = <Loading />
    }
    return (
      <div className={`${prefix}-notice`}>
        {toastIcon}
        <p className={`${prefix}-notice__content`}>{children}</p>
      </div>
    );
  }
}
