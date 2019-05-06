import style from './style.scss';
import classNames from 'classnames';

function changeFn(direction, pn, pages, onChange) {
  pn = Number(pn);
  if ((pn < pages && direction === 1) || (pn > 1 && direction === -1)) {
    return () => {
      onChange(pn + direction);
    };
  }
  return () => {};
}
export const Pagination = ({ pn, pages, onChange = () => {} }) => {
  const prevCx = classNames(style.pagination_btn, {
    [style.pagination_btn__disabled]: pn <= 1
  });
  const nextCx = classNames(style.pagination_btn, {
    [style.pagination_btn__disabled]: pn >= pages
  });

  return (
    <div class={style.pagination}>
      <button onClick={changeFn(-1, pn, pages, onChange)} class={prevCx}>
        上一页
      </button>
      <span class={style.pagination_indicator}>
        {pn} / {pages}
      </span>
      <button onClick={changeFn(1, pn, pages, onChange)} class={nextCx}>
        下一页
      </button>
    </div>
  );
};

export default Pagination;
