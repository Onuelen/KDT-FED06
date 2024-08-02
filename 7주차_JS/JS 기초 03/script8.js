// JS for문을 활용해서 2단~9단까지 웹 브라우저 화면 출력!!
// 숫자를 정함. 1~9까지 자동으로 곱해야함.

//중첩 for 문

// for (let i = 1; i <= 3; i++) {
//   for (let k = 1; k <= 2; k++) {
//     document.write(`${i}행 ${k}열`, "<br/>");
//   }
//   document.write("<br/>");
// }

for (let a = 2; a <= 9; a++) {
  document.write(`<h2>${a}단<h2/>`);
  for (let b = 1; b <= 9; b++) {
    document.write(`${a}X${b} = ${a * b}`);
    document.write("<br/>");
  }
}
