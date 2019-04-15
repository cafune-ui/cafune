/** @jsx h */
import { h, render, Component } from 'preact';

import { storiesOf } from '@storybook/preact';
import { Toast } from 'components';
import notes from './markdown/toast.md';
import './style.css';

storiesOf('Component|Toast 消息提示', module)
  .add('不同类型提示', () => {
    return (
      <div class="wrap">
        <button onClick={ () => Toast.show({ content: 'show' }) }>普通提示</button>
        <button onClick={ () => Toast.success({ content: 'success' }) }>成功提示</button>
        <button onClick={ () => Toast.error({ content: 'error' }) }>错误提示</button>
        <button onClick={ () => {
          const toast = Toast.loading({ content: '五秒后消失' });
          setTimeout(() => {
            Toast.hide(toast);
          }, 5000)
        } }>加载提示</button>
      </div>
    )
  }, {
    notes
  })
  .add('自定义时长提示', () => {
    return (
      <div class="wrap">
        <button onClick={ () => Toast.show({ content: '3秒之后消失', duration: 3000 }) }>自定义时长提示</button>
      </div>
    )
  }, {
    notes
  })
  .add('带回调函数提示', () => {
    return (
      <div class="wrap">
        <button onClick={ () => Toast.show({ content: '弹出消失alert', callback() { alert('消失！') } }) }>带回调函数提示</button>
      </div>
    )
  }, {
    notes
  })