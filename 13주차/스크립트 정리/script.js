//병합 연산자
// const NumA = 10;
// const NumB = 20;
// const NumC = undefined;

// console.log(NumA ?? NumB);

// 삼항조건연산자
// const strA = "안녕하세요!";
// typeof strA === "string"
//   ? console.log("문자자료형")
//   : console.log("문자자료형 아니");

//Switch문
// const fruit = "apple";

// switch (fruit) {
//   case "apple":
//     console.log("사과");
//     break;
//   case "banana":
//     console.log("바나나");
//     break;
//   default:
//     console.log("찾는 과일 없음");
// }

// Object 객체 생성 및 온점, 대괄호 표기법
// let objA = {};
// objA.numA = 1;
// objA["numB"] = 2;
// console.log(objA);

// const person = {
//   name: "David",
//   age: 20,
//   location: "Seoul",
// };

// // 객체 안에 있는 key값을 배열로 반환!!
// const keyArr = Object.keys(person);
// console.log(keyArrs);

// keyArrs.forEach((item) => {
//   let value = person[item];
//   console.log(value);
// });

// let objB = new Object();
// console.log(objB);

// console.log(objA.numA);

//구조분해할당
// const testO = {
//   name: "David",
//   age: 20,
//   skill: "JS",
// };

// // const name = testO.name;
// // const age = testO.age;
// // const skill = testO.skill;

// const { name, age, skill } = testO;

// console.log(name, age, skill);

// 단락회로평가
// const calcA = () => {
//   console.log("A");
//   return false;
// };

// const calcB = () => {
//   console.log("B");
//   return true;
// };

// console.log(calcA() && calcB());
// console.log(calcA() || calcB());

// react는 기본적으로 브라우를 통해서 앱을 여는 순간 => 컴포넌트가 무조건 마운트!!!!!
// 가상돔을 만들어야 하기때문에 무조건 컴포넌트는 마운트를 실행하는 것임.
// 가상동-> 영화데이터를 찾아오도록 하는 fetch()
// 정상적으로 fetch() 를 통해서 불러오는 영화 API데이터를 출력하지 못함!!!!
// 찾아온 영화 데이터를 가지고 약 3000px 높이값을 가지고 있는 브라우저 화면을 채워야 하는 상황 => 20개

// *로딩스피너!!! -> API 데이터를 찾아오지 못했다면 스피너가 돌고, 찾아왔다면 스피너 STOP -> 데이터 SEE
//ex) console.log(movieData && data.title);

//전개 연산자
// const arrA = [1, 2, 3];
// const arrB = [4, 5, 6];
// const arrC = [arrA, arrB];
// const arrE = [...arrA, ...arrB];
// const arrD = [
//   [1, 2, 3],
//   [4, 5, 6],
// ];

// console.log(arrC);
// console.log(arrE);

// const objA = {
//   a: 1,
//   b: 2,
// };

// const objB = { c: 3 };

// const objC = {
//   ...objA,
// };

// console.log(objC);

//배열 메서드 특집!!!
let food = ["짜장면", "피자", "치킨"];
// const newLenght = food.push("탕수육");
// console.log(food, newLenght);

// const removedItem = food.pop();
// console.log(removedItem);
// console.log(food);

// const newLenght = food.unshift("갈비찜");
// console.log(food, newLenght);

// const removedItem = food.shift();
// console.log(removedItem);
// console.log(food);

// const sliced = food.slice(0, 2);
// console.log(sliced);

// const arrA = [1, 2];
// const arrB = [3, 4];

// const arrC = arrA.concat(arrB);
// console.log(arrC);

// console.log(food.indexOf("피자"));
// const inof = food.indexOf("짜장면");
// console.log(inof);

// console.log(food.includes("마라샹궈"));

// const arr = [
//   { name: "David", age: 20 },
//   { name: "martin" },
//   { name: "romeo" },
//   { name: "juliet" },
// ];

// const element = arr.find((jjangu) => jjangu.name === "David");
// console.log(element);

const arr = [
  { name: "슛돌이", hobby: "축구" },
  { name: "통키", hobby: "피구" },
  { name: "강속구", hobby: "야구" },
  { name: "태백산", hobby: "등산" },
];

// const filterArr = arr.filter((item) => item.name === "슛돌이");

// console.log(filterArr);
// console.log(arr);

// const newArr = arr.map((item) => item.name);

// console.log(newArr);
// console.log(arr);

// const arr1 = [10, 5, 3];
// // arr.sort(a - b);

// // console.log(arr1);
// const compare = (a, b) => {
//   // if (a > b) return 1;
//   // else if (a < b) return -1;
//   // else return 0;
//   a - b;
// };

// arr1.sort(compare);

// console.log(arr1);

// console.log(food.join("-"));

const arr3 = [1, 2, 3, 4, 5];
const result = arr3.reduce((acc, item) => acc + item, 0);

console.log(result);
