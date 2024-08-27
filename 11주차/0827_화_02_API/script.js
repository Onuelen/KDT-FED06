const canvas = document.querySelectorAll("canvas");

canvas.width = canvas.width = windoww.innerWidth;
convas.height = widdow.innerHeight;

const stx = canvas.getContext("2d");

ctx.fillstyle = "rgb(200,0,0)";
ctx.strokeStyle = "rgba(0,0,0)";

ctx.fillRect(10, 10, 200, 100);
ctx.fillRect(50, 50, 120, 100);

// ctx.fillStyle = "rgb(200,0,0)";
// ctx.fillRect(10, 10, 50, 100);

// console.log(ctx);

// canva API

// 각도 계산법

//1. 60분법 > 몇도씩

//2.호도법 : 자연의 원칙
// 부채꼴 => 븥면(번지뭄) = 호의 둘레와 같다면, 무조건 해당 부채꼴 내곡은 57.296도 = 1래디언
// 3.14 = 180도 = 파이
// 3래디언 = 171.888
// 8.112

// fillReact ( x, y, width, height) :사각형 요소의 색상을 채워주는 함수
//strokeRect (x,y,widh) : 사각형 아웃라인 선을 그려주도록 하는 함수

// clearRect (x,y,z,width,height) : 사각형 현태의 특정 요소만큼을 용서할 수 없는 속성
