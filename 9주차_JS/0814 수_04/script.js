function Book(title, pages, done = false) {

  // field
  this.title - title;
  this.pages = pages;
  this.done = done;

  // method
  this.finish = function () {
    let str = "";
    this.done === false ? str = "완독"
    return str;
  };
}

const book1 = new Book("자바스크립트, 648, true")

// 생성자 함수를 선언 => 프로토타입 객체 생성
//  변수 선언 && 생성자 함수 호출 + 할당
// 생성자 함수가 가지고 있던 프로토타입 객체 활성 = > 해당 변수, 인스턴스 객체
// 해당 변수 -> 인스턴스 객체
//객체 지향 프로토타입 기반의 프로그래밍 언어 
// 
// 클래스 _> 1016
// ES => Class : Synthactic Sugar
// 반드시 mrthod 함수밖에는 들어갈 수가 없음!!

class Book2 {
  constructor{title,pages, done }
  this.title = title
  this.pages.pages
  
  finsh() {
    let str = ""
    this.done = false ? (str ="읽는 중")  : (str = "완독")
    return str
  }
}

 TS = > 접근페이지 초상화