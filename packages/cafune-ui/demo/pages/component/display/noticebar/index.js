import { Component } from 'preact';
import { NoticeBar } from 'cafune';

export default class Page extends Component {
  render() {
    return (
      <div>
        <NoticeBar text="通知内容" />
      </div>
    );
  }
}
