import { Component } from 'preact';

import { storiesOf } from '@storybook/preact';
import { Tabs } from 'components';
const TabPanel = Tabs.Panel;
const TabNav = Tabs.Nav;
import 'style/tabs.scss';

import notes from './markdown/tabs.md';

const containerStyle = {
  background: '#f5f5f5',
  height: '100px'
};

const tabsData = [
  {
    id: 'Sporttrey320',
    actived: true,
    label: '足球'
  },
  {
    id: 'Sporttrey307',
    actived: false,
    label: '篮球'
  },
  {
    id: 'Sporttrey327',
    actived: false,
    label: 'aa球'
  }
];

class NormalTab extends Component {
  state = {
    activeId: 'forecast'
  };
  onChange = id => {
    this.setState({
      activeId: id
    });
  };
  render({}, { activeId }) {
    return (
      <div style={containerStyle}>
        <Tabs activeId={activeId} onChange={this.onChange}>
          <TabPanel label="方案" id="forecast" visable={false}>
            <div>方案</div>
          </TabPanel>
          <TabPanel label="战绩" id="history">
            <div>战绩</div>
          </TabPanel>
          <TabPanel label="赔率" id="odds">
            <div>赔率</div>
          </TabPanel>
        </Tabs>
      </div>
    );
  }
}

class RoundTab extends Component {
  state = {
    activeId: 'forecast'
  };
  onChange = id => {
    this.setState({
      activeId: id
    });
  };
  render({}, { activeId }) {
    return (
      <div style={containerStyle}>
        <Tabs activeId={activeId} onChange={this.onChange} type="round">
          <TabPanel label="方案" id="forecast">
            <div>方案</div>
          </TabPanel>
          <TabPanel label="战绩" id="history">
            <div>战绩</div>
          </TabPanel>
          <TabPanel label="赔率" id="odds">
            <div>赔率</div>
          </TabPanel>
        </Tabs>
      </div>
    );
  }
}
storiesOf('Component|Tab 标签卡', module)
  .add('普通Tab 标签卡', () => <NormalTab />, {
    notes
  })
  .add('圆形Tab 标签卡', () => <RoundTab />, {
    notes
  })
  .add(
    '单独使用Nav',
    () => (
      <div
        style="width: 400px;padding: 10px 20px;margin: 20px auto;
      background: #3f77f6;"
      >
        <TabNav tabsData={tabsData} type="card" />
      </div>
    ),
    {
      notes
    }
  );
