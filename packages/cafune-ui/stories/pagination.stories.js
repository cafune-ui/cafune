import { Component } from 'preact';

import { storiesOf } from '@storybook/preact';
import { Pagination } from 'components';
import './style.css';
import 'style/pagination.scss';
import notes from './markdown/pagination.md';

class Page extends Component {
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
    return <Pagination pn={pn} pages={pages} onChange={this.onChange} />;
  }
}

storiesOf('Component|Pagination 分页', module).add(
  'Pagination',
  () => <Page />,
  {
    notes
  }
);
