import { h, VNode } from 'preact';
import cx from 'classnames';
import Icon from '../icon';

const themeColor = '#3f77f6';
const defaultLeftProp = {
  icon: 'back'
};

/**
 * 获取按钮内容
 * @param {object} data 按钮信息
 * @param {string} side 按钮位置
 * @param {boolean} isConflict icon和text 是否存在二选一
 */
function getBtn(prefix, data, isConflict = false) {
  if (data) {
    const { icon, color, text, badge, clickHandler } = data;
    let textProp: any = {};
    if (color) {
      textProp.style = { color };
    }
    const hadText = !(isConflict && !!icon) && !!text;
    const $badge = !!badge && (
      <span className={`${prefix}__btn__badge`}>
        {typeof badge === 'string' && badge}
      </span>
    );
    // 竞争状态时只保留图标
    return (
      <div
        className={`${prefix}__btn`}
        onClick={clickHandler}
      >
        {!!icon && <Icon icon={icon} color={color || themeColor} />}
        {hadText && (
          <span
            className={cx(`${prefix}__btn__text`, {
              [`${prefix}__btn__text--badged`]: !!badge
            })}
            {...textProp}
          >
            {text}
          </span>
        )}
        {$badge}
      </div>
    );
  }
  return null;
}
type IBtn = {
  /**
   * 按钮图标
   */
  icon?: string;
  /**
   * 按钮颜色
   */
  color?: string;
  /**
   * 按钮描述文字（如为右侧按钮有文字则会忽略）
   */
  text?: string;
  /**
   * 按钮点击事件
   */
  clickHandler?: Function;
  /**
   * 徽标
   */
  badge?: string | boolean;
};
interface IProps {
  /**
   * 自定义前缀
   */
  prefix?: string;
  /**
   * 左侧按钮信息，当为对象时将根据对象信息显示，如为`false` 时则不显示
   */
  left?: IBtn | boolean;
  /**
   * 右侧按钮列表
   */
  rights?: IBtn[] | IBtn;
  /**
   * 自定义类名
   */
  className?: string;
  /**
   * 子元素
   */
  children?: VNode | HTMLElement | any;
  /**
   * 是否使用绝对定位
   */
  isFixed?: boolean;
}
/**
 * 导航栏
 */
const NavBar = ({
  prefix,
  className,
  children,
  left,
  rights,
  isFixed,
  ...restProps
}: IProps) => {
  const rightIcons = Array.isArray(rights)
    ? rights.map(item => getBtn(prefix, item, true))
    : getBtn(prefix, rights, true);
  return (
    <div
      className={cx(prefix, className, { [`${prefix}--fixed`]: isFixed })}
      {...restProps}
    >
      <div className={`${prefix}__btns ${prefix}__btns--left`}>
        {getBtn(prefix, Object.assign({}, defaultLeftProp, left))}
      </div>
      <div className={`${prefix}__title`}>
        {children && children.length > 0 && children}
      </div>
      <div className={`${prefix}__btns ${prefix}__btns--right`}>
        {rightIcons}
      </div>
    </div>
  );
};

NavBar.defaultProps = {
  prefix: 'caf-navbar',
  left: defaultLeftProp,
  rights: []
};
export default NavBar;
