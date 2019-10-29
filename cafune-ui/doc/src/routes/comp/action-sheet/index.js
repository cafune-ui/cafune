import { ActionSheet, Button, Cell, Switch } from 'cafune';
import { Component } from 'preact';

export default class ActionSheetComp extends Component {
  state = {
    isActionShow1: false
  };
  showAction = name => () =>
    this.setState({
      [name]: !this.state[name]
    });

  componentDidMount() {
    Array.prototype.forEach.call(document.querySelectorAll('meta'), item => {
      if (item.name === 'viewport')
        item.content = 'width=device-width,initial-scale=1,viewport-fit=cover';
    });
  }
  render({}, { isActionShow1 }) {
    return (
      <div class="caf-demo-block">
        <Button onClick={this.showAction('isActionShow1')}>展示面板</Button>
        <ActionSheet
          isShow={isActionShow1}
          title="test title"
          horizon={{
            wrap: false,
            list: [
              {
                name: 'upload',
                icon: 'upload',
                badge: true,
                action() {
                  console.log('ps hi');
                }
              },
              {
                name: 'search',
                icon: 'search',
                badge: '2',
                action: '/'
              },
              {
                name: 'notice',
                icon: 'notice'
              },
              {
                name: 'home',
                icon: 'home'
              },
              {
                name: 'ps',
                icon:
                  'https://image.uisdc.com/wp-content/uploads/2018/07/uiii-ps-icon.png'
              }
            ]
          }}
          vertialList={[
            {
              name: 'browser',
              icon: 'browser'
            },
            {
              name: 'error',
              subName: 'on disabled state',
              icon: 'error',
              align: 'center',
              isDisabled: true
            },
            {
              name: 'refresh',
              subName: 'on loading state',
              icon: 'refresh',
              align: 'right',
              isLoading: true
            }
          ]}
          onClose={() => {
            this.setState({
              isActionShow1: false
            });
          }}
          showConfirm
        >
          <Cell title="自定义元素" value={<Switch isActived />} middle />
        </ActionSheet>
      </div>
    );
  }
}
