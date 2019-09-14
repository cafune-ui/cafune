import { Component } from 'preact';
import { NoticeBar } from 'cafune';
import './style.scss';
export default class Page extends Component {
  render() {
    return (
      <div class="caf-demo caf-demo__noticebar">
        <p>基础用法</p>
        <NoticeBar text="通知内容通知内容通知内容通知内容通知内容通知内容通知内容" />
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
          color="#fff"
          bgColor="#177cb0"
          icon="more"
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
