// 사용자로부터 2개의 숫자를 받습니다.
// 두개의 숫자의 최대 공약수를 찾아서 콘솔창에 출력합니다.
// 최대 공약수란? -> 복수의 숫자를 동시에 나눌 수 있는 수 중에서 가장 큰 수!
// ex) 4,12의 최대공약수는 4입니다.

// const num1 = Number(prompt("첫번째 숫자를 입력해 주세요"));
// const num2 = Number(prompt("두번째 숫자를 입력해 주세요"));

// let result = ans();
// for (i = 1; i <= max; i++) {
//   if (one * i === two * i) console.log(result);
// }

const num01 = Number(prompt("첫번째 숫자 입력"));
const num02 = Number(prompt("두번째 숫자 입력"));

function getans() {
  const max = num01 > num02 ? num01 : num02;
  let gcd = 0;
  for (let i = 1; i <= max; i++) {
    if (num01 % i === 0 && num02 % i === 0) {
      gcd = i;
    }
  }
  return gcd;
}

alert(`${num01} 와 ${num02} 의 최대공약수는 : ${getans()}`);
