import Toast from '../';
import { render, shallow } from 'enzyme';

function timer(delay = 0) {
  return new Promise(resolve => {
    setTimeout(resolve, delay);
  });
}

describe('Toast', () => {
  it('should show a different toast & close', async () => {
    const tFn = jest.fn();
    Toast.show({
      content: 'test',
      icon: 'like',
      onClose: tFn
    });
    await timer(2600);
    expect(tFn).toHaveBeenCalled();

    Toast.success({
      content: 'test',
      duration: 200
    });
    await timer(1000);
    expect(document.body.querySelector('.caf-toast').innerHTML).toMatchSnapshot();

    Toast.error({
      content: 'test',
      duration: 200
    });
    await timer(1000);
    expect(document.body.querySelector('.caf-toast').innerHTML).toMatchSnapshot();

    Toast.hide();
  });

  it('should show different icon', async () => {
    const sT = Toast.show({
      content: 'test',
      icon: {
        icon: 'home',
        size: '20'
      },
      duration: 200
    });
    await timer(600);

    expect(document.body.querySelector('.caf-toast').innerHTML).toMatchSnapshot();
    Toast.hide();
  });

  it('should loading and change text', async () => {
    const lToast = Toast.loading({ content: 'test' });
    await timer(400);
    expect(
      document.body.querySelector('.caf-toast-notice__content').innerHTML
    ).toEqual('test');
    Toast.setMsg(lToast, 'test text2');
    await timer(200);
    expect(
      document.body.querySelector('.caf-toast-notice__content').innerHTML
    ).toEqual('test text2');
    Toast.hide(lToast);
    await timer(200);
    expect(document.body.querySelector('.caf-toast').innerHTML).toEqual('');
  });
});
