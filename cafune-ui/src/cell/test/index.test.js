import Cell from '../';
const { CellGroup } = Cell;
import { render } from 'enzyme';
import { shallow, deep } from 'preact-render-spy';

describe('Checkbox', () => {
  it('should render properly', () => {
    const wrapper = shallow(
      <div class="">
        <Cell title="基础用法" />
        <Cell title="不带边框" border={false} />
        <Cell title="带icon" icon="check" />

        <Cell
          title="带右滑"
          swipeList={[
            {
              name: '标为未读',
              clickHandler() {
                console.log('标为未读');
              },
              style: {
                backgroundColor: '#e9e7ef'
              }
            },
            {
              name: '删除',
              clickHandler() {
                console.log('删除');
              },
              style: {
                backgroundColor: '#c93756'
              }
            }
          ]}
        />
        <Cell
          title="自定义"
          icon="https://image.uisdc.com/wp-content/uploads/2018/07/uiii-ps-icon.png"
          iconSize="30px"
        />
        <Cell title="带链接" icon="img" url="/" />
        <Cell title="带描述信息" icon="search" label="此处为描述信息" />
        <Cell
          title="带右侧内容"
          icon="search"
          label="此处为描述信息"
          value="右侧内容"
        />
        <Cell
          title="带右侧icon"
          icon="search"
          label="此处为描述信息"
          value="右侧内容"
          rightIcon="more"
        />
        <Cell
          title="垂直居中"
          icon="search"
          label="此处为描述信息"
          value="右侧内容"
          rightIcon="more"
          middle
        />
        <div className="clickEle">
          <Cell
            title="右侧使用组件"
            icon="search"
            label="此处为描述信息"
            value={<div>fdsafds</div>}
            middle
          />
        </div>

        <CellGroup title="单元格分组">
          <Cell value="纯内容" />
          <Cell title="单元格2" />
        </CellGroup>
        <CellGroup title="单元格分组(不带边框)" border={false}>
          <Cell title="单元格" />
          <Cell title="单元格2" />
        </CellGroup>
      </div>
    );
    expect(wrapper).toMatchSnapshot();

    wrapper.render(null);
    expect(wrapper).toMatchSnapshot();
  });
});
