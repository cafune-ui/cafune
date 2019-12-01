import { h, VNode } from 'preact';
import cx from 'classnames';
import Button from '../button';

function changeFn(direction, pn, pages, onChange) {
  pn = Number(pn);
  if ((pn < pages && direction > 0) || (pn > 1 && direction < 0 && onChange)) {
    return () => {
      onChange(pn + direction);
    };
  }
  return () => {};
}

type IButtonIcon = {
  /**
   * 按钮图标（加载状态时会被加载图标覆盖）
   */
  type?: string | VNode | HTMLElement;
  /**
   * 图标位置，当为`left` 或`right` 时，图标将出现在文字旁边。也可传入`{left: 'xx'. right: 'xx' }`来绝对定位图标
   */
  positon?: string | object;
};

type IButtonTexts = {
  prev?: string;
  next?: string;
};

type IButtonIcons = {
  prev?: IButtonIcon;
  next?: IButtonIcon;
};

interface IProps {
  /**
   * 自定义类名
   */
  prefix?: string;
  /**
   * 分页形态，`button` 时为带按钮状态，`number` 时只显示数字状态， `pointer` 时全为小黑点，适用于总页数不大于 10 的情况
   */
  mode?: 'button' | 'number' | 'pointer';
  /**
   * 是否隐藏数字，仅在`mode` 为 `button`时有效
   */
  simple?: boolean;
  /**
   * 当前页码
   */
  current: number;
  /**
   * 总页数
   */
  total: number;
  /**
   * 步进数
   */
  step?: number;
  /**
   * 点击切换时回调
   */
  onChange?: (pageNum: number) => void;
  /**
   * 自定义类名
   */
  className?: string;
  /**
   * 按钮文字
   */
  btnText?: IButtonTexts;
  /**
   * 按钮图标
   */
  btnIcon?: IButtonIcons;
}
/**
 * 分页
 */
const Pagination = ({
  prefix,
  mode,
  simple,
  current,
  className,
  total,
  onChange,
  btnText,
  btnIcon,
  step,
  ...restProps
}: IProps) => {
  const prevCx = cx(`${prefix}__btn`, {
    [`${prefix}__btn--disabled`]: current <= 1
  });
  const nextCx = cx(`${prefix}__btn`, {
    [`${prefix}__btn--disabled`]: current >= total
  });
  let indicator;
  if (mode === 'pointer') {
    const tmp = [];
    for (let i = 0; i < total; i++) {
      tmp.push(i + 1 === current);
    }
    indicator = (
      <div className={`${prefix}__dot`}>
        {tmp.map(item => (
          <span
            className={cx(`${prefix}__dot__item`, {
              [`${prefix}__dot__item--current`]: item
            })}
          ></span>
        ))}
      </div>
    );
  }
  let isShowBtn = mode === 'button';
  let isShowNumber = mode === 'number' || (mode === 'button' && !simple);
  return (
    <div className={cx(prefix, className)} {...restProps}>
      {(isShowBtn && (!!(btnText && btnText.prev) ||
        !!(btnIcon && btnIcon.prev)) && (
          <Button
            // disabled={current <= 1}
            type={current <= 1 ? 'cancel' : 'primary'}
            onClick={changeFn(-1 * step, current, total, onChange)}
            icon={(btnIcon && btnIcon.prev) || null}
            className={prevCx}
          >
            {btnText && btnText.prev}
          </Button>
        ))}
      {isShowNumber && (
        <span className={`${prefix}__indicator`}>
          {current} / {total}
        </span>
      )}
      {(isShowBtn && (!!(btnText && btnText.next) ||
        !!(btnIcon && btnIcon.next)) && (
          <Button
            // disabled={current >= total}
            type={current >= total ? 'cancel' : 'primary'}
            onClick={changeFn(1 * step, current, total, onChange)}
            icon={(btnIcon && btnIcon.next) || null}
            className={nextCx}
          >
            {btnText && btnText.next}
          </Button>
        ))}
      {mode === 'pointer' && indicator}
    </div>
  );
};
Pagination.defaultProps = {
  prefix: 'caf-page',
  step: 1,
  mode: 'button',
  simple: false
};

export default Pagination;
