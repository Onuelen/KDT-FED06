// 1, 3, 5, 7, 9, 11, 13, 15, 17, 19 중에서 10보다 큰 숫자만 콘솔창에 나타나도록 해주세요.

for (let num = 1; num < 20; num++) {
  if (num % 2 === 0) continue;
  {
    if (num < 10) continue;
    console.log(num);
  }
}
// ================================================
// const arr = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19];

// for(let i=0; i < arr.length; i++) {
//   if (arr[i])
// }
