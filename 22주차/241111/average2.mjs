// 배열이라는 자료구조를 활용해서 3개의 숫자의 평균값을 구함.

const arr = [87, 70, 100, 55];

let average = 0;

for (let i = 0; i < arr.length; i++) {
  average += arr[i];
}

average /= arr.length;

// 값이 수정되더라도 배열에 추가 혹은 수정만 하면됨.
// 무엇이 더 효율적인 자료구조인가? -> 코드의 재활용성. 수정을 적게할 수 있음.
