import { Button } from '../';
import { render } from 'enzyme';
import { shallow, deep } from 'preact-render-spy';

describe('<Button />', () => {
  it('should render with diffrent type', () => {
    const defaultBtn = deep(
      <Button>默认按钮</Button>
    );
    expect(defaultBtn.find('.caf-btn').length).toBe(1);
    expect(defaultBtn.find('.caf-btn__t_default').length).toBe(1);
    const primaryBtn = deep(
      <Button type="primary">默认按钮</Button>
    );
    expect(primaryBtn.find('.caf-btn__t_default').length).toBe(0);
    expect(primaryBtn.find('.caf-btn__t_primary').length).toBe(1);
    const warningBtn = deep(
      <Button type="warning">默认按钮</Button>
    );
    expect(warningBtn.find('.caf-btn__t_default').length).toBe(0);
    expect(warningBtn.find('.caf-btn__t_warning').length).toBe(1);
  });
  it('should render with diffrent size', () => {
    const defaultBtn = deep(
      <Button>默认按钮</Button>
    );
    expect(defaultBtn.find('.caf-btn').length).toBe(1);
    expect(defaultBtn.find('.caf-btn__s_normal').length).toBe(1);
    const large = deep(
      <Button size="large">默认按钮</Button>
    );
    expect(large.find('.caf-btn__s_normal').length).toBe(0);
    expect(large.find('.caf-btn__s_large').length).toBe(1);
    const small = deep(
      <Button size="small">默认按钮</Button>
    );
    expect(small.find('.caf-btn__s_normal').length).toBe(0);
    expect(small.find('.caf-btn__s_small').length).toBe(1);
    const tiny = deep(
      <Button size="tiny">默认按钮</Button>
    );
    expect(tiny.find('.caf-btn__s_normal').length).toBe(0);
    expect(tiny.find('.caf-btn__s_tiny').length).toBe(1);
  });
});
