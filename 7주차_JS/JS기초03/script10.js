// 1.사용자로부터 어떤 숫자를 받는다.
//  2. 사용자에게 받은 숫자가 "소수" 라면? 바탕화면에 "XX숫자는 소수 입니다!"
// 3.만약 XX숫자가 소수가 아니라면, "XX숫자는 소수가 아닙니다."
// 소수 = 1과 자기 자신만으로 나누어지는 숫자
// 실수 =소수점이 있는 숫자.
// + 1은 소수가 아닙니다.
// 2,3,5,7 로 나누어 지면 안됨.

const number = Number(prompt("숫자를 입력해주세요"));
let isPrime;

if (number === 1) {
  document.write(`1은 소수도 합성수도 아닙니다.`);
} else if (number === 2) {
  document.write(`2는 소수입니다.`);
  isPrime = true;
} else {
  for (let i = 2; i < number; i++) {
    if (number % i === 0) {
      isPrime = false;
      break;
    } else {
      isPrime = true;
    }
  }

  if (isPrime) {
    document.write(`${number}는 소수입니다.`);
  } else {
    document.write(`${number}는 소수가 아닙니다.`);
  }
}
