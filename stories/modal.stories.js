/** @jsx h */
import { h, render, Component } from 'preact';

import { storiesOf } from '@storybook/preact';
import { action } from '@storybook/addon-actions';
import { Modal } from 'components';
import { withKnobs, text, select } from '@storybook/addon-knobs';
import notes from './markdown/modal.md';

storiesOf('Component|Modal 模态框', module)
  .addDecorator(withKnobs)
  .add('Modal 模态框', () => {
    const message = text('内容', 'sample text');
    const title = text('标题', 'sample title');
    const confirmContent = text('确认文字', '确定');
    const align = select('对齐方式', ['center', 'left', 'right'], 'center');
    return (
      <div>
        <button onClick={ () => Modal.alert({
          title: 'this is a title',
          message: 'this is msg content'
        })}>普通提示框</button>
        <button onClick={ () => Modal.confirm({
          title: 'this is a title',
          message: 'this is msg content'
        })}>带取消按钮提示框</button>
      </div>
    )
  }, {
    notes
  });