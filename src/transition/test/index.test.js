import Transition from '../';
import { render } from 'enzyme';
import { shallow, deep } from 'preact-render-spy';

describe('Transition', () => {
  it('should call the hook', () => {
    const beforeEnter = jest.fn();
    const enter = jest.fn();
    const afterEnter = jest.fn();
    const beforeLeave = jest.fn();
    const leave = jest.fn();
    const afterLeave = jest.fn();
    const afterInterval = 300;
    const wrapper = deep(
      <Transition
        visible
        beforeEnter={beforeEnter}
        enter={(_, done) => {
          enter();
          setTimeout(() => {
            done();
          }, afterInterval);
        }}
        afterEnter={afterEnter}
        beforeLeave={beforeLeave}
        leave={(_, done) => {
          leave();
          setTimeout(() => {
            done();
          }, afterInterval);
        }}
        afterLeave={afterLeave}
      >
        <div class="demo">something here</div>
      </Transition>
    );
    setTimeout(() => {
      expect(beforeEnter).toHaveBeenCalled();
      expect(enter).toHaveBeenCalled();
      setTimeout(() => {
        expect(afterEnter).toHaveBeenCalled();
        expect(wrapper).toMatchSnapshot();

        wrapper.render(
          <Transition
            visible={false}
            beforeEnter={beforeEnter}
            enter={(_, done) => {
              enter();
              setTimeout(() => {
                done();
              }, afterInterval);
            }}
            afterEnter={afterEnter}
            beforeLeave={beforeLeave}
            leave={(_, done) => {
              leave();
              setTimeout(() => {
                done();
              }, afterInterval);
            }}
            afterLeave={afterLeave}
          >
            <div class="demo">something here</div>
          </Transition>
        );
        setTimeout(() => {
          expect(beforeLeave).toHaveBeenCalled();
          expect(leave).toHaveBeenCalled();
          setTimeout(() => {
            expect(afterLeave).toHaveBeenCalled();
            expect(wrapper).toMatchSnapshot();
          }, afterInterval);
          
        });
      }, afterInterval);
      
    });
  });

  it('should render instantly', () => {
    const wrapper = render(
      <Transition visible instant name="fade">
        <div class="demo">初始可见无过渡</div>
      </Transition>
    );
    expect(wrapper).toMatchSnapshot();
  });
  it('should render not instantly', () => {
    const wrapper = render(
      <Transition visible name="fade">
        <div class="demo">初始可见有过渡</div>
      </Transition>
    );
    expect(wrapper).toMatchSnapshot();
  });
});
