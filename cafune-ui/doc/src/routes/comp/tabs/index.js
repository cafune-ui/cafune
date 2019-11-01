import { Tabs } from 'cafune';
import { Component } from 'preact';
const TabPanel = Tabs.Panel;
const TabNav = Tabs.Nav;

const containerStyle = {
  height: '120px',
  textAlign: 'center'
};

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
          <TabPanel label="标签一" id="forecast">
            <div class="caf-demo-block">内容一</div>
          </TabPanel>
          <TabPanel label="标签二" id="history">
            <div class="caf-demo-block">内容二</div>
          </TabPanel>
          <TabPanel label="标签三" id="odds" visable={false}>
            <div class="caf-demo-block">内容三</div>
          </TabPanel>
        </Tabs>
      </div>
    );
  }
}

// class RoundTab extends Component {
//   state = {
//     activeId: 'forecast'
//   };
//   onChange = id => {
//     this.setState({
//       activeId: id
//     });
//   };
//   render({}, { activeId }) {
//     return (
//       <div style={containerStyle}>
//         <Tabs activeId={activeId} onChange={this.onChange} type="round">
//           <TabPanel label="方案" id="forecast">
//             <div>方案</div>
//           </TabPanel>
//           <TabPanel label="战绩" id="history">
//             <div>战绩</div>
//           </TabPanel>
//           <TabPanel label="赔率" id="odds">
//             <div>赔率</div>
//           </TabPanel>
//         </Tabs>
//       </div>
//     );
//   }
// }

export default class TabsComp extends Component {
  state = {
    tabsData: [
      {
        id: 'label1',
        actived: false,
        label: '标签一'
      },
      {
        id: 'label2',
        actived: true,
        label: '标签二'
      },
      {
        id: 'label3',
        actived: false,
        label: '标签三'
      }
    ]
  };
  customChange = id => {
    const { tabsData } = this.state;
    tabsData.forEach(item => (item.actived = item.id === id));
    this.setState({
      tabsData
    });
  };
  render({}, { tabsData }) {
    return (
      <div class="caf-demo-block">
        <p class="caf-demo-title">默认用法</p>
        <NormalTab />
        <hr />
        <p class="caf-demo-title">单独使用Nav</p>
        <TabNav
          tabsData={tabsData}
          activeId="label2"
          type="hightlight"
          onChange={this.customChange}
        />
        <p class="caf-demo-intro">
          当需要隐藏掉某个tab但里面涉及的功能需要保留时，使用visable将该tab标签隐藏掉，需要配合activeId
          更改
        </p>
      </div>
    );
  }
}
