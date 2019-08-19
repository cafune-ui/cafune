import cx from 'classnames';
import PropTypes from 'prop-types';

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
}) => {
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
Pagination.propTypes = {
  /**
   * 自定义类名
   */
  prefix: PropTypes.string,
  /**
   * 当前页码
   */
  pn: PropTypes.number.isRequired,
  /**
   * 总页数
   */
  pages: PropTypes.number.isRequired,
  /**
   * 点击切换时回调
   */
  onChange: PropTypes.func
};

export default Pagination;
