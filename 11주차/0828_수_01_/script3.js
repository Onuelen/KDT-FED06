const canvas = document.querySelector("canvas");

canvas.width = innerWidth;
canvas.height = innerHeight;

const ctx = canvas.getContext("2d");

//createLinearGradient()
//그라디언트를 적용하는데 있어서 시작점 좌표 x,y 끝나는 지점의 x,y 좌표값이 들어온다.
// 그라디언트를 생성시 중간점이 필요 . 중간점 생성 함수 addColorStop(어느 지점%, 색상)

// 선형 그라디언트
// const linGrad = ctx.createLinearGradient(0, 0, 0, 200);
// linGrad.addColorStop(0, "#000");
// linGrad.addColorStop(0.6, "#fff");
// linGrad.addColorStop(1, "#549");

// ctx.fillStyle = linGrad;
// ctx.fillRect(0, 0, 100, 200);

//createRadialGradient()
// 내부 원 x, 내부 원 y, 내부 원 r, 외부 원x, 외부 원y, 외부원 r)

ctx.shadowColor = "#aaa";
ctx.shadowOffsetX = 55;
ctx.shadowOffsetY = 60;
ctx.shadowBlur = 10;

const radGrad = ctx.createRadialGradient(55, 60, 10, 80, 90, 100);
radGrad.addColorStop(0, "white");
radGrad.addColorStop(0.4, "yellow");
radGrad.addColorStop(1, "orange");

ctx.beginPath();
ctx.arc(100, 100, 80, 0, Math.PI * 2, false);
ctx.fillStyle = radGrad;
ctx.fill();

// 패턴
// const img = new Image();

// img.onload = function () {
//   const pattern = ctx.createPattern(img, "repeat");
//   ctx.fillStyle = pattern;
//   ctx.fillRect(0, 0, 200, 200);
// };

// img.src = "./pattern.png";
