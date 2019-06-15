// import { isBrowser } from 'util/isomorphic';
// let doc;
// if (isBrowser) {
//   doc = window.document.documentElement;
// }
function getRem(px) {
  px = Number(px.replace('px', ''));
  // const docWidth = isBrowser ? doc.clientWidth : 375;
  let rate = 14;
  // if (docWidth > 374) {
  //   rate = 14;
  // } else if (docWidth > 359) {
  //   rate = 13;
  // }
  // console.log(rate);
  return `${px / rate}rem`;
}
export default getRem;
