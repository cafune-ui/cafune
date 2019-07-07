import { ActionSheet } from 'cafune';
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
      <div class="">
        <div onClick={this.showAction('isActionShow1')}>展示面板</div>
        <ActionSheet
          isShow={isActionShow1}
          title="test title"
          horizon={{
            wrap: false,
            list: [
              {
                name: 'hi',
                subName: 'hi sub',
                icon:
                  'https://image.uisdc.com/wp-content/uploads/2018/07/uiii-ps-icon.png',
                badge: true,
                action() {
                  console.log('ps hi');
                }
              },
              {
                name: 'hi2',
                subName: 'hi2 sub',
                icon: 'search',
                badge: '2',
                action: '/'
              },
              {
                name: 'hi2',
                subName: 'hi2 sub',
                icon: 'search',
                badge: '2'
              },
              {
                name: 'hi2',
                subName: 'hi2 sub',
                icon: 'search',
                badge: '2'
              },
              {
                name: 'hi2',
                subName: 'hi2 sub',
                icon: 'search',
                badge: '2'
              }
            ]
          }}
          vertialList={[
            {
              name: 'hi',
              subName: 'hi sub',
              icon:
                'https://image.uisdc.com/wp-content/uploads/2018/07/uiii-ps-icon.png',
              badge: true,
              align: 'right',
              isDisabled: true
            },
            {
              name: 'hi2',
              subName: 'hi2 sub',
              icon: 'search',
              badge: '2',
              isLoading: true
            },
            {
              name: 'hi2',
              subName: 'hi2 sub',
              badge: '2',
              isLoading: true
            }
          ]}
          onClose={() => {
            this.setState({
              isActionShow1: false
            });
          }}
        />
      </div>
    );
  }
}
