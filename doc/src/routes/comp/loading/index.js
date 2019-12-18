import { Loading } from 'cafune';
import './style.scss';

const LoadingComp = () => (
  <div class="demo-loading">
    <p>加载类型</p>
    <Loading />
    <Loading type="step" />
    <Loading type="ripple" />
    <p>自定义颜色</p>
    <Loading color="#1989fa" />
    <Loading type="step" color="#1989fa" />
    <Loading type="ripple" color="#1989fa" />
    <p>自定义尺寸</p>
    <Loading size="40px" />
    <Loading type="step" size="60px" />
    <Loading type="ripple" size="50px" />
    <p>加载文案及自定义文字大小</p>
    <Loading text="Loading..." />
    <Loading text="Loading..." textSize="16px" />
    <p>垂直文案</p>
    <Loading text="加载" vertical />
  </div>
);
export default LoadingComp;
