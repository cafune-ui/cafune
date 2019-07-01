import { Router } from 'preact-router';
import Cell from '../cell';

import './style';
const nameMap = {
  cell: '单元格'
};

export const Comp = ({ name }) => {
  return (
    <div class="comp">
      <div class="comp_hd">
        <h2 class="comp_hd_name">
          {name.replace(/^\w/, $0 => $0.toUpperCase())}
        </h2>
        <p class="comp_hd_cn">{nameMap[name]}</p>
      </div>
      <div class="comp_main">
        <Router url={`/comp/${name}`}>
          <Cell path="/comp/cell" />
        </Router>
      </div>
    </div>
  );
};

export default Comp;
