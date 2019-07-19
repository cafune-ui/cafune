import { PullRefresh } from 'cafune';
import { Component } from 'preact';

export default class GridComp extends Component {
  state = {
    count: 1,
    loading: false
  };
  onRefresh = () => {
    setTimeout(() => {
      console.log('刷新成功');
      this.setState({
        loading: false,
        count: this.state.count + 1
      });
    }, 2000);
  };
  render({}, { loading, count }) {
    return (
      <PullRefresh loading={loading} onRefresh={this.onRefresh}>
        <div class="caf-demo-block" style="min-height: 500px;">
          count: {count}
        </div>
      </PullRefresh>
    );
  }
}
