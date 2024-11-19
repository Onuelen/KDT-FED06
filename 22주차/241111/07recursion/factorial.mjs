// const factorial = (number) => {
//   if (number === 1 || number === 0) {
//     return 1;
//   } else {
//     return number * factorial(number - 1);
//   }
// };

// console.log(factorial(5));

const factorial01 = (number) => {
  let sum = 1;
  for (let i = 1; i <= number; i++) {
    sum *= i;
  }
  return sum;
};

console.log(factorial01(5));

등차수열;
// fibonacci 수열 : 숫자글이 특정 배열을 가지고 증가하는 배열

// 자료구조 & 알고리즘
