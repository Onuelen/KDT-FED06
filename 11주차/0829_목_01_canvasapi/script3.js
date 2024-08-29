const canvas = document.querySelector("canvas");
const button = document.querySelector("button");

const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

ctx.fillStyle = "#00f";
ctx.fillRect(100, 50, 100, 100);

ctx.globalCompositeOperation = "lighter";

ctx.fillStyle = "#f00";
ctx.beginPath();
ctx.arc(100, 120, 50, Math.PI * 2, false);
ctx.fill();

// destination : 먼저 그려진 도형 || source: 나중에 그려진 도형
// 겹쳐져있는 도형 요소들의 그래픽 작업:
// globalCompositeOperation => 속성

// source-in
