import { Tabs } from 'cafune';
import { Component } from 'preact';
const TabPanel = Tabs.Panel;
const TabNav = Tabs.Nav;

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
          <TabPanel label="方案" id="forecast">
            <div>方案</div>
          </TabPanel>
          <TabPanel label="战绩" id="history">
            <div>战绩</div>
          </TabPanel>
          <TabPanel label="赔率" id="odds" visable={false}>
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

export default class TabsComp extends Component {
  render() {
    return (
      <div>
        <p class="caf-demo-title">默认用法</p>
        <NormalTab />
        <p class="caf-demo-title">圆形Tab</p>
        <RoundTab />
        <p class="caf-demo-title">单独使用Nav</p>
        <div
          style={{
            width: '100%',
            padding: '10px 20px',
            margin: '20px auto',
            background: '#3f77f6',
            boxSizing: 'border-box'
          }}
        >
          <TabNav tabsData={tabsData} type="card" />
        </div>
        <p>
          当需要隐藏掉某个tab但里面涉及的功能需要保留时，使用visable将该tab标签隐藏掉，需要配合activeId
          更改
        </p>
      </div>
    );
  }
}
