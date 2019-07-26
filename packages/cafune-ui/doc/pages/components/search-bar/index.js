import { SearchBar } from 'cafune';
import { Component } from 'preact';
export default class SearchBarComp extends Component {
  state = {
    val: '关键词'
  };
  focusInput = () => {
    this.inpRef.focus();
  };
  render({}, { val }) {
    return (
      <div>
        <div class="caf-demo-block">
          <p class="caf-demo-title">默认用法</p>
          <SearchBar placeholder="请输入关键词" />
        </div>
        <div class="caf-demo-block">
          <p class="caf-demo-title">自定义值</p>
          <SearchBar placeholder="请输入关键词" value={val} />
        </div>
        <div class="caf-demo-block">
          <p class="caf-demo-title">设置回调</p>
          <SearchBar
            placeholder="请输入关键词"
            onConfirm={() => alert('确认')}
            onCancel={() => alert('取消')}
          />
        </div>
        <div class="caf-demo-block">
          <p class="caf-demo-title">定义右侧按钮</p>
          <SearchBar
            placeholder="请输入关键词"
            onConfirm={() => alert('确认')}
            onCancel={() => alert('取消')}
            action={{
              type: 'cancel',
              onClick() {
                console.log('action confirm');
              }
            }}
          />
        </div>
        <div class="caf-demo-block">
          <p class="caf-demo-title" onClick={this.focusInput}>
            点击聚焦
          </p>
          <SearchBar placeholder="请输入关键词" ref={c => (this.inpRef = c)} />
        </div>
      </div>
    );
  }
}