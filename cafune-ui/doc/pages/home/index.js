import { h, Component } from 'preact';
import compInfo from '../../comp-info';
import Header from './head';
import Side from './side';
import Content from './content';
import './style';

export class Home extends Component {
  state = {
    showcode: false,
    shownav: false
  };
  toggleStatus = name => () => {
    this.setState({
      [name]: !this.state[name]
    });
  };
  render({ name }, { showcode, shownav }) {
    return (
      <div class="caf-doc">
        <Header toggleStatus={this.toggleStatus} />
        <div class="caf-doc-main">
          <Side
            shownav={shownav}
            toggleStatus={this.toggleStatus}
            compInfo={compInfo}
            name={name}
          />
          <Content
            name={name}
            compInfo={compInfo}
            toggleStatus={this.toggleStatus}
          />
          <div class="caf-doc-simulator" data-status={showcode ? 1 : 0}>
            <div class="simulator-head" />
            <iframe src={`/comp/${name}`} frameBorder="0" />
            <div class="simulator-foot" />
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
