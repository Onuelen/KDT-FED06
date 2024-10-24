// 제 네 릭 _> 언제 필요할까? //
// 종합적인 타입을 정의하고 싶을 때!!!!  _ 숫자가 올지, 문자일지, 객체일지 배열일지 모를 때!
// General : 종합적인
// General Hospital : 종합병원

// const func = (value: any) => {
//   return value;
// };

// 이런 상황-> 유니온을 쓰기에는 너무 양이 많아진다. 시간도 오래걸림.   any는 에러를 방지하지 못한다. 타입스크립트를 쓰는 이유 없어짐.

// const num = func(10);
// num.toUpperCase(); // 이와 숫자+UpperCase =? 오류가 나와야 한다. any사용시 오류 안나옴
// func("word");
// func([1, 2, 3]);
// func([{ name: "faker", age: 20 }]);

// const func = <T>(value: T): T => {
//   return value;
// };

// const swap = <T, U>(a: T, b: U) => {
//   return [b, a];
// };

// const [a, b] = swap("1", 2);

// const funcArray = <T>(data: T[]): T => {
//   return data[0];
// };

// let num = funcArray([0, 1, 2]);
// console.log(num);

// let str = funcArray([1, "Hello", "World"]);
// console.log(str);

// const returnFirst = <T>(data: [T, ...unknown[]]): T => {
//   return data[0];
// };

// const str = returnFirst([1, "hello", "worlds"]);
// console.log(str);

const func4 = <T extends { length: number }>(data: T) => {
  return data.length;
};

console.log(func4("123"));
console.log(func4([1, 2, 3]));
console.log(func4({ length: 1 }));

console.log(func4(1));
