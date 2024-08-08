// const accent = document.querySelector(".accent");
// const date100 = document.querySelector("#date100");
// const date200 = document.querySelector("#date200");
// const date365 = document.querySelector("#date365");
// const date500 = document.querySelector("#date500");
const userAnswer = prompt("우리 공부한지", "2024-06-14");
const accent = document.querySelector(".accent");

const now = new Date();
const firstDay = new Date(userAnswer);

const toNow = now.getTime();
const toFirst = firstDay.getTime();

const passedTime = toNow - toFirst;
const passedDate = Math.round(passedTime / (24 * 60 * 60 * 1000));

accent.innerText = `🎈${passedDate}일`;

// // D-100
// let future = toFirst + 100 * (24 * 60 * 60 * 1000);
// let someday = new Date(future);
// let year = someday.getFullYear();
// let month = someday.getMonth() + 1;
// let date = someday.getDate();
// date100.innerText = `${year}년 ${month}월 ${date}일`;
// // D-200
// future = toFirst + 200 * (24 * 60 * 60 * 1000);
// someday = new Date(future);
// year = someday.getFullYear();
// month = someday.getMonth() + 1;
// date = someday.getDate();
// date200.innerText = `${year}년 ${month}월 ${date}일`;
// // D-365
// future = toFirst + 365 * (24 * 60 * 60 * 1000);
// someday = new Date(future);
// year = someday.getFullYear();
// month = someday.getMonth() + 1;
// date = someday.getDate();
// date365.innerText = `${year}년 ${month}월 ${date}일`;
// // D-500
// future = toFirst + 500 * (24 * 60 * 60 * 1000);
// someday = new Date(future);
// year = someday.getFullYear();
// month = someday.getMonth() + 1;
// date = someday.getDate();
// date500.innerText = `${year}년 ${month}월 ${date}일`;

// Function 함수의 Hoisting
// 끌어올리다
// 화살표함수 => 호이스팅 기능 X : 반드시 선언 > 호출

// 화살표 함수
// const calcDate = (days) => {
//   future = toFirst + days * (24 * 60 * 60 * 1000);
//   someday = new Date(future);
//   year = someday.getFullYear();
//   month = someday.getMonth() + 1;
//   date = someday.getDate();
//   document.querySelector(
//     `#date${days}`
//   ).innerText = `${year}년 ${month}월 ${date}일`;
// };

// function 함수 => 익명X 기명함수에서는 호이스팅 기능 가능
function calcDate(days) {
  future = toFirst + days * (24 * 60 * 60 * 1000);
  someday = new Date(future);
  year = someday.getFullYear();
  month = someday.getMonth() + 1;
  date = someday.getDate();
  document.querySelector(
    `#date${days}`
  ).innerText = `${year}년 ${month}월 ${date}일`;
}

calcDate(100);
calcDate(200);
calcDate(365);
calcDate(500);
