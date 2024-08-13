// Class : JS안에서 반복적으로 사용될 특정 요소를 간직한 객체의 형태를 템플릿화 하기 위한 목적으로 Class 사용합니다!!!

// 교보문고 F/E=> 매일매일 신간 책 -> 객체 데이터로 만들어서 B/E 서버에 데이터를 등록할 수 있도록 지원해 주세요!!!

// const newBook1 = {
//   title: "당신이 누군가를 죽였다",
//   author: "히가시노 게이고",
//   price: 17820,
//   category: "미스터리스릴러",
// };

// Class를 생성하는 2가지 방법

// 1) 생성자 함수를 만들어 사용한다 !
// 절대, NEVER 화살표함수 XXXXXXXXXXXXX
// " this " 를 필수로 사용해야 하기 때문에 function을 사용해야함.
//  반드시 함수의 이름을 대문자!!!!!!!!!
// new Date
// new Object
// new Array

function Book(title, author, price, category) {
  this.title = title;
  this.author = author;
  this.price = price;
  this.category = category;
}

// 1. 생성자 함수 (*function 대문자함수)

// 2. 프로토타입 객체

// 3. 생성자 함수를 호출!! >>>>> 프로토타입 객체를 실행할 준비

// 4. 생성자 함수가 실행 =>>>> 함수의 값을 전달받는 변수 => 인스턴스 객체

const book1 = new Book(
  "당신이 누군가를 죽였다",
  "히가시노 게이고",
  "17,820",
  "미스터리스릴러"
);

console.log(book1);

// Class를 생성하는 두번째 방법 !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

// Class 라는 명령어를 사용해서 클래스를 선언!!!
