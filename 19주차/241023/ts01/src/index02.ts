// // 타입 구조도!!
// // 모든 타입 슈퍼타입 & 서브타입
// // 타입 수용 => 타입 호환성

// let num1: number = 10;
// let num2: 10 = 10;

// num1 = num2;
// // num2 = num1;

// // 타입스크립트에 기본적으로 내장되어있는 내장타입 > 리터럴 타입
// // 서브타입을 슈퍼타입으로 호환시키는 액션 (*업캐스팅) : 대부분 허용
// // 슈퍼타입을 서브타입으로 호환시키려고 하는 액션행위 (*다운 캐스팅) : 거의 대부분 불가 _ any 만 가능

// interface Animal {
//   name: string;
//   color: string;
// }

// let animal: Animal = {
//   name: "고양이",
//   color: "white",
// };

// interface Dog {
//   name: string;
//   color: string;
//   breed: string;
// }

// let dog: Dog = {
//   name: "강아지",
//   color: "brown",
//   breed: "시고르자브종",
// };

// // animal은 dog보다 슈퍼타입
// // dog는 animal 보다 서브타입
// animal = dog;
// // dog = animal;

// interface Book {
//   name: string;
//   price: number;
// }

// let book: Book;

// interface ProgrammingBook {
//   name: string;
//   price: number;
//   skill: string;
// }

// let programmingBook: ProgrammingBook = {
//   name: "TS",
//   price: 33000,
//   skill: "Typescript",
// };
// // 초과 프로퍼티 검사 _ 직접 리터럴이 작성 됐기에 수용할 수 없음.

// let book3: Book = programmingBook;

// book = programmingBook;
// programmingBook = book;  다운 캐스팅이라 불가능.

// 대수타입
// 복수의 타입을 합성하고나 교환한 형태의 타입을 새롭게 만드는 것
// 합집합의 형태로 타입 : union 타입
// 교집합의 형태로 타입 : intersection 타입.

// let a: string | number;
// a = 1;
// a = "hello";

// type Dog = {
//   name: string;
//   color: string;
// };

// type Person = {
//   name: string;
//   language: string;
// };

// type Union1 = Dog | Person;

// let union1: Union1 = {
//   name: "",
//   color: "",
// };

// let union2: Union1 = {
//   name: "",
//   language: ",",
// };

// let union3: Union1 = {
//   name: "",
//   color: "",
//   language: "",
// };

// // let union4: Union1 = {
// //   name: "",
// // };

// type Intersection = Dog & Person;

// let intersection = {
//   name: "",
//   color: "",
//   language: "",
// };

// interface Person01 {
//   name: string;
//   age: number;
// }

// let person01 = {} as Person01;

// person01.name = "";
// person01.age = 20;

// type Dog = {
//   name: string;
//   color: string;
// };

// let dog = {
//   name: "뽀삐",
//   color: "brown",
//   breed: "똥개",
// } as Dog;      //타입 단언

// 타입 단언은 any 다음으로 치트키.
let num1 = 10 as never;
let num2 = 10;
let num3 = 10 as unknown as string;

let num4 = 10 as const;

// 타입가드 = 타입 좁히기
const fnc = (value: number | string) => {
  if (typeof value === "number") {
    value.toFixed(2);
  } else if (typeof value === "string") {
    value.toUpperCase();
  }
};
