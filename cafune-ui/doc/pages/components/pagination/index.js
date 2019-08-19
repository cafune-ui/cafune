import { Component } from 'preact';
import { Pagination } from 'cafune';

export default class Page extends Component {
  state = {
    pn: 1,
    pages: 3
  };
  onChange = pn => {
    this.setState({
      pn
    });
  };
  render({}, { pn, pages }) {
    return (
      <div class="caf-demo-block">
        <Pagination pn={pn} pages={pages} onChange={this.onChange} />
      </div>
    );
  }
}
