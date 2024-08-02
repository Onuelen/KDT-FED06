// // const num01 = 1;
// // const Num01 = 1;
// // // 변수명 선언 시, 유의사항
// // // 변수명으로는 예약어 사용불가!!
// // // document , window , location => 찜!!
// // // $, _, 영문자 => 변수명 첫단어 가능! 숫자XXX 불가능.
// // // 변수명 중간 혹은 끝에는 숫자 작성 가능!!
// // // 변수명은 반드시 대,소문자를 가린다.

// // // 3가지 방식 중 1개
// // // 1) 카멜 표기 : 낙타
// // // 2) 스네이크 표기법 : 뱀
// // // 3) 헝가리안 표기법 : 단어 대문자
// // const numberSum = 11;
// // const number_sum = 12;
// // const NumberSum = 13;
// // //////////////////////////////////

// // const boolean = true;

// // console.log(typeof boolean);

// // // const test01 = null;
// // // 유효하지 않음. 비어있음.

// // // const test02 = undefined;
// // // "미정"인 값. 미정이라는 값.

// // const name = "현빈";

// // const classroom = 201;

// // // console.log(name + "님" + classroom);
// // console.log(`${name}님${classroom}`);

// // const jsBook = {
// //   // 속성 : property
// //   // key : value
// //   title: "지옥에서 온 깃허브",
// //   pages: 330,
// // };

// // // 객체 안에 담긴 값을 찾아올 수 있음.
// // // 온점 표기법

// // const jsBookTitlte = jsBook.title;

// // console.log(jsBookTitlte);

// // // 대괄호 표기법
// // const jsBookPages = jsBook["pages"];
// // console.log(jsBookPages);

// // jsBook.title = "천국에서온 깃허브";

// // console.log(jsBook);

// // // json => javascript object notation

// // const arr = ["red", "green", "blue"];

// // console.log(arr[arr.length - 1]);

// let test01 = Symbol();
// let test02 = Symbol();

// console.log(test01 === test02);

// let id = Symbol("userId");

// const member = {
//   name: "David",
//   [id]: 12345,
// };

// console.log(member);

// const fncTest = () => {
//   console.log("click");
// };

// let a = 10;
// let b = a;

// console.log(a, b);

// let obj1 = {
//   c: 10,
//   d: "ddd",
// };

// let obj2 = obj1;

// console.log(obj1, obj2);

// b = 15;
// obj2.c = 20;

// console.log(a, b);
// console.log(obj1, obj2);

// const fruits = ["apple", "banana", "cherry"];
// const favorite = fruits;

// favorite[1] = "grape";

// console.log(fruits);

// const one = "20";
// const two = 10;

// const sum = one + two;

// console.log(parseFloat("36.4"));

// const num = null;

// // console.log(typeof num.toString());

// console.log(typeof String(num));

// console.log(Boolean(1));

// const json = "test.json";

// if (json) {
// }

const number = prompt("자연수를 입력해주세요!");

console.log(number);
