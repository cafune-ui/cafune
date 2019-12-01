import { Component, h } from 'preact';
import cx from 'classnames';
import { setPadding } from '../util/isomorphic';
import Button from '../button';
import { IProps as CafButtonInt } from '../button';

interface IProps {
  /**
   * 左侧描述内容
   */
  desc: any;
  /**
   * 按钮内容
   */
  btns: CafButtonInt[];
  /**
   * 附加信息
   */
  additionMsg?: any;
}

/**
 * 动作栏
 */
class ActionBar extends Component<IProps, {}> {
  static defaultProps = {
    prefix: 'caf-actionbar'
  };
  actionbar;
  componentDidMount() {
    setPadding(`${this.actionbar.getBoundingClientRect().height}px`);
  }
  componentWillUnmount() {
    setPadding('');
  }
  render({
    prefix,
    className,
    desc,
    btns,
    capsule,
    additionMsg,
    ...restProps
  }) {
    return (
      <div
        className={cx(prefix, className)}
        ref={c => (this.actionbar = c)}
        {...restProps}
      >
        {!!additionMsg && <div className={`${prefix}__tip`}>{additionMsg}</div>}
        <div className={`${prefix}__main`}>
          <div className={`${prefix}__main__desc`}>{desc}</div>
          <div className={`${prefix}__main__action`}>
            {btns && btns.length && btns.map((item, ind) => (
              <Button {...item} key={ind} />
            ))}
          </div>
        </div>
      </div>
    );
  }
}
/// export { ActionBar };
export default ActionBar;
