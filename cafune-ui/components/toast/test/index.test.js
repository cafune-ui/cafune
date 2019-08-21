import { h } from 'preact';
import Toast from '../';
import { render, shallow } from 'enzyme';

function timer(callback, sec = 2000) {
  setTimeout(() => {
    callback && callback();
  }, sec);
}

jest.useFakeTimers();

describe('Toast', () => {
  it('should show a normal toast', () => {
    const content = 'show';
    Toast.show({ content });
    expect(document.querySelectorAll('.caf-notify').length).toBe(1);
    expect(document.querySelector('.caf-toast-content').innerHTML).toEqual(content);
    timer(() => {
      expect(document.querySelectorAll('.caf-toast').length).toBe(0);
    });
  });
  it('should show a success toast', () => {
    Toast.success({ content: 'success' });
    timer(() => {
      expect(document.querySelector('.caf-toast').dataset.type).toEqual('success');
    });
  });
  it('should show a error toast', () => {
    Toast.error({ content: 'error' });
    timer(() => {
      expect(document.querySelector('.caf-toast').dataset.type).toEqual('error');
    });
  });
  it('should show a loading toast', () => {
    Toast.loading({ content: 'loading' });
    timer(() => {
      expect(document.querySelector('.caf-toast').dataset.type).toEqual('loading');
    });
  });
  it('should delete toast', () => {
    timer(() => {
      const toast = Toast.show({ content: 'show' });
      expect(document.querySelectorAll('.caf-toast').length).toBe(1);
      const callback = jest.fn();
      Toast.hide(toast);
      timer(() => {
        expect(callback).toHaveBeenCalled();
        expect(document.querySelectorAll('.caf-toast').dataset.status).toBe(0);
        expect(clearTimeout).toHaveBeenCalled();
        timer(() => {
          expect(document.querySelectorAll('.caf-toast').length).toBe(0);
          expect(clearTimeout).toHaveBeenCalled();
        }, 900);
      });
    });
  });
});