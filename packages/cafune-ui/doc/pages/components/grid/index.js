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
          <Grid gutter="10px" square={false}>
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
