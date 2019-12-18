import { Grid, Icon } from 'cafune';
import { Component } from 'preact';
const { Item } = Grid;
import IconList from '../icon/list';

export default class GridComp extends Component {
  render() {
    return (
      <div>
        <div class="caf-demo-block">
          <p class="caf-demo-title">正常使用</p>
          <Grid column={5}>
            {IconList.map(item => (
              <Item key={item}>
                <Icon icon={item} />
                <span>{item}</span>
              </Item>
            ))}
          </Grid>

          <p class="caf-demo-title">无边框</p>
          <Grid border={false}>
            {IconList.map(item => (
              <Item key={item}>
                <Icon icon={item} />
                <span>{item}</span>
              </Item>
            ))}
          </Grid>

          <p class="caf-demo-title">不居中显示</p>
          <Grid center={false}>
            {IconList.map(item => (
              <Item key={item}>
                <Icon icon={item} />
                <span>{item}</span>
              </Item>
            ))}
          </Grid>

          <p class="caf-demo-title">设置边距</p>
          <Grid gutter={20}>
            {IconList.map(item => (
              <Item key={item}>
                <Icon icon={item} />
                <span>{item}</span>
              </Item>
            ))}
          </Grid>
        </div>
      </div>
    );
  }
}
