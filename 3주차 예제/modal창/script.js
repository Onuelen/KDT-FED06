const btn = document.querySelector("#open");
const modalBox = document.querySelector("#modal_box");
// console.log(modalBox);
btn.addEventListener("click", () => {
  modalBox.classList.add("active");
});

const close = document.querySelector("#close");

close.addEventListener("click", () => {
  modalBox.classList.remove("active");
});

modalBox.addEventListener("click", function () {
  this.classList.remove("active");
});

// 2015년도 javaScript를 만드는 기관 => Ecma => ES6문법 release
// JS 문법
// 기존에 쓰던 function + 선언 & 호출 위치!!!
// Hoisting => 끌어올리다.
