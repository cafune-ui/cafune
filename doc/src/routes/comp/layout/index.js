import { Layout } from 'cafune';
import { Component } from 'preact';
const { Item } = Layout;
import './style.scss';

export default class LayoutComp extends Component {
  render() {
    return (
      <div class="caf-demo">
        <div class="caf-demo-block">
          <p class="caf-demo-title">正常使用</p>
          <Layout>
            <Item Tag="li" col="3">
              col: 3
            </Item>
            <Item col="7" offset="2">
              col: 7, offset: 3
            </Item>
            <Item col="8">col: 8</Item>
          </Layout>
        </div>
        <div class="caf-demo-block">
          <p class="caf-demo-title">间距</p>
          <Layout gutter="20">
            <Item>col: 8, gutter: 20</Item>
            <Item>col: 8, gutter: 20</Item>
            <Item>col: 8, gutter: 20</Item>
          </Layout>
          <Layout gutter="8px">
            <Item>col: 8, gutter: 8px</Item>
            <Item>col: 8, gutter: 8px</Item>
            <Item>col: 8, gutter: 8px</Item>
          </Layout>
        </div>
        <div class="caf-demo-block">
          <p class="caf-demo-title">
            flex 方向
            <p class="caf-demo-title-addition">
              依次为<b>row</b>
              <b>row-reverse</b>
              <b>column</b>
              <b>column-reverse</b>
            </p>
          </p>
          <Layout direction="row">
            <Item col="3">col: 3</Item>
            <Item col="4">col: 4</Item>
            <Item col="5">col: 5</Item>
          </Layout>
          <Layout direction="row-reverse">
            <Item col="3">col: 3</Item>
            <Item col="4">col: 4</Item>
            <Item col="5">col: 5</Item>
          </Layout>
          <Layout direction="column">
            <Item col="3">col: 3</Item>
            <Item col="4">col: 4</Item>
            <Item col="5">col: 5</Item>
          </Layout>
          <Layout direction="column-reverse">
            <Item col="3">col: 3</Item>
            <Item col="4">col: 4</Item>
            <Item col="5">col: 5</Item>
          </Layout>
        </div>
        <div class="caf-demo-block">
          <p class="caf-demo-title">
            flex 换行
            <p class="caf-demo-title-addition">
              依次为<b>nowrap</b>
              <b>wrap</b>
              <b>wrap-reverse</b>
            </p>
          </p>
          <Layout wrap="nowrap">
            <Item col="8">col: 8</Item>
            <Item col="8">col: 8</Item>
            <Item col="10">col: 10</Item>
          </Layout>
          <Layout wrap="wrap">
            <Item col="8">col: 8</Item>
            <Item col="8">col: 8</Item>
            <Item col="10">col: 10</Item>
          </Layout>
          <Layout wrap="wrap-reverse">
            <Item col="8">col: 8</Item>
            <Item col="8">col: 8</Item>
            <Item col="10">col: 10</Item>
          </Layout>
        </div>
        <div class="caf-demo-block">
          <p class="caf-demo-title">
            flex 主轴对齐
            <p class="caf-demo-title-addition">
              依次为<b>start</b>
              <b>end</b>
              <b>center</b>
              <b>between</b>
              <b>around</b>
            </p>
          </p>
          <Layout justify="start">
            <Item col="3">col: 3</Item>
            <Item col="3">col: 3</Item>
            <Item col="3">col: 3</Item>
          </Layout>
          <Layout justify="end">
            <Item col="3">col: 3</Item>
            <Item col="3">col: 3</Item>
            <Item col="3">col: 3</Item>
          </Layout>
          <Layout justify="center">
            <Item col="3">col: 3</Item>
            <Item col="3">col: 3</Item>
            <Item col="3">col: 3</Item>
          </Layout>
          <Layout justify="between">
            <Item col="3">col: 3</Item>
            <Item col="3">col: 3</Item>
            <Item col="3">col: 3</Item>
          </Layout>
          <Layout justify="around">
            <Item col="3">col: 3</Item>
            <Item col="3">col: 3</Item>
            <Item col="3">col: 3</Item>
          </Layout>
        </div>
        <div class="caf-demo-block">
          <p class="caf-demo-title">
            flex 交叉轴对齐
            <p class="caf-demo-title-addition">
              依次为<b>start</b>
              <b>center</b>
              <b>end</b>
              <b>baseline</b>
              <b>stretch</b>
            </p>
          </p>
          <div class="caf-demo-flexblock">
            <Layout align="start" direction="column">
              <Item col="15">col: 15</Item>
              <Item col="10">col: 10</Item>
              <Item col="8">col: 8</Item>
            </Layout>
          </div>
          <div class="caf-demo-flexblock">
            <Layout align="center" direction="column">
              <Item col="15">col: 15</Item>
              <Item col="10">col: 10</Item>
              <Item col="8">col: 8</Item>
            </Layout>
          </div>
          <div class="caf-demo-flexblock">
            <Layout align="end" direction="column">
              <Item col="15">col: 15</Item>
              <Item col="10">col: 10</Item>
              <Item col="8">col: 8</Item>
            </Layout>
          </div>
          <div class="caf-demo-flexblock">
            <Layout align="baseline" direction="column">
              <Item col="15">col: 15</Item>
              <Item col="10">col: 10</Item>
              <Item col="8">col: 8</Item>
            </Layout>
          </div>
          <div class="caf-demo-flexblock">
            <Layout align="stretch" direction="column">
              <Item col="15">col: 15</Item>
              <Item col="10">col: 10</Item>
              <Item col="8">col: 8</Item>
            </Layout>
          </div>
        </div>
        <div class="caf-demo-block">
          <p class="caf-demo-title">
            flex 交叉轴对齐
            <p class="caf-demo-title-addition" direction="column">
              依次为<b>start</b>
              <b>center</b>
              <b>end</b>
              <b>baseline</b>
              <b>stretch</b>
            </p>
          </p>
          <div class="caf-demo-flexblock">
            <Layout alignContent="start">
              <Item col="15">col: 15</Item>
              <Item col="10">col: 10</Item>
              <Item col="8">col: 8</Item>
            </Layout>
          </div>
          <div class="caf-demo-flexblock">
            <Layout alignContent="center">
              <Item col="15">col: 15</Item>
              <Item col="10">col: 10</Item>
              <Item col="8">col: 8</Item>
            </Layout>
          </div>
          <div class="caf-demo-flexblock">
            <Layout alignContent="end">
              <Item col="15">col: 15</Item>
              <Item col="10">col: 10</Item>
              <Item col="8">col: 8</Item>
            </Layout>
          </div>
          <div class="caf-demo-flexblock">
            <Layout alignContent="between">
              <Item col="15">col: 15</Item>
              <Item col="10">col: 10</Item>
              <Item col="8">col: 8</Item>
            </Layout>
          </div>
          <div class="caf-demo-flexblock">
            <Layout alignContent="around">
              <Item col="15">col: 15</Item>
              <Item col="10">col: 10</Item>
              <Item col="8">col: 8</Item>
            </Layout>
          </div>
          <div class="caf-demo-flexblock">
            <Layout alignContent="stretch">
              <Item col="15">col: 15</Item>
              <Item col="10">col: 10</Item>
              <Item col="8">col: 8</Item>
            </Layout>
          </div>
        </div>
      </div>
    );
  }
}
