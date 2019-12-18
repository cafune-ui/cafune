import NoticeBar from '../';
import { render } from 'enzyme';
import { shallow, deep } from 'preact-render-spy';

describe('NoticeBar', () => {
  it('should render properly', () => {
    const txt1 = 'txt1';
    const txt2 = 'txt2';
    const wrapper = shallow(<NoticeBar text={txt1} />);
    expect(wrapper).toMatchSnapshot();
    wrapper.render(<NoticeBar text={txt2} />);
    expect(wrapper).toMatchSnapshot();

    wrapper.render(<NoticeBar text={txt2} />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render different type', () => {
    const wrapper = shallow(
      <div>
        <NoticeBar
          type="warning"
          text="提醒类型通告栏，带有一定警示性，用于可能发生误操作或提醒用户的情况"
        />
        <NoticeBar
          type="error"
          text="错误类型通告栏，用于发生了错误操作或有重要警示信息时使用"
        />
        <NoticeBar
          type="success"
          text="成功类型通告栏，用于成功操作后的页面提醒或一些温馨提醒，相对柔和"
        />
      </div>
    );
    expect(wrapper).toMatchSnapshot();
  });

  it('should render different icon', () => {
    const wrapper = shallow(
      <div>
        <NoticeBar
          icon={false}
          text="禁用图标通知内容通知内容通知内容通知内容通知内容通知内容通知内容"
        />
        <NoticeBar
          icon="more"
          text="自定义图标通知内容通知内容通知内容通知内容通知内容通知内容通知内容"
        />
      </div>
    );
    expect(wrapper).toMatchSnapshot();
  });

  it('should render without scrollable', () => {
    const wrapper = shallow(
      <NoticeBar
        scrollable={false}
        wrapable={false}
        text="通知内容通知内容通知内容通知内容通知内容通知内容通知内容"
      />
    );
    expect(wrapper).toMatchSnapshot();
  });

  it('should render wrappable', () => {
    const wrapper = shallow(
      <NoticeBar
        wrapable={true}
        text="通知内容通知内容通知内容通知内容通知内容通知内容通知内容"
      />
    );
    expect(wrapper).toMatchSnapshot();
  });

  it('should render custom style', () => {
    const wrapper = shallow(
      <NoticeBar
        color="#bd9e6f"
        bgColor="#4c4c4c"
        text="通知内容通知内容通知内容通知内容通知内容通知内容通知内容"
      />
    );
    expect(wrapper).toMatchSnapshot();
  });

  it('should render different action', () => {
    const clickFn = jest.fn();
    const wrapper = shallow(
      <NoticeBar
        action="closable"
        onClick={clickFn}
        text="通知内容通知内容通知内容通知内容通知内容通知内容通知内容"
      />
    );
    wrapper.find('.caf-noticebar__action').simulate('click');
    expect(clickFn).toHaveBeenCalled();

    const clickFn2 = jest.fn();
    const wrapper2 = shallow(
      <NoticeBar
        action="link"
        onClick={clickFn2}
        text="通知内容通知内容通知内容通知内容通知内容通知内容通知内容"
      />
    );
    wrapper2.find('.caf-noticebar__action').simulate('click');
    expect(clickFn2).toHaveBeenCalled();

    const wrapper3 = deep(
      <div>
        <NoticeBar
          action="去看看"
          text="通知内容通知内容通知内容通知内容通知内容通知内容通知内容"
        />
        <NoticeBar
          action={<div>去看看</div>}
          text="通知内容通知内容通知内容通知内容通知内容通知内容通知内容"
        />
      </div>
    );
    expect(wrapper3).toMatchSnapshot();
  });
});
