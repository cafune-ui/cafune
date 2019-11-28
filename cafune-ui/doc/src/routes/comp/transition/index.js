import { Transition, Button } from 'cafune';
import { Component } from 'preact';
import './index.scss';

export default class TransitionComp extends Component {
  state = {
    visiable1: true,
    visiable2: true
  };
  setVisiable = type => {
    return () => {
      this.setState(prevState => {
        return {
          [type]: !prevState[type]
        };
      });
    };
  };

  beforeEnter(el) {
    alert('beforeEnter', el);
  }
  enter(el, done) {
    alert('enter', el);
    setTimeout(() => {
      alert('done');
      done();
    }, 1000);
  }
  afterEnter(el) {
    alert('afterEnter', el);
  }
  beforeLeave(el) {
    alert('beforeLeave', el);
  }
  leave(el, done) {
    alert('leave', el);
    setTimeout(() => {
      alert('done');
      done();
    }, 1000);
  }
  afterLeave(el) {
    alert('afterLeave', el);
  }

  render({}, { visiable1, visiable2 }) {
    return (
      <div class="caf-demo-block">
        <p class="caf-demo-title">自定义动画名</p>
        <Button onClick={this.setVisiable('visiable1')}>切换状态</Button>

        <div class="caf-demo-block">
          <Transition visiable={visiable1} name="fade">
            <div class="demo">something here</div>
          </Transition>
        </div>

        <p class="caf-demo-title">自定义钩子</p>
        <Button onClick={this.setVisiable('visiable2')}>切换状态</Button>
        <div class="caf-demo-block">
          <Transition
            visiable={visiable2}
            beforeEnter={this.beforeEnter}
            enter={this.enter}
            afterEnter={this.afterEnter}
            beforeLeave={this.beforeLeave}
            leave={this.leave}
            afterLeavee={this.afterLeave}
          >
            <div class="demo">something here</div>
          </Transition>
        </div>
      </div>
    );
  }
}
