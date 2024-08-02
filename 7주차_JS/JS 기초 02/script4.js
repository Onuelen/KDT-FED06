// 사용자로부터 3개의 값을 받으세요 !!
// 교통비 , 식대, 음료비
// 위 3개의 값이 10,000원을 초과한다면 "예산관리 잘해주세요."
// 위 3개의 총 합계의 값이 10,000 이하라면 "예산관리 잘 하셨어요!"

// const name = prompt("사용자명을 입력해주세요", "ex홍길동");
// const move = parseFloat(prompt("교통비를 입력해주세요"));
// const food = parseFloat(prompt("식비를 입력해주세요"));
// const drink = parseFloat(prompt("음료비를 입력해주세요"));

// const money = move + food + drink;
// let result = money > 10000 && money <= 10000;

// console.log(money);

// result = result ? "예산관리 잘해주세요" : "예산관리 잘 하셨어요!";

// alert(`${name}님 ${result}`);

// const traffic = Number(prompt("교통비를 입력해주세요"));
// const food = Number(prompt("식비를 입력해주세요"));
// const drink = Number(prompt("음료비를 입력해주세요"));

// const money = traffic + food + drink;
// let result = number(money) > Number(10000) && Number(money) <= Number(10000);

// console.log(money);

// result = result ? "예산관리 잘해주세요" : "예산관리 잘 하셨어요!";

// alert(`${name}님 ${result}`);

//반복문

let arr = [];

for (let i = 0; i < 3; i++) {
  const userNum = Number(prompt("교통비,식대,음료비 순으로 입력!"));
  arr.push(userNum);
}

const [traffic, food, drink] = arr;
const sum = traffic + food + drink;

if (isNaN(sum) || sum === 0) {
  alert("잘못입력했습니다!");
} else if (sum <= 10000) {
  
}
alert("예산관리 잘하셨습니다");
else {
  alert("예산관리 잘하세요!");
}

