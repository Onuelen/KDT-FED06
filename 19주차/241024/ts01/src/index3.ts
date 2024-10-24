// type A = () => number;
// type B = () => 10;

// let a: A = () => 10;
// let b: B = () => 10;

// // 업 캐스팅
// a = b;
// // b = a;

// type C = (value: number) => void;
// type D = (value: 10) => void;

// let c: C = (value) => {};
// let d: D = (value) => {};

// // 다운 캐스팅
// // c = d;
// d = c;

// // 다운캐스팅의 예시
// type Animal = {
//   name: string;
// };

// let animalFunc = (animal: Animal): void => {
//   console.log(animal.name);
// };

// type Dog = {
//   name: string;
//   color: string;
// };

// let dogFunc = (dog: Dog) => {
//   console.log(dog.name);
//   console.log(dog.color);
// };

// // animalFunc = dogFunc;
// dogFunc = animalFunc;

// // 함수 매개변수의 값은 거의 유일하게 다운캐스팅이 허용되는상황!!!

// // 매개변수의 개수가 다른 경우!!!

// type Func1 = (a: number, b: number) => void;
// type Func2 = (a: number) => void;

// let func1: Func1 = (a, b) => {};
// let func2: Func2 = (a) => {};

// func1 = func2;
// func2 = func1;

// 함수 시그니처를 실제 구현되는 함수 위에다가 사전 작성 => 함수 오버로딩

// const func = (a: number): void => {};
// const func = (a: number): void => {};

// // 함수의 시그니처를 오버로딩 시킨 상황
// function func(a: number): void;
// function func(a: number, b: number, c: number): void;

// // 실제 함수 선언부
// function func(a: number, b?: number, c?: number) {
//   if (typeof b === "number" && typeof c === "number") {
//     console.log(a + b + c);
//   } else {
//     console.log(a * 20);
//   }
// }

// // 함수실행 & 호출
// func(1);
// func(1, 2); //error   _> 오버로딩이 되지 않았다면 에러가 나와야 정상이다.
// func(1, 2, 3);

type Dog = {
  name: string;
  isBark: boolean;
};

type Cat = {
  name: string;
  isScratch: boolean;
};

type Animal = Dog | Cat;

// const warning = (animal: Animal) => {
//   if ("isBark" in animal) {
//     console.log(animal.isBark ? "월월ㅇ얼월멍멍ㅇ멍뭥멍뭥월월" : "...");
//   } else if ("isScratch" in animal) {
//     console.log(animal.isScratch ? "찢어진 소파" : "멀쩡한 소파");
//   }
// };

//고양이 강아지용 함수 따로 만들 때 ver   , 함수를 활용한 타입가드 방법

const isDog = (animal: Animal): animal is Dog => {
  return (animal as Dog).isBark !== undefined;
};

const isCat = (animal: Animal): animal is Cat => {
  return (animal as Cat).isScratch !== undefined;
};

const warning = (animal: Animal) => {
  if (isDog(animal)) {
    console.log(animal.isBark ? "월월ㅇ얼월멍멍ㅇ멍뭥멍뭥월월" : "...");
  } else {
    console.log(animal.isScratch ? "찢어진 소파와 내 맘" : "멀쩡한 소파");
  }
};
