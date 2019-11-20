import { render, Component, h } from 'preact';
import Toast from './components/toast';

console.log(Toast);
function notice() {
  return render(<Toast content="test" />, document.body);
}
export default {
  show() {
    return notice();
  },
  success() {
    return notice();
  },
  error() {
    return notice();
  },
  hide() {
    console.log('hide');
  }
};
