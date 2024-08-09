// Math 로 시작하는 수학 객체 => 함수!!!
// round 반올림 내림 .
// floor 소수점 X 앞에것만 가지고옴
// ceil = 소수점이 있으면 무조건 올린수로.
// radom = 0 ~ 0.99999 의 숫자 랜덤으로 출력

let num = 2.1234;
let num01 = 2.8765;

let maxNum = Math.max(10, 5, 8, 30);
let minNum = Math.min(10, 5, 8, 30);
let roundNum = Math.round(num);
let floorNum = Math.floor(num01);
let ceilNum = Math.ceil(num);
let rndNum = Math.random();
let piNum = Math.PI;

document.write(maxNum, "<br/>");
document.write(minNum, "<br/>");
document.write(roundNum, "<br/>");
document.write(floorNum, "<br/>");
document.write(ceilNum, "<br/>");
document.write(rndNum, "<br/>");
document.write(piNum, "<br/>");
