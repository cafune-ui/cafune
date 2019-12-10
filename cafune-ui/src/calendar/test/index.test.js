import Calendar from '../';
import { render } from 'enzyme';
import { shallow, deep } from 'preact-render-spy';

describe('Calendar', () => {
  it('should render properly', () => {
    const wrapper = deep(<Calendar maxSelect={7} minSelect={2} />);

    wrapper.find('.caf-calendar__header__btn--left').simulate('click');

    expect(wrapper).toMatchSnapshot();

    const dateFn = jest.fn();
    const wrapper2 = deep(
      <Calendar
        maxSelect={7}
        minSelect={2}
        defaultCurrent={{ month: 10 }}
        defaultSelect={{ start: '2019/10/20', end: new Date() }}
        formatter={{
          title(year, month) {
            return `${year}年${month}月`;
          }
        }}
        onDateSelect={dateFn}
      />
    );
    wrapper2.find('.js-calendar').simulate('click', {
      target: {
        className: 'caf-calendar__date js-date',
        dataset: {
          week: 0,
          day: 6
        },
        key: '10-0-5'
      }
    });
    expect(dateFn).toHaveBeenCalledTimes(1);

    wrapper2.find('.js-calendar').simulate('click', {
      target: {
        className: 'caf-calendar__day',
        parentNode: {
          className: 'caf-calendar__date js-date',
          dataset: {
            week: 0,
            day: 6
          },
          key: '10-0-5'
        }
      }
    });
    expect(dateFn).toHaveBeenCalledTimes(2);

    expect(wrapper2).toMatchSnapshot();
  });

  it('should render properly', () => {
    const wrapper = deep(
      <Calendar defaultSelect={{ start: false, end: new Date() }} />
    );
    expect(wrapper).toMatchSnapshot();

    const wrapper2 = deep(
      <Calendar minSelect={2} />
    );

    wrapper2.find('.caf-calendar__header__btn--right').simulate('click');
    expect(wrapper2).toMatchSnapshot();
  });
});
