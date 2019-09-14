import { Skeleton } from 'cafune';
const { Circle, Rect } = Skeleton;

const SkeletonComp = () => (
  <div style="padding: 20px;background: #fff;">
    <Skeleton height="70">
      <Circle radius={32} x={32} y={32} />
      <Rect radius={4} width={120} height={20} x={80} y={10} />
      <Rect radius={4} width={120} height={20} x={80} y={35} />
    </Skeleton>
  </div>
);
export default SkeletonComp;
