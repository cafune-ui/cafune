import { Grid, Icon } from 'cafune';
import { Component } from 'preact';
const { Item } = Grid;
import IconList from '../icon/list';

export default class GridComp extends Component {
  render() {
    return (
      <div>
        <Grid square={false}>
          {IconList.map(item => (
            <Item key={item}>
              <Icon icon={item} />
              <span>{item}</span>
            </Item>
          ))}
        </Grid>
      </div>
    );
  }
}
