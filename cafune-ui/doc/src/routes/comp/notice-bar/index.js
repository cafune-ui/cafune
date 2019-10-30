import { Component } from 'preact';
import { NoticeBar } from 'cafune';
import './style.scss';
export default class Page extends Component {
  render() {
    return (
      <div class="caf-demo caf-demo-block caf-demo__noticebar">
        <p>基础用法</p>
        <NoticeBar text="默认类型通告栏，用于正常的通告信息或提示信息，相对不醒目" />
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
        <p>自定义图标</p>
        <NoticeBar
          icon={false}
          text="禁用图标通知内容通知内容通知内容通知内容通知内容通知内容通知内容"
        />
        <NoticeBar
          icon="more"
          text="自定义图标通知内容通知内容通知内容通知内容通知内容通知内容通知内容"
        />
        <p>禁止滚动</p>
        <NoticeBar
          scrollable={false}
          text="通知内容通知内容通知内容通知内容通知内容通知内容通知内容"
        />
        <p>多行展示</p>
        <NoticeBar
          wrapable={true}
          text="通知内容通知内容通知内容通知内容通知内容通知内容通知内容"
        />
        <p>自定义样式</p>
        <NoticeBar
          color="#bd9e6f"
          bgColor="#4c4c4c"
          text="通知内容通知内容通知内容通知内容通知内容通知内容通知内容"
        />
        <p>自定义右侧</p>
        <NoticeBar
          action="closable"
          onClick={() => {
            console.log('closed ');
          }}
          text="通知内容通知内容通知内容通知内容通知内容通知内容通知内容"
        />
        <NoticeBar
          action="link"
          text="通知内容通知内容通知内容通知内容通知内容通知内容通知内容"
        />
        <NoticeBar
          action="去看看"
          text="通知内容通知内容通知内容通知内容通知内容通知内容通知内容"
        />
        <NoticeBar
          action={<span style="color: #88ada6;">去看看</span>}
          text="通知内容通知内容通知内容通知内容通知内容通知内容通知内容"
        />
      </div>
    );
  }
}
