import { h, Component } from 'preact';
import compInfo from '../../comp-info';
import Header from './head';
import Side from './side';
import Content from './content';
import './style.scss';
import 'prismjs/themes/prism';

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
  render({ type, name }, { showcode, shownav }) {
    return (
      <div class="caf-doc">
        <Header toggleStatus={this.toggleStatus} />
        <div class="caf-doc-body">
          <Side
            shownav={shownav}
            toggleStatus={this.toggleStatus}
            compInfo={compInfo}
            name={name}
          />
          <div class="caf-doc-main">
            <Content
              name={name}
              compInfo={compInfo}
              toggleStatus={this.toggleStatus}
              type={type}
            />
            {type === 'component' && (
              <div class="caf-doc-simulator" data-status={showcode ? 1 : 0}>
                <div class="simulator-head" />
                <iframe src={`#/comp/${name}`} frameBorder="0" />
                <div class="simulator-foot" />
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
