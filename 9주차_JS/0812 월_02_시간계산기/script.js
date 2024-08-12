const birthYear = document.querySelector("#year");
const birthMonth = document.querySelector("#month");
const birthDate = document.querySelector("#date");
const form = document.querySelector("form");

const current = document.querySelector("#current");
const today = new Date();
// const currentYear = today.getFullYear();
// const currentMonth = today.getMonth() + 1;
// const currentDate = today.getDate();

// current.innerText = `오늘은 ${currentYear}년 ${currentMonth}월 ${currentDate}입니다.`;

current.innerText = `오늘은 ${today.getFullYear()}년 ${
  today.getMonth() + 1
}월 ${today.getDate()}일 입니다.`;

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const birthDay = new Date(
    birthYear.value,
    birthMonth.value - 1,
    birthDate.value
  );
  const resultDays = document.querySelector("#days");
  const resultHours = document.querySelector("#hours");

  const passed = today.getTime() - birthDay.getTime();

  const passedDays = Math.floor(passed / (24 * 60 * 60 * 1000));
  const passedHours = Math.floor(passed / (60 * 60 * 1000));
  const passedAges = Math.round(passedDays / 365);

  resultDays.innerText = `현재 나이는 ${passedAges}세 입니다`;
  resultHours.innerText = `현재까지 ${passedHours}시간이 흘렀습니다.`;
});

// "2001-01-01"
// 연, 월-1, 일 쪼개서도 가능
// 1s = 1000ms
// 1m = 60s = 60 * 1000
// 1h = 60m = 60 * 60 * 1000
// 1days = 24h = 24 * 60 * 60 * 1000
