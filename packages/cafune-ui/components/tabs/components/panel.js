import { Component } from 'preact';
import classNames from 'classnames';

export default class Panel extends Component {
  static displayName = 'TabPanel';
  render({ children, className, actived }) {
    const cx = classNames('caf-tabs-panel', className);
    return (
      <div class={cx} data-actived={actived ? 1 : 0}>
        {children}
      </div>
    );
  }
}
