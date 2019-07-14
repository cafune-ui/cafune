import { Layout } from 'cafune';
import { Component } from 'preact';
const { Item } = Layout;
export default class LayoutComp extends Component {
  render() {
    return (
      <div class="">
        <p>正常使用</p>
        <Layout>
          <Item col="2">8</Item>
          <Item col="2">8</Item>
          <Item col="12">8</Item>
        </Layout>
        <p>间距</p>
        <Layout gutter="20">
          <Item>8</Item>
          <Item>8</Item>
          <Item>8</Item>
        </Layout>
      </div>
    );
  }
}
