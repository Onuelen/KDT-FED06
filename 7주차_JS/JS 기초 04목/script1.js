// 사용자로부터 이름, 나이를 전달 받으세요
// 반드시 콜백 함수를 통해서 사용자의 값을 활용해 알림창으로 "안녕하세요 00님 나이가 00세 이네요"

// const name = document.querySelector("#name");
// const age = document.querySelector("#age");
// const btn = document.querySelector("#btn");

// function showData(name, age) {
//   alert(`안녕하세요 ${name}님 나이가 ${age}이네요`);
// }

// function getData(callback) {
//   const userName = prompt("이름을 입력하세요");
//   const userAge = Number(prompt("나이를 입력하세요"));
//   callback(userName, userAge);
// }

// getData(showData);

// JS 함수 1급 시민
//자격요건
//1,함수가 일반 변수에 자료형으로 할당 가능.
//2.다른 함수에 인자값으로 사용될 수 있어야한다
//3. 다른 함수의 반환 값으로 함수를 사용

// function hello() {
//   return "안녕하세요!";
// }

// function bye() {
//   return "안녕히가세요";
// }

// function userCheck(name, fn) {
//   console.log(`${name}님`, fn());
// }

// userCheck("홍길동", hello);
// userCheck("고길동", bye);

const init = () => {
  return (a, b) => {
    return a - b > 0 ? a - b : b - a;
  };
};

console.log(`${init()(10, 20)}`);
