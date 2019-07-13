import { Component } from 'preact';
import AsyncRoute from 'preact-async-route';
import CompInfo from '../../comp-info';

import './style';
export class Comp extends Component {
  getComp(name) {
    if (name && CompInfo[name]) {
      return (
        <AsyncRoute
          path={`/${name}`}
          getComponent={() =>
            import(`./${name}`).then(module => module.default)
          }
        />
      );
    } else {
      return <div>unavailable comp</div>;
    }
  }
  render({ name }) {
    return <div class="comp">{this.getComp(name)}</div>;
  }
}

export default Comp;
