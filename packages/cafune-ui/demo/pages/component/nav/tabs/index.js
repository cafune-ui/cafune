import { Component } from 'preact';
import { Tabs } from 'cafune';
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
const TabsComp = () => (
  <div>
    <p>普通Tab 标签卡</p>
    <NormalTab />
    <p>圆形Tab 标签卡</p>
    <RoundTab />
    <p>单独使用Nav</p>
    <div
      style="width: 400px;padding: 10px 20px;margin: 20px auto;
      background: #3f77f6;"
    >
      <TabNav tabsData={tabsData} type="card" />
    </div>
  </div>
);
export default TabsComp;
