import { SearchBar } from 'cafune';
import { Component } from 'preact';
export default class SearchBarComp extends Component {
  state = {
    val: '关键词'
  };
  focusInput = () => {
    this.inpRef.focus();
  }
  render({}, { val }) {
    return (
      <div>
        <p>默认用法</p>
        <SearchBar placeholder="请输入关键词" />

        <p>自定义值</p>
        <SearchBar placeholder="请输入关键词" value={val} />

        <p>设置回调</p>
        <SearchBar
          placeholder="请输入关键词"
          onConfirm={() => alert('确认')}
          onCancel={() => alert('取消')}
        />

        <p onClick={this.focusInput}>点击聚焦</p>
        <SearchBar placeholder="请输入关键词" ref={c => (this.inpRef = c)} />
      </div>
    );
  }
}
