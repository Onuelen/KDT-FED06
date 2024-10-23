// // // const numArr: number[] = [1, 2, 3];
// // // const strArr: string[] = ["hello", "world"];
// // // const boolArr: Array<boolean> = [true, false, true];

// // // let multiArr: (number | string | boolean)[] = [1, "hello", true];

// // // let doubleArr: number[][] = [
// // //   [1, 2, 3],
// // //   [4, 5],
// // // ];

// // // let tup1: [number, number] = [1, 2];

// // // // tup1 = [1, 2, 3];

// // // tup1.push(5);

// // // TS
// // // 객체 & 함수 타입 정의

// // const user: {
// //   id?: number; // 선택적 타입. optionalType ?를 써준다. 있어도 되고, 없어도 되는 타입
// //   name: string;
// // } = {
// //   name: "David",
// // };

// // // const result = user.id;
// // // 구조적 타입 시스템을 적용!!!
// // // 점진적 타입 시스템
// // // 선택적 타입적용

// // let config: {
// //   readonly apikey: string; // readonly 읽기 전용. 외부에서 변경 불가능. 안전하다.
// // } = {
// //   apikey: "32154618485",
// // };

// // // config.apikey = "Hacked";

// // //타입 별칭  *중복 이름 선언 X 불가능.
// // type User = {
// //   id: number;
// //   name: string;
// //   location: string;
// // };

// // let user1: User = {
// //   id: 1,
// //   name: "David",
// //   location: "Seoul",
// // };

// // let user2: User = {
// //   id: 2,
// //   name: "Peter",
// //   location: "Incheon",
// // };

// // //타입 별칭 *지역에서는 재선언 가능!
// // const fnc = () => {
// //   type User = {};
// // };

// // //인덱스 시그니처
// // // > 타입별칭으로 어떤 타입을 정의 -> 하위 요소의 모든 타입의 형채가 동일한 경우!!

// // type CountryCodes = {
// //   [key: string]: string;
// // };

// // const countryCodes: CountryCodes = {
// //   Korea: "ko",
// //   UnitedState: "us",
// //   UnitedKingdom: "uk",
// // };

// // // 최우선의 방법 추천X
// // // 객체의 타입 : interface 타입 _ 최우선적으로는 interface 타입으로 적용한다.

// // interface User01 {
// //   id: number;
// // }

// // // implements // extends

// // interface Person {
// //   name: string;
// //   age: number;
// //   etc?: boolean;
// // }

// // const person01: Person = {
// //   name: "Peter",
// //   age: 20,
// // };

// // const person02: Person = {
// //   name: "Peter",
// //   age: 20,
// //   etc: true,
// // };

// // // class 가 타입으로서 적용가능

// // class Person1 {
// //   name: string;
// //   age: number;
// // }

// // const person03: Person1 = new Person1();
// // person03.name = "peter";
// // person03.age = 20;
// // person03.name = "david"; // let 처럼 됨

// // // console.log(person03);

// // // class Person2 {
// // //   name: string;
// // //   age: number;

// // //   constructor(name: string, age: number) {
// // //     this.name = name;
// // //     this.age = age;
// // //   }
// // // }

// // //접근 제어자
// // // class Person2 {
// // //   constructor(public name: string, public age?: number) {}
// // // }

// // // const person04 = new Person2("Romeo");
// // // console.log(person04);

// // // interface Person5 {
// // //   name: string;
// // //   age: number;
// // // }

// // // implements _> 새로운 클래스의 모양을 동일하게 정의 한다. interface의 값을 필수.

// // // class Person6 implements Person5 {
// // //   constructor(public name: string, public age: number) {}
// // // }

// // // const person5 = new Person6("Juliet", 20);
// // // console.log(person5);

// // /* 추상 클래스 abstract */
// // /* 추상화 */
// // /* 형태가 없는 비정형화된 무언가를 표현 */
// // /* 어떤 클래스를 정의하기 위해서 추상적인 개념을 생성하고, 해당 추상적인 개념을 모티브로 클래스를 선언&생성 */

// // abstract class Person7 {
// //   constructor(public name: string, public age: number) {}
// // }

// // class Person8 extends Person7 {
// //   constructor(name: string, age: number) {
// //     super(name, age);
// //   }
// // }

// // const person06 = new Person8("Bruce", 20);
// // console.log(person06);

// // // static 속성!!

// // class TestA {
// //   static initalValue = 1;00
// // }

// // const test01A = TestA.initalValue;

// // console.log(test01A);

// // enum Role {
// //   ADMIN = 0,
// //   USER = 1,
// //   GUEST = 2,
// // }

// // const user1 = {
// //   name: "David",
// //   role: Role.ADMIN,
// // };
// // const user2 = {
// //   name: "David",
// //   role: Role.USER,
// // };
// // const user3 = {
// //   name: "David",
// //   role: Role.GUEST,
// // };

// // console.log(user1, user2, user3);

// let test01: any = 10; // 값도 받아오고, 재할당도 가능. 타입 생각이 안난다? -> any
// test01 = "Hello";
// //
// let test02: unknown; // 값을 받아오는 건 무한정으로 가능. BUT 재할당이 불가능!!!

// test02 = "World";
// test02 = 1;
// test02 = () => {};

// let test03 = test01;

// let test04: number = 20;

// if (typeof test02 === "number") {
//   test04 = test02;
// }

// const func1 = (): string => {
//   return "hello";
// };

// const func2 = (): void => {
//   console.log("World");
// };

// let test05: void;

// // test05 = 1;  같은 급의 null , number,string,등등 불가능.
// // test05 = "문자";

// test05 = undefined;

// let test06: never;

// // 어떤 값도 정의할 수 없음. never  사용경우 거의없음. 어떤값을 반복문으로 돌렸는데, "無무" 가 나와야 할 경우 정도
// // test06 = 1;
// // test06 = "Hello";
// // test06 = true;
// // test06 = undefined;
// // test06 = any;
// // test06 = null;

// const func3 = (): never => {
//   while (true) {}
// };

//object 사용시 내부 값(타입정의) 불러오지 못함!!

// let obj: object = {
//   name: "David",
// };

// interface Nameable {
//   name: string;
// }

// // 타입단언
// let name1 = (<Nameable>obj).name;
// let name2 = (obj as Nameable).name;

// console.log(name1, name2);

// 함수의 타입을 정하는 기본 방식!!!
const add = (a: number, b: number): number => {
  return a + b;
};

//타입 별칭
type PrintMeFnc = (name: string, age: number) => void;

// 함수 시그니처 _
const printMe02: PrintMeFnc = (name, age) => {
  console.log(`name:${name}, age:${age}`);
};

// 타입 별칭 -> 함수 시그니처를 대체하는 방법을 사용

interface Nameable02 {
  name: string;
}

/* 타입 가드 설정 */
// const getName = (o: Nameable02) => {
//   return o != undefined ? o.name : "Loading...";
// };

// const dataResult = getName(undefined);

// console.log(dataResult);
// console.log(getName({ name: "David" }));

/* 다른 방법 */
const getName = (o: Nameable02 | undefined) => {
  return o != undefined ? o.name : "Loading...";
};
