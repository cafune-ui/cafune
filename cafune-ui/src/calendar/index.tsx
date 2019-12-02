import { Component, h, VNode } from 'preact';
import cx from 'classnames';
import DayJs, { Dayjs } from 'dayjs';

type IDataRange = {
  start: string | number | Date | Dayjs;
  end?: string | number | Date | Dayjs;
};

type formatter = (value: number) => string | number;
interface IProps {
  /**
   * 自定义类名
   */
  prefix?: string;
  /**
   * 初始选中时间。字符串类型时需以'年/月/日'的方式传入，number 类型是为毫秒数，默认为今天
   */
  defaultSelect?: IDataRange;
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
  onDateSelect?: (curDate: IDataRange) => void;
  /**
   * 日期格式化函数，`type` 为`year`, `month`, `week`
   */
  formatter?: {
    year?: formatter;
    month?: formatter;
    title?: (year: number, month: number) => string | VNode | HTMLElement;
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
    month: time.month() + 1,
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
  selection: IDataRange;
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
    maxSelect: 0,
    minSelect: 0
  };
  constructor(props) {
    super(props);
    const { defaultSelect, defaultCurrent, minSelect } = props;
    const now = DayJs();
    const state = {
      selection: null,
      current: {
        year: now.year(),
        month: now.month() + 1
      }
    };
    if (defaultSelect) {
      state.selection = this.getCurrenSelect(defaultSelect);
    } else if (minSelect) {
      state.selection = {
        start: now,
        end: now.add(minSelect, 'day')
      };
    }
    /* istanbul ignore next */
    if (defaultCurrent) {
      state.current = Object.assign({}, state.current, defaultCurrent);
    }

    this.state = state;
  }
  getCurrenSelect(selection) {
    const { minSelect } = this.props;
    let select;
    /* istanbul ignore next */
    if (selection) {
      const start = formateDate(selection.start);
      if ('end' in (selection as IDataRange)) {
        const end = formateDate(selection.end);
        select = {
          start,
          end
        };
      } else {
        select = {
          start
        };
        if (minSelect > 1) select.end = start.add(minSelect, 'day');
      }
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
    let prevCurrent = {
      month: current.month - 1,
      year: current.year
    };
    /* istanbul ignore next */
    if (current.month === 1) {
      prevCurrent.month = 12;
      prevCurrent.year = current.year - 1;
    }
    this.setCurrent(prevCurrent);
  };
  nextMonth = () => {
    const { current } = this.state;
    let nextCurrent = {
      month: current.month + 1,
      year: current.year
    };
    /* istanbul ignore next */
    if (current.month === 12) {
      nextCurrent.month = 1;
      nextCurrent.year = current.year + 1;
    }
    this.setCurrent(nextCurrent);
  };
  renderMonthBar(startOfMonth) {
    const { formatter, prefix } = this.props;
    const year = startOfMonth.year();
    const month = startOfMonth.month() + 1;
    const sTitle =
      formatter && 'title' in formatter ? (
        <h2 className={`${prefix}__header__date `}>
          {formatter.title(year, month)}
        </h2>
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

  handleDateClick = e => {
    let $target = e.target;
    while (
      !/js-calendar/.test($target.className) &&
      !/js-date/.test($target.className)
    ) {
      $target = $target.parentNode;
    }
    /* istanbul ignore next */
    if (/js-date/.test($target.className)) {
      const { weekList } = this;
      const { selection } = this.state;
      const { maxSelect, minSelect, onDateSelect } = this.props;
      let { week, day } = $target.dataset;
      const item = weekList[Number(week)][Number(day)];

      let newSelection: IDataRange;
      const { dayInfo } = item;
      /* istanbul ignore next */
      if (!maxSelect) {
        return;
      }
      if (selection) {
        const prevSelect = selection.start;
        const isLessMin =
          minSelect > 1
            ? dayInfo.isBefore(prevSelect.add(minSelect, 'day'))
            : true;
        if (
          dayInfo.isAfter(prevSelect) &&
          dayInfo.isBefore(prevSelect.add(maxSelect, 'day'))
        ) {
          if (isLessMin) {
            newSelection = {
              start: dayInfo,
              end: dayInfo.add(minSelect, 'day')
            };
          } else {
            newSelection = {
              start: prevSelect,
              end: dayInfo
            };
          }
        } else {
          newSelection = {
            start: dayInfo
          };
          /* istanbul ignore next */
          if (minSelect > 1) {
            newSelection.end = dayInfo.add(minSelect, 'day');
          }
        }
      } else {
        newSelection = {
          start: dayInfo
        };
      }
      this.setState({
        selection: newSelection
      }, () => {
        onDateSelect && onDateSelect(newSelection)
      });
    }
  };
  renderCalendar(info) {
    const { prefix } = this.props;
    const { weekList, curWeek, month } = info;
    return (
      <div
        className={`js-calendar ${prefix}__calendar`}
        onClick={this.handleDateClick}
      >
        {weekList.map((list, ind) => (
          <div
            className={cx(`${prefix}__calendar__week`, {
              [`${prefix}__calendar__week--cur`]: ind === curWeek
            })}
            key={`${month}-${ind}`}
          >
            {list.map((item, weekday) => (
              <div
                className={cx(`${prefix}__date`, 'js-date', {
                  [`${prefix}__date--today`]: item.isToday,
                  [`${prefix}__date--other`]: !item.isCurrentMonth,
                  [`${prefix}__date--selected`]: item.isStart && !item.isMulti,
                  [`${prefix}__date--start`]: item.isStart && item.isMulti,
                  [`${prefix}__date--end`]: item.isEnd && item.isMulti,
                  [`${prefix}__date--range`]:
                    item.isInRange &&
                    !item.isStart &&
                    !item.isEnd &&
                    item.isMulti
                })}
                data-week={ind}
                data-day={weekday}
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
  formateList(calendarInfo) {
    const { maxSelect } = this.props;
    const currentSelect = this.getCurrenSelect(this.state.selection);
    const { dateList, month, year } = calendarInfo;
    const weekList = [];
    let current = DayJs();
    let end;
    let start;
    let rangeEnd;
    let isMulti = maxSelect !== 1;
    /* istanbul ignore next */
    if (currentSelect) {
      current = currentSelect.start;
      start = currentSelect.start;
      end = currentSelect.end;
      rangeEnd = currentSelect.end;
      isMulti = true;
    }

    let curWeek = 0;
    let tmp = [];
    for (let i = 0, len = dateList.length; i < len; i++) {
      const item = dateList[i];

      const dateInfo = {
        dayInfo: item,
        date: item.date(),
        weekday: item.day(),
        isToday: isSameDay(item, DayJs()),
        isCurrentMonth: item.month() + 1 === month && item.year() === year,
        isEnd: end && isSameDay(item, end),
        isStart: start && isSameDay(item, start),
        isInRange: rangeEnd && item.isBefore(rangeEnd) && item.isAfter(start),
        isMulti
      };
      if (current && isSameDay(item, current) && !curWeek) {
        curWeek = Math.floor(i / 7);
      }
      tmp.push(dateInfo);
      if (tmp.length === 7) {
        weekList.push(tmp);
        tmp = [];
      }
    }
    return {
      weekList,
      curWeek,
      month
    };
  }
  weekList;
  renderMain() {
    const { prefix } = this.props;
    const { current } = this.state;
    const curMonthStart = formateDate(`${current.year}/${current.month}/1`);
    const calendarInfo = getCalendar(curMonthStart);
    const foramtedInfo = this.formateList(calendarInfo);
    this.weekList = foramtedInfo.weekList;
    const { startDate } = calendarInfo;
    const monthBar = this.renderMonthBar(startDate);
    const weekBar = this.renderWeekBar();
    const calendar = this.renderCalendar(foramtedInfo);

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
