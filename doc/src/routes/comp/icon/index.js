import { Grid, Icon } from 'cafune';
import { Component } from 'preact';
const { Item } = Grid;
import IconList from '../icon/list';
import 'remixicon/fonts/remixicon.css';

const CustomIconList = ['home-line', 'home-fill', 'mail-line', 'cloud-line'];
export default class GridComp extends Component {
  render() {
    return (
      <div>
        <p class="caf-demo-title">内置icon</p>
        <Grid>
          {IconList.map(item => (
            <Item key={item}>
              <Icon icon={item} />
              <span>{item}</span>
            </Item>
          ))}
        </Grid>
        <p class="caf-demo-title">自定义拓展icon</p>
        <Grid>
          {CustomIconList.map(item => (
            <Item key={item}>
              <Icon icon={item} customPrefix="ri" />
              <span>{item}</span>
            </Item>
          ))}
        </Grid>
      </div>
    );
  }
}
