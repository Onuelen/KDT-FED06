// 사용자에게 숫자 1개를 받습니다.
// 단 1보다 큰 숫자를 받습니다.

// 사용자에게 받은 숫자를 기준으로 1~ 해당 숫자까지의 수들 가운데 짝수만 찾아서 더한 결과값을
//콘솔창에 출력해주세요

const number = Number(prompt("1보다 큰 숫자를 입력해주세요"));
let sum = 0;

if (number > 1 && number !== null) {
  for (let i = 1; i <= number; i++) {
    if (i % 2 === 1) continue;
    sum += i;
  }
  console.log(sum);
}

// for (i = 1; i < num; i++) {
//   if (num % 2 === 1) continue;
//   {
//     const result = num + i;
//     console.log(result);
//   }
// }
