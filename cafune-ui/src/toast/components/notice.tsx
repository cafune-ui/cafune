import { Component, h } from 'preact';
import cx from 'classnames';

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
    duration: 1.5
  };
  // componentDidMount() {
  //   this.startTimer();
  // }
  // componentDidUpdate(prevProps) {
  //   if (this.props.duration !== prevProps.duration) {
  //     this.reset();
  //   }
  // }
  // componentWillUnmount() {
  //   this.clear();
  // }

  // close = (e?: MouseEvent) => {
  //   e && e.stopPropagation();
  //   this.clear();
  //   this.props.onClose();
  // };
  // closeTimer;
  // startTimer = () => {
  //   if (this.props.duration) {
  //     this.closeTimer = setTimeout(() => {
  //       this.close();
  //     }, this.props.duration * 1000);
  //   }
  // };

  // clear = () => {
  //   if (this.closeTimer) {
  //     clearTimeout(this.closeTimer);
  //     this.closeTimer = null;
  //   }
  // };

  // reset() {
  //   this.clear();
  //   this.startTimer();
  // }
  render() {
    const { prefix, children, onClose } = this.props;
    return <div className={cx(`${prefix}-notice`)}>{children}</div>;
  }
}
