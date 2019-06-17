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
  const prevCx = classNames('caf-page-btn', {
    'caf-page-btn__disabled': pn <= 1
  });
  const nextCx = classNames('caf-page-btn', {
    'caf-page-btn__disabled': pn >= pages
  });

  return (
    <div class='caf-page'>
      <button onClick={changeFn(-1, pn, pages, onChange)} class={prevCx}>
        上一页
      </button>
      <span class='caf-page-indicator'>
        {pn} / {pages}
      </span>
      <button onClick={changeFn(1, pn, pages, onChange)} class={nextCx}>
        下一页
      </button>
    </div>
  );
};

export default Pagination;
