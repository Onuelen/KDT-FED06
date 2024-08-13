// 객체생성 => 선언

// const book1 = {
//   title: "JavaScript",
//   level: "normal",
//   study: "done",
// };

// 객체 안에 담겨있는 데이터를 찾아.
// 프로퍼티(속성)에 접근 2가지 방법
// 1) 온점 표기법
// 2) 대괄 호표기법

// console.log(book1.title);
// console.log(book1["level"]);

// book1.study = "ready";

// console.log(book1);

// book1.master = "David";

// console.log(book1);

// JS 어딘가에 Class 생성자 함수를 활용해서 이미 누군가가 객체를 만들어 놓았음!!

// Class 생성자 함수를 통해서 이미 생성되어진 요소를 가져와서 사용할 때에는 반드시 new 예약어 + prototype함수를 활용해야 함!!

// prototype을 통햐서 생성된 값을 인스턴트 객체

// 최초에 선언한 변수의 값으로 할당!!

// let book2 = new Object();
// // console.log(typeof book2);

// book2.title = "타입스크립트";
// book2.author = "rlawltjs";
// book2.bestSeller = "Yes";

// console.log(book2);

// // let book3 = new Array();
// // console.log(typeof book3);

// delete book2.bestSeller;

// console.log(book2);

//객체 중첩
const student = {
  name: "jeon jin woo",
  age: 20,
  favorite: "game",
  score: {
    history: 85,
    science: 90,
    average: function () {
      return (this.history + this.science) / 2;
    },
    like() {
      alert(`전진우님은 컴퓨터를 좋아합니다!`);
    },
  },
};

// fuction // 화살표함수 -> 호이스팅이 안됨.

console.log(student.score.history);
console.log(student.score.average());

// 객체 안에 Property 일부로서 탄새오딘 함수는 method 라고 칭한다!!

student.score.like();

const window = {
  document: {
    html: {
      head: {
        meta: "a",
        link: "./",
      },
      body: {
        h1: "HELLO",
        p: "HI",
      },
    },
  },
};
