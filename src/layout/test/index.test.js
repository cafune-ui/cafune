import Layout from '../';
const { Item } = Layout;
import { render } from 'enzyme';
import { shallow, deep } from 'preact-render-spy';

describe('Layout', () => {
  it('should render properly', () => {
    const wrapper = shallow(
      <Layout>
        <Item col="3">col: 3</Item>
        <Item col="7" offset="2">
          col: 7, offset: 3
        </Item>
        <Item col="8">col: 8</Item>
      </Layout>
    );
    expect(wrapper).toMatchSnapshot();
  });

  it('should render properly', () => {
    const wrapper = deep(
      <div>
        <Layout gutter="20">
          <Item tag="li">col: 8, gutter: 20</Item>
          <Item tag="li">col: 8, gutter: 20</Item>
          <Item tag="li">col: 8, gutter: 20</Item>
        </Layout>
        <Layout gutter="20rem">
          <Item tag="li">col: 8, gutter: 20</Item>
          <Item tag="li">col: 8, gutter: 20</Item>
          <Item tag="li">col: 8, gutter: 20</Item>
        </Layout>
        <Layout gutter="rem">
          <Item tag="li">col: 8, gutter: 20</Item>
          <Item tag="li">col: 8, gutter: 20</Item>
          <Item tag="li">col: 8, gutter: 20</Item>
        </Layout>
        <Layout gutter={20}>
          <Item tag="li">col: 8, gutter: 20</Item>
          <Item tag="li">col: 8, gutter: 20</Item>
          <Item tag="li">col: 8, gutter: 20</Item>
        </Layout>
      </div>
    );
    expect(wrapper).toMatchSnapshot();
  });

  it('should render properly', () => {
    const wrapper = deep(
      <div>
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
    );
    expect(wrapper).toMatchSnapshot();
  });

  it('should render properly', () => {
    const wrapper = deep(
      <div>
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
    );
    expect(wrapper).toMatchSnapshot();
  });

  it('should render properly', () => {
    const wrapper = shallow(
      <div>
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
    );
    expect(wrapper).toMatchSnapshot();
  });
  it('should render properly', () => {
    const wrapper = shallow(
      <div>
        <Layout align="start" direction="column">
          <Item col="15">col: 15</Item>
          <Item col="10">col: 10</Item>
          <Item col="8">col: 8</Item>
        </Layout>
        <Layout align="center" direction="column">
          <Item col="15">col: 15</Item>
          <Item col="10">col: 10</Item>
          <Item col="8">col: 8</Item>
        </Layout>
        <Layout align="end" direction="column">
          <Item col="15">col: 15</Item>
          <Item col="10">col: 10</Item>
          <Item col="8">col: 8</Item>
        </Layout>
        <Layout align="baseline" direction="column">
          <Item col="15">col: 15</Item>
          <Item col="10">col: 10</Item>
          <Item col="8">col: 8</Item>
        </Layout>
        <Layout align="stretch" direction="column">
          <Item col="15">col: 15</Item>
          <Item col="10">col: 10</Item>
          <Item col="8">col: 8</Item>
        </Layout>
      </div>
    );
    expect(wrapper).toMatchSnapshot();
  });

  it('should render properly', () => {
    const wrapper = shallow(
      <div>
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
    );
    expect(wrapper).toMatchSnapshot();
  });
});
