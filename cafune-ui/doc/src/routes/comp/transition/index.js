import { Transition, Button } from 'cafune';
import { Component } from 'preact';
import './index.scss';

export default class TransitionComp extends Component {
  state = {
    visible1: true,
    visible2: true
  };
  setvisible = type => {
    return () => {
      this.setState(prevState => {
        return {
          [type]: !prevState[type]
        };
      });
    };
  };

  beforeEnter(el) {
    console.log('beforeEnter', el);
  }
  enter(el, done) {
    console.log('enter', el);
    setTimeout(() => {
      console.log('done');
      done();
    }, 1000);
  }
  afterEnter(el) {
    console.log('afterEnter', el);
  }
  beforeLeave(el) {
    console.log('beforeLeave', el);
  }
  leave(el, done) {
    console.log('leave', el);
    setTimeout(() => {
      console.log('done');
      done();
    }, 1000);
  }
  afterLeave(el) {
    console.log('afterLeave', el);
  }

  render({}, { visible1, visible2 }) {
    return (
      <div class="caf-demo-block">
        <p class="caf-demo-title">自定义动画名</p>
        <Button onClick={this.setvisible('visible1')}>切换状态</Button>

        <div class="caf-demo-block">
          <Transition visible={visible1} instant name="fade">
            <div class="demo">初始可见无过渡</div>
          </Transition>
          <Transition visible={visible1} name="fade">
            <div class="demo">初始不可见，过渡进入</div>
          </Transition>
        </div>

        <p class="caf-demo-title">自定义钩子</p>
        <Button onClick={this.setvisible('visible2')}>切换状态</Button>
        <div class="caf-demo-block">
          <Transition
            visible={visible2}
            beforeEnter={this.beforeEnter}
            enter={this.enter}
            afterEnter={this.afterEnter}
            beforeLeave={this.beforeLeave}
            leave={this.leave}
            afterLeave={this.afterLeave}
          >
            <div class="demo">something here</div>
          </Transition>
        </div>
      </div>
    );
  }
}
