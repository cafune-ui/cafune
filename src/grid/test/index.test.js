import Grid from '../';
const { Item } = Grid;
import { render } from 'enzyme';
import { shallow, deep } from 'preact-render-spy';

const IconList = [
  'img',
  'notice',
  'arrow-right',
  'arrow-left',
  'check',
  'wrong',
  'more'
];
describe('Grid', () => {
  it('should render with 5 column', () => {
    const wrapper = deep(
      <Grid column={5}>
        {IconList.map(item => (
          <Item key={item}>
            <span>{item}</span>
          </Item>
        ))}
      </Grid>
    );
    expect(wrapper).toMatchSnapshot();
  });
  it('should render with no border', () => {
    const wrapper = deep(
      <Grid border={false}>
        {IconList.map(item => (
          <Item key={item}>
            <span>{item}</span>
          </Item>
        ))}
      </Grid>
    );
    expect(wrapper).toMatchSnapshot();
  });

  it('should render with no center', () => {
    const wrapper = deep(
      <Grid center={false} gutter={20}>
        {IconList.map(item => (
          <Item key={item}>
            <span>{item}</span>
          </Item>
        ))}
      </Grid>
    );
    expect(wrapper).toMatchSnapshot();
  });

  it('should render with gutter', () => {
    const wrapper = deep(
      <Grid square={false} gutter={20}>
        {IconList.map(item => (
          <Item key={item}>
            <span>{item}</span>
          </Item>
        ))}
        <div>test</div>
      </Grid>
    );
    expect(wrapper).toMatchSnapshot();
    wrapper.render(
      <Grid square={false}>
        {IconList.map(item => (
          <Item key={item}>
            <span>{item}</span>
          </Item>
        ))}
      </Grid>
    );
    expect(wrapper).toMatchSnapshot();
  });

  it('should render nothing', () => {
    const wrapper = shallow(<Grid />);
    expect(wrapper).toMatchSnapshot();
  });
});
