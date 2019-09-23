import { h } from 'preact';
import cx from 'classnames';

function changeFn(direction, pn, pages, onChange) {
  pn = Number(pn);
  if (
    (pn < pages && direction === 1) ||
    (pn > 1 && direction === -1 && onChange)
  ) {
    return () => {
      onChange(pn + direction);
    };
  }
  return () => {};
}

interface IProps {
  /**
   * 自定义类名
   */
  prefix?: string,
  /**
   * 当前页码
   */
  pn: number,
  /**
   * 总页数
   */
  pages: number,
  /**
   * 点击切换时回调
   */
  onChange?: Function,
  /**
   * 自定义类名
   */
  className?: string
}
/**
 * 分页
 * @example
 * ```javascript
 * <Pagination pn={pn} pages={pages} onChange={this.onPageChange} />
 * ```
 */
const Pagination = ({
  prefix,
  pn,
  className,
  pages,
  onChange,
  ...restProps
}: IProps) => {
  const prevCx = cx(`${prefix}-btn`, {
    [`${prefix}__disabled`]: pn <= 1
  });
  const nextCx = cx(`${prefix}-btn`, {
    [`${prefix}__disabled`]: pn >= pages
  });

  return (
    <div className={cx(prefix, className)} {...restProps}>
      <button onClick={changeFn(-1, pn, pages, onChange)} className={prevCx}>
        上一页
      </button>
      <span className={`${prefix}-indicator`}>
        {pn} / {pages}
      </span>
      <button onClick={changeFn(1, pn, pages, onChange)} className={nextCx}>
        下一页
      </button>
    </div>
  );
};
Pagination.defaultProps = {
  prefix: 'caf-page',
};

export default Pagination;
