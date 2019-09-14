import { Component } from 'preact';
import { NavBar } from 'cafune';
import './style';

export default class Page extends Component {
  render() {
    return (
      <div class="caf-demo-page">
        <NavBar
          isFixed
          left={{
            icon: 'wrong',
            text: '返回',
            clickHandler() {
              console.log('返回');
            }
          }}
          rights={{
            icon: 'search',
            text: '搜索',
            clickHandler() {
              console.log('搜索');
            }
          }}
        >
          标题
        </NavBar>
        <NavBar
          left={{
            icon: 'wrong',
            text: '返回',
            clickHandler() {
              console.log('返回');
            }
          }}
          rights={[
            {
              text: '搜索',
              badge: '22',
              clickHandler() {
                console.log('搜索');
              }
            },
            {
              text: '搜索',
              clickHandler() {
                console.log('搜索');
              }
            },
            {
              icon: 'img',
              text: '图片',
              badge: true,
              clickHandler() {
                console.log('图标');
              }
            }
          ]}
        >
          标题
        </NavBar>
      </div>
    );
  }
}
