import { Component } from 'preact';
import { Pagination } from 'cafune';

export default class Page extends Component {
  state = {
    pn: 1,
    pages: 5
  };
  onChange = pn => {
    this.setState({
      pn
    });
  };
  render({}, { pn, pages }) {
    return (
      <div class="caf-demo-block">
        <p class="caf-demo-title">自定义类型</p>
        <Pagination
          simple
          current={pn}
          total={pages}
          onChange={this.onChange}
        />
        <Pagination
          mode="number"
          current={pn}
          total={pages}
          onChange={this.onChange}
        />
        <Pagination
          mode="pointer"
          current={pn}
          total={pages}
          onChange={this.onChange}
        />
        <p class="caf-demo-title">自定义按钮文字</p>
        <Pagination
          current={pn}
          total={pages}
          onChange={this.onChange}
          btnText={{ prev: 'prev', next: 'next' }}
        />
        <p class="caf-demo-title">自定义按钮图标</p>
        <Pagination
          current={pn}
          total={pages}
          onChange={this.onChange}
          btnIcon={{
            prev: { type: 'arrow-left' },
            next: { type: 'arrow-right' }
          }}
        />
        <p class="caf-demo-title">自定义步进数</p>
        <Pagination
          current={pn}
          total={pages}
          onChange={this.onChange}
          step={2}
        />
      </div>
    );
  }
}
