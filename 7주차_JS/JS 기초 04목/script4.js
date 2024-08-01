// 사용자에게 수학점수 받기
// +국어점수 받기
//함수를 사용해서 수학 + 국어 점수의 평균 점수를 계산하여 알림창을 통해 출력

// const han = Number(prompt("국어점수를 제출해주세요"));
// const math = Number(prompt("수학점수를 제출해주세요"));
// const plus = (han + math) / 2;

// alert(`${plus} 입니다`);

const arr = ["수학", "국어"];

function testAvg() {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += Number(prompt(`${arr} 점수는?`));
  }

  let avg = sum / arr.length;
  return avg;
}

alert(`평균점수는 ${testAvg()} 점 입니다`);
