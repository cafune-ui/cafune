import { Layout } from 'cafune';
import { Component } from 'preact';
const { Item } = Layout;
export default class LayoutComp extends Component {
  render() {
    return (
      <div class="">
        <p>正常使用</p>
        <Layout>
          <Item>8</Item>
          <Item>8</Item>
          <Item>8</Item>
        </Layout>
      </div>
    );
  }
}
