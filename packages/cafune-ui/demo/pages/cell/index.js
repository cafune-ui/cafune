import { Cell } from 'cafune';
const { CellGroup } = Cell;

const CellPage = () => {
  return (
    <div class="">
      <Cell title="基础用法" />
      <Cell title="不带边框" border={false} />
      <Cell title="带icon" icon="check" />
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

      <CellGroup title="单元格分组">
        <Cell title="单元格" />
        <Cell title="单元格2" />
      </CellGroup>
      <CellGroup title="单元格分组(不带边框)" border={false}>
        <Cell title="单元格" />
        <Cell title="单元格2" />
      </CellGroup>
    </div>
  );
};

export default CellPage;
