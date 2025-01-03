const canvas = document.querySelector("canvas");

canvas.width = innerWidth;
canvas.height = innerHeight;

const ctx = canvas.getContext("2d");

//선의 굵기 && 선의 끝부분 처리!!
// lineWidth = ""    _선의 굵기
// lineCap = butt(*기본값 그냥 자름) // round // square (더 길어진다.)

// const linecap = ["butt", "round", "square"];

// for (let i = 0; i < linecap.length; i++) {
//   ctx.beginPath();
//   ctx.moveTo(50, 50 + i * 30);
//   ctx.lineTo(350, 50 + i * 30);
//   ctx.lineWidth = 15;
//   ctx.lineCap = linecap[i];
//   ctx.stroke();
// }

// 선이 교차하는 지점에서의 효과처리
// bavel // miter // round

const lineJoin = ["bevel", "miter", "round"];
for (let i = 0; i < lineJoin.length; i++) {
  ctx.beginPath();
  ctx.moveTo(60, 60 * i + 50);
  ctx.lineTo(100, 60 * i + 15);
  ctx.lineTo(140, 60 * i + 50);
  ctx.lineWidth = 20;
  ctx.lineJoin = lineJoin[i];
  ctx.stroke();
}
