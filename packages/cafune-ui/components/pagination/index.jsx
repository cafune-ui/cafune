import classNames from 'classnames';
import PropTypes from 'prop-types';

function changeFn(direction, pn, pages, onChange) {
  pn = Number(pn);
  if ((pn < pages && direction === 1) || (pn > 1 && direction === -1)) {
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
const Pagination = ({ pn, pages, onChange = () => {} }) => {
  const prevCx = classNames('caf-page-btn', {
    'caf-page-btn__disabled': pn <= 1
  });
  const nextCx = classNames('caf-page-btn', {
    'caf-page-btn__disabled': pn >= pages
  });

  return (
    <div className='caf-page'>
      <button onClick={changeFn(-1, pn, pages, onChange)} className={prevCx}>
        上一页
      </button>
      <span className='caf-page-indicator'>
        {pn} / {pages}
      </span>
      <button onClick={changeFn(1, pn, pages, onChange)} className={nextCx}>
        下一页
      </button>
    </div>
  );
};
Pagination.propTypes = {
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
