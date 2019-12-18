import Steps from '../';
const { Step } = Steps;
import { render } from 'enzyme';
import { shallow, deep } from 'preact-render-spy';

const stepsArr = [
  { title: 'Step 1', desc: 'this is the step 1' },
  {
    title: 'Step 2',
    icons: { pend: <div>test</div>, finish: 'notice' },
    status: 'pend'
  },
  {
    title: 'Step 3',
    icons: { error: 'search', process: 'notice' },
    desc: 'now is the step 3',
    status: 'error'
  },
  { title: 'Step 4', desc: 'this is the step 4' },
  { title: 'Step 5', icons: {} }
];

const stepsArr2 = [
  { title: 'Step 1', desc: 'this is the step 1' },
  {
    title: 'Step 2'
  },
  {
    title: 'Step 2'
  },
  { title: 'Step 4', desc: 'this is the step 4' },
  { title: 'Step 5', icons: {} }
];

describe('Steps', () => {
  it('should render properly', () => {
    const wrapper = deep(
      <Steps step={1}>
        {stepsArr.map((item, ind) => (
          <Step {...item} key={ind} />
        ))}
      </Steps>
    );
    expect(wrapper).toMatchSnapshot();
  });
  it('should render with decimal ind', () => {
    const wrapper = deep(
      <Steps step={2} isDecimalInd>
        {stepsArr.map((item, ind) => (
          <Step {...item} key={ind} />
        ))}
      </Steps>
    );
    expect(wrapper).toMatchSnapshot();
  });
  it('should render in vertical', () => {
    const wrapper = deep(
      <Steps step={2} direction="vertical" icons={{ error: 'notice' }}>
        {stepsArr2.map((item, ind) => (
          <Step {...item} key={ind} />
        ))}
        <div>errpr</div>
      </Steps>
    );
    expect(wrapper).toMatchSnapshot();
  });
});
