import { storiesOf } from '@storybook/preact';
import { Modal } from 'components';
import 'style/modal.scss';
import notes from './markdown/modal.md';

storiesOf('Component|Modal 模态框', module).add(
  'Modal 模态框',
  () => {
    return (
      <div>
        <button
          onClick={() =>
            Modal.alert({
              title: 'this is a title',
              message: 'this is msg content'
            })
          }
        >
          普通提示框
        </button>
        <button
          onClick={() =>
            Modal.confirm({
              title: 'this is a title',
              message: 'this is msg content'
            })
          }
        >
          带取消按钮提示框
        </button>
      </div>
    );
  },
  {
    notes
  }
);
