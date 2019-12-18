function getRem(px, rate = 14) {
  px = Number(px.replace('px', ''));
  return `${px / rate}rem`;
}
export default getRem;
