import { Button } from 'cafune';
import { Component } from 'preact';

export default class ButtonComp extends Component {
  render() {
    return (
      <div>
        <div class="caf-demo-block">
          <p class="caf-demo-title">按钮类型</p>
          <div class="caf-demo-buttons">
            <Button onClick={() => alert('btn clicked')}>默认按钮</Button>
            <Button type="primary">主要按钮</Button>
            <Button type="primary" ghost>
              <p>主要按钮</p>
              <p class="caf-demo-button-desc">(幽灵状态)</p>
            </Button>
            <Button type="warning">警告按钮</Button>
            <Button type="warning" ghost>
              <p>警告按钮</p>
              <p class="caf-demo-button-desc">(幽灵状态)</p>
            </Button>
          </div>
        </div>
        <div class="caf-demo-block">
          <p class="caf-demo-title">按钮尺寸</p>
          <div class="caf-demo-buttons">
            <Button size="large">最大按钮</Button>
            <Button size="normal">常规按钮</Button>
            <Button size="small">小号按钮</Button>
            <Button size="tiny">最小按钮</Button>
            <Button block>块状按钮</Button>
          </div>
        </div>
        <div class="caf-demo-block">
          <p class="caf-demo-title">按钮图标</p>
          <div class="caf-demo-buttons">
            <Button icon={{ type: 'search' }}>图标按钮</Button>
            <Button icon={{ type: 'notice', position: 'right' }}>
              图标位置
            </Button>
            <Button
              icon={{ type: 'arrow_right', position: { right: '10px' } }}
              style={{ width: '120px', justifyContent: 'flex-start' }}
            >
              图标位置
            </Button>
          </div>
        </div>
        <div class="caf-demo-block">
          <p class="caf-demo-title">按钮圆角</p>
          <div class="caf-demo-buttons">
            <Button radius={false}>直角按钮</Button>
            <Button radius>全圆角按钮</Button>
            <Button radius="16px">定制圆角按钮</Button>
          </div>
        </div>

        <div class="caf-demo-block">
          <p class="caf-demo-title">按钮状态</p>
          <div class="caf-demo-buttons">
            <Button disabled onClick={() => alert('enheng')}>
              禁用按钮
            </Button>
            <Button type="primary" disabled>
              禁用按钮
            </Button>
            <Button type="warning" disabled>
              禁用按钮
            </Button>
          </div>
        </div>
        <div class="caf-demo-block">
          <p class="caf-demo-title">按钮加载</p>
          <div class="caf-demo-buttons">
            <Button loading>加载按钮</Button>
            <Button
              type="primary"
              loading
              loadingInfo={{ type: 'ripple', size: '24px' }}
            >
              加载按钮
            </Button>
            <Button
              type="warning"
              loading
              loadingInfo={{ type: 'step', size: '20px' }}
            >
              加载按钮
            </Button>
          </div>
        </div>

        <div class="caf-demo-block">
          <p class="caf-demo-title">按钮渐变</p>
          <div class="caf-demo-buttons">
            <Button gradient={{ angle: 30, from: '#FC5C7D', to: '#6A82FB' }}>
              渐变按钮
            </Button>
            <Button
              gradient={{
                angle: 20,
                from: '#FFEFBA',
                to: '#FFFFFF',
                color: '#e2a657'
              }}
            >
              渐变按钮
            </Button>
          </div>
        </div>
      </div>
    );
  }
}
