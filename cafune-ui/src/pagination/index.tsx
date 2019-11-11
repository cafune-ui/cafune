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

type IText = {
  prev?: string;
  next?: string;
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
  btnText: IText;
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
      {isShowBtn && (
        <Button
          // disabled={current <= 1}
          type={current <= 1 ? 'cancel' : 'primary'}
          onClick={changeFn(-1 * step, current, total, onChange)}
          // className={prevCx}
        >
          {(btnText && btnText.prev) || '上一页'}
        </Button>
      )}
      {isShowNumber && (
        <span className={`${prefix}__indicator`}>
          {current} / {total}
        </span>
      )}
      {isShowBtn && (
        <Button
          // disabled={current >= total}
          type={current >= total ? 'cancel' : 'primary'}
          onClick={changeFn(1 * step, current, total, onChange)}
          // className={nextCx}
        >
          {(btnText && btnText.next) || '下一页'}
        </Button>
      )}
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
