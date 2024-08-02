//1. 사용자로부터 내어난 년도를 받으세요!
//2. 태어난 년도를 기준으로 나이가 몇살인지 #result 공간에 출력해 주세요
//3. innerText 속성을 활용하면, 특정 Node안에 텍스트 문장을 삽입 할 수 있음.

// const age = Number(prompt("태어난 년도를 입력해주세요"));
// let result = 2024 - age;
// alert(`${result}살 입니다.`);

const button = document.querySelector("button");
const calc = () => {
  const birthYear = Number(prompt("태어난 년도를 입력하세요.", "2000"));
  const currentYear = 2024;
  const age = currentYear - birthYear + 1;
  const result = document.querySelector("#result");
  result.innerText = `당신의 나이는 ${age}세 입니다.`;
};

button.addEventListener("click", calc);
