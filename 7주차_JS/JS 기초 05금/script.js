// 함수에서 만날 수 있는 전개연산자 구문

// const fruits = ["apple", "banana", "grape"];
// console.log(fruits);

// function addNum(...numbers) {
//   // const sum = a + b;
//   // return sum;    아래와 같음
//   // return a + b + c;
//   let sum = 0;

//   for (let number of numbers) {
//     sum += number;
//   }
//   return sum;
// }

// console.log(addNum(1, 3, 7, 4));
// addNum(1, 3);

//전개연산자
function displayFavorites(first, ...favs) {
  const str = `가장 좋아하는 과일은 ${first} 입니다`;
  return str;
}

console.log(displayFavorites("사과", "포도", "토마토"));
