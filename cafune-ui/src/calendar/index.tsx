import { Component, h, VNode } from 'preact';
import cx from 'classnames';
import DayJs, { Dayjs } from 'dayjs';

type IDataRange = {
  start: string | number | Date;
  end?: string | number | Date;
};

type ICurDate = Dayjs | Dayjs[];
type formatter = (value: number) => string | number;
interface IProps {
  /**
   * 自定义类名
   */
  prefix?: string;
  /**
   * 初始选中时间。字符串类型时需以'年/月/日'的方式传入，number 类型是为毫秒数，默认为今天
   */
  defaultSelect?: string | number | Date | IDataRange;
  /**
   * 最多可选数目
   */
  maxSelect?: number;
  /**
   * 最少可选数目
   */
  minSelect?: number;
  /**
   * 日期改变回调函数，`maxSelect`大于1时回调为数组
   */
  onDateSelect?: (curDate: ICurDate) => void;
  /**
   * 日期格式化函数，`type` 为`year`, `month`, `week`
   */
  formatter?: {
    year?: formatter;
    month?: formatter;
    title?: (year: number, month: number) => any;
    week?: formatter;
  };
}

function formateDate(current) {
  let date: Dayjs;
  if (DayJs.isDayjs(current)) {
    return current;
  }
  if (typeof current === 'string' || typeof current === 'number') {
    date = DayJs(current);
  } else {
    date = current ? DayJs(current) : DayJs();
  }
  return date;
}

function getBackFill(startOfMonth) {
  const calendar: any = [];
  const dayOfWeek = startOfMonth.day();
  if (!dayOfWeek) return [];
  startOfMonth = startOfMonth.subtract(dayOfWeek + 1, 'days');
  for (let i = dayOfWeek; i > 0; i -= 1) {
    startOfMonth = startOfMonth.add(1, 'days');
    calendar.push(startOfMonth);
  }
  return calendar;
}
function getCurrent(startOfMonth) {
  const calendar: any = [];
  let clone = startOfMonth.clone();
  while (startOfMonth.month() === clone.month()) {
    calendar.push(clone);
    clone = clone.add(1, 'days');
  }
  return calendar;
}
function getForFill(endOfMonth) {
  const calendar: any = [];
  const dayOfWeek = endOfMonth.day();
  if (dayOfWeek === 6) return [];
  for (let i = dayOfWeek; i < 6; i += 1) {
    endOfMonth = endOfMonth.add(1, 'days');
    calendar.push(endOfMonth);
  }
  return calendar;
}
function getCalendar(time) {
  let calendar = [];
  const startOfMonth = time.startOf('month');
  calendar = calendar.concat(getBackFill(startOfMonth.clone()));
  calendar = calendar.concat(getCurrent(startOfMonth.clone()));
  const endOfMonth = time.endOf('month');
  calendar = calendar.concat(getForFill(endOfMonth.clone()));
  return {
    startDate: startOfMonth,
    year: time.year(),
    month: time.month(),
    dateList: calendar
  };
}
function isSameDay(day1: Dayjs, day2: Dayjs) {
  return (
    day1.isSame(day2, 'date') &&
    day1.isSame(day2, 'year') &&
    day1.isSame(day2, 'month')
  );
}
interface IState {
  selection: string | number | Date | IDataRange;
  current: {
    year?: number;
    month?: number;
  };
}
/**
 * 日历
 */
class Calendar extends Component<IProps, IState> {
  static defaultProps = {
    prefix: 'caf-calendar',
    maxSelect: 1,
    minSelect: 0
  };
  constructor(props) {
    super(props);
    const { defaultSelect, defaultCurrent } = props;
    const now = new Date();
    const state = {
      selection: now,
      current: {
        year: now.getFullYear(),
        month: now.getMonth() + 1
      }
    };
    if (defaultSelect) {
      state.selection = defaultSelect;
    }
    if (defaultCurrent) {
      state.current = Object.assign({}, state.current, defaultCurrent);
    }
    this.state = state;
  }
  getCurrenSelect() {
    const { selection } = this.state;
    let select;
    if (
      'start' in (selection as IDataRange) ||
      'end' in (selection as IDataRange)
    ) {
      //@ts-ignore
      const start = formateDate(selection.start);
      if ('end' in (selection as IDataRange)) {
        //@ts-ignore
        const end = formateDate(selection.end);
        select = {
          start,
          end
        };
      } else {
        select = start;
      }
    } else {
      select = formateDate(selection);
    }
    return select;
  }
  setCurrent(newCurrent: { year?: number; month?: number }) {
    const { current } = this.state;
    this.setState({
      current: Object.assign({}, current, newCurrent)
    });
  }
  prevMonth = () => {
    const { current } = this.state;
    this.setCurrent({
      month: current.month - 1
    });
  };
  nextMonth = () => {
    const { current } = this.state;
    this.setCurrent({
      month: current.month + 1
    });
  };
  renderMonthBar(startOfMonth) {
    const { formatter, prefix } = this.props;
    const year = startOfMonth.year();
    const month = startOfMonth.month();
    const sTitle =
      formatter && 'title' in formatter ? (
        formatter.title(year, month)
      ) : (
        <h2 className={`${prefix}__header__date `}>
          <span className={`${prefix}__header__date__month`}>
            {startOfMonth.format('MMM')}
          </span>
          <span className={`${prefix}__header__date__year`}>
            {startOfMonth.format('YYYY')}
          </span>
        </h2>
      );
    return (
      <div className={`${prefix}__header`}>
        <span
          className={`${prefix}__header__btn ${prefix}__header__btn--left`}
          onClick={this.prevMonth}
        ></span>
        {sTitle}
        <span
          className={`${prefix}__header__btn ${prefix}__header__btn--right`}
          onClick={this.nextMonth}
        ></span>
      </div>
    );
  }

  renderWeekBar() {
    const { formatter, prefix } = this.props;
    const weekName = ['日', '一', '二', '三', '四', '五', '六'];
    return (
      <div className={`${prefix}__weekbar`}>
        {new Array(7)
          .join('-')
          .split('-')
          .map((_, ind) => (
            <span
              className={cx(`${prefix}__weekbar__item`, {
                [`${prefix}__weekbar__item--rest`]: ind === 0 || ind === 6
              })}
            >
              {formatter && 'week' in formatter
                ? formatter.week[ind]
                : weekName[ind]}
            </span>
          ))}
      </div>
    );
  }

  renderCalendar(calendarInfo, currentSelect) {
    const { prefix, maxSelect } = this.props;
    const { dateList, month, year } = calendarInfo;
    const weekList = [];
    const current = currentSelect.start || currentSelect;
    let end;
    let start;
    let rangeEnd;
    let isMulti = maxSelect !== 1;
    if (
      Object.prototype.toString.call(currentSelect) === '[object Object]' &&
      !DayJs.isDayjs(currentSelect)
    ) {
      start = currentSelect.start;
      end = currentSelect.end;
      rangeEnd = currentSelect.end;
      isMulti = true;
    } else {
      start = currentSelect;
      rangeEnd = start.add(maxSelect);
    }
    let curWeek = 0;
    let tmp = [];
    for (let i = 0, len = dateList.length; i < len; i++) {
      const item = dateList[i];

      const dateInfo = {
        date: item.date(),
        weekday: item.day(),
        isToday: isSameDay(item, DayJs()),
        isCurrentMonth: item.month() === month && item.year() === year,
        isEnd: end && isSameDay(item, end),
        isStart: isSameDay(item, start),
        isInRange: item.isBefore(rangeEnd) && item.isAfter(start),
        isMulti
      };
      if (item.isSame(current) && !curWeek) {
        curWeek = Math.floor(i / 7);
      }
      tmp.push(dateInfo);
      if (tmp.length === 7) {
        weekList.push(tmp);
        tmp = [];
      }
    }
    // console.log(weekList);
    return (
      <div className={`${prefix}__calendar`}>
        {weekList.map((list, ind) => (
          <div
            className={cx(`${prefix}__calendar__week`, {
              [`${prefix}__calendar__week--cur`]: ind === curWeek
            })}
            key={`${month}-${ind}`}
          >
            {list.map(item => (
              <div
                className={cx(`${prefix}__date`, {
                  [`${prefix}__date--today`]: item.isToday,
                  [`${prefix}__date--other`]: !item.isCurrentMonth,
                  [`${prefix}__date--selected`]:
                    item.isStart && !item.isMulti,
                  [`${prefix}__date--start`]:
                    item.isStart && item.isMulti,
                  [`${prefix}__date--end`]:
                    item.isEnd && item.isMulti,
                  [`${prefix}__date--range`]:
                    item.isInRange &&
                    !item.isStart &&
                    !item.isEnd &&
                    item.isMulti
                })}
                key={`${month}-${ind}-${item.date}`}
              >
                <div className={`${prefix}__day`}>
                  <span className={`${prefix}__day__date`}>{item.date}</span>
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    );
  }

  renderMain() {
    const { prefix } = this.props;
    const currentSelect = this.getCurrenSelect();
    const { current } = this.state;
    const curMonthStart = formateDate(`${current.year}/${current.month}/1`);
    const calendarInfo = getCalendar(curMonthStart);
    const { startDate } = calendarInfo;
    const monthBar = this.renderMonthBar(startDate);
    const weekBar = this.renderWeekBar();
    const calendar = this.renderCalendar(calendarInfo, currentSelect);

    return (
      <div className={`${prefix}__main`}>
        {monthBar}
        {weekBar}
        {calendar}
      </div>
    );
  }
  render({ prefix, className }) {
    const main = this.renderMain();
    return <div className={cx(prefix, className)}>{main}</div>;
  }
}
export default Calendar;
