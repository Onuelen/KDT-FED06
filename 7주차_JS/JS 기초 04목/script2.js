//1. 배열 명확하게 이해할 수 있다
//2. 반복문 적재적소
//.3 내가 원하는 기능 구현 함수

// window 객체 안에는 시간 관련 내장 함수 존재!!
// setInterval
// ClearInterval
//Sma

// CB1 // JS에서 자주 만날 콜백 함수 1번 예제
// let count = 0;
// const cbFunc = () => {
//   console.log(count);
//   if (++count > 4) clearInterval(timer);
// };

// const timer = setInterval(cbFunc, 300);

// CB2 //
// map함수는 배열안에 있는 각각의 개별 아이템을 찾아와서
// 어떤 연산작업을 한 이후.
// 다시 아이템을 모아서 새로운 배열로 생성!!

// const arr = [10, 20, 30];
// const newArr = arr.map((item, index) => item + 5);
//   console.log(newArr);

// CB3 // 콜백 3번째 예제

//setTimeout => 일정 시간 지연 후 실행
// setTimeout(function () {
//   console.log(this);
// }, 300);

//this 객체!!
// 보통 일반으로 :현재 실행되고 있는 함수의 주체
// 객체 등의 아이템

// window에 탑재된 시간 내장 함수에서 this를 사용하면, 무조건 window

// 일반적인 콜백함수 내 주체가 되고있는 아이템을 찾아오고 싶을 때는 직접 해당 인자를 언급하거나 경우에 따라 this 객체를 사용한다!

// CB4 // JS에서 자주만날 콜백함수 4번 예제

// const arr2 = [1, 2, 3, 4, 5];
// arr2.forEach((item) => {
//   console.log(this);
// });

// CB5 // JS 콜백함수 예제5번
// this => 함수 형태 종류에따라서 지칭하는 대상 달라짐.!
// document.body.innerHTML += `<button id="a">click</button>`;
// document.querySelector("#a").addEventListener("click", function () {
//   console.log(this);
// });

// CB6 // 콜백함수 예제6
// 객체안에 있는 매서드 함수의 경우, this는 function의 경우, 해당 매서드 함수의 부모격인 객체를 찾아오지만,
// 만약 화살표 함수를 사용한다면, window 객체를 찾아온다!!
// const obj = {
//   vals: [1, 2, 3],
//   logValues: function () {
//     console.log(this);
//   },
// };

// obj.logValues();
// //객체 안에 매서드 형식으로 정의한 함수는 콜백함수로 외부에 별도로 존재하는 함수의 콜백함수로 사용할시 , 기존 객체와의 관계성이 제거된다.
// const arr3 = [4, 5, 6];
// arr3.forEach(obj.logValues);

// 객체를 통해서 탄생된 매서드 함수를 콜백함수로 사용시, 해당 요소의 부모를 찾아올 수 있도록 하는 방법?!
// const obj1 = {
//   name: "obj1",
//   func: function () {
//     const self = this;
//     return function () {
//       console.log(self.name);
//     };
//   },
// };

// const callback = obj1.func();
// setTimeout(callback, 1000);

// 위 코드보다 효율적으로 this 객체를 사용하는 방법!!

// const obj1 = {
//   name: "obj1",
//   func: function () {
//     console.log(this.name);
//   },
// };

// setTimeout(obj1.func.bind(obj1), 1000);

//콜백함수 => 콜백지옥
setTimeout((name) => {
  let cofffeList - name;
  console.log(cofffeList);
  setTimeout(() => {
    (name) =
  }, timeout);
}, 500, "에스프레소");

//1번 타세ㅛ
addo=8age